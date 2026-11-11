'use client';

import Image from 'next/image';
import { useTheme } from '@/components/ThemeProvider';

export default function AIROfficeWelcomeImage() {
  const { actualTheme } = useTheme();
  const isDark = actualTheme === 'dark';

  return (
    <Image
      src={isDark ? '/assets/AIR_Office_welcome_dark.webp' : '/assets/AIR_Office_welcome_light.webp'}
      alt="AIR Office welcome screen"
      width={1024}
      height={576}
      className="w-full max-w-2xl h-auto object-contain rounded-2xl"
      sizes="(max-width: 768px) 100vw, 672px"
      loading="lazy"
    />
  );
}
