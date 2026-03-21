'use client';

import { useMemo, useCallback, useState, useEffect } from 'react';
import { GlassStyleProps, GlassEffect, iOS26GlassTokens } from '../types/glass';
import { 
  calculateFresnelReflectance,
  getAnisotropicBlur,
  calculateSurfaceNormal
} from '../utils/glassPhysics';

const tokens: iOS26GlassTokens = {
  blur: {
    subtle: 8,
    light: 12,
    medium: 20,
    strong: 28,
    intense: 40,
  },
  saturation: {
    subtle: 120,
    light: 140,
    medium: 180,
    strong: 220,
    intense: 260,
  },
  opacity: {
    subtle: 0.4,
    light: 0.6,
    medium: 0.8,
    strong: 0.9,
    intense: 0.95,
  },
  borderOpacity: {
    subtle: 0.1,
    light: 0.15,
    medium: 0.2,
    strong: 0.25,
    intense: 0.3,
  },
  shadowIntensity: {
    subtle: 0.05,
    light: 0.08,
    medium: 0.12,
    strong: 0.16,
    intense: 0.2,
  },
};

export const useGlassEffect = ({
  intensity = 'medium',
  blur,
  saturation,
  luminosity = 100,
  cornerRadius = 12,
  borderWidth = 0.5,
  borderOpacity,
  shadowIntensity,
  chromaticAberration = 0.02,
  displacementScale = 10,
  mousePosition,
}: GlassStyleProps): GlassEffect => {
  // Calculate view angle from mouse position
  const [viewAngle, setViewAngle] = useState(0);
  
  useEffect(() => {
    if (mousePosition) {
      const dx = mousePosition.x - 0.5;
      const dy = mousePosition.y - 0.5;
      setViewAngle(Math.atan2(dy, dx));
    }
  }, [mousePosition]);

  const glassStyle = useMemo(() => {
    const blurValue = blur ?? tokens.blur[intensity];
    const saturationValue = saturation ?? tokens.saturation[intensity];
    const opacityValue = tokens.opacity[intensity];
    const borderOpacityValue = borderOpacity ?? tokens.borderOpacity[intensity];
    const shadowIntensityValue = shadowIntensity ?? tokens.shadowIntensity[intensity];

    // Calculate Fresnel effect
    const fresnelReflectance = calculateFresnelReflectance(Math.abs(viewAngle), 1.0, 1.5);
    
    // Calculate anisotropic blur
    const { x: blurX, y: blurY } = getAnisotropicBlur(viewAngle, blurValue, 0.3);
    
    // Calculate surface normal
    const surfaceNormal = mousePosition 
      ? calculateSurfaceNormal(mousePosition.x * 100, mousePosition.y * 100, 100, 100, 0.2)
      : { x: 0, y: 0, z: 1 };

    // Calculate dynamic lighting based on mouse position
    let lightX = 50;
    let lightY = 50;
    
    if (mousePosition) {
      lightX = mousePosition.x * 100;
      lightY = mousePosition.y * 100;
    }

    // Enhanced gradient layers for liquid glass effect
    const gradients = [
      // Fresnel rim lighting
      `radial-gradient(ellipse at ${lightX}% ${lightY}%, 
        rgba(255, 255, 255, ${fresnelReflectance * 0.8}) 0%, 
        rgba(255, 255, 255, ${fresnelReflectance * 0.3}) 20%,
        transparent 50%)`,
      
      // Specular highlight with physics-based falloff
      `radial-gradient(circle at ${lightX}% ${lightY}%, 
        rgba(255, 255, 255, ${(1 - fresnelReflectance) * 0.9}) 0%, 
        rgba(255, 255, 255, ${(1 - fresnelReflectance) * 0.4}) 15%,
        transparent 30%)`,
      
      // Base glass material with subtle color shift
      `linear-gradient(${viewAngle}rad, 
        rgba(245, 250, 255, ${opacityValue * 0.1}) 0%, 
        rgba(240, 248, 255, ${opacityValue * 0.15}) 30%,
        rgba(235, 245, 255, ${opacityValue * 0.1}) 60%,
        rgba(230, 240, 250, ${opacityValue * 0.05}) 100%)`,
      
      // Iridescent layer for thin-film interference
      `conic-gradient(from ${viewAngle}rad at ${lightX}% ${lightY}%, 
        rgba(255, 230, 230, 0.03), 
        rgba(230, 255, 230, 0.03), 
        rgba(230, 230, 255, 0.03), 
        rgba(255, 255, 230, 0.03),
        rgba(255, 230, 255, 0.03),
        rgba(230, 255, 255, 0.03),
        rgba(255, 230, 230, 0.03))`,
      
      // Caustic hints
      `radial-gradient(ellipse ${150 + fresnelReflectance * 100}% ${150 + fresnelReflectance * 100}% at ${lightX}% ${lightY}%, 
        transparent 0%,
        rgba(255, 255, 255, 0.05) 40%,
        rgba(255, 255, 255, 0.1) 45%,
        rgba(255, 255, 255, 0.05) 50%,
        transparent 60%)`
    ];

    // Physics-based shadows with caustic effects
    const shadows = [
      // Main shadow with distance-based falloff
      `0 ${6 + displacementScale * 0.45}px ${16 + displacementScale * 0.8}px rgba(0, 0, 0, ${Math.min(0.55, shadowIntensityValue * 0.7)})`,
      `0 ${2 + displacementScale * 0.2}px ${6 + displacementScale * 0.6}px rgba(0, 0, 0, ${Math.min(0.35, shadowIntensityValue * 0.45)})`,
      `0 0 16px rgba(0, 0, 0, 0.05)`,
      
      // Fresnel-modulated edge highlights
      `inset 0 1px 0 rgba(255, 255, 255, ${(borderOpacityValue + fresnelReflectance) * 0.8})`,
      `inset 0 -1px 0 rgba(0, 0, 0, ${borderOpacityValue * 0.3})`,
      `inset 1px 0 0 rgba(255, 255, 255, ${borderOpacityValue + fresnelReflectance * 0.3})`,
      `inset -1px 0 0 rgba(255, 255, 255, ${borderOpacityValue + fresnelReflectance * 0.3})`,
      
      // Caustic light spots
      `0 0 ${20 + displacementScale}px rgba(255, 255, 255, ${fresnelReflectance * 0.1})`,
      `0 0 0 0.3px rgba(0, 0, 0, 0.3)`,
    ];

    // Enhanced backdrop filter with chromatic aberration simulation
    const filters = [
      `blur(${blurX}px)`,
      `saturate(${saturationValue + fresnelReflectance * 20}%)`,
      `brightness(${luminosity + fresnelReflectance * 5}%)`,
      `contrast(${100 + fresnelReflectance * 10}%)`,
      chromaticAberration > 0 ? `hue-rotate(${chromaticAberration * Math.sin(viewAngle)}deg)` : ''
    ].filter(Boolean).join(' ');

    return {
      background: gradients.join(', '),
      backdropFilter: filters,
      WebkitBackdropFilter: filters,
      border: `${borderWidth}px solid rgba(255, 255, 255, ${borderOpacityValue + fresnelReflectance * 0.3})`,
      borderRadius: `${cornerRadius}px`,
      boxShadow: shadows.join(', '),
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1), backdrop-filter 0.2s ease-out',
      transform: 'translateZ(0)',
      willChange: 'transform, filter, background',
      '--glass-thickness': `${displacementScale}px`,
      '--glass-ior': '1.5',
      '--glass-fresnel': fresnelReflectance.toString(),
      '--surface-normal-x': surfaceNormal.x.toString(),
      '--surface-normal-y': surfaceNormal.y.toString(),
      '--surface-normal-z': surfaceNormal.z.toString(),
    } as GlassEffect;
  }, [
    intensity,
    blur,
    saturation,
    luminosity,
    cornerRadius,
    borderWidth,
    borderOpacity,
    shadowIntensity,
    chromaticAberration,
    displacementScale,
    mousePosition,
    viewAngle,
  ]);

  return glassStyle;
};
