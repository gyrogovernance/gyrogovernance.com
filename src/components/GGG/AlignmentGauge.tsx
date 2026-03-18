'use client';

export default function AlignmentGauge() {
  const currentSI = 17.2;
  const thresholdSI = 90;
  const percentage = (currentSI / 100) * 100;
  const thresholdPosition = (thresholdSI / 100) * 100;

  const milestones = [
    { year: 1956, si: 2.2 },
    { year: 2016, si: 5.2 },
    { year: 2023, si: 13.8 },
    { year: 2025, si: 17.2 },
  ];

  const projections = [
    { year: 2028, si: 95 },
    { year: 2034, si: 95 },
  ];

  return (
    <div className="w-full my-8 bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] border border-border/80">
      <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
        Current Alignment: SI {currentSI}
      </h3>
      <div className="relative w-full h-8 bg-surface/40 rounded-full overflow-hidden border border-border/60 mb-2">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 dark:from-blue-400 dark:via-blue-500 dark:to-purple-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
        <div 
          className="absolute top-0 h-full w-0.5 bg-red-500 dark:bg-red-400 transition-all duration-500"
          style={{ left: `${thresholdPosition}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-semibold text-foreground z-10">
            {currentSI}/100
          </span>
        </div>
      </div>
      <div className="mb-4 text-xs text-foreground-tertiary">
        <span className="text-red-500 dark:text-red-400">Threshold (90)</span>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <p className="font-semibold mb-1 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
            Milestones:
          </p>
          <p className="text-foreground-secondary">
            {milestones.map((m, i) => (
              <span key={m.year}>
                {m.year} (SI {m.si}){i < milestones.length - 1 ? ' → ' : ''}
              </span>
            ))}
          </p>
        </div>
        <div>
          <p className="font-semibold mb-1 bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-400 dark:to-teal-500 bg-clip-text text-transparent">
            Projections:
          </p>
          <p className="text-foreground-secondary">
            {projections.map((p, i) => (
              <span key={p.year}>
                {p.year} (SI {p.si}){i < projections.length - 1 ? ' | ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
