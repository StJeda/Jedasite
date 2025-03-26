import { FC, useState } from "react";
import TechnologyCard from "./ui/technology-card";
import Technology from "@/models/technology.enum";

const StackTechnologies: FC = () => {
    const [focusedCard, setFocusedCard] = useState<Technology | null>(null);

    return (
        <div>
            {/* <h1 style={{ color: "#fff" }}>Stack Techonolgies working</h1> */}
            <TechnologyCard
                header="UI/UX Design"
                description="We create intuitive and visually stunning interfaces. UX enhances interactions, while UI ensures aesthetics and conversions."
                technology={Technology.Design}
                isOnFocus={isFocused(Technology.Design)}
                onMouseEnter={() => setFocusedCard(Technology.Design)}
                onMouseLeave={() => setFocusedCard(null)}
            />
            <TechnologyCard
                header="Frontend"
                description="We make web apps fast, responsive and seamless cutting-edge tech ensures smooth performance and instant loading"
                technology={Technology.Frontend}
                isOnFocus={isFocused(Technology.Frontend)}
                onMouseEnter={() => setFocusedCard(Technology.Frontend)}
                onMouseLeave={() => setFocusedCard(null)}
            />
            <TechnologyCard
                header="Backend"
                description="We build secure and scalable server solutions. Reliable architecture and APIs keep your business running smoothly"
                technology={Technology.Backend}
                isOnFocus={isFocused(Technology.Backend)}
                onMouseEnter={() => setFocusedCard(Technology.Backend)}
                onMouseLeave={() => setFocusedCard(null)}
            />
        </div>
    )

    function isFocused(targetTechnology: Technology): boolean {
        return focusedCard === targetTechnology ? true : false;
    }
}

export default StackTechnologies;