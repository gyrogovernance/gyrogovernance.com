'use client';

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useTheme } from '../ThemeProvider';

interface SITrajectoryChartProps {
  scenarioId: string;
}

interface DataPoint {
  time: number;
  SI_Econ: number;
  SI_Emp: number;
  SI_Edu: number;
  SI_Ecol: number;
}

const parseNumber = (s: string): number | undefined => {
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : undefined;
};

export default function SITrajectoryChart({ scenarioId }: SITrajectoryChartProps) {
  const { actualTheme } = useTheme();
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const isDark = actualTheme === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';
  const axisColor = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
  const tickColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/data/ggg/${scenarioId}.csv`);
        if (!response.ok) throw new Error('Failed to load data');
        
        const text = await response.text();
        const lines = text.split('\n').filter(line => line.trim());
        if (lines.length === 0) throw new Error('CSV file is empty');
        
        const headers = lines[0].split(',');
        
        const timeIndex = headers.indexOf('time (steps)');
        const econIndex = headers.indexOf('SI_Econ');
        const empIndex = headers.indexOf('SI_Emp');
        const eduIndex = headers.indexOf('SI_Edu');
        const ecolIndex = headers.indexOf('SI_Ecol');
        
        if ([timeIndex, econIndex, empIndex, eduIndex, ecolIndex].some(i => i === -1)) {
          throw new Error('Unexpected CSV format: required columns not found');
        }
        
        const parsed: DataPoint[] = [];
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',');
          if (values.length <= Math.max(timeIndex, econIndex, empIndex, eduIndex, ecolIndex)) {
            continue;
          }
          
          const time = parseNumber(values[timeIndex]);
          const SI_Econ = parseNumber(values[econIndex]);
          const SI_Emp = parseNumber(values[empIndex]);
          const SI_Edu = parseNumber(values[eduIndex]);
          const SI_Ecol = parseNumber(values[ecolIndex]);
          
          if (time == null || SI_Econ == null || SI_Emp == null || SI_Edu == null || SI_Ecol == null) {
            continue;
          }
          
          parsed.push({ time, SI_Econ, SI_Emp, SI_Edu, SI_Ecol });
        }
        
        if (parsed.length === 0) {
          throw new Error('No valid data rows found in CSV');
        }
        
        setData(parsed);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [scenarioId]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <h4 className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">
        SI Trajectory
      </h4>
      {loading && (
        <div className="h-64 flex items-center justify-center">
          <div className="text-foreground-secondary">Loading trajectory data...</div>
        </div>
      )}
      {error && (
        <div className="h-64 flex items-center justify-center">
          <div className="text-red-500">Error: {error}</div>
        </div>
      )}
      {!loading && !error && data.length > 0 && (
        <>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 50, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis 
                dataKey="time" 
                stroke={axisColor}
                tick={{ fill: tickColor, fontSize: 11 }}
                label={{ value: 'Time (steps)', position: 'insideBottom', offset: -12, fill: axisColor }}
              />
              <YAxis 
                stroke={axisColor}
                domain={[0, 100]}
                tick={{ fill: tickColor, fontSize: 11 }}
                width={50}
                label={{ value: 'SI Index', angle: -90, position: 'insideLeft', offset: 15, fill: axisColor }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(0,0,0,0.8)', 
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="SI_Econ" 
                stroke="#3b82f6" 
                strokeWidth={2}
                name="Economy"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="SI_Emp" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Employment"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="SI_Edu" 
                stroke="#f59e0b" 
                strokeWidth={2}
                name="Education"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="SI_Ecol" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                name="Ecology"
                dot={false}
              />
              <ReferenceLine 
                y={90} 
                stroke="#ef4444" 
                strokeDasharray="5 5"
                label={{ value: '90%', position: 'right' }}
              />
            </LineChart>
          </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
}
