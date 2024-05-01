"use client"

import React, { PropsWithChildren } from "react"
import { SessionProvider } from "next-auth/react"

import { ThemeProvider } from "./ThemeProvider"

const AppProvider = ({ children, ...props }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}

export default AppProvider
