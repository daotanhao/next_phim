"use client"

import React from "react"
import Link from "next/link"

import { Button } from "@/lib/components/ui/button"

import { LogoIcon } from "./LogoIcon"
import { ThemeSwitcher } from "./ThemeSwitcher"

const NavBar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-[#121212]">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link className="flex items-center" href="#">
            <LogoIcon />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link
              className="flex items-center text-sm font-medium transition-colors hover:underline"
              href="#"
            >
              Home
            </Link>
            <Link
              className="flex items-center text-sm font-medium transition-colors hover:underline"
              href="#"
            >
              About
            </Link>
            <Link
              className="flex items-center text-sm font-medium transition-colors hover:underline"
              href="#"
            >
              Services
            </Link>
            <Link
              className="flex items-center text-sm font-medium transition-colors hover:underline"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
