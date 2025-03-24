"use client"

import Image from "next/image"
import PageTransition from "@/components/page-transition"

export default function Work() {
  // Sample work items - in a real project, this would come from a CMS or API
  const workItems = [
    { id: 1, title: "Dream Sequence", category: "Digital Illustration" },
    { id: 2, title: "Urban Fantasy", category: "Mixed Media" },
    { id: 3, title: "Nature's Whisper", category: "Digital Illustration" },
    { id: 4, title: "Ethereal Portraits", category: "Character Design" },
    { id: 5, title: "City Lights", category: "Digital Illustration" },
    { id: 6, title: "Mystical Creatures", category: "Character Design" },
  ]

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-black mb-8">WORK</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-square overflow-hidden mb-2 border dark:border-gray-800 rounded-md">
                <Image
                  src={`/placeholder.svg?height=600&width=600&text=${item.title}`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

