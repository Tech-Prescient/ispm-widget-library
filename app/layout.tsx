import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ISPM Dashboard - Identity Security & Governance',
  description: 'Comprehensive Identity Security Posture Management Dashboard with 27 production-ready widgets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
