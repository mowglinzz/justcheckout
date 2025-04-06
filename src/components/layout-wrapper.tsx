'use client'

import { AuthProvider } from '@/lib/auth-context'

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
    </AuthProvider>
  )
} 