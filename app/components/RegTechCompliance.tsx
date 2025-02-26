'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  BookOpen,
  FileText,
  Code,
  ChevronRight,
  CheckCircle,
  Zap,
  Shield
} from 'lucide-react'
import { courses } from './curriculum'

const RegTechCompliance = () => {
  const courseContent = courses.find(course => course.id === 'regtech-compliance')

  if (!courseContent) {
    return <div>Course content not found</div>
  }

  return (
    <div className="min-h-screen bg-[#F8F6F0] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Course Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#772F1A] mb-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">RegTech & Compliance</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{courseContent.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{courseContent.description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              {courseContent.duration}
            </span>
            <span className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              {courseContent.level}
            </span>
            {courseContent.prerequisites.length > 0 && (
              <span className="flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Prerequisites: {courseContent.prerequisites.join(', ')}
              </span>
            )}
          </div>
        </div>

        {/* Learning Objectives */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Learning Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {courseContent.learningObjectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#772F1A] mr-2 mt-0.5" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Course Modules */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Modules</h2>
        <div className="grid gap-6">
          {courseContent.modules.map((module, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                    <p className="text-sm text-gray-500">{module.duration}</p>
                  </div>
                  <span className="text-[#772F1A] font-bold">Module {index + 1}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{module.description}</p>
                
                {/* Topics with icons based on type */}
                <div className="space-y-4">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} 
                         className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-gray-800 font-medium">{topic.title}</span>
                            <span className="text-sm text-gray-500">({topic.duration})</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{topic.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {topic.keyPoints.map((point, idx) => (
                              <span key={idx} 
                                    className="text-xs bg-[#772F1A]/10 text-[#772F1A] px-2 py-1 rounded-full">
                                {point}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="ml-4 px-2 py-1 text-xs bg-[#772F1A] text-white rounded-full">
                          {topic.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Module Project */}
                <div className="mt-6 p-4 border border-[#772F1A]/20 rounded-lg bg-[#772F1A]/5">
                  <h3 className="font-medium flex items-center mb-3">
                    <Code className="w-5 h-5 mr-2 text-[#772F1A]" />
                    Module Project: {module.project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{module.project.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Objectives:</h4>
                      <ul className="space-y-1">
                        {module.project.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <ChevronRight className="w-4 h-4 text-[#772F1A] mr-1 mt-0.5" />
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Deliverables:</h4>
                      <ul className="space-y-1">
                        {module.project.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <ChevronRight className="w-4 h-4 text-[#772F1A] mr-1 mt-0.5" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Certification Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {courseContent.certification.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-[#772F1A] mr-2 mt-1" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills You'll Gain</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {courseContent.certification.skills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <Shield className="w-4 h-4 text-[#772F1A] mr-2 mt-1" />
                    <span className="text-gray-600">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-[#772F1A] text-white px-8 py-3 rounded-md hover:bg-[#8B382A] transition-colors">
            Start Your RegTech Journey
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegTechCompliance