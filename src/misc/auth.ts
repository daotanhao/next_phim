import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

const providers: any[] = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  }),
  Credentials({
    credentials: { password: { label: "Password", type: "password" } },
    async authorize(c) {
      if (c?.password !== "password") {
        return null
      }

      return {
        id: "1",
        name: "Fill Murray",
        email: "fill@murray.com",
        image: "https://source.boringavatars.com/marble/120",
      }
    },
  }),
]

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})

export const handler = NextAuth({
  debug: process.env.NODE_ENV !== "production" ? true : false,
  providers: providers,
  pages: {
    signIn: "/login",
  },
})
