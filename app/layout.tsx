import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Dermatologist',
  description: 'Melanoma Classification using Deep Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head> <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> </meta></head>
      <body className={"bg-gray-100 " + inter.className}>{children}</body>
    </html>
  )
}
