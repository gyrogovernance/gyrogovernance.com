'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useTheme } from '../ThemeProvider';

interface ConvergenceDataPoint {
  step: number;
  scenario1: number;
  scenario2: number;
  scenario3: number;
  scenario4: number;
  scenario5: number;
  scenario6: number;
  scenario7: number;
}

// Simplified convergence data showing aperture convergence
// Using key points from the scenarios
const convergenceData: ConvergenceDataPoint[] = [
  { step: 0, scenario1: 0.15, scenario2: 0.15, scenario3: 0.15, scenario4: 0.12, scenario5: 0.10, scenario6: 0.0207, scenario7: 0.15 },
  { step: 20, scenario1: 0.10, scenario2: 0.08, scenario3: 0.06, scenario4: 0.09, scenario5: 0.08, scenario6: 0.05, scenario7: 0.09 },
  { step: 40, scenario1: 0.06, scenario2: 0.04, scenario3: 0.03, scenario4: 0.06, scenario5: 0.05, scenario6: 0.03, scenario7: 0.05 },
  { step: 60, scenario1: 0.04, scenario2: 0.025, scenario3: 0.021, scenario4: 0.04, scenario5: 0.03, scenario6: 0.022, scenario7: 0.03 },
  { step: 80, scenario1: 0.023, scenario2: 0.021, scenario3: 0.0208, scenario4: 0.025, scenario5: 0.022, scenario6: 0.0208, scenario7: 0.021 },
  { step: 100, scenario1: 0.0227, scenario2: 0.0208, scenario3: 0.0208, scenario4: 0.0194, scenario5: 0.0187, scenario6: 0.0193, scenario7: 0.0206 },
];

export default function ConvergenceChart() {
  const { actualTheme } = useTheme();
  const isDark = actualTheme === 'dark';
  const gridColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';
  const axisColor = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
  const tickColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';

  return (
    <div className="w-full my-8 bg-surface-elevated/60 backdrop-blur-sm rounded-xl border border-border/80">
      <div className="p-6">
      <h3 className="text-xl font-semibold text-foreground mb-4">
        Convergence to Equilibrium
      </h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={convergenceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="step"
            stroke={axisColor}
            tick={{ fill: tickColor, fontSize: 11 }}
            label={{ value: 'Time (steps)', position: 'insideBottom', offset: -5, fill: axisColor }}
          />
          <YAxis
            stroke={axisColor}
            domain={[0, 0.1]}
            label={{ value: 'Aperture A', angle: -90, position: 'insideLeft', offset: -5, fill: axisColor }}
            tick={{ fill: tickColor, fontSize: 11 }}
            tickFormatter={(v) => v.toFixed(3)}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0,0,0,0.8)', 
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px'
            }}
            formatter={(value: number) => value.toFixed(4)}
          />
          <Legend verticalAlign="bottom" />
          <ReferenceLine 
            y={0.0207} 
            stroke="#10b981" 
            strokeDasharray="5 5"
            label={{ value: 'A* ≈ 0.0207', position: 'right', fill: axisColor }}
          />
          <Line 
            type="monotone" 
            dataKey="scenario1" 
            stroke="#ef4444" 
            strokeWidth={2}
            name="Weak (κ=0.5)"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="scenario2" 
            stroke="#3b82f6" 
            strokeWidth={2}
            name="Canonical (κ=1.0)"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="scenario3" 
            stroke="#8b5cf6" 
            strokeWidth={2}
            name="Strong (κ=2.0)"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="scenario4" 
            stroke="#f59e0b" 
            strokeWidth={2}
            name="Rigid (κ=1.0)"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="scenario5" 
            stroke="#06b6d4" 
            strokeWidth={2}
            name="Asymmetric (κ=1.0)"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="scenario6" 
            stroke="#ec4899" 
            strokeWidth={2}
            name="Equilibrium (κ=1.0)"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="scenario7" 
            stroke="#84cc16" 
            strokeWidth={2}
            name="Null (κ=1.0)"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 space-y-3">
        <p className="text-sm text-foreground-tertiary">
          Seven coordination strategies starting from diverse initial conditions all converge toward aperture A* ≈ 0.0207, 
          a stable equilibrium balancing global coherence with local adaptation.
        </p>
        <div className="text-sm text-foreground-secondary">
          <p className="font-semibold text-foreground mb-2">The system requires four principles:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li><strong>Governance Traceability</strong>: Indirect outputs trace to Direct human sources</li>
            <li><strong>Information Variety</strong>: Multiple information types are maintained</li>
            <li><strong>Inference Accountability</strong>: Conclusions are owned by accountable agents</li>
            <li><strong>Intelligence Integrity</strong>: Reasoning remains coherent over time</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
