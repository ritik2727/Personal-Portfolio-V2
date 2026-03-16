import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ritik Jain | Full-Stack Developer & Software Engineer',
  description: 'Portfolio of Ritik Jain, a Full-Stack Developer specializing in React.js, Next.js, Node.js, and building production-grade AI-powered web applications.',
  keywords: [
    'Ritik Jain', 'Full Stack Developer', 'Software Engineer', 'React Developer',
    'Next.js Developer', 'Node.js Developer', 'MERN Stack', 'AI Applications',
    'Indore Developer', 'Web Developer India', 'Frontend Engineer', 'Backend Engineer'
  ],
  authors: [{ name: 'Ritik Jain', url: 'https://github.com/ritikjain' }],
  creator: 'Ritik Jain',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Ritik Jain | Full-Stack Developer',
    description: 'Specializing in React.js, Node.js, and AI-powered platforms. View my projects, skills, and experience.',
    url: 'https://portfolio-v2.vercel.app', /* Replace with your actual deployed URL */
    siteName: 'Ritik Jain Portfolio',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritik Jain | Full-Stack Developer',
    description: 'Building production-grade AI-powered web applications.',
    creator: '@ritikjain', /* Update if you have Twitter */
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-text font-body antialiased">
        {children}
      </body>
    </html>
  )
}
