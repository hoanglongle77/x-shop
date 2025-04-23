"use client";
import React from "react";
import "./commonBG.css";

const CommonBG = ({ children }) => {
  return (
    <section className="relative w-full min-h-screen px-4 sm:px-6 py-12 lg:py-18 bg-muted text-foreground overflow-hidden neon-border-top-bottom">
      {/* Glow background effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-secondary opacity-20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-[250px] h-[250px] bg-accent opacity-20 rounded-full blur-[100px]" />
      </div>
      {children}
    </section>
  );
};

export default CommonBG;
