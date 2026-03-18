import React from 'react';

export interface GlassFiltersProps {
  id: string;
  intensity?: number;
  thickness?: number;
  dispersion?: number;
}

/**
 * SVG filters for realistic glass distortion effects
 * Matches iOS 26's liquid glass rendering
 */
export const GlassFilters: React.FC<GlassFiltersProps> = ({
  id,
  intensity = 1,
  thickness = 10,
  dispersion = 0.02,
}) => {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        {/* Main liquid glass filter */}
        <filter id={`${id}-liquid-glass`} x="-50%" y="-50%" width="200%" height="200%">
          {/* Organic glass distortion using turbulence */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency={0.015 * intensity}
            numOctaves="3"
            seed="2"
            result="turbulence"
          />
          
          {/* Convert turbulence to displacement */}
          <feColorMatrix
            in="turbulence"
            type="matrix"
            values="0 0 0 0 0.5
                    0 0 0 0 0.5
                    0 0 0 0 0.5
                    0 0 0 1 0"
            result="displacement"
          />
          
          {/* Apply displacement for refraction effect */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="displacement"
            scale={thickness}
            xChannelSelector="R"
            yChannelSelector="G"
            result="refracted"
          />
          
          {/* Chromatic aberration - separate RGB channels */}
          <feOffset in="refracted" dx={dispersion * -2} dy={0} result="red" />
          <feOffset in="refracted" dx={0} dy={0} result="green" />
          <feOffset in="refracted" dx={dispersion * 2} dy={0} result="blue" />
          
          {/* Recombine channels */}
          <feComponentTransfer in="red" result="red-channel">
            <feFuncR type="identity" />
            <feFuncG type="discrete" values="0" />
            <feFuncB type="discrete" values="0" />
          </feComponentTransfer>
          
          <feComponentTransfer in="green" result="green-channel">
            <feFuncR type="discrete" values="0" />
            <feFuncG type="identity" />
            <feFuncB type="discrete" values="0" />
          </feComponentTransfer>
          
          <feComponentTransfer in="blue" result="blue-channel">
            <feFuncR type="discrete" values="0" />
            <feFuncG type="discrete" values="0" />
            <feFuncB type="identity" />
          </feComponentTransfer>
          
          {/* Merge channels back together */}
          <feMerge result="chromatic">
            <feMergeNode in="red-channel" />
            <feMergeNode in="green-channel" />
            <feMergeNode in="blue-channel" />
          </feMerge>
          
          {/* Add subtle blur for depth */}
          <feGaussianBlur in="chromatic" stdDeviation={0.5} />
        </filter>
        
        {/* Fresnel rim lighting filter */}
        <filter id={`${id}-fresnel`}>
          <feMorphology operator="dilate" radius="1" result="dilated" />
          <feGaussianBlur in="dilated" stdDeviation="3" result="blurred" />
          <feComposite operator="out" in="blurred" in2="SourceGraphic" result="rim" />
          <feColorMatrix
            in="rim"
            type="matrix"
            values="0 0 0 0 1
                    0 0 0 0 1
                    0 0 0 0 1
                    0 0 0 0.8 0"
          />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
        
        {/* Caustic light pattern generator */}
        <filter id={`${id}-caustics`}>
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="1"
            seed="5"
            result="caustic-noise"
          />
          <feColorMatrix
            in="caustic-noise"
            type="saturate"
            values="0"
            result="gray-noise"
          />
          <feComponentTransfer in="gray-noise" result="shaped-noise">
            <feFuncA type="discrete" values="0 0 0 0.3 0.6 1 0.6 0.3 0 0" />
          </feComponentTransfer>
          <feGaussianBlur in="shaped-noise" stdDeviation="2" result="soft-caustics" />
          <feComposite operator="screen" in="soft-caustics" in2="SourceGraphic" />
        </filter>
        
        {/* Anisotropic blur for directional glass texture */}
        <filter id={`${id}-anisotropic`}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="3,0" result="blur-x" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="0,3" result="blur-y" />
          <feBlend mode="multiply" in="blur-x" in2="blur-y" />
        </filter>
      </defs>
    </svg>
  );
};