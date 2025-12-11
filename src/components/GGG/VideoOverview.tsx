'use client';

export default function VideoOverview() {
  return (
    <div className="w-full my-8">
      <div className="aspect-video rounded-xl overflow-hidden border border-border/60">
        <iframe
          src="https://www.youtube.com/embed/i4-tx5EbHDk"
          title="GGG Simulator Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <p className="mt-3 text-sm text-foreground-tertiary text-center">
        Quick overview of the Gyroscopic Global Governance framework and simulator findings.
      </p>
    </div>
  );
}

