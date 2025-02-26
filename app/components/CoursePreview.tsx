'use client'

import { useRouter } from 'next/navigation'

export default function CoursePreview() {
    const router = useRouter()

    const courses = [
      {
        id: 1,
        title: "Legal Tech Foundations",
        description: "Master the basics of legal technology and document automation",
        duration: "6 weeks",
        level: "Beginner",
        topics: ["Document Automation", "Legal Software", "Tech Fundamentals"],
        image: "/course-1.jpg",
        slug: "legal-tech-foundations"
      },
      {
        id: 2,
        title: "Python for Legal Analysis",
        description: "Learn Python programming with focus on legal document analysis",
        duration: "8 weeks",
        level: "Intermediate",
        topics: ["Python", "Data Analysis", "Legal Documents"],
        image: "/course-2.jpg",
        slug: "python-legal-analysis"
      },
      {
        id: 3,
        title: "RegTech & Compliance",
        description: "Understand regulatory technology and compliance automation",
        duration: "6 weeks",
        level: "Intermediate",
        topics: ["RegTech", "Compliance", "Automation"],
        image: "/course-3.jpg",
        slug: "regtech-compliance"
      }
    ]

    const handleCourseClick = (slug: string) => {
      router.push(`/courses/${slug}`)
    }
  
    return (
      <section className="py-24 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-[#772F1A]">
              Featured Courses
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Start Your Learning Journey
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose from our carefully crafted courses designed to bridge the gap between legal expertise and technology.
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Course Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#772F1A] font-medium">{course.level}</span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.topics.map((topic, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#772F1A]/10 text-[#772F1A] rounded-full text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleCourseClick(course.slug)}
                    className="w-full bg-[#772F1A] text-white py-2 px-4 rounded-md hover:bg-[#8B382A] transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }