import type React from 'react';

export type GlassIntensity = 'subtle' | 'light' | 'medium' | 'strong' | 'intense';

export interface GlassProps extends GlassStyleProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface GlassStyleProps {
  intensity?: GlassIntensity;
  blur?: number;
  saturation?: number;
  luminosity?: number;
  cornerRadius?: number;
  borderWidth?: number;
  borderOpacity?: number;
  shadowIntensity?: number;
  chromaticAberration?: number;
  displacementScale?: number;
  mousePosition?: { x: number; y: number };
}

export interface GlassEffect {
  background: string;
  backdropFilter: string;
  WebkitBackdropFilter?: string;
  border: string;
  borderRadius: string;
  boxShadow: string;
  transition?: string;
  transform?: string;
  willChange?: string;
  isolation?: React.CSSProperties['isolation'];
  filter?: string;
  [key: string]: any; // Allow CSS custom properties
}

export interface iOS26GlassTokens {
  blur: {
    subtle: 8;
    light: 12;
    medium: 20;
    strong: 28;
    intense: 40;
  };
  saturation: {
    subtle: 120;
    light: 140;
    medium: 180;
    strong: 220;
    intense: 260;
  };
  opacity: {
    subtle: 0.4;
    light: 0.6;
    medium: 0.8;
    strong: 0.9;
    intense: 0.95;
  };
  borderOpacity: {
    subtle: 0.1;
    light: 0.15;
    medium: 0.2;
    strong: 0.25;
    intense: 0.3;
  };
  shadowIntensity: {
    subtle: 0.05;
    light: 0.08;
    medium: 0.12;
    strong: 0.16;
    intense: 0.2;
  };
}
