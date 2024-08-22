"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

const positions = [
  { top: "20%", left: "30%" },
  { top: "15%", left: "70%" },
  { top: "60%", left: "70%" },
  { top: "80%", left: "40%" },
  { top: "50%", left: "20%" },
  { top: "70%", left: "60%" },
  { top: "30%", left: "80%" },
  { top: "40%", left: "90%" },
  { top: "60%", left: "10%" },
  { top: "80%", left: "30%" },
];

const circles = [
  { color: "#ff5733", size: "50px" },
  { color: "#33ff57", size: "60px" },
  { color: "#3357ff", size: "70px" },
  { color: "#ff33a1", size: "80px" },
  { color: "#ffcc33", size: "40px" },
  { color: "#33fff6", size: "90px" },
  { color: "#ff33b5", size: "50px" },
  { color: "#33ff99", size: "60px" },
  { color: "#cc33ff", size: "70px" },
  { color: "#33ffcc", size: "80px" },
];

export const FloatingCirclesBg = () => {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");

    gsap.fromTo(
      circles,
      { y: "0%" },
      {
        y: "100%",
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        stagger: {
          amount: 1,
          from: "start",
        },
      }
    );
  }, []);

  return (
    <div className="waves-container">
      <div className="circles-bg">
        {positions.map((position, index) => (
          <div
            key={index}
            className="circle"
            style={{
              width: circles[index % circles.length].size,
              height: circles[index % circles.length].size,
              backgroundColor: circles[index % circles.length].color,
              ...position,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
