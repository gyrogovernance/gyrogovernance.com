'use client';

import { useState, useRef } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Scenario } from './ScenarioSelector';
import { useTheme } from '../ThemeProvider';

interface SpiderChartProps {
  scenario: Scenario;
}

const displacementLabels: Record<string, string> = {
  'GTD': 'Governance Traceability Displacement',
  'IVD': 'Information Variety Displacement',
  'IAD': 'Inference Accountability Displacement',
  'IID': 'Intelligence Integrity Displacement',
};

export default function SpiderChart({ scenario }: SpiderChartProps) {
  const { actualTheme } = useTheme();
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  
  const isDark = actualTheme === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';
  const tickColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';

  const displacementData = [
    { domain: 'GTD', value: scenario.displacement.gtd * 100 },
    { domain: 'IVD', value: scenario.displacement.ivd * 100 },
    { domain: 'IAD', value: scenario.displacement.iad * 100 },
    { domain: 'IID', value: scenario.displacement.iid * 100 },
  ];

  const handleMouseEnter = (domain: string, e: React.MouseEvent) => {
    setHoveredDomain(domain);
    if (chartContainerRef.current) {
      const rect = chartContainerRef.current.getBoundingClientRect();
      setTooltipPosition({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (hoveredDomain && chartContainerRef.current) {
      const rect = chartContainerRef.current.getBoundingClientRect();
      setTooltipPosition({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      });
    }
  };

  interface CustomTickProps {
    payload?: { value: string };
    x?: string | number;
    y?: string | number;
    [key: string]: unknown;
  }

  const CustomTick = ({ payload, x, y }: CustomTickProps) => {
    if (!payload || x === undefined || y === undefined) return null;
    const domain = payload.value;
    const isHovered = hoveredDomain === domain;
    const textColor = isHovered ? '#ef4444' : (isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)');
    const xNum = typeof x === 'string' ? parseFloat(x) : x;
    const yNum = typeof y === 'string' ? parseFloat(y) : y;
    
    if (isNaN(xNum) || isNaN(yNum)) return null;
    
    return (
      <g>
        <text
          x={xNum}
          y={yNum}
          fill={textColor}
          fontSize={11}
          fontWeight={isHovered ? 'bold' : 'normal'}
          className="cursor-help"
          onMouseEnter={(e) => handleMouseEnter(domain, e)}
          onMouseLeave={() => setHoveredDomain(null)}
          onMouseMove={handleMouseMove}
        >
          {domain}
        </text>
      </g>
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <h4 className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500">
        Displacement Measures
      </h4>
      <div 
        className="flex-1 min-h-[250px] relative" 
        ref={chartContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredDomain(null)}
      >
        <ResponsiveContainer width="100%" height={250}>
          <RadarChart data={displacementData}>
            <PolarGrid stroke={gridColor} />
            <PolarAngleAxis 
              dataKey="domain" 
              tick={(props) => <CustomTick {...props} />}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 50]}
              tick={{ fill: tickColor, fontSize: 9 }}
            />
            <Radar
              dataKey="value"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.5}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
        {hoveredDomain && (
          <div
            className="absolute z-50 px-3 py-2 bg-surface-elevated border border-border rounded-lg shadow-lg text-xs text-foreground pointer-events-none whitespace-nowrap"
            style={{
              left: `${Math.min(tooltipPosition.x + 15, (chartContainerRef.current?.offsetWidth || 300) - 200)}px`,
              top: `${Math.max(tooltipPosition.y - 50, 10)}px`,
            }}
          >
            <div className="font-semibold text-foreground mb-1">{hoveredDomain}</div>
            <div className="text-foreground-secondary">{displacementLabels[hoveredDomain]}</div>
          </div>
        )}
      </div>
    </div>
  );
}
