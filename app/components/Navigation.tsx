'use client'

export default function Navigation() {
    return (
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-[#772F1A]">ConatusLab</span>
            </div>
  
            {/* Navigation Links */}
            <div className="hidden sm:flex sm:space-x-8">
              <a href="#" className="text-gray-600 hover:text-[#772F1A] px-3 py-2">
                Courses
              </a>
              <a href="#" className="text-gray-600 hover:text-[#772F1A] px-3 py-2">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-[#772F1A] px-3 py-2">
                Contact
              </a>
            </div>
  
            {/* Auth Buttons */}
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-[#772F1A] px-3 py-2">
                Sign in
              </button>
              <button className="bg-[#772F1A] text-white px-4 py-2 rounded-md hover:bg-[#8B382A]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
  }