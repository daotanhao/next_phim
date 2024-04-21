import React, { PropsWithChildren } from "react"

import { ThemeProvider } from "./ThemeProvider"

const AppProvider = ({ children, ...props }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default AppProvider
