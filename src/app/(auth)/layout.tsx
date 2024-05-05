import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/styles/globals.css"

import NavBar from "@/components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next Phim",
  description: "Web xem phim online, phim lậu hay, phim mới nhất",
}

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="app">{children}</main>
}
