'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(() => router.push('/home'), 500);
        }
        return Math.min(newProgress, 100);
      });
    }, 30);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between p-4 sm:p-6 md:p-8">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">FRANKLIN</h1>
      <div className="flex flex-col items-center gap-4 mb-16 sm:mb-24 md:mb-32">
        <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] aspect-[3/4] relative">
          <img
            src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?auto=format&fit=crop&q=80&w=500"
            alt="Portrait"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]">
          <div className="flex justify-between text-sm mb-1">
            <span className="font-medium">LOADING</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 h-0.5">
            <div
              className="bg-black h-0.5 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">MENSAH</h1>
    </div>
  );
};

export default Loader;