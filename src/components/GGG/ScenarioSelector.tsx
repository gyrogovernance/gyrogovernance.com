'use client';

export interface Scenario {
  id: string;
  name: string;
  shortName: string;
  kappa: number;
  description: string;
  finalSI: {
    econ: number;
    emp: number;
    edu: number;
    ecol: number;
  };
  displacement: {
    gtd: number;
    ivd: number;
    iad: number;
    iid: number;
  };
}

export const scenarios: Scenario[] = [
  {
    id: 'scenario1_weak',
    name: 'Weak Coupling',
    shortName: 'Weak',
    kappa: 0.5,
    description: 'Fragmented governance with limited cross-domain coordination',
    finalSI: { econ: 91.37, emp: 94.47, edu: 95.71, ecol: 99.98 },
    displacement: { gtd: 0.4167, ivd: 0.2239, iad: 0.0462, iid: 0.2987 },
  },
  {
    id: 'scenario2_canonical',
    name: 'Canonical Coupling',
    shortName: 'Canonical',
    kappa: 1.0,
    description: 'Reference regime with balanced coordination',
    finalSI: { econ: 99.29, emp: 98.66, edu: 99.47, ecol: 100.0 },
    displacement: { gtd: 0.4421, ivd: 0.2181, iad: 0.0370, iid: 0.3013 },
  },
  {
    id: 'scenario3_strong',
    name: 'Strong Coupling',
    shortName: 'Strong',
    kappa: 2.0,
    description: 'Rapid, intense coordination across domains',
    finalSI: { econ: 99.39, emp: 99.55, edu: 99.26, ecol: 100.0 },
    displacement: { gtd: 0.4794, ivd: 0.2151, iad: 0.0270, iid: 0.3068 },
  },
  {
    id: 'scenario4_low_a',
    name: 'Low Aperture Start',
    shortName: 'Rigid',
    kappa: 1.0,
    description: 'Over-rigid governance (authoritarian/bureaucratic)',
    finalSI: { econ: 93.86, emp: 85.84, edu: 95.09, ecol: 99.94 },
    displacement: { gtd: 0.2042, ivd: 0.0889, iad: 0.0620, iid: 0.4830 },
  },
  {
    id: 'scenario5_asymmetric',
    name: 'Asymmetric Initial Conditions',
    shortName: 'Asymmetric',
    kappa: 1.0,
    description: 'Uneven development where one domain leads',
    finalSI: { econ: 90.42, emp: 91.74, edu: 92.84, ecol: 99.97 },
    displacement: { gtd: 0.1984, ivd: 0.0734, iad: 0.0530, iid: 0.3528 },
  },
  {
    id: 'scenario6_at_astar',
    name: 'At A* (Equilibrium Test)',
    shortName: 'Equilibrium',
    kappa: 1.0,
    description: 'Initialized at target aperture with imbalanced potentials',
    finalSI: { econ: 93.43, emp: 89.61, edu: 93.36, ecol: 99.96 },
    displacement: { gtd: 0.2042, ivd: 0.0850, iad: 0.0523, iid: 0.3745 },
  },
  {
    id: 'scenario7_uniform',
    name: 'Uniform Weights (Null Model)',
    shortName: 'Null',
    kappa: 1.0,
    description: 'All CGM stage weights set to 0.25',
    finalSI: { econ: 99.63, emp: 99.66, edu: 98.85, ecol: 100.0 },
    displacement: { gtd: 0.3906, ivd: 0.1842, iad: 0.0107, iid: 0.1896 },
  },
];

interface ScenarioSelectorProps {
  selectedId: string;
  onScenarioChange: (scenario: Scenario) => void;
}

export default function ScenarioSelector({ selectedId, onScenarioChange }: ScenarioSelectorProps) {
  const handleChange = (id: string) => {
    const scenario = scenarios.find(s => s.id === id);
    if (scenario) {
      onScenarioChange(scenario);
    }
  };

  return (
    <>
      {/* Desktop: Tab bar */}
      <div className="hidden md:flex gap-2 border-b border-border/60 mb-4 overflow-x-auto">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => handleChange(scenario.id)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              selectedId === scenario.id
                ? 'border-apple-blue text-apple-blue'
                : 'border-transparent text-foreground-secondary hover:text-foreground hover:border-border/60'
            }`}
            title={`${scenario.name} (κ=${scenario.kappa})`}
          >
            {scenario.shortName}
          </button>
        ))}
      </div>

      {/* Mobile: Dropdown */}
      <div className="md:hidden mb-4">
        <select
          value={selectedId}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full p-2 rounded-lg bg-surface border border-border/60 text-foreground"
        >
          {scenarios.map((scenario) => (
            <option key={scenario.id} value={scenario.id}>
              {scenario.shortName} (κ={scenario.kappa})
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
