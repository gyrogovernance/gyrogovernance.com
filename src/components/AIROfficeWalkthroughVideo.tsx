export default function AIROfficeWalkthroughVideo() {
  return (
    <div className="rounded-2xl overflow-hidden bg-black/5 dark:bg-black/30">
      <video
        className="w-full h-auto"
        controls
        playsInline
        preload="metadata"
        poster="/assets/air-office/welcome_dark.webp"
        aria-label="AIR Office walkthrough"
      >
        <source src="/assets/air-office/air-office-walkthrough.webm" type="video/webm" />
      </video>
    </div>
  );
}
