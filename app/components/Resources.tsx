'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  BookOpen, 
  Globe, 
  Code,
  FileText,
  Youtube,
  Github,
  Bookmark,
  ExternalLink
} from 'lucide-react'

// Define our Resource type
interface Resource {
  title: string;
  description: string;
  url: string;
  type: 'course' | 'documentation' | 'tutorial' | 'tool' | 'community';
  tags: string[];
  isPaid: boolean;
}

const Resources = () => {
  // Declare our state variable
  const [activeCategory, setActiveCategory] = useState<string>('all')

  // Define our resource categories
  const categories = [
    { id: 'all', label: 'All Resources', icon: Bookmark },
    { id: 'course', label: 'Courses', icon: BookOpen },
    { id: 'documentation', label: 'Documentation', icon: FileText },
    { id: 'tutorial', label: 'Tutorials', icon: Code },
    { id: 'tool', label: 'Tools', icon: Globe },
    { id: 'community', label: 'Community', icon: Github }
  ]

  // Define our resources array
  const resources: Resource[] = [
    // Programming Fundamentals
    {
      title: "CS50 for Lawyers",
      description: "Harvard's introduction to computer science, specifically designed for legal professionals. Covers programming basics, algorithms, and legal tech applications.",
      url: "https://online-learning.harvard.edu/course/cs50-lawyers",
      type: "course",
      tags: ["programming", "beginner", "computer science"],
      isPaid: false
    },
    {
      title: "Automate the Boring Stuff with Python",
      description: "Perfect for legal professionals looking to automate repetitive tasks. Includes practical examples easily adaptable to legal work.",
      url: "https://automatetheboringstuff.com",
      type: "course",
      tags: ["python", "automation", "beginner"],
      isPaid: false
    },
    
    // Legal-Specific Tools
    {
      title: "DocAssemble Documentation",
      description: "Comprehensive guide to using DocAssemble for legal document automation. Includes tutorials and example implementations.",
      url: "https://docassemble.org/docs.html",
      type: "documentation",
      tags: ["document automation", "open source", "practical"],
      isPaid: false
    },
    {
      title: "Open Source Legal Tech Tools",
      description: "Curated list of open-source tools specifically for legal technology applications, maintained by the Legal Hackers community.",
      url: "https://github.com/topics/legal-tech",
      type: "tool",
      tags: ["open source", "tools", "legal tech"],
      isPaid: false
    },
    
    // Learning Communities
    {
      title: "Legal Hackers",
      description: "Global community of lawyers, policymakers, and technologists exploring innovative solutions to legal problems.",
      url: "https://legalhackers.org",
      type: "community",
      tags: ["networking", "innovation", "community"],
      isPaid: false
    },
    {
      title: "r/LegalTechnology",
      description: "Active Reddit community discussing legal technology, automation, and the future of legal practice.",
      url: "https://reddit.com/r/LegalTechnology",
      type: "community",
      tags: ["discussion", "community", "trends"],
      isPaid: false
    },
    
    // Practical Tutorials
    {
      title: "Legal Document Processing with Python",
      description: "Step-by-step tutorial series on using Python for legal document analysis, including pattern matching and data extraction.",
      url: "https://github.com/topics/legal-document-processing",
      type: "tutorial",
      tags: ["python", "document processing", "intermediate"],
      isPaid: false
    },
    {
      title: "Building Legal APIs",
      description: "Tutorial series on creating and consuming APIs for legal applications, with practical examples using court and legislation APIs.",
      url: "https://public.law/docs/api",
      type: "tutorial",
      tags: ["api", "integration", "intermediate"],
      isPaid: false
    },
    
    // Documentation and Guides
    {
      title: "Legal Tech Self-Study Roadmap",
      description: "Comprehensive guide mapping out the journey from legal professional to legal technologist, with recommended resources at each stage.",
      url: "https://law.mit.edu/legal-technology",
      type: "documentation",
      tags: ["roadmap", "career", "guide"],
      isPaid: false
    },
    {
      title: "Legal Technology Assessment Tools",
      description: "Collection of tools and frameworks for assessing legal technology solutions, including open-source alternatives to commercial products.",
      url: "https://www.lawtechnologytoday.org/free-resources",
      type: "documentation",
      tags: ["assessment", "tools", "practical"],
      isPaid: false
    },
    
    // Emerging Technology
    {
      title: "AI in Legal Practice",
      description: "Introduction to artificial intelligence applications in law, with hands-on tutorials using open-source AI tools.",
      url: "https://openai.com/blog/legal-ai",
      type: "tutorial",
      tags: ["AI", "machine learning", "advanced"],
      isPaid: false
    },
    {
      title: "Blockchain for Legal Professionals",
      description: "Practical guide to understanding and implementing blockchain technology in legal contexts, including smart contracts.",
      url: "https://github.com/topics/smart-contracts",
      type: "documentation",
      tags: ["blockchain", "smart contracts", "advanced"],
      isPaid: false
    }
  ]

  // Filter resources based on active category
  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeCategory)

  return (
    <section className="py-12 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-[#772F1A]">
            Learning Resources
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Free Tools and Learning Materials
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Curated collection of free resources to help you master legal technology skills.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === category.id 
                    ? 'bg-[#772F1A] text-white' 
                    : 'bg-white text-gray-600 hover:bg-[#772F1A]/10'
                  }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </button>
            )
          })}
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span className="text-lg font-semibold">{resource.title}</span>
                  {!resource.isPaid && (
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                      Free
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-[#772F1A]/10 text-[#772F1A] rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#772F1A] hover:text-[#8B382A]"
                >
                  Visit Resource
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources