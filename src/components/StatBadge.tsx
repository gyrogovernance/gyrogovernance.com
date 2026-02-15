'use client';
import { useEffect, useState, useRef } from 'react';

export default function StatBadge({ 
  value, 
  label, 
  color, 
  delay 
}: { 
  value: number; 
  label: string; 
  color: string; 
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            setTimeout(() => {
              const duration = 1500;
              const steps = 60;
              const increment = value / steps;
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                  setCount(value);
                  clearInterval(timer);
                } else {
                  setCount(Math.floor(current));
                }
              }, duration / steps);

              return () => clearInterval(timer);
            }, delay);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, delay, hasAnimated]);

  return (
    <div ref={elementRef} className="flex flex-col items-center group cursor-default">
      <div 
        className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent tabular-nums group-hover:scale-110 transition-transform duration-300`}
        style={{
          filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.15))'
        }}
      >
        {count}+
      </div>
      <span className="text-[9px] font-bold uppercase tracking-wider text-foreground-secondary mt-1 group-hover:text-foreground transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}