"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="w-full py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex space-x-6 mb-2 md:mb-0">
        <NavLink href="/" active={pathname === "/"}>
          Index
        </NavLink>
        <NavLink href="/about" active={pathname === "/about"}>
          About
        </NavLink>
        <NavLink href="/work" active={pathname === "/work"}>
          Work
        </NavLink>
      </div>

      <div className="order-first md:order-none mb-2 md:mb-0">
        <Link href="/" className="text-base md:text-lg font-medium">
          Franklin Mensah
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
  return (
    <Link href={href} className={cn("text-sm hover:opacity-70 transition-opacity", active && "font-medium")}>
      {children}
    </Link>
  )
}

