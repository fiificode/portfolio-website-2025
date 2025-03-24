"use client"

import { useState } from "react"
import PageTransition from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Fun() {
  const [showSurprise, setShowSurprise] = useState(false)

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-8">FUN ZONE</h1>

        <p className="max-w-lg mx-auto mb-8">
          This is where I share some playful experiments and interactive elements. Click the button below for a little
          surprise!
        </p>

        <Button onClick={() => setShowSurprise(!showSurprise)} className="mb-12">
          {showSurprise ? "Hide Surprise" : "Show Surprise"}
        </Button>

        {showSurprise && (
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square bg-gradient-to-br from-pink-400 to-purple-600 dark:from-purple-600 dark:to-pink-400 rounded-lg"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </PageTransition>
  )
}

