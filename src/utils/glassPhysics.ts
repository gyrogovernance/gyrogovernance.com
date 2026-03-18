/**
 * Glass physics calculations for realistic iOS 26 liquid glass effect
 */

export interface GlassPhysicsOptions {
  viewAngle: number; // Angle in radians
  thickness: number; // Glass thickness in pixels
  ior: number; // Index of refraction (1.5 for glass)
  wavelength: 'r' | 'g' | 'b'; // For chromatic dispersion
}

// Fresnel equations for realistic reflection
export const calculateFresnelReflectance = (
  incidentAngle: number,
  ior1: number = 1.0, // Air
  ior2: number = 1.5  // Glass
): number => {
  const sinTheta1 = Math.sin(incidentAngle);
  const cosTheta1 = Math.cos(incidentAngle);
  
  // Snell's law
  const sinTheta2 = (ior1 / ior2) * sinTheta1;
  
  if (sinTheta2 > 1) {
    // Total internal reflection
    return 1.0;
  }
  
  const cosTheta2 = Math.sqrt(1 - sinTheta2 * sinTheta2);
  
  // Fresnel equations
  const rs = Math.pow((ior1 * cosTheta1 - ior2 * cosTheta2) / 
                      (ior1 * cosTheta1 + ior2 * cosTheta2), 2);
  const rp = Math.pow((ior1 * cosTheta2 - ior2 * cosTheta1) / 
                      (ior1 * cosTheta2 + ior2 * cosTheta1), 2);
  
  // Average for unpolarized light
  return (rs + rp) / 2;
};

// Chromatic dispersion - different IOR for each wavelength
export const getWavelengthIOR = (baseIOR: number, wavelength: 'r' | 'g' | 'b'): number => {
  const dispersion = 0.02; // Abbe number approximation
  
  switch (wavelength) {
    case 'r': return baseIOR - dispersion;
    case 'g': return baseIOR;
    case 'b': return baseIOR + dispersion;
  }
};

// Calculate refraction offset for realistic distortion
export const calculateRefractionOffset = (
  x: number,
  y: number,
  thickness: number,
  ior: number,
  normal: { x: number, y: number }
): { x: number, y: number } => {
  const incidentAngle = Math.atan2(y, x);
  const refractionAngle = Math.asin(Math.sin(incidentAngle) / ior);
  
  const offset = thickness * Math.tan(refractionAngle - incidentAngle);
  
  return {
    x: offset * normal.x,
    y: offset * normal.y
  };
};

// Generate caustic pattern coordinates
export const generateCausticPoints = (
  width: number,
  height: number,
  lightAngle: number,
  count: number = 50
): Array<{ x: number, y: number, intensity: number }> => {
  const points: Array<{ x: number, y: number, intensity: number }> = [];
  
  for (let i = 0; i < count; i++) {
    const t = i / count;
    const phase = t * Math.PI * 2;
    
    // Cardioid caustic pattern
    const r = width * 0.3 * (1 - Math.cos(phase));
    const x = width / 2 + r * Math.cos(phase + lightAngle);
    const y = height / 2 + r * Math.sin(phase + lightAngle);
    
    // Intensity varies with focus
    const intensity = 0.3 + 0.7 * Math.pow(Math.sin(phase * 3), 2);
    
    points.push({ x, y, intensity });
  }
  
  return points;
};

// Calculate anisotropic blur for frosted glass effect
export const getAnisotropicBlur = (
  angle: number,
  baseBlur: number,
  anisotropy: number = 0.5
): { x: number, y: number } => {
  const blurX = baseBlur * (1 + anisotropy * Math.abs(Math.cos(angle)));
  const blurY = baseBlur * (1 + anisotropy * Math.abs(Math.sin(angle)));
  
  return { x: blurX, y: blurY };
};

// Surface normal calculation for curved glass
export const calculateSurfaceNormal = (
  x: number,
  y: number,
  width: number,
  height: number,
  curvature: number = 0.1
): { x: number, y: number, z: number } => {
  // Normalized coordinates
  const nx = (x / width - 0.5) * 2;
  const ny = (y / height - 0.5) * 2;
  
  // Spherical surface approximation
  const z = Math.sqrt(Math.max(0, 1 - nx * nx * curvature - ny * ny * curvature));
  
  // Normal vector
  const length = Math.sqrt(nx * nx + ny * ny + z * z);
  
  return {
    x: nx / length,
    y: ny / length,
    z: z / length
  };
};

// Iridescence calculation for thin film interference
export const calculateIridescence = (
  thickness: number,
  angle: number,
  wavelength: number
): number => {
  const n = 1.5; // Glass IOR
  const pathDifference = 2 * n * thickness * Math.cos(angle);
  const phase = (2 * Math.PI * pathDifference) / wavelength;
  
  // Constructive/destructive interference
  return Math.pow(Math.cos(phase), 2);
};