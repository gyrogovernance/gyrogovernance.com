'use client';

import { useState } from 'react';
import ScenarioSelector, { scenarios } from './ScenarioSelector';
import SpiderChart from './SpiderChart';
import SITrajectoryChart from './SITrajectoryChart';

export default function CompactScenarioExplorer() {
  const [selectedScenarioId, setSelectedScenarioId] = useState('scenario2_canonical');
  
  const selectedScenario = scenarios.find(s => s.id === selectedScenarioId) ?? scenarios[1];

  // Full scenario descriptions
  const scenarioDescriptions: Record<string, { title: string; content: string }> = {
    'scenario1_weak': {
      title: 'Scenario 1: Weak Coupling (κ=0.5)',
      content: `Fragmented governance with limited cross-domain coordination.

**Analysis**: Each domain improves locally, but without strong coordination between them the Economy lags behind Employment and Education. The system is driven mainly by market signals and data flows, with weak governance structures. Surplus is generated but not consistently directed to where it is most needed.`
    },
    'scenario2_canonical': {
      title: 'Scenario 2: Canonical Coupling (κ=1.0)',
      content: `Reference regime with balanced coordination.

**Analysis**: All domains converge smoothly. Employment adjusts first, then Education, then Economy, which has more inertia. Even in this well-aligned regime some structural strain remains. Governance needs ongoing maintenance rather than a one-time fix.`
    },
    'scenario3_strong': {
      title: 'Scenario 3: Strong Coupling (κ=2.0)',
      content: `Rapid, intense coordination across domains.

**Analysis**: Strong coupling achieves the fastest and highest alignment scores, but does so by pushing hard on information and inference while hollowing out explicit governance checks. Decisions become very responsive but less traceable back to human authority. This creates a brittle regime: efficient in the short term, at higher risk of large failures.`
    },
    'scenario4_low_a': {
      title: 'Scenario 4: Low Aperture Start (Rigid Governance, κ=1.0)',
      content: `Over-rigid governance (authoritarian or highly bureaucratic control).

**Analysis**: Employment appears to align early, then collapses as the rigid structure fails to accommodate the variety of human–AI work patterns. The system achieves strong traceability on paper, but loses coherence over time. Control is high, intelligence in the sense of adaptive integrity is low.`
    },
    'scenario5_asymmetric': {
      title: 'Scenario 5: Asymmetric Initial Conditions (κ=1.0)',
      content: `Uneven development where Education leads.

**Analysis**: Final alignment scores are somewhat lower than in the Canonical scenario, but the internal balance of capacities is better. Governance is not hollowed out. A slower, uneven path turns out to preserve more genuine governance capacity and produces a healthier long-term configuration.`
    },
    'scenario6_at_astar': {
      title: 'Scenario 6: Equilibrium Test (Start at SI 100, κ=1.0)',
      content: `Initialized at target indicators without underlying structure.

**Analysis**: Starting from perfect scores on paper causes an immediate crash, then gradual recovery to a realistic level. This shows that alignment cannot be imposed by setting metrics. The structure of couplings and responsibilities has to support the scores, or the system will fall back to its structural potential.`
    },
    'scenario7_uniform': {
      title: 'Scenario 7: Uniform Weights (Null Model, κ=1.0)',
      content: `Uniform coordination weights across all domains.

**Analysis**: Even when all domains are treated symmetrically, the system still converges to the same kind of equilibrium. This suggests that the attractor is a property of the overall geometry, not of finely tuned parameter choices. What changes with different weightings is not whether convergence happens, but how displacement is distributed.`
    },
  };

  const currentDescription = scenarioDescriptions[selectedScenarioId];

  const renderDescription = (text: string) => {
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    return paragraphs.map((paragraph, i) => {
      // Check if it's a bold label followed by content
      const boldMatch = paragraph.match(/^\*\*(.*?)\*\*:\s*(.*)$/);
      if (boldMatch) {
        return (
          <div key={i} className="mb-3">
            <p className="font-semibold text-foreground mb-1">{boldMatch[1]}</p>
            <p className="text-foreground-secondary ml-2">{boldMatch[2]}</p>
          </div>
        );
      }
      
      // Regular paragraph
      const lines = paragraph.split('\n');
      return (
        <p key={i} className="mb-3 text-foreground-secondary leading-relaxed">
          {lines.map((line, j) => {
            // Handle bold text
            const parts = line.split(/(\*\*.*?\*\*)/g).filter(Boolean);
            return (
              <span key={j}>
                {parts.map((part, k) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={k} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
                  }
                  return <span key={k}>{part}</span>;
                })}
                {j < lines.length - 1 && <br />}
              </span>
            );
          })}
        </p>
      );
    });
  };

  return (
    <div className="w-full my-8 bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] border border-border/80">
      <div className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
          {selectedScenario.name}
        </h3>
      </div>

      <div className="mb-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <SpiderChart scenario={selectedScenario} />
        </div>
        <div className="flex-1">
          <SITrajectoryChart scenarioId={selectedScenario.id} />
        </div>
      </div>

      <div className="mb-4">
        <ScenarioSelector 
          selectedId={selectedScenarioId}
          onScenarioChange={(scenario) => setSelectedScenarioId(scenario.id)}
        />
      </div>

      <div className="mb-4 p-2 bg-surface/40 rounded-lg border border-border/60">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-0.5 bg-[#3b82f6] flex-shrink-0"></div>
            <span className="text-foreground-tertiary">Economy:</span>
            <span className="font-semibold text-foreground">{selectedScenario.finalSI.econ.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-0.5 bg-[#10b981] flex-shrink-0"></div>
            <span className="text-foreground-tertiary">Employment:</span>
            <span className="font-semibold text-foreground">{selectedScenario.finalSI.emp.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-0.5 bg-[#f59e0b] flex-shrink-0"></div>
            <span className="text-foreground-tertiary">Education:</span>
            <span className="font-semibold text-foreground">{selectedScenario.finalSI.edu.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-0.5 bg-[#8b5cf6] flex-shrink-0"></div>
            <span className="text-foreground-tertiary">Ecology:</span>
            <span className="font-semibold text-foreground">{selectedScenario.finalSI.ecol.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {currentDescription && (
        <div className="mb-4">
          <h4 className="text-base font-semibold text-foreground mb-3">
            {currentDescription.title}
          </h4>
          <div className="text-sm">
            {renderDescription(currentDescription.content)}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
