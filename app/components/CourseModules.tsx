'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  BookOpen, 
  Code, 
  FileText, 
  CheckCircle, 
  Lock,
  Clock,
  ArrowRight,
  PlayCircle,
  FileCode,
  GraduationCap
} from 'lucide-react'

const CourseModules = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null)

  const modules = [
    {
      id: 1,
      title: "Legal Tech Foundations",
      duration: "4 weeks",
      completion: 100,
      description: "Introduction to technology in legal practice",
      prerequisites: [],
      weeks: [
        {
          week: 1,
          title: "Introduction to Legal Technology",
          topics: [
            {
              title: "The Digital Transformation of Law",
              type: "video",
              duration: "45 min",
              completed: true
            },
            {
              title: "Key Legal Tech Tools Overview",
              type: "reading",
              duration: "30 min",
              completed: true
            },
            {
              title: "Technology Impact Assessment",
              type: "exercise",
              duration: "1 hour",
              completed: true
            }
          ],
          projectTitle: "Legal Tech Landscape Analysis",
          projectDescription: "Research and analyze current legal tech tools in your jurisdiction"
        },
        {
          week: 2,
          title: "Document Automation Basics",
          topics: [
            {
              title: "Document Structure Analysis",
              type: "video",
              duration: "45 min",
              completed: true
            },
            {
              title: "Automation Tools Introduction",
              type: "reading",
              duration: "45 min",
              completed: true
            },
            {
              title: "Basic Document Template Creation",
              type: "exercise",
              duration: "1.5 hours",
              completed: true
            }
          ],
          projectTitle: "Simple Document Automator",
          projectDescription: "Create a basic document template with automation fields"
        }
        // Additional weeks...
      ],
      outcomes: [
        "Understanding of legal tech landscape",
        "Basic document automation skills",
        "Technology assessment capabilities",
        "Digital transformation awareness"
      ]
    },
    {
      id: 2,
      title: "Python for Legal Analysis",
      duration: "6 weeks",
      completion: 25,
      description: "Learn Python programming with legal-specific applications",
      prerequisites: ["Legal Tech Foundations"],
      weeks: [
        {
          week: 1,
          title: "Python Fundamentals",
          topics: [
            {
              title: "Introduction to Python",
              type: "video",
              duration: "1 hour",
              completed: true
            },
            {
              title: "Basic Data Types and Structures",
              type: "reading",
              duration: "45 min",
              completed: true
            },
            {
              title: "First Python Program",
              type: "exercise",
              duration: "1 hour",
              completed: false
            }
          ],
          projectTitle: "Legal Text Analyzer",
          projectDescription: "Build a simple program to analyze legal text patterns"
        }
        // Additional weeks...
      ],
      outcomes: [
        "Python programming fundamentals",
        "Data structure manipulation",
        "Basic text analysis",
        "Legal document processing"
      ]
    }
    // Additional modules...
  ]

  const getStatusColor = (completion: number) => {
    if (completion === 100) return 'text-green-600'
    if (completion > 0) return 'text-[#772F1A]'
    return 'text-gray-400'
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <PlayCircle className="w-5 h-5" />
      case 'reading':
        return <FileText className="w-5 h-5" />
      case 'exercise':
        return <FileCode className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-[#772F1A]">
            Course Curriculum
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Structured Learning Path
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Progress through carefully crafted modules designed to transform your legal practice with technology.
          </p>
        </div>

        <div className="space-y-8">
          {modules.map((module) => (
            <Card key={module.id} className="overflow-hidden">
              <div 
                className="cursor-pointer"
                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
              >
                <CardHeader className="bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className={getStatusColor(module.completion)} />
                        <CardTitle>{module.title}</CardTitle>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-medium">{module.duration}</div>
                        <div className={`text-sm ${getStatusColor(module.completion)}`}>
                          {module.completion}% Complete
                        </div>
                      </div>
                      {module.prerequisites.length > 0 && module.completion === 0 && (
                        <Lock className="text-gray-400" />
                      )}
                    </div>
                  </div>
                </CardHeader>
              </div>

              {expandedModule === module.id && (
                <CardContent className="mt-4">
                  {/* Prerequisites */}
                  {module.prerequisites.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2">Prerequisites</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.prerequisites.map((prereq) => (
                          <span key={prereq} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                            {prereq}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Weekly Content */}
                  <div className="space-y-6">
                    {module.weeks.map((week) => (
                      <div key={week.week} className="border-b pb-6 last:border-b-0 last:pb-0">
                        <h4 className="font-medium mb-4">Week {week.week}: {week.title}</h4>
                        <div className="space-y-3">
                          {week.topics.map((topic, index) => (
                            <div 
                              key={index}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <div className="flex items-center space-x-3">
                                {getTypeIcon(topic.type)}
                                <span className="text-sm">{topic.title}</span>
                              </div>
                              <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-500">
                                  <Clock className="w-4 h-4 inline mr-1" />
                                  {topic.duration}
                                </span>
                                {topic.completed && (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                )}
                              </div>
                            </div>
                          ))}
                          
                          {/* Weekly Project */}
                          <div className="mt-4 p-4 border border-[#772F1A]/20 rounded-lg bg-[#772F1A]/5">
                            <h5 className="font-medium flex items-center">
                              <FileCode className="w-5 h-5 mr-2 text-[#772F1A]" />
                              Weekly Project: {week.projectTitle}
                            </h5>
                            <p className="text-sm text-gray-600 mt-2">{week.projectDescription}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Learning Outcomes */}
                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-3">Learning Outcomes</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.outcomes.map((outcome, index) => (
                        <div 
                          key={index}
                          className="flex items-start space-x-2"
                        >
                          <GraduationCap className="w-5 h-5 text-[#772F1A] mt-0.5" />
                          <span className="text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseModules