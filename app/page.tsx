"use client"

import Image from "next/image"
import PageTransition from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-sm uppercase tracking-wide mb-6">Hey everyone, and welcome to my website</p>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-center leading-none mb-12">
          <div>FRANKLIN</div>
          <div>MENSAH</div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-1">
            <p className="text-xs uppercase leading-relaxed">
              2D illustrator from the UK, I create art that captures the essence of dreams and reality. My distinct
              style brings scenes to life.
            </p>
          </div>

          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-full max-w-xs aspect-[3/4]">
              <Image
                src={"/myProfilePic.jpeg"}
                alt="Franklin Mensah"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <p className="text-xs uppercase leading-relaxed">
              Explore my gallery to see the magic unfold and be inspired by my vision. Let my illustrations transport
              you to a world of imagination.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

