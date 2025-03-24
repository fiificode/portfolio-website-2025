"use client"

import PageTransition from "@/components/page-transition"

export default function About() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-black mb-8">ABOUT</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="mb-4">
              I'm Jemima Chambers, a 2D illustrator based in the UK with a passion for creating art that blurs the line
              between dreams and reality.
            </p>
            <p className="mb-4">
              My journey as an artist began at an early age, drawing inspiration from the world around me and
              transforming ordinary scenes into extraordinary visual narratives.
            </p>
            <p>
              With a background in fine arts and digital illustration, I've developed a distinctive style that combines
              meticulous attention to detail with a touch of whimsy and imagination.
            </p>
          </div>

          <div>
            <p className="mb-4">
              My work has been featured in various exhibitions and publications, and I've had the privilege of
              collaborating with brands that share my creative vision.
            </p>
            <p className="mb-4">
              When I'm not illustrating, you can find me exploring nature, visiting art galleries, or experimenting with
              new techniques to expand my artistic repertoire.
            </p>
            <p>
              I believe that art has the power to transport us to different worlds and evoke emotions that words cannot
              express. Through my illustrations, I aim to create immersive experiences that resonate with viewers on a
              personal level.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

