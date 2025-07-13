"use client"

import Image from "next/image"
import Link from "next/link"
import {personalInfo} from "@/src/lib/data";
import {Button} from "../ui/button";
import {SocialInfo} from "./index";

export default function HeroSection() {
    return (
        <section id="intro" className="py-10 relative overflow-hidden">
            <div
                className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left lg:max-w-2xl animate-fade-in-up delay-300">
                    <p className="text-lg md:text-xl text-primary font-semibold mb-3">Hello, I'm</p>
                    <h1 className="text-2xl md:text-5xl font-serif font-extrabold leading-tight mb-4">
            <span
                className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent inline-flex">
            {personalInfo.name}
            </span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-foreground/90 mb-6">{personalInfo.title}</p>
                    <p className="text-lg max-w-xl text-muted-foreground mb-10">{personalInfo.description}</p>
                    <div
                        className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
                        <Button
                            asChild
                            className="px-8 py-3 text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <Link href="#contact">Get In Touch</Link>
                        </Button>
                        <Button
                            variant="outline"
                            asChild
                            className="px-8 py-3 text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                        >
                            <Link href="#projects">View My Work</Link>
                        </Button>
                    </div>
                    <SocialInfo/>
                </div>
                <div
                    className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/30 flex-shrink-0 animate-fade-in-up">
                    <Image
                        src="/surendra.png"
                        alt={personalInfo.name}
                        layout="fill"
                        objectFit="cover"
                        className="scale-x-[-1]"
                    />
                </div>
            </div>
        </section>
    )
}
