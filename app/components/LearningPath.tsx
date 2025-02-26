'use client'

import { useState } from 'react'
import { ChevronDown, Clock, Book, CheckCircle, ArrowRight } from 'lucide-react'

export default function LearningPath() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null)

  const pathStages = [
    {
      stage: 1,
      title: "Tech Foundations",
      duration: "4 weeks",
      progress: 100, // percentage
      skills: ["Programming Basics", "Development Tools", "Legal Tech Overview"],
      description: "Build a solid foundation in technology fundamentals with a legal context.",
      curriculum: [
        {
          week: 1,
          title: "Introduction to Programming",
          topics: [
            "Basic programming concepts",
            "Python fundamentals",
            "Development environment setup"
          ],
          projects: "Build your first legal document parser"
        },
        {
          week: 2,
          title: "Legal Tech Landscape",
          topics: [
            "Current legal tech tools",
            "Market overview",
            "Technology trends in law"
          ],
          projects: "Legal tech tool analysis report"
        },
        // Add more weeks...
      ],
      outcomes: [
        "Understanding of basic programming concepts",
        "Ability to use development tools",
        "Knowledge of legal tech landscape"
      ]
    },
    {
      stage: 2,
      title: "Legal Document Automation",
      duration: "6 weeks",
      progress: 75,
      skills: ["Python", "Document Processing", "Automation Tools"],
      description: "Learn to automate legal document analysis and processing.",
      curriculum: [
        {
          week: 1,
          title: "Document Structure Analysis",
          topics: [
            "Document formats and standards",
            "Text extraction techniques",
            "Structure recognition"
          ],
          projects: "Create a document structure analyzer"
        }
        // Add more weeks...
      ],
      outcomes: [
        "Ability to create document automation tools",
        "Understanding of document processing",
        "Experience with automation frameworks"
      ]
    },
    // Continue with stages 3 and 4...
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header section remains the same */}
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-[#772F1A]">
            Your Journey
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Clear Path to Tech Excellence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A structured learning journey designed specifically for legal professionals transitioning into tech roles.
          </p>
        </div>

        {/* Timeline with expanded details */}
        <div className="relative">
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />
          
          <div className="space-y-12">
            {pathStages.map((stage, index) => (
              <div key={stage.stage} className="space-y-4">
                <div className={`lg:flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Main content */}
                  <div className="flex-1 lg:text-right lg:pr-16">
                    <div className={`lg:max-w-xl ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#772F1A] font-medium">Stage {stage.stage}</span>
                        {stage.progress === 100 && (
                          <span className="flex items-center text-green-600 text-sm">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Completed
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-xl font-bold text-gray-900">{stage.title}</h3>
                      <p className="mt-2 text-gray-600">{stage.description}</p>
                      
                      {/* Progress bar */}
                      <div className="mt-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-[#772F1A]">{stage.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-[#772F1A] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${stage.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {stage.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-[#772F1A]/10 text-[#772F1A] rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline point */}
                  <div className="relative flex-none">
                    <div className={`w-16 h-16 rounded-full ${
                      stage.progress === 100 
                        ? 'bg-green-600' 
                        : stage.progress > 0 
                        ? 'bg-[#772F1A]' 
                        : 'bg-gray-300'
                    } text-white flex items-center justify-center`}>
                      <span className="font-bold text-lg">{stage.stage}</span>
                    </div>
                    <div className="mt-2 text-center space-y-1">
                      <span className="text-sm text-gray-500">{stage.duration}</span>
                      <button 
                        onClick={() => setExpandedStage(expandedStage === stage.stage ? null : stage.stage)}
                        className="flex items-center justify-center text-[#772F1A] text-sm hover:underline"
                      >
                        {expandedStage === stage.stage ? 'Show Less' : 'Show More'}
                        <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform ${
                          expandedStage === stage.stage ? 'rotate-180' : ''
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded curriculum details */}
                {expandedStage === stage.stage && (
                  <div className={`bg-gray-50 rounded-lg p-6 mt-4 ${
                    index % 2 === 0 ? 'lg:ml-[8.333333%]' : 'lg:mr-[8.333333%]'
                  }`}>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-4">Weekly Curriculum</h4>
                        <div className="space-y-4">
                          {stage.curriculum.map((week) => (
                            <div key={week.week} className="border-b pb-4">
                              <h5 className="font-medium">Week {week.week}: {week.title}</h5>
                              <ul className="mt-2 space-y-2">
                                {week.topics.map((topic, i) => (
                                  <li key={i} className="flex items-start">
                                    <ArrowRight className="w-4 h-4 text-[#772F1A] mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-gray-600">{topic}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-2 text-sm">
                                <span className="font-medium">Project: </span>
                                <span className="text-gray-600">{week.projects}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-4">Learning Outcomes</h4>
                        <ul className="space-y-2">
                          {stage.outcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}