import React from 'react';
import clsx from 'clsx';
import { GlassContainer } from './GlassContainer';
import { GlassIntensity } from '../types/glass';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'none' | 'low' | 'medium' | 'high';
  intensity?: GlassIntensity;
  children: React.ReactNode;
  padding?: 'none' | 'small' | 'medium' | 'large';
  hover?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({
    elevation = 'medium',
    intensity = 'medium',
    children,
    padding = 'medium',
    hover = false,
    className,
    ...props
  }, ref) => {
    const elevationStyles = {
      none: {
        shadowIntensity: 0,
        blur: 12,
      },
      low: {
        shadowIntensity: 0.08,
        blur: 16,
      },
      medium: {
        shadowIntensity: 0.12,
        blur: 20,
      },
      high: {
        shadowIntensity: 0.2,
        blur: 28,
      },
    };

    const paddingClasses = {
      none: '',
      small: 'p-3',
      medium: 'p-4',
      large: 'p-6',
    };

    const currentElevation = elevationStyles[elevation];

    return (
      <GlassContainer
        ref={ref}
        intensity={intensity}
        blur={currentElevation.blur}
        saturation={180}
        luminosity={105}
        cornerRadius={16}
        borderWidth={0.5}
        borderOpacity={0.15}
        shadowIntensity={currentElevation.shadowIntensity}
        mouseTracking={hover}
        className={clsx(
          'glass-card',
          'transition-all',
          'duration-300',
          'ease-out',
          paddingClasses[padding],
          {
            'hover:scale-[1.02] hover:shadow-lg': hover,
          },
          className
        )}
        {...props}
      >
        {children}
      </GlassContainer>
    );
  }
);

GlassCard.displayName = 'GlassCard';