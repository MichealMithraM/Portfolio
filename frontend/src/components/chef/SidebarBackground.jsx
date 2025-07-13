// src/components/SidebarBackground.jsx
import React from 'react';
import './SidebarBackground.css';

const SidebarBackground = () => {
  const circles = Array.from({ length: 15 });

  return (
    <div className="sidebar-background">
      {circles.map((_, index) => {
        const size = Math.random() * 50 + 30; // 30px to 80px
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;
        const isGold = Math.random() > 0.5;
        const bottom = Math.random() * 60; // 0% to 60% from bottom

        const style = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          // bottom: `-${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          bottom: `${bottom}%`,

        };

        return (
          <span
            key={index}
            className={`circle ${isGold ? 'gold' : 'silver'}`}
            style={style}
          ></span>
        );
      })}
    </div>
  );
};

export default SidebarBackground;
