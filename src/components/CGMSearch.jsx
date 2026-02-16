"use client";
import { useState, useEffect, useMemo } from 'react';

export default function CGMSearch() {
  const [index, setIndex] = useState(null);
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    type: '',
    importance: '',
    tag: ''
  });

  useEffect(() => {
    fetch('/search-index/index.json')
      .then(res => res.json())
      .then(data => {
        setIndex(data);
        console.log(`Loaded ${data.count} items`);
      });
  }, []);

  const results = useMemo(() => {
    if (!index) return [];

    let items = index.items;

    if (filters.category) {
      items = items.filter(item => item.category === filters.category);
    }
    if (filters.type) {
      items = items.filter(item => item.type === filters.type);
    }
    if (filters.importance) {
      items = items.filter(item => item.importance === filters.importance);
    }
    if (filters.tag) {
      items = items.filter(item => item.tags?.includes(filters.tag));
    }

    if (query.trim()) {
      const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
      
      items = items
        .map(item => {
          let score = 0;
          
          for (const term of terms) {
            if (item.tags?.some(t => t.toLowerCase() === term)) {
              score += 10;
            } else if (item.tags?.some(t => t.toLowerCase().includes(term))) {
              score += 5;
            }
            if (item.question.toLowerCase().includes(term)) {
              score += 3;
            }
            if (item.answer.toLowerCase().includes(term)) {
              score += 2;
            }
            if (item.context?.toLowerCase().includes(term)) {
              score += 1;
            }
          }
          
          return { ...item, _score: score };
        })
        .filter(item => item._score > 0)
        .sort((a, b) => b._score - a._score);
    }

    return items.slice(0, 50);
  }, [index, query, filters]);

  if (!index) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-[80vh]">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink bg-clip-text text-transparent">
              CGM Knowledge Base
            </span>
          </h2>
          <p className="mt-6 text-xl text-foreground-secondary">
            Loading search index...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink bg-clip-text text-transparent">
              CGM Knowledge Base
            </span>
          </h2>
          <p className="mt-6 text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
            {index.count} structured entries from our Common Governance Model research
          </p>
        </div>

        {/* Search Component */}
        <div className="animate-fade-in-up">
          <div className="space-y-6">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: Q_G, fine structure, neutrino, 4pi..."
              className="search-input"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <select 
                value={filters.category} 
                onChange={(e) => setFilters(f => ({ ...f, category: e.target.value }))}
                className="search-select"
              >
                <option value="">All Categories</option>
                {index.facets.categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              <select 
                value={filters.type}
                onChange={(e) => setFilters(f => ({ ...f, type: e.target.value }))}
                className="search-select"
              >
                <option value="">All Types</option>
                {index.facets.types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select 
                value={filters.importance}
                onChange={(e) => setFilters(f => ({ ...f, importance: e.target.value }))}
                className="search-select"
              >
                <option value="">All Importance</option>
                {index.facets.importance.map(imp => (
                  <option key={imp} value={imp}>{imp}</option>
                ))}
              </select>

              <select 
                value={filters.tag}
                onChange={(e) => setFilters(f => ({ ...f, tag: e.target.value }))}
                className="search-select"
              >
                <option value="">All Tags</option>
                {index.facets.tags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>

              <button 
                onClick={() => setFilters({ category: '', type: '', importance: '', tag: '' })}
                className="search-select cursor-pointer hover:bg-bg-surface"
              >
                Clear Filters
              </button>
            </div>

            <p className="text-sm text-foreground-tertiary">
              {results.length} results {query && `for "${query}"`}
            </p>

            <div className="space-y-4">
              {results.map(item => (
                <ResultCard key={item.id} item={item} query={query} />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Search Tips */}
        <div className="search-card">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
            🔍 Quick Search Tips
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-foreground">By Tag</h4>
              <p className="text-sm text-foreground-secondary">
                Try Q_G, 4pi, alpha, CS, UNA…
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-foreground">By Category</h4>
              <p className="text-sm text-foreground-secondary">
                Filter by prediction, method, invariant…
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-foreground">By Type</h4>
              <p className="text-sm text-foreground-secondary">
                Find equations, claims, results…
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-foreground">By Importance</h4>
              <p className="text-sm text-foreground-secondary">
                Focus on core vs supporting vs detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultCard({ item, query }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="search-card">
      <header className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-foreground">{item.id}</span>
          <span className={`search-pill search-pill-${item.category}`}>
            {item.category}
          </span>
          <span className={`search-pill search-pill-${item.type}`}>
            {item.type}
          </span>
          {item._score > 0 && (
            <span className="text-xs text-foreground-tertiary">
              Score: {item._score}
            </span>
          )}
        </div>
        <span className={`search-pill search-pill-${item.importance}`}>
          {item.importance}
        </span>
      </header>

      <h3 className="text-lg font-semibold text-foreground mb-3">
        {highlightTerms(item.question, query)}
      </h3>
      
      <p className="text-foreground-secondary mb-3">
        {highlightTerms(item.answer, query)}
      </p>

      {item.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.slice(0, 10).map(tag => (
            <span key={tag} className="search-tag">
              #{tag}
            </span>
          ))}
          {item.tags.length > 10 && (
            <span className="text-xs text-foreground-tertiary">
              +{item.tags.length - 10} more
            </span>
          )}
        </div>
      )}

      <button 
        className="text-apple-blue hover:text-apple-purple transition-colors duration-300 font-medium text-sm"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Hide Context' : 'Show Context'}
      </button>

      {expanded && (
        <div className="mt-4 p-4 rounded-lg bg-bg-surface border border-border-secondary">
          <blockquote className="text-foreground-secondary mb-3 italic">
            {item.context}
          </blockquote>
          <div className="text-xs text-foreground-tertiary flex items-center gap-2 flex-wrap">
            <span>📄 {item.source}</span>
            <span>|</span>
            <span>📍 {item.section}</span>
          </div>
        </div>
      )}
    </article>
  );
}

function highlightTerms(text, query) {
  if (!query.trim() || !text) return text;
  
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const escapedTerms = terms.map(term => 
    term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, i) => 
    terms.some(t => part.toLowerCase() === t) 
      ? <mark key={i} className="search-highlight">{part}</mark>
      : part
  );
}