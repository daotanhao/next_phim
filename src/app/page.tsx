import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Icons } from "@/lib/components/icons"
import { buttonVariants } from "@/lib/components/ui/button"
import { Card, CardContent } from "@/lib/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/lib/components/ui/carousel"
import { cn } from "@/lib/utils"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.logo className="h-16 w-16" />
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className={cn(buttonVariants({ size: "default" }))}
          >
            Get Started
          </Link>
          <ThemeSwitcher />
        </div>
        <Carousel className="w-full max-w-sm">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  )
}