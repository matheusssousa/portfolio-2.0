import { useEffect, useRef, useState } from "react";
import Header from "../../components/header";
import SectionInitial from "../../components/sections/initial";

type SectionsRefs = {
    [key: string]: React.RefObject<HTMLDivElement | null>;
};

export default function HomePage() {
    const sectionsRefs: SectionsRefs = {
        initial: useRef<HTMLDivElement>(null),
        about: useRef<HTMLDivElement>(null),
        projects: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
    };

    const [activeSection, setActiveSection] = useState("initial");
    const currentMap = Object.keys(sectionsRefs);

    function handleScrollTo(section: string) {
        const sectionRef = sectionsRefs[section];
        if (sectionRef && sectionRef.current) {
            window.scrollTo({ top: sectionRef.current.offsetTop, behavior: "smooth" });
            setActiveSection(section);
        }
    }

    function handleScroll(e: WheelEvent) {
        const deltaY = e.deltaY;
        const currentIndex = currentMap.indexOf(activeSection);

        if (deltaY > 0) {
            const nextIndex = Math.min(currentIndex + 1, currentMap.length - 1);
            setActiveSection(currentMap[nextIndex]);
        } else if (deltaY < 0) {
            const prevIndex = Math.max(currentIndex - 1, 0);
            setActiveSection(currentMap[prevIndex]);
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        handleScrollTo(activeSection);
    }, [activeSection]);

    return (
        <div className="page">
            <Header />
            <SectionInitial ref={sectionsRefs.initial} />
        </div>
    );
}
