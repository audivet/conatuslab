'use client'

import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

interface CardComponentProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: CardComponentProps) {
  return <div className={`p-6 pb-0 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = '' }: CardComponentProps) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
}

export function CardContent({ children, className = '' }: CardComponentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}