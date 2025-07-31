import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RoastBot - AI-Powered SMS Roasting Bot',
  description: 'A consent-based, light-roast SMS bot powered by Claude AI. Remembers conversations, learns your personality, and delivers personalized roasts via text message.',
  keywords: 'AI bot, SMS bot, roasting bot, Claude AI, Twilio, chatbot, artificial intelligence',
  authors: [{ name: 'RoastBot Team' }],
  openGraph: {
    title: 'RoastBot - AI-Powered SMS Roasting Bot',
    description: 'Get roasted by AI! A smart SMS bot that learns your personality and delivers custom burns.',
    type: 'website',
    url: 'https://roastbot.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoastBot - AI-Powered SMS Roasting Bot',
    description: 'Get roasted by AI! A smart SMS bot that learns your personality and delivers custom burns.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}