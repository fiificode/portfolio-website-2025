"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { useTransitionRouter } from "next-view-transitions";

export default function Navigation() {
  const pathname = usePathname()

  if(pathname === "/") {
    return null
  }


  return (
    <nav className="w-full py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex space-x-6 mb-2 md:mb-0">
        <NavLink href="/home" 
         active={pathname === "/home"}
         >
          Home
        </NavLink>
        <NavLink href="/about" active={pathname === "/about"}>
          About
        </NavLink>
        <NavLink href="/projects" active={pathname === "/projects"}>
          Projects
        </NavLink>
      </div>

      <div className="order-first md:order-none mb-2 md:mb-0">
        <Link href="/" className="text-base text-teal-500 md:text-lg font-medium">
          FM
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <NavLink href="/fun" active={pathname === "/fun"}>
          Click for fun
        </NavLink>
        <NavLink href="/contact" active={pathname === "/contact"}>
          Let&apos;s talk
        </NavLink>
        <ThemeToggle />
      </div>
    </nav>
  )
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  const router = useTransitionRouter();
  function slideInout() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }
  return (
    <Link 
    href={href}
    onClick={(e) => {
      e.preventDefault();
      router.push(href, { onTransitionReady: slideInout });
    }}
     className={cn("text-sm hover:opacity-70 hover:text-teal-500 dark:hover:text-teal-500 transition-opacity", active && "font-medium text-teal-500")}>
      {children}
    </Link>
  )
}

