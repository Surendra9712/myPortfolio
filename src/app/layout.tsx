import type React from "react"
import "../globals.css"
import type {Metadata} from "next"
import {ThemeProvider} from "./theme-provider";
import {SonnerToaster} from "@/src/components/ui/sonner";

export const metadata: Metadata = {
    title: "Surendra Rawal - Frontend Developer Portfolio",
    description: "Portfolio of Surendra Rawal, a senior frontend developer with expertise in React, Angular, and Next.js",
    generator: 'v0.dev'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Surendra Rawal</title>
        </head>
        <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SonnerToaster></SonnerToaster>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
