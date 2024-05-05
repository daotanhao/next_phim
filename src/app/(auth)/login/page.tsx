import { Login } from "./login"

export const metadata = {
  title: "Login",
  description: "Login Page",
}

export default async function LoginPage() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <Login />
    </div>
  )
}
