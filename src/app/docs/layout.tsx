import { Metadata } from 'next';
import DocsSidebar from '@/components/DocsSidebar';
import { LiquidGlassCard } from '@/components/LiquidGlassCard';

export const metadata: Metadata = {
  title: {
    template: '%s | Gyro Governance Docs',
    default: 'Documentation | Gyro Governance'
  },
  description: 'Comprehensive documentation for Gyro Governance tools, research, and frameworks.'
};

export default function DocsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[1800px] px-3 sm:px-5 lg:px-6 xl:px-10 2xl:px-16 py-4 sm:py-6 xl:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-[220px_minmax(0,1fr)_240px] gap-4 xl:gap-5 2xl:gap-6">
          {/* Left Sidebar - Navigation */}
          <div className="hidden xl:block xl:sticky xl:top-[5.5rem] xl:h-[calc(100vh-6rem)] xl:overflow-visible">
            <LiquidGlassCard
              className="glass-card glass-card-translucent docs-sidebar-shell rounded-[2rem] h-full"
              intensity="subtle"
              blur={24}
              saturation={145}
              luminosity={108}
              shadowIntensity={0.12}
            >
              <div className="h-full p-2">
                <DocsSidebar />
              </div>
            </LiquidGlassCard>
          </div>

          {/* Main Content Area */}
          <main className="min-w-0 xl:col-span-1">
            <LiquidGlassCard
              className="glass-card glass-card-translucent docs-content-card rounded-[2rem] p-4 xl:p-6"
              intensity="subtle"
              blur={24}
              saturation={145}
              luminosity={108}
              shadowIntensity={0.12}
            >
              {children}
            </LiquidGlassCard>
          </main>

          {/* Right Sidebar - Table of Contents */}
          <aside className="hidden xl:block xl:sticky xl:top-[5.5rem] xl:h-[calc(100vh-5.5rem)] xl:overflow-visible xl:w-[240px] xl:py-1 xl:pl-1 xl:pr-0" id="docs-toc-container">
            {/* ToC will be rendered here via portal */}
          </aside>
        </div>
      </div>
    </div>
  );
}
