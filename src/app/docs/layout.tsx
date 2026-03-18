import { Metadata } from 'next';
import DocsSidebar from '@/components/DocsSidebar';

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
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6 py-4 sm:py-6 xl:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-[220px_minmax(0,1fr)_240px] gap-4 xl:gap-4">
          {/* Left Sidebar - Navigation */}
          <div className="xl:sticky xl:top-[5.5rem] xl:h-[calc(100vh-6rem)] xl:overflow-hidden xl:p-1">
            <DocsSidebar />
          </div>

          {/* Main Content Area */}
          <main className="min-w-0 xl:col-span-1">
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] !shadow-2xl border border-border/80 p-4 xl:p-6">
              {children}
            </div>
          </main>

          {/* Right Sidebar - Table of Contents */}
          <aside className="hidden xl:block xl:sticky xl:top-[5.5rem] xl:h-[calc(100vh-5.5rem)] xl:overflow-hidden xl:w-[240px] xl:p-1" id="docs-toc-container">
            {/* ToC will be rendered here via portal */}
          </aside>
        </div>
      </div>
    </div>
  );
}
