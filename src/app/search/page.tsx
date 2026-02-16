import CGMSearch from "@/components/CGMSearch";

export const metadata = {
  title: "Search - CGM Knowledge Base",
  description: "Search across 1,024+ structured entries from our Common Governance Model research",
};

export default function SearchPage() {
  return (
    <main>
      <CGMSearch />
    </main>
  );
}