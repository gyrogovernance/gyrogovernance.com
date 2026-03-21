'use client';

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { 
  calculateFresnelReflectance, 
  calculateSurfaceNormal,
  getAnisotropicBlur,
  generateCausticPoints
} from '../utils/glassPhysics';
import { GlassStyleProps } from '../types/glass';

interface LiquidGlassEffect {
  style: React.CSSProperties;
  filters: string;
  causticCanvasRef: React.RefObject<HTMLCanvasElement | null>;
  updateMousePosition: (x: number, y: number) => void;
}

/**
 * Advanced liquid glass effect hook that simulates real glass physics
 * Matches iOS 26's implementation with refraction, dispersion, and caustics
 */
export const useLiquidGlass = (props: GlassStyleProps): LiquidGlassEffect => {
  const {
    intensity = 'medium',
    blur = 20,
    saturation = 180,
    luminosity = 100,
    cornerRadius = 24,
    borderWidth = 1,
    borderOpacity = 0.3,
    shadowIntensity = 0.2,
    chromaticAberration = 0.02,
    displacementScale = 10,
  } = props;
  
  const causticCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [viewAngle, setViewAngle] = useState(0);
  
  // Calculate glass thickness based on intensity
  const thickness = useMemo(() => {
    const thicknessMap = {
      subtle: 5,
      light: 10,
      medium: 15,
      strong: 20,
      intense: 25,
    };
    return thicknessMap[intensity];
  }, [intensity]);
  
  // Update mouse position and calculate view angle
  const updateMousePosition = useCallback((x: number, y: number) => {
    setMousePosition({ x, y });
    
    // Calculate viewing angle based on mouse position
    const centerX = 0.5;
    const centerY = 0.5;
    const dx = x - centerX;
    const dy = y - centerY;
    const angle = Math.atan2(dy, dx);
    setViewAngle(angle);
  }, []);
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Render caustic patterns on canvas
  useEffect(() => {
    const canvas = causticCanvasRef.current;
    if (!canvas || prefersReducedMotion) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let isActive = true;
    
    const renderCaustics = (time: number) => {
      if (!isActive) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dynamic light angle based on time and mouse
      const lightAngle = viewAngle + time * 0.0001;
      
      // Generate caustic points
      const points = generateCausticPoints(
        canvas.width,
        canvas.height,
        lightAngle,
        30
      );
      
      // Create gradient for each caustic
      points.forEach(point => {
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, 40
        );
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${point.intensity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${point.intensity * 0.3})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(point.x - 40, point.y - 40, 80, 80);
      });
      
      // Apply blur for soft caustics
      ctx.filter = 'blur(8px)';
      ctx.globalCompositeOperation = 'screen';
      
      if (isActive) {
        animationFrameRef.current = requestAnimationFrame(() => renderCaustics(time + 16));
      }
    };
    
    renderCaustics(0);
    
    return () => {
      isActive = false;
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      // Clear canvas on unmount
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, [viewAngle, prefersReducedMotion]);
  
  // Calculate Fresnel effect
  const fresnelReflectance = useMemo(() => {
    const angle = Math.abs(viewAngle);
    return calculateFresnelReflectance(angle, 1.0, 1.5);
  }, [viewAngle]);
  
  // Calculate anisotropic blur
  const { x: blurX, y: blurY } = useMemo(() => {
    return getAnisotropicBlur(viewAngle, blur, 0.3);
  }, [viewAngle, blur]);
  
  // Calculate surface normal and refraction
  const surfaceNormal = useMemo(() => {
    return calculateSurfaceNormal(
      mousePosition.x * 100,
      mousePosition.y * 100,
      100,
      100,
      0.2
    );
  }, [mousePosition]);
  
  // Generate the complete glass style
  const glassStyle = useMemo(() => {
    // Base glass color with Fresnel
    const baseOpacity = 0.05 + fresnelReflectance * 0.3;
    
    // Multiple gradient layers for depth
    const gradients = [
      // Fresnel rim lighting
      `radial-gradient(ellipse at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
        rgba(255, 255, 255, ${fresnelReflectance}) 0%, 
        transparent 50%)`,
      
      // Specular highlight
      `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
        rgba(255, 255, 255, ${0.9 - fresnelReflectance}) 0%, 
        transparent 30%)`,
      
      // Base glass tint
      `linear-gradient(135deg, 
        rgba(240, 248, 255, ${baseOpacity}) 0%, 
        rgba(230, 240, 250, ${baseOpacity * 0.8}) 50%, 
        rgba(220, 230, 240, ${baseOpacity * 0.6}) 100%)`,
      
      // Iridescent layer
      `conic-gradient(from ${viewAngle}rad at 50% 50%, 
        rgba(255, 200, 200, 0.05), 
        rgba(200, 255, 200, 0.05), 
        rgba(200, 200, 255, 0.05), 
        rgba(255, 200, 200, 0.05))`,
    ];
    
    // Complex shadow with caustic hints
    const shadows = [
      // Outer shadow
      `0 ${thickness * 1.1}px ${thickness * 2.4}px rgba(0, 0, 0, ${shadowIntensity * 0.35})`,
      `0 0 ${thickness * 2.2}px rgba(0, 0, 0, ${shadowIntensity * 0.12})`,
      // Inner shadow for depth
      `inset 0 1px 0 rgba(255, 255, 255, ${fresnelReflectance * 0.5})`,
      `inset 0 -1px 0 rgba(0, 0, 0, ${shadowIntensity * 0.2})`,
      // Edge highlights
      `inset 1px 0 0 rgba(255, 255, 255, ${borderOpacity})`,
      `inset -1px 0 0 rgba(255, 255, 255, ${borderOpacity * 0.5})`,
      `0 0 0 0.3px rgba(0, 0, 0, 0.3)`,
    ];
    
    // CSS custom properties for dynamic control
    const cssVars = {
      '--glass-thickness': `${thickness}px`,
      '--glass-ior': '1.5',
      '--glass-dispersion': chromaticAberration.toString(),
      '--fresnel-intensity': fresnelReflectance.toString(),
      '--surface-normal-x': surfaceNormal.x.toString(),
      '--surface-normal-y': surfaceNormal.y.toString(),
      '--surface-normal-z': surfaceNormal.z.toString(),
    } as React.CSSProperties;
    
    return {
      ...cssVars,
      position: 'relative' as const,
      background: gradients.join(', '),
      backdropFilter: `
        blur(${blurX}px) 
        saturate(${saturation}%) 
        brightness(${luminosity}%)
        contrast(${100 + fresnelReflectance * 10}%)
      `.trim(),
      WebkitBackdropFilter: `
        blur(${blurX}px) 
        saturate(${saturation}%) 
        brightness(${luminosity}%)
        contrast(${100 + fresnelReflectance * 10}%)
      `.trim(),
      border: `${borderWidth}px solid rgba(255, 255, 255, ${borderOpacity + fresnelReflectance * 0.2})`,
      borderRadius: `${cornerRadius}px`,
      boxShadow: shadows.join(', '),
      transform: 'translateZ(0)', // GPU acceleration
      willChange: 'transform, filter',
      transition: `
        all 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        backdrop-filter 0.2s ease-out
      `.trim(),
      mixBlendMode: 'normal' as const,
    };
  }, [
    mousePosition,
    viewAngle,
    fresnelReflectance,
    surfaceNormal,
    thickness,
    blur,
    blurX,
    saturation,
    luminosity,
    cornerRadius,
    borderWidth,
    borderOpacity,
    shadowIntensity,
    chromaticAberration,
  ]);
  
  // Combine SVG filters
  const filters = useMemo(() => {
    const filterList = [
      `url(#liquid-glass-${intensity})`,
      fresnelReflectance > 0.3 ? `url(#fresnel-${intensity})` : '',
      'url(#caustics)',
    ].filter(Boolean);
    
    return filterList.join(' ');
  }, [intensity, fresnelReflectance]);
  
  return {
    style: glassStyle,
    filters,
    causticCanvasRef,
    updateMousePosition,
  };
};