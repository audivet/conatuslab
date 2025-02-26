'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  BarChart, 
  Target, 
  Award, 
  Book, 
  Clock, 
  Zap,
  CheckCircle,
  Star,
  TrendingUp,
  LucideIcon
} from 'lucide-react'

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: LucideIcon;
}

interface Milestone {
  title: string;
  progress: number;
  remaining: string;
}

interface ProgressData {
  overview: {
    hoursSpent: number;
    coursesCompleted: number;
    currentStreak: number;
    skillsAcquired: number;
  };
  skills: {
    technical: Record<string, number>;
    legal: Record<string, number>;
  };
  achievements: Achievement[];
  nextMilestones: Milestone[];
}

const ProgressTracker = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const progressData = {
    overview: {
      hoursSpent: 45,
      coursesCompleted: 2,
      currentStreak: 7,
      skillsAcquired: 12
    },
    skills: {
      technical: {
        "Python Programming": 75,
        "Data Analysis": 60,
        "Document Automation": 85,
        "API Integration": 45
      },
      legal: {
        "Legal Tech Tools": 80,
        "Regulatory Analysis": 70,
        "Compliance Tech": 65,
        "Document Processing": 90
      }
    },
    achievements: [
      {
        title: "Quick Starter",
        description: "Completed first module in record time",
        date: "2024-02-10",
        icon: Zap
      },
      {
        title: "Code Warrior",
        description: "Completed 5 coding challenges",
        date: "2024-02-12",
        icon: Award
      },
      {
        title: "Consistent Learner",
        description: "7-day learning streak",
        date: "2024-02-14",
        icon: Clock
      }
    ],
    nextMilestones: [
      {
        title: "Python Mastery",
        progress: 75,
        remaining: "2 modules"
      },
      {
        title: "Data Analysis Pro",
        progress: 60,
        remaining: "3 modules"
      }
    ]
  }

  return (
    <section className="py-12 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-[#772F1A]">
            Your Progress
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Track Your Learning Journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <Clock className="w-8 h-8 text-[#772F1A] mx-auto mb-2" />
                <h3 className="text-2xl font-bold">{progressData.overview.hoursSpent}</h3>
                <p className="text-sm text-gray-600">Hours Learning</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <Book className="w-8 h-8 text-[#772F1A] mx-auto mb-2" />
                <h3 className="text-2xl font-bold">{progressData.overview.coursesCompleted}</h3>
                <p className="text-sm text-gray-600">Courses Completed</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-[#772F1A] mx-auto mb-2" />
                <h3 className="text-2xl font-bold">{progressData.overview.currentStreak}</h3>
                <p className="text-sm text-gray-600">Day Streak</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="text-center">
                <Target className="w-8 h-8 text-[#772F1A] mx-auto mb-2" />
                <h3 className="text-2xl font-bold">{progressData.overview.skillsAcquired}</h3>
                <p className="text-sm text-gray-600">Skills Acquired</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(progressData.skills.technical).map(([skill, progress]) => (
                  <div key={skill}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill}</span>
                      <span className="text-sm text-[#772F1A]">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#772F1A] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Legal Tech Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(progressData.skills.legal).map(([skill, progress]) => (
                  <div key={skill}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill}</span>
                      <span className="text-sm text-[#772F1A]">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#772F1A] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements and Next Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {progressData.achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#772F1A]/10 flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-[#772F1A]" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(achievement.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {progressData.nextMilestones.map((milestone, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{milestone.title}</h4>
                      <span className="text-sm text-gray-500">{milestone.remaining}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#772F1A] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${milestone.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ProgressTracker