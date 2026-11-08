import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const BreadcrumbNav = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="section-bg-alt py-[16px] border-b border-[hsl(var(--border))]">
      <div className="container-default">
        <ol className="flex items-center space-x-[8px] text-small font-semibold text-[hsl(var(--foreground-secondary))]">
          <li>
            <Link to="/" className="hover:text-[hsl(var(--accent))] transition-[var(--transition)] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm">
              <Home size={16} className="mr-1" />
              <span className="sr-only">Accueil</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight size={16} className="mx-[4px] text-[hsl(var(--border))]" />
              {index === items.length - 1 ? (
                <span className="text-[hsl(var(--foreground))] font-bold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.url} className="hover:text-[hsl(var(--accent))] transition-[var(--transition)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] rounded-sm">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbNav;