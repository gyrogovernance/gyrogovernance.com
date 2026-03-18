'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';
import { useGlassEffect } from '../hooks/useGlassEffect';
import { useLiquidGlass } from '../hooks/useLiquidGlass';
import { GlassFilters } from './GlassFilters';
import { GlassProps, GlassIntensity } from '../types/glass';

export interface GlassContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: GlassIntensity;
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
  disableBackground?: boolean;
  disableBorder?: boolean;
  children: React.ReactNode;
}

export const GlassContainer = React.forwardRef<HTMLDivElement, GlassContainerProps>(
  ({
    intensity = 'medium',
    blur = 20,
    saturation = 180,
    luminosity = 100,
    cornerRadius = 24,
    borderWidth = 1,
    borderOpacity = 0.2,
    shadowIntensity = 0.15,
    mouseTracking = true,
    chromaticAberration = 0.02,
    displacementScale = 10,
    useAdvancedEffects = true,
    disableBackground = false,
    disableBorder = false,
    className,
    children,
    style,
    ...props
  }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
    const [uniqueId] = useState(() => `glass-${Math.random().toString(36).substr(2, 9)}`);
    
    // Check for reduced motion preference
    const prefersReducedMotion = typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Use advanced liquid glass effect if enabled
    const liquidGlass = useLiquidGlass({
      intensity,
      blur,
      saturation,
      luminosity,
      cornerRadius,
      borderWidth,
      borderOpacity,
      shadowIntensity,
      chromaticAberration: prefersReducedMotion ? 0 : chromaticAberration,
      displacementScale: prefersReducedMotion ? 0 : displacementScale,
      mousePosition: (mouseTracking && !prefersReducedMotion) ? mousePosition : undefined,
    });
    
    // Fallback to basic glass effect
    const basicGlass = useGlassEffect({
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
      mousePosition: mouseTracking ? mousePosition : undefined,
    });

    const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
      if (!mouseTracking || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      
      const clampedX = Math.max(0, Math.min(1, x));
      const clampedY = Math.max(0, Math.min(1, y));
      
      setMousePosition({ x: clampedX, y: clampedY });
      
      if (useAdvancedEffects) {
        liquidGlass.updateMousePosition(clampedX, clampedY);
      }
    }, [mouseTracking, useAdvancedEffects, liquidGlass.updateMousePosition]);

    const handleMouseLeave = useCallback(() => {
      if (mouseTracking) {
        setMousePosition({ x: 0.5, y: 0.5 });
        if (useAdvancedEffects) {
          liquidGlass.updateMousePosition(0.5, 0.5);
        }
      }
    }, [mouseTracking, useAdvancedEffects, liquidGlass.updateMousePosition]);

    // Merge refs safely
    useEffect(() => {
      if (ref && containerRef.current) {
        if (typeof ref === 'function') {
          ref(containerRef.current);
        } else if ('current' in ref) {
          ref.current = containerRef.current;
        }
      }
    }, [ref]);

    const glassStyle = useAdvancedEffects ? liquidGlass.style : basicGlass;
    const filterStyle = (() => {
      const mergedStyle = useAdvancedEffects
        ? { ...glassStyle, filter: liquidGlass.filters }
        : { ...glassStyle };

      if (disableBackground) {
        delete mergedStyle.background;
      }
      if (disableBorder) {
        delete mergedStyle.border;
      }

      return mergedStyle;
    })();

    return (
      <>
        {useAdvancedEffects && (
          <>
            <GlassFilters 
              id={uniqueId}
              intensity={intensity === 'subtle' ? 0.5 : intensity === 'light' ? 0.7 : intensity === 'medium' ? 1 : intensity === 'strong' ? 1.3 : 1.5}
              thickness={displacementScale}
              dispersion={chromaticAberration}
            />
            <canvas
              ref={(canvas) => {
                if (canvas && liquidGlass.causticCanvasRef.current !== canvas) {
                  liquidGlass.causticCanvasRef.current = canvas;
                  // Set canvas size based on device pixel ratio
                  const rect = canvas.getBoundingClientRect();
                  const dpr = window.devicePixelRatio || 1;
                  canvas.width = rect.width * dpr;
                  canvas.height = rect.height * dpr;
                  const ctx = canvas.getContext('2d');
                  if (ctx) {
                    ctx.scale(dpr, dpr);
                  }
                }
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                opacity: 0.3,
                mixBlendMode: 'screen',
              }}
            />
          </>
        )}
        <div
          ref={containerRef}
          className={clsx('glass-container', className)}
          style={{
            ...filterStyle,
            filter: useAdvancedEffects ? `url(#${uniqueId}-liquid-glass) ${filterStyle.filter || ''}` : filterStyle.filter,
            ...style,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {children}
        </div>
      </>
    );
  }
);

GlassContainer.displayName = 'GlassContainer';
