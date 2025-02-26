'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import CourseViewer from './CourseViewer'
import { courses } from './curriculum'
import { useProgress } from './ProgressContext'
import { 
  BookOpen, 
  Code, 
  FileText, 
  CheckCircle, 
  Lock,
  Clock,
  ArrowRight,
  BarChart,
  Award
} from 'lucide-react'

interface CoursePortalProps {
  userId?: string // Optional as we might not have user authentication yet
}

const CoursePortal: React.FC<CoursePortalProps> = ({ userId }) => {
  const [activeCourse, setActiveCourse] = useState<string | null>(null)
  const [activeView, setActiveView] = useState<'overview' | 'content'>('overview')
  const { userProgress, getCourseProgress } = useProgress()
  
  const handleCourseSelect = (courseId: string) => {
    setActiveCourse(courseId)
    setActiveView('content')
  }

  const getStatusColor = (completion: number) => {
    if (completion === 100) return 'text-green-600'
    if (completion > 0) return 'text-[#772F1A]'
    return 'text-gray-400'
  }
  
  // Check if a course is locked (prerequisites not met)
  const isCourseAvailable = (course: any) => {
    if (course.prerequisites.length === 0) return true
    
    // Check if all prerequisites are completed with sufficient progress
    return course.prerequisites.every((prereqId: string) => {
      const prereqProgress = getCourseProgress(prereqId)
      return prereqProgress && prereqProgress.overallProgress >= 70
    })
  }

  if (activeCourse && activeView === 'content') {
    return (
      <CourseViewer 
        courseId={activeCourse} 
        onBack={() => setActiveView('overview')}
      />
    )
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-[#772F1A]">
            My Learning Portal
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Your Course Dashboard
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Track your progress and continue your learning journey in legal technology.
          </p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Clock className="w-10 h-10 text-[#772F1A] mb-3" />
                <div className="text-3xl font-bold">{userProgress.totalHoursSpent}</div>
                <p className="text-sm text-gray-500">Hours Learning</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <BarChart className="w-10 h-10 text-[#772F1A] mb-3" />
                <div className="text-3xl font-bold">
                  {userProgress.courses.filter(c => c.overallProgress > 0).length}
                </div>
                <p className="text-sm text-gray-500">Courses In Progress</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-10 h-10 text-[#772F1A] mb-3" />
                <div className="text-3xl font-bold">
                  {userProgress.courses.filter(c => c.overallProgress === 100).length}
                </div>
                <p className="text-sm text-gray-500">Courses Completed</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Award className="w-10 h-10 text-[#772F1A] mb-3" />
                <div className="text-3xl font-bold">{userProgress.streakDays}</div>
                <p className="text-sm text-gray-500">Day Streak</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const courseProgress = getCourseProgress(course.id)
            const completion = courseProgress?.overallProgress || 0
            const isLocked = !isCourseAvailable(course)

            return (
              <Card 
                key={course.id}
                className={`overflow-hidden ${isLocked ? 'opacity-75' : ''}`}
              >
                <CardHeader className="bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BookOpen className={getStatusColor(completion)} />
                      <CardTitle>{course.title}</CardTitle>
                    </div>
                    {isLocked && <Lock className="text-gray-400" />}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {course.duration}
                      </span>
                      <span className="text-gray-500">
                        {course.level}
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span className={getStatusColor(completion)}>{completion}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            completion === 100 
                              ? 'bg-green-600' 
                              : 'bg-[#772F1A]'
                          }`}
                          style={{ width: `${completion}%` }}
                        />
                      </div>
                    </div>

                    {course.prerequisites.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">Prerequisites</h4>
                        <div className="flex flex-wrap gap-2">
                          {course.prerequisites.map((prereq) => {
                            const prereqProgress = getCourseProgress(prereq)
                            const isComplete = prereqProgress && prereqProgress.overallProgress >= 70
                            
                            return (
                              <span 
                                key={prereq}
                                className={`px-3 py-1 rounded-full text-sm flex items-center ${
                                  isComplete 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-gray-100 text-gray-600'
                                }`}
                              >
                                {isComplete && <CheckCircle className="w-3 h-3 mr-1" />}
                                {prereq}
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    )}

                    <div className="pt-4">
                      <button
                        onClick={() => handleCourseSelect(course.id)}
                        disabled={isLocked}
                        className="w-full bg-[#772F1A] text-white py-2 px-4 rounded-md hover:bg-[#8B382A] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {completion === 0 && !isLocked && 'Start Learning'}
                        {completion > 0 && completion < 100 && 'Continue Learning'}
                        {completion === 100 && 'Review Course'}
                        {isLocked && 'Complete Prerequisites First'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CoursePortal