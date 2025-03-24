"use client";

import Image from "next/image";
import PageTransition from "@/components/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-sm uppercase tracking-wide mb-6">
          Hey everyone, and welcome to my website
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-center leading-none mb-12">
          <div>FRANKLIN</div>
          <div>MENSAH</div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-1">
            <p className="text-xs uppercase leading-relaxed">
              Frontend Developer from Accra,Ghana, crafting seamless and
              interactive web experiences. I bring designs to life with clean
              code and intuitive user interfaces.
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
              Explore my portfolio to see my work in action and get inspired by
              my approach. Let my designs provide seamless and captivating
              digital experiences.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
