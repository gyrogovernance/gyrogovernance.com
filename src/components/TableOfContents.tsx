interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
  isActive?: boolean;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  className?: string;
  showTitle?: boolean;
}

export function TableOfContents({ items, showTitle = true, className = '' }: TableOfContentsProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 100; // Account for sticky header
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={className}>
      {showTitle && <h2 className="toc-title">On this page</h2>}
      <ul className="toc-list">
        {items.map((item) => (
          <li key={item.id} className="toc-item">
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`toc-link ${item.isActive ? 'active' : ''}`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}