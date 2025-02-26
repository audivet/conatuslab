'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'
import { courses } from './curriculum'

// Define progress types
export interface ModuleProgress {
  id: string
  completed: boolean
  completedLessons: string[]
  assessmentSubmitted: boolean
  assessmentPassed: boolean
}

export interface CourseProgress {
  id: string
  lastAccessed: string
  completedModules: string[]
  modules: ModuleProgress[]
  overallProgress: number
}

export interface UserProgress {
  courses: CourseProgress[]
  totalHoursSpent: number
  streakDays: number
  lastActive: string
  skillsAcquired: string[]
}

// Context type
interface ProgressContextType {
  userProgress: UserProgress
  markLessonComplete: (courseId: string, moduleId: string, lessonId: string) => void
  markModuleComplete: (courseId: string, moduleId: string) => void
  submitAssessment: (courseId: string, moduleId: string, passed: boolean) => void
  getCourseProgress: (courseId: string) => CourseProgress | undefined
  calculateOverallProgress: (courseId: string) => number
}

// Create context with default values
const ProgressContext = createContext<ProgressContextType>({
  userProgress: {
    courses: [],
    totalHoursSpent: 0,
    streakDays: 0,
    lastActive: new Date().toISOString(),
    skillsAcquired: []
  },
  markLessonComplete: () => {},
  markModuleComplete: () => {},
  submitAssessment: () => {},
  getCourseProgress: () => undefined,
  calculateOverallProgress: () => 0
})

// Local storage key
const PROGRESS_STORAGE_KEY = 'conatuslab_user_progress'

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    courses: [],
    totalHoursSpent: 0,
    streakDays: 0,
    lastActive: new Date().toISOString(),
    skillsAcquired: []
  })

  // Load progress from localStorage on initial render
  useEffect(() => {
    const savedProgress = localStorage.getItem(PROGRESS_STORAGE_KEY)
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress))
    } else {
      // Initialize with empty course progress structures
      const initialProgress: UserProgress = {
        courses: courses.map(course => ({
          id: course.id,
          lastAccessed: new Date().toISOString(),
          completedModules: [],
          modules: course.modules.map(module => ({
            id: module.title.toLowerCase().replace(/\s+/g, '-'),
            completed: false,
            completedLessons: [],
            assessmentSubmitted: false,
            assessmentPassed: false
          })),
          overallProgress: 0
        })),
        totalHoursSpent: 0,
        streakDays: 0,
        lastActive: new Date().toISOString(),
        skillsAcquired: []
      }
      setUserProgress(initialProgress)
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(initialProgress))
    }
  }, [])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(userProgress))
  }, [userProgress])

  // Update streak when user is active
  useEffect(() => {
    const updateStreak = () => {
      const lastActiveDate = new Date(userProgress.lastActive)
      const today = new Date()
      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)
      
      // If last active was yesterday, increment streak
      if (lastActiveDate.toDateString() === yesterday.toDateString()) {
        setUserProgress(prev => ({
          ...prev,
          streakDays: prev.streakDays + 1,
          lastActive: today.toISOString()
        }))
      } 
      // If last active was before yesterday, reset streak
      else if (lastActiveDate < yesterday) {
        setUserProgress(prev => ({
          ...prev,
          streakDays: 1,
          lastActive: today.toISOString()
        }))
      }
      // If last active was today, just update timestamp
      else if (lastActiveDate.toDateString() !== today.toDateString()) {
        setUserProgress(prev => ({
          ...prev,
          lastActive: today.toISOString()
        }))
      }
    }

    updateStreak()
    // Run this check once a day
    const intervalId = setInterval(updateStreak, 1000 * 60 * 60 * 24)
    return () => clearInterval(intervalId)
  }, [userProgress.lastActive])

  // Helper function to get course progress
  const getCourseProgress = (courseId: string): CourseProgress | undefined => {
    return userProgress.courses.find(course => course.id === courseId)
  }

  // Calculate overall progress for a course
  const calculateOverallProgress = (courseId: string): number => {
    const courseProgress = getCourseProgress(courseId)
    if (!courseProgress) return 0

    const course = courses.find(c => c.id === courseId)
    if (!course) return 0

    const totalModules = course.modules.length
    const totalLessons = course.modules.reduce(
      (total, module) => total + module.topics.length, 
      0
    )
    
    const completedModules = courseProgress.completedModules.length
    const completedLessons = courseProgress.modules.reduce(
      (total, module) => total + module.completedLessons.length,
      0
    )

    // Weight: 70% from lessons, 30% from completed modules
    const lessonWeight = 0.7
    const moduleWeight = 0.3
    
    const lessonProgress = totalLessons > 0 ? (completedLessons / totalLessons) * lessonWeight : 0
    const moduleProgress = totalModules > 0 ? (completedModules / totalModules) * moduleWeight : 0
    
    return Math.round((lessonProgress + moduleProgress) * 100)
  }

  // Mark a lesson as complete
  const markLessonComplete = (courseId: string, moduleId: string, lessonId: string) => {
    setUserProgress(prev => {
      const newProgress = {...prev}
      const courseIndex = newProgress.courses.findIndex(c => c.id === courseId)
      
      if (courseIndex === -1) return prev
      
      const moduleIndex = newProgress.courses[courseIndex].modules.findIndex(m => m.id === moduleId)
      if (moduleIndex === -1) return prev
      
      // Add lesson to completed if not already there
      if (!newProgress.courses[courseIndex].modules[moduleIndex].completedLessons.includes(lessonId)) {
        newProgress.courses[courseIndex].modules[moduleIndex].completedLessons.push(lessonId)
      }
      
      // Update last accessed
      newProgress.courses[courseIndex].lastAccessed = new Date().toISOString()
      
      // Update course overall progress
      newProgress.courses[courseIndex].overallProgress = calculateOverallProgress(courseId)
      
      // Update total hours spent (assume 30 minutes per lesson)
      newProgress.totalHoursSpent += 0.5
      
      return newProgress
    })
  }

  // Mark a module as complete
  const markModuleComplete = (courseId: string, moduleId: string) => {
    setUserProgress(prev => {
      const newProgress = {...prev}
      const courseIndex = newProgress.courses.findIndex(c => c.id === courseId)
      
      if (courseIndex === -1) return prev
      
      const moduleIndex = newProgress.courses[courseIndex].modules.findIndex(m => m.id === moduleId)
      if (moduleIndex === -1) return prev
      
      // Mark module as completed
      newProgress.courses[courseIndex].modules[moduleIndex].completed = true
      
      // Add to completed modules if not already there
      if (!newProgress.courses[courseIndex].completedModules.includes(moduleId)) {
        newProgress.courses[courseIndex].completedModules.push(moduleId)
      }
      
      // Update course overall progress
      newProgress.courses[courseIndex].overallProgress = calculateOverallProgress(courseId)
      
      return newProgress
    })
  }

  // Submit an assessment
  const submitAssessment = (courseId: string, moduleId: string, passed: boolean) => {
    setUserProgress(prev => {
      const newProgress = {...prev}
      const courseIndex = newProgress.courses.findIndex(c => c.id === courseId)
      
      if (courseIndex === -1) return prev
      
      const moduleIndex = newProgress.courses[courseIndex].modules.findIndex(m => m.id === moduleId)
      if (moduleIndex === -1) return prev
      
      // Update assessment status
      newProgress.courses[courseIndex].modules[moduleIndex].assessmentSubmitted = true
      newProgress.courses[courseIndex].modules[moduleIndex].assessmentPassed = passed
      
      // If passed, add any skills acquired
      if (passed) {
        const course = courses.find(c => c.id === courseId)
        if (course) {
          // Find the module
          const module = course.modules.find(m => 
            m.title.toLowerCase().replace(/\s+/g, '-') === moduleId
          )
          
          if (module) {
            // Add skills if not already acquired
            module.project.objectives.forEach(objective => {
              const skill = objective.split(' ')[0] // Simple extraction, can be improved
              if (!newProgress.skillsAcquired.includes(skill)) {
                newProgress.skillsAcquired.push(skill)
              }
            })
          }
        }
      }
      
      return newProgress
    })
  }

  const contextValue: ProgressContextType = {
    userProgress,
    markLessonComplete,
    markModuleComplete,
    submitAssessment,
    getCourseProgress,
    calculateOverallProgress
  }

  return (
    <ProgressContext.Provider value={contextValue}>
      {children}
    </ProgressContext.Provider>
  )
}

// Custom hook for using the progress context
export const useProgress = () => useContext(ProgressContext)