"use client"

import type React from "react"
import { ViewTransitions } from "next-view-transitions";

import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import { AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export default function PageClient({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <AnimatePresence mode="wait">{children}</AnimatePresence>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
    </ViewTransitions>
  )
}

