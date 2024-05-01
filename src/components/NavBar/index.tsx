"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

import { Button } from "@/lib/components/ui/button"
import { Input } from "@/lib/components/ui/input"

import { LogoIcon } from "../LogoIcon"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { UserBlock } from "./UserBlock"

const NavBar = () => {
  const { data: session } = useSession()

  const renderAuthButtons = () => {
    if (!session) {
      return (
        <>
          <Button onClick={() => signIn()} size="sm" variant="outline">
            Sign in
          </Button>
          <Button size="sm">Sign up</Button>
        </>
      )
    }

    return (
      //render username
      <>
        <UserBlock
          signOut={signOut}
          image={session.user?.image || ""}
          name={session.user?.name || ""}
        />
      </>
    )
  }
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-[#121212]">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link className="flex items-center" href="#">
            <LogoIcon />
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
          <div>
            <Input style={{ minWidth: 400 }} />
          </div>
          <div className="flex items-center gap-4">
            {renderAuthButtons()}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
