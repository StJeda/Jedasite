import { useEffect, useState } from "react";

type Trail = {
    x: number;
    y: number;
    id: number;
};

const CustomCursor: React.FC = () => {
    const [trails, setTrails] = useState<Trail[]>([]);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
        const newTrail: Trail = { x: e.clientX, y: e.clientY, id: Date.now() };

        setTrails((prev) => [...prev, newTrail].slice(-20));
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            {trails.map((trail) => (
                <div
                key={trail.id}
                className="cursor-trail"
                style={{ top: trail.y, left: trail.x }}
                />
            ))}
        </>
    );
};

export default CustomCursor;
