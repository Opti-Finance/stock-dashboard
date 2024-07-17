import React, { useState, createContext, useContext } from "react";
import type { SectionName } from "../lib/types/section"

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

    return (
    <ActiveSectionContext.Provider value={{activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick}}>
        {children}
    </ActiveSectionContext.Provider>
    )
}

export const useActiveSection = () => {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error("Section context must be used in provider broski");
    }
    return context
}
