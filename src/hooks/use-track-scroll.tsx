"use client";

import { useEffect } from "react";
import {useActiveSection} from "@/src/providers/ActiveSectionContext";

const sections = [
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "certifications",
    "contact",
];

const useTrackScroll =()=> {
    const { setActiveSection } = useActiveSection();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // If near top (hero section), clear hash
            if (scrollY < 200) {
                if (window.location.hash) {
                    setActiveSection('');
                    history.replaceState(null, "", window.location.pathname);
                }
                return;
            }

            let closest = null;
            let minDistance = Infinity;

            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const dist = Math.abs(rect.top);

                    if (dist < minDistance) {
                        minDistance = dist;
                        closest = id;
                    }
                }
            }

            setActiveSection(closest);
            history.replaceState(null, "", closest ? `#${closest}` : window.location.pathname);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [setActiveSection]);

    return null;
}
export default useTrackScroll;