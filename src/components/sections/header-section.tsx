"use client";

import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {Avatar, AvatarImage} from "../ui/avatar";
import {ThemeToggle} from "../common/theme-toggle";
import {useActiveSection} from "@/src/providers/ActiveSectionContext";

export default function HeaderSection() {
    const {activeSection} = useActiveSection();

    const items = [
        {link: "about", label: "About"},
        {link: "skills", label: "Skills"},
        {link: "projects", label: "Projects"},
        {link: "experience", label: "Experience"},
        {link: "education", label: "Education"},
        {link: "certifications", label: "Certifications"},
        {link: "contact", label: "Contact"},
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [underlineStyle, setUnderlineStyle] = useState({left: 0,width:0});

    useEffect(() => {
        if (!containerRef.current || !activeSection){
            setUnderlineStyle({
                left: 0,
                width: 0,
            });
            return;
        }

        const activeLink = containerRef.current.querySelector<HTMLAnchorElement>(
            `a[href="#${activeSection}"]`
        );

        if (activeLink) {
            const rect = activeLink.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();

            setUnderlineStyle({
                left: rect.left - containerRect.left,
                width: 20
            });
        }
    }, [activeSection]);

    return (
        <nav
            className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md transition-colors duration-300 shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Avatar>
                    <AvatarImage src={"/surendra.png"}/>
                </Avatar>

                <div className="flex items-center space-x-6">
                    <div
                        className="relative hidden space-x-6 md:flex"
                        ref={containerRef}
                    >
                        {/* Animated Underline */}
                        <div
                            className="absolute bottom-0 h-[2px] rounded-full bg-primary transition-all duration-300 ease-in-out"
                            style={{
                                left: underlineStyle.left,
                                width: underlineStyle.width,
                            }}
                        />

                        {/* Nav Links */}
                        {items.map((item) => (
                            <Link
                                key={item.link}
                                href={`#${item.link}`}
                                className={`relative text-base font-medium text-muted-foreground hover:text-primary transition-colors ${activeSection === item.link?"text-primary":""}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <ThemeToggle/>
                </div>
            </div>
        </nav>
    );
}
