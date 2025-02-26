'use client'

import React from 'react'
import { ProgressProvider } from './ProgressContext'
import Navigation from './Navigation'

interface AppLayoutProps {
  children: React.ReactNode
}

// Make this a named export instead of default
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <ProgressProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} ConatusLab. All rights reserved.
          </div>
        </footer>
      </div>
    </ProgressProvider>
  )
}

// Keep RootLayout as the default export
export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  );
}