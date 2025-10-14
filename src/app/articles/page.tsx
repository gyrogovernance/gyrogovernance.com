import { Suspense } from "react";
import ArticlesPageClient from "@/components/ArticlesPageClient";

export const metadata = {
  title: "Articles",
  description: "Research articles, featured insights, and governance reports.",
};

export default function ArticlesPage() {
  return (
    <Suspense fallback={
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink bg-clip-text text-transparent">
              Articles
            </span>
          </h1>
          <p className="text-foreground-secondary max-w-2xl mx-auto">
            Loading articles...
          </p>
        </div>
      </div>
    }>
      <ArticlesPageClient />
    </Suspense>
  );
}


