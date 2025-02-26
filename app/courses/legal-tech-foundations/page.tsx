'use client'

import React from 'react'
import CourseViewer from '../../components/CourseViewer'
import { useRouter } from 'next/navigation'

const LegalTechFoundations: React.FC = () => {
  const router = useRouter()
  
  const handleBack = () => {
    router.push('/courses')
  }

  return <CourseViewer courseId="legal-tech-foundations" onBack={handleBack} />
}

export default LegalTechFoundations