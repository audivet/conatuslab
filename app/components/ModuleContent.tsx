'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  Code, 
  FileText, 
  BookOpen,
  Terminal,
  FileCode,
  PenTool,
  Scale,
  Lightbulb,
  ChevronDown,
  Calendar,
  Clock,
  Target,
  GraduationCap
} from 'lucide-react'
// Import course data and types
import { courses, Course, Module as CurriculumModule, Topic } from './curriculum'

export interface LessonAssessment {
  type: 'quiz' | 'project' | 'exercise'
  title: string
  description: string
  criteria: string[]
  deliverables?: string[]
}

export interface Lesson {
  id: string
  title: string
  type: 'theory' | 'practical' | 'coding' | 'project'
  duration: string
  content: {
    overview: string
    topics?: string[]
    exercise?: {
      title: string
      steps: string[]
    }
    codeExamples?: Array<{
      title: string
      code: string
    }>
    exercises?: string[]
    projectSteps?: string[]
    practicalExample?: string
  }
}

export interface ContentModule {
  id: string
  title: string
  level: string
  duration: string
  description: string
  lessons: Lesson[]
  assessment?: LessonAssessment
}

export interface Track {
  title: string
  modules: ContentModule[]
}

export interface ModuleContentProps {
  courseId?: string;
}

const ModuleContent: React.FC<ModuleContentProps> = ({ courseId }) => {
  const [activeLesson, setActiveLesson] = useState<string | null>(null)
  const [expandedModule, setExpandedModule] = useState<string | null>(null)
  
  // Helper function to map topic types to lesson types
  const mapTopicTypeToLessonType = (topicType: string): 'theory' | 'practical' | 'coding' | 'project' => {
    switch (topicType) {
      case 'video': return 'theory';
      case 'reading': return 'theory';
      case 'exercise': return 'practical';
      case 'discussion': return 'theory';
      default: return 'theory';
    }
  };
  
  // Get the course data based on courseId
  const getCourseContent = (): { foundationTrack: Track, advancedTrack: Track } => {
    if (!courseId) {
      // Fallback content if no courseId provided
      return {
        foundationTrack: {
          title: 'Foundation Track',
          modules: [
            {
              id: 'legal-tech-intro',
              title: 'Module 1: Understanding Legal Technology',
              level: 'Foundation',
              duration: '2 weeks',
              description: 'Understand how technology is transforming legal practice',
              lessons: [
                {
                  id: 'tech-landscape',
                  title: 'The Legal Technology Landscape',
                  type: 'theory',
                  duration: '45 minutes',
                  content: {
                    overview: "Understanding how technology is transforming legal practice",
                    topics: [
                      "Current state of legal technology",
                      "Key drivers of digital transformation",
                      "Impact on legal service delivery",
                      "Future trends and opportunities"
                    ]
                  }
                },
                {
                  id: 'doc-automation',
                  title: 'Document Automation Fundamentals',
                  type: 'practical',
                  duration: '1 hour',
                  content: {
                    overview: "Introduction to document automation concepts",
                    exercise: {
                      title: "Basic Document Template Creation",
                      steps: [
                        "Identify repetitive document elements",
                        "Create variable placeholders",
                        "Set up conditional logic",
                        "Test template functionality"
                      ]
                    }
                  }
                }
              ]
            }
          ]
        },
        advancedTrack: {
          title: 'Advanced Track',
          modules: []
        }
      };
    }
    
    // Find the course by ID
    const course = courses.find((c: Course) => c.id === courseId);
    if (!course) return { foundationTrack: { title: 'Course Not Found', modules: [] }, advancedTrack: { title: '', modules: [] } };
    
    // Convert course modules to our internal format
    const convertedModules = course.modules.map((module: CurriculumModule) => ({
      id: module.title.toLowerCase().replace(/\s+/g, '-'),
      title: module.title,
      level: course.level,
      duration: module.duration,
      description: module.description,
      lessons: module.topics.map((topic: Topic) => ({
        id: topic.title.toLowerCase().replace(/\s+/g, '-'),
        title: topic.title,
        type: mapTopicTypeToLessonType(topic.type),
        duration: topic.duration,
        content: {
          overview: topic.description,
          topics: topic.keyPoints,
          ...(topic.type === 'exercise' && {
            exercise: {
              title: topic.title,
              steps: topic.keyPoints
            }
          })
        }
      })),
      assessment: module.project ? {
        type: 'project' as const,
        title: module.project.title,
        description: module.project.description,
        criteria: module.project.assessmentCriteria,
        deliverables: module.project.deliverables
      } : undefined
    }));
    
    return {
      foundationTrack: {
        title: course.title,
        modules: convertedModules
      },
      advancedTrack: {
        title: 'Advanced Topics',
        modules: []
      }
    };
  };
  
  const content = getCourseContent();

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'theory':
        return <BookOpen className="w-5 h-5" />
      case 'practical':
        return <PenTool className="w-5 h-5" />
      case 'coding':
        return <Terminal className="w-5 h-5" />
      case 'project':
        return <FileCode className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  const renderLessonContent = (lesson: Lesson) => {
    switch (lesson.type) {
      case 'theory':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-lg mb-2">Overview</h4>
              <p className="text-gray-600">{lesson.content.overview}</p>
            </div>
            {lesson.content.topics && (
              <div>
                <h4 className="font-medium text-lg mb-2">Key Topics</h4>
                <ul className="space-y-2">
                  {lesson.content.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <Lightbulb className="w-4 h-4 text-[#772F1A] mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {lesson.content.practicalExample && (
              <div>
                <h4 className="font-medium text-lg mb-2">Practical Application</h4>
                <p className="text-gray-600">{lesson.content.practicalExample}</p>
              </div>
            )}
          </div>
        )
      case 'practical':
        return (
          <div className="space-y-6">
            <p className="text-gray-600">{lesson.content.overview}</p>
            {lesson.content.exercise && (
              <div>
                <h4 className="font-medium text-lg mb-2">{lesson.content.exercise.title}</h4>
                <ol className="space-y-2">
                  {lesson.content.exercise.steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#772F1A] font-medium mr-2">{index + 1}.</span>
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )
      case 'coding':
        return (
          <div className="space-y-6">
            <p className="text-gray-600">{lesson.content.overview}</p>
            {lesson.content.codeExamples?.map((example, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-medium">{example.title}</h4>
                <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm">{example.code}</code>
                </pre>
              </div>
            ))}
            {lesson.content.exercises && (
              <div>
                <h4 className="font-medium text-lg mb-2">Practice Exercises</h4>
                <ul className="space-y-2">
                  {lesson.content.exercises.map((exercise, index) => (
                    <li key={index} className="flex items-start">
                      <Code className="w-4 h-4 text-[#772F1A] mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{exercise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      case 'project':
        return (
          <div className="space-y-6">
            <p className="text-gray-600">{lesson.content.overview}</p>
            {lesson.content.projectSteps && (
              <div>
                <h4 className="font-medium text-lg mb-2">Project Steps</h4>
                <ul className="space-y-2">
                  {lesson.content.projectSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <Target className="w-4 h-4 text-[#772F1A] mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      default:
        return null;
    }
  }

  const renderModule = (module: ContentModule) => (
    <Card key={module.id}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{module.title}</CardTitle>
            <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {module.duration}
              </span>
              <span className="flex items-center">
                <GraduationCap className="w-4 h-4 mr-1" />
                {module.level}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{module.description}</p>
          </div>
          <button 
            onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
            className="text-[#772F1A] hover:text-[#8B382A]"
          >
            <ChevronDown className={`w-5 h-5 transform transition-transform ${
              expandedModule === module.id ? 'rotate-180' : ''
            }`} />
          </button>
        </div>
      </CardHeader>
      
      {expandedModule === module.id && (
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              {module.lessons.map((lesson) => (
                <div key={lesson.id}>
                  <button
                    onClick={() => setActiveLesson(activeLesson === lesson.id ? null : lesson.id)}
                    className="w-full"
                  >
                    <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <div className="text-[#772F1A]">
                          {getLessonIcon(lesson.type)}
                        </div>
                        <div className="text-left">
                          <h3 className="font-medium">{lesson.title}</h3>
                          <p className="text-sm text-gray-500 flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {lesson.duration}
                          </p>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-[#772F1A] transform transition-transform ${
                        activeLesson === lesson.id ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </button>
                  
                  {activeLesson === lesson.id && (
                    <div className="p-6 bg-gray-50 rounded-lg mt-2">
                      {renderLessonContent(lesson)}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {module.assessment && (
              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Scale className="w-5 h-5 text-[#772F1A] mr-2" />
                  Module Assessment
                </h3>
                <div className="bg-[#772F1A]/5 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">{module.assessment.title}</h4>
                  <p className="text-gray-600 mb-4">{module.assessment.description}</p>
                  {module.assessment.deliverables && (
                    <div>
                      <h5 className="font-medium mb-2">Deliverables:</h5>
                      <ul className="space-y-2">
                        {module.assessment.deliverables.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <FileCode className="w-4 h-4 text-[#772F1A] mr-2 mt-1" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  )

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-[#772F1A]">
            Course Content
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Comprehensive Learning Modules
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From legal professional to tech-savvy practitioner through structured learning paths.
          </p>
        </div>

        {Object.entries(content).map(([trackId, track]) => (
          <div key={trackId} className="mb-12 last:mb-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{track.title}</h3>
            <div className="space-y-8">
              {track.modules.map(renderModule)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ModuleContent