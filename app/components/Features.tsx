'use client'

export default function Features() {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#772F1A]">
              Comprehensive Learning
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to transition into legal tech
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Master the technical skills needed in modern legal practice through our structured learning paths and practical projects.
            </p>
          </div>
  
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col">
                <div className="rounded-lg bg-[#772F1A]/10 p-2 w-10 h-10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-[#772F1A]" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.626 48.626 0 0 1 12 20.904a48.629 48.629 0 0 1 8.232-4.41 60.525 60.525 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900">Practice-Based Learning</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Learn through real-world legal tech projects and practical exercises designed by industry experts.
                  </p>
                </div>
              </div>
  
              {/* Feature 2 */}
              <div className="flex flex-col">
                <div className="rounded-lg bg-[#772F1A]/10 p-2 w-10 h-10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-[#772F1A]" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900">Technical Skills</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Master programming, data analysis, and automation tools specifically for legal applications.
                  </p>
                </div>
              </div>
  
              {/* Feature 3 */}
              <div className="flex flex-col">
                <div className="rounded-lg bg-[#772F1A]/10 p-2 w-10 h-10 flex items-center justify-center">
                  <svg className="h-6 w-6 text-[#772F1A]" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900">Community Support</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Join a community of legal professionals transitioning into tech roles, share experiences and network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }