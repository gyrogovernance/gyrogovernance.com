"use client";

import React from "react";
import { GlassContainer } from "./GlassContainer";

export function LiquidGlassNav({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <GlassContainer
      className={`rounded-[2rem] ${className}`}
      intensity="subtle"
      blur={22}
      saturation={130}
      luminosity={105}
      cornerRadius={32}
      borderWidth={0.5}
      borderOpacity={0.06}
      shadowIntensity={0.06}
      mouseTracking={false}
      useAdvancedEffects={false}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid var(--glass-nav-border)",
        boxShadow: "0 1px 2px rgba(255, 255, 255, 0.05)",
      }}
    >
      {children}
    </GlassContainer>
  );
}

export const ExperimentalLiquidGlassNav = LiquidGlassNav;

