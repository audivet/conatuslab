'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { courses } from './curriculum'
import ModuleContent from './ModuleContent'
import { useProgress } from './ProgressContext'
import { 
  ChevronLeft, 
  BookOpen,
  Clock,
  Target,
  Award,
  CheckCircle,
  BarChart,
  FileCode,
  Bookmark
} from 'lucide-react'

interface CourseViewerProps {
  courseId: string
  onBack: () => void
}

const CourseViewer: React.FC<CourseViewerProps> = ({ courseId, onBack }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'progress' | 'projects'>('content')
  const { userProgress, getCourseProgress } = useProgress()
  
  const course = courses.find(c => c.id === courseId)
  if (!course) return null
  
  const courseProgress = getCourseProgress(courseId)

  return (
    <div className="min-h-screen bg-white">
      {/* Course Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <button 
            onClick={onBack}
            className="flex items-center text-[#772F1A] hover:text-[#8B382A] mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Dashboard
          </button>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </span>
                <span className="flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  {course.level}
                </span>
                <span className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  Certificate Available
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-8 mt-8">
            <button
              onClick={() => setActiveTab('content')}
              className={`pb-4 relative ${
                activeTab === 'content' 
                  ? 'text-[#772F1A] font-medium' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Course Content
              {activeTab === 'content' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#772F1A]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className={`pb-4 relative ${
                activeTab === 'progress'
                  ? 'text-[#772F1A] font-medium'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              My Progress
              {activeTab === 'progress' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#772F1A]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`pb-4 relative ${
                activeTab === 'projects'
                  ? 'text-[#772F1A] font-medium'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Projects & Assignments
              {activeTab === 'projects' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#772F1A]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {activeTab === 'content' && (
          <ModuleContent courseId={courseId} />
        )}
        
        {activeTab === 'progress' && courseProgress && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <BarChart className="w-12 h-12 text-[#772F1A] mb-4" />
                    <div className="text-4xl font-bold mb-2">{courseProgress.overallProgress}%</div>
                    <p className="text-gray-500">Course Completion</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                    <div className="text-4xl font-bold mb-2">
                      {courseProgress.completedModules.length}/{course.modules.length}
                    </div>
                    <p className="text-gray-500">Modules Completed</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center">
                    <Clock className="w-12 h-12 text-blue-500 mb-4" />
                    <div className="text-4xl font-bold mb-2">
                      {new Date(courseProgress.lastAccessed).toLocaleDateString()}
                    </div>
                    <p className="text-gray-500">Last Accessed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-6">Module Progress</h2>
            <div className="space-y-4">
              {courseProgress.modules.map((moduleProgress) => {
                const moduleId = moduleProgress.id
                const module = course.modules.find(m => 
                  m.title.toLowerCase().replace(/\s+/g, '-') === moduleId
                )
                if (!module) return null
                
                const totalLessons = module.topics.length
                const completedLessons = moduleProgress.completedLessons.length
                const progressPercent = totalLessons > 0 ? 
                  Math.round((completedLessons / totalLessons) * 100) : 0
                
                return (
                  <Card key={moduleId}>
                    <CardContent className="py-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-medium mb-2">{module.title}</h3>
                          <div className="flex space-x-6">
                            <span className="text-sm text-gray-500">
                              {completedLessons}/{totalLessons} lessons completed
                            </span>
                            {moduleProgress.assessmentSubmitted && (
                              <span className={`text-sm ${moduleProgress.assessmentPassed ? 'text-green-600' : 'text-red-500'} flex items-center`}>
                                {moduleProgress.assessmentPassed ? (
                                  <>
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    Assessment passed
                                  </>
                                ) : (
                                  <>
                                    <FileCode className="w-4 h-4 mr-1" />
                                    Assessment needs revision
                                  </>
                                )}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-xl font-bold">
                          {progressPercent}%
                        </div>
                      </div>
                      
                      <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            moduleProgress.completed 
                              ? 'bg-green-600' 
                              : progressPercent > 50 
                                ? 'bg-[#772F1A]' 
                                : 'bg-[#772F1A]/60'
                          }`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}
        
        {activeTab === 'projects' && (
          <div className="space-y-12">
            <h2 className="text-2xl font-bold mb-6">Projects & Assignments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.modules.map(module => (
                <Card key={module.title} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>{module.project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-gray-600 mb-4">{module.project.description}</p>
                    
                    <div className="space-y-4 flex-grow">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Objectives</h4>
                        <ul className="space-y-1">
                          {module.project.objectives.map((objective, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <Target className="w-4 h-4 text-[#772F1A] mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-2">Deliverables</h4>
                        <ul className="space-y-1">
                          {module.project.deliverables.map((deliverable, index) => (
                            <li key={index} className="flex items-start text-sm">
                              <FileCode className="w-4 h-4 text-[#772F1A] mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t">
                      <button className="w-full bg-[#772F1A] text-white py-2 px-4 rounded-md hover:bg-[#8B382A] transition-colors">
                        Submit Project
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CourseViewer