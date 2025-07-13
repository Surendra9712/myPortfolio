"use client";
import { createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext<{
    activeSection: string|null;
    setActiveSection: (id: string|null) => void;
}>({
    activeSection: null,
    setActiveSection: () => {},
});

export const ActiveSectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeSection, setActiveSection] = useState<string|null>(null);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ActiveSectionContext.Provider>
    );
};

export const useActiveSection = () => useContext(ActiveSectionContext);
