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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-[256px_minmax(0,1fr)_280px] gap-8 xl:gap-8">
          {/* Left Sidebar - Navigation */}
          <div className="xl:sticky xl:top-8 xl:h-[calc(100vh-4rem)] xl:overflow-hidden">
            <DocsSidebar />
          </div>

          {/* Main Content Area */}
          <main className="min-w-0 xl:col-span-1">
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg border border-border/80 p-6 xl:p-8">
              {children}
            </div>
          </main>

          {/* Right Sidebar - Table of Contents */}
          <aside className="hidden xl:block" id="docs-toc-container">
            {/* ToC will be rendered here via portal */}
          </aside>
        </div>
      </div>
    </div>
  );
}
