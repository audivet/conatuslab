'use client'

import React from 'react'
import CourseViewer from '../../components/CourseViewer'
import { useRouter } from 'next/navigation'

const RegTechCompliance: React.FC = () => {
  const router = useRouter()
  
  const handleBack = () => {
    router.push('/courses')
  }

  return <CourseViewer courseId="regtech-compliance" onBack={handleBack} />
}

export default RegTechCompliance