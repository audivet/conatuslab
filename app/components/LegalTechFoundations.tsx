'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  BookOpen,
  FileText,
  Code,
  ChevronRight,
  CheckCircle
} from 'lucide-react'
import { courses } from './curriculum'

const LegalTechFoundations = () => {
  const courseContent = courses.find(course => course.id === 'legal-tech-foundations')

  if (!courseContent) {
    return <div>Course content not found</div>
  }

  return (
    <div className="min-h-screen bg-[#F8F6F0] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Course Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{courseContent.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{courseContent.description}</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              {courseContent.duration}
            </span>
            <span className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              {courseContent.level}
            </span>
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
                <div className="space-y-6">
                  {/* Topics */}
                  <div>
                    <h3 className="font-medium mb-3">Topics</h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <ChevronRight className="w-4 h-4 text-[#772F1A] mr-2 mt-1" />
                          <div>
                            <span className="text-gray-800 font-medium">{topic.title}</span>
                            <div className="text-sm text-gray-600 mt-1">
                              <span className="inline-block bg-gray-100 px-2 py-1 rounded mr-2">
                                {topic.duration}
                              </span>
                              <span className="inline-block bg-[#772F1A]/10 text-[#772F1A] px-2 py-1 rounded">
                                {topic.type}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Module Project */}
                  <div className="mt-6 p-4 border border-[#772F1A]/20 rounded-lg bg-[#772F1A]/5">
                    <h3 className="font-medium flex items-center mb-3">
                      <Code className="w-5 h-5 mr-2 text-[#772F1A]" />
                      Module Project: {module.project.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{module.project.description}</p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Objectives:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          {module.project.objectives.map((objective, idx) => (
                            <li key={idx}>{objective}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Deliverables:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                          {module.project.deliverables.map((deliverable, idx) => (
                            <li key={idx}>{deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Requirements */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Certification Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {courseContent.certification.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-[#772F1A] mr-2 mt-1" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3">Skills Acquired</h3>
                <ul className="space-y-2">
                  {courseContent.certification.skills.map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <Code className="w-4 h-4 text-[#772F1A] mr-2 mt-1" />
                      <span className="text-gray-600">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enroll Button */}
        <div className="mt-12 text-center">
          <button className="bg-[#772F1A] text-white px-8 py-3 rounded-md hover:bg-[#8B382A] transition-colors">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  )
}

export default LegalTechFoundations