"use client";

import React from "react";
import { GlassContainer, type GlassContainerProps } from "./GlassContainer";

type LiquidGlassCardProps = Omit<GlassContainerProps, "children" | "className"> & {
  children: React.ReactNode;
  className?: string;
  intensity?: GlassContainerProps["intensity"];
  blur?: number;
  saturation?: number;
  luminosity?: number;
  cornerRadius?: number;
  borderWidth?: number;
  borderOpacity?: number;
  shadowIntensity?: number;
  mouseTracking?: boolean;
  chromaticAberration?: number;
  displacementScale?: number;
  useAdvancedEffects?: boolean;
};

export function LiquidGlassCard({
  children,
  className = "",
  intensity = "subtle",
  blur = 18,
  saturation = 145,
  luminosity = 105,
  cornerRadius = 24,
  borderWidth = 0,
  borderOpacity = 0,
  shadowIntensity = 0.12,
  mouseTracking = false,
  useAdvancedEffects = false,
  chromaticAberration,
  displacementScale,
  ...props
}: LiquidGlassCardProps) {
  return (
    <GlassContainer
      intensity={intensity}
      blur={blur}
      saturation={saturation}
      luminosity={luminosity}
      cornerRadius={cornerRadius}
      borderWidth={borderWidth}
      borderOpacity={borderOpacity}
      shadowIntensity={shadowIntensity}
      mouseTracking={mouseTracking}
      useAdvancedEffects={useAdvancedEffects}
      chromaticAberration={chromaticAberration}
      displacementScale={displacementScale}
      className={className}
      {...props}
      style={{
        boxShadow: "var(--glass-card-shadow-lg)",
        ...props.style,
      }}
      disableBackground={true}
      disableBorder={true}
    >
      {children}
    </GlassContainer>
  );
}

