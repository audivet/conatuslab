import Navigation from './components/Navigation'
import Features from './components/Features'
import CoursePreview from './components/CoursePreview'
import LearningPath from './components/LearningPath'
import ProgressTracker from './components/ProgressTracker'
import ModuleContent from './components/ModuleContent'  
import CourseModules from './components/CourseModules'
import Resources from './components/Resources'
import { courses } from './components/curriculum';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F6F0]">
      <Navigation />
      <main>
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Legal Career with Technology
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Bridge the gap between legal expertise and technology. Learn practical tech skills designed specifically for legal professionals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-md bg-[#772F1A] px-6 py-3 text-white hover:bg-[#8B382A]">
                Start Learning
              </button>
              <button className="rounded-md border border-gray-300 px-6 py-3 hover:bg-gray-50">
                View Courses
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <Features />
        <CoursePreview />
        <LearningPath />
        
        {/* Course Content Section */}
        <div className="relative">
          <CourseModules />
          <ModuleContent />
        </div>
        
        {/* Progress and Resources */}
        <ProgressTracker />
        <Resources />
      </main>
    </div>
  )
}