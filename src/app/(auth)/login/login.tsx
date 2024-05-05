"use client"

import Link from "next/link"
import { redirect } from "next/navigation"
import { ButtonLoading } from "@/components/ButtonLoading"
import { PasswordInput } from "@/components/PasswordInput"
import { providerMap } from "@/misc/auth"
import { PATHS } from "@/misc/constants"
import { signIn, useSession } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"

import { Button } from "@/lib/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card"
import { Input } from "@/lib/components/ui/input"
import { Label } from "@/lib/components/ui/label"

export function Login() {
  //   const [state, formAction] = useFormState(login, null);

  const { data: session } = useSession()
  if (session) redirect(PATHS.HOME)
  const renderIcon = (providerId: string) => {
    switch (providerId) {
      case "google":
        return <FcGoogle size={20} className="mr-2" />
    }
  }
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle>Log In</CardTitle>
        <CardDescription>
          Log in to your account to access your dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          {Object.values(providerMap).map((provider) => (
            <Button
              variant="outline"
              className="w-full"
              onClick={() => signIn(provider.id)}
              key={provider.id}
            >
              {renderIcon(provider.id)}
              Sign in with {provider.name}
            </Button>
          ))}
        </div>

        <div className="my-2 flex items-center">
          <div className="flex-grow border-t border-muted" />
          <div className="mx-2 text-muted-foreground">or</div>
          <div className="flex-grow border-t border-muted" />
        </div>
        <form className="grid gap-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              required
              placeholder="email@example.com"
              autoComplete="email"
              name="email"
              type="email"
            />
          </div>

          <div className="space-y-2">
            <Label>Password</Label>
            <PasswordInput
              name="password"
              required
              autoComplete="current-password"
              placeholder="********"
            />
          </div>

          <div className="flex flex-wrap justify-between">
            <Button variant={"link"} size={"sm"} className="p-0" asChild>
              <Link href={PATHS.SIGN_UP}>Not signed up? Sign up now.</Link>
            </Button>
            <Button variant={"link"} size={"sm"} className="p-0" asChild>
              <Link href={PATHS.RESET_PASSWORD}>Forgot password?</Link>
            </Button>
          </div>
          {/* {state?.fieldError ? (
            <ul className="list-disc space-y-1 rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
              {Object.values(state.fieldError).map((err) => (
                <li className="ml-4" key={err}>
                  {err}
                </li>
              ))}
            </ul>
          ) : state?.formError ? (
            <p className="rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
              {state?.formError}
            </p>
          ) : null} */}
          <ButtonLoading className="w-full">Log In</ButtonLoading>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/">Cancel</Link>
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
