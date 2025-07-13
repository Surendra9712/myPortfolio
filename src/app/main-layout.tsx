"use client"

import type {ReactNode} from "react"
import useTrackScroll from "@/src/hooks/use-track-scroll";
import {HeaderSection} from "@/src/components/sections";

interface MainLayoutProps {
    children: ReactNode
}

export default function MainLayout({children}: MainLayoutProps) {
    useTrackScroll();
    return (
        <div className="min-h-screen bg-background text-foreground">
            <HeaderSection/>
            <main>{children}</main>
        </div>
    )
}
