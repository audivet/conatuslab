'use client'

import React from 'react'
import CourseViewer from '../../components/CourseViewer'
import { useRouter } from 'next/navigation'

const PythonLegalAnalysis: React.FC = () => {
  const router = useRouter()
  
  const handleBack = () => {
    router.push('/courses')
  }

  return <CourseViewer courseId="python-legal-analysis" onBack={handleBack} />
}

export default PythonLegalAnalysis