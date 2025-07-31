'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Demo from '@/components/Demo'
import HowItWorks from '@/components/HowItWorks'
import GitHub from '@/components/GitHub'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-roast-dark">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <HowItWorks />
      <GitHub />
      <Footer />
    </main>
  )
}