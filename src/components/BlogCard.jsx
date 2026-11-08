
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogCard = ({ title, excerpt, image, imageAlt, date, slug }) => {
  return (
    <article className="blog-card">
      <Link to={slug} className="block">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="blog-card-image"
            loading="lazy"
          />
        </div>
        <div className="blog-card-content">
          <h2 className="blog-card-title">{title}</h2>
          <div className="blog-card-meta">
            <Calendar size={14} />
            <time dateTime={date}>{new Date(date).toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
          <p className="blog-card-excerpt">{excerpt}</p>
          <span className="inline-flex items-center gap-2 text-[hsl(var(--accent))] font-[600] text-[15px] hover:gap-3 transition-all group">
            Lire la suite
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
