import React, { useState, useEffect } from "react";

const MySlider: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Расчет высоты полосок (динамически изменяются при скролле)
  const baseHeight = 20; // Базовая высота полоски в пикселях
  const maxGrowth = 40;  // Максимальное увеличение/уменьшение высоты

  const heights = [
    baseHeight + maxGrowth * (1 - scrollProgress), // Верхняя полоска укорачивается
    baseHeight + maxGrowth * scrollProgress,       // Вторая полоска удлиняется
    baseHeight, 
    baseHeight, 
    baseHeight, 
    baseHeight,
  ];

  return (
    <div style={{
      position: "fixed",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    }}>
      {heights.map((height, index) => (
        <div
          key={index}
          style={{
            width: "2px",
            height: `${height}px`,
            backgroundColor: "#888",
            transition: "height 0.2s ease-out",
          }}
        />
      ))}
    </div>
  );
};

export default MySlider;
