
import React, { useState, useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';

const BlogArticleTemplate = ({ 
  title, 
  description, 
  canonical, 
  featuredImage, 
  imageAlt, 
  publishDate,
  readTime = '7 min',
  tableOfContents = [],
  children,
  relatedArticles = [],
  schemas = []
}) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const breadcrumbs = [
    { label: 'Blog', url: '/blog' },
    { label: title, url: canonical }
  ];

  return (
    <>
      <div className="bg-background flex-grow flex flex-col">
        <SEOHead 
          title={title}
          description={description}
          robots="index, follow"
          canonical={canonical}
          ogType="article"
          ogImage={featuredImage}
          schemas={schemas}
          preloadImage={featuredImage}
        />

        <BreadcrumbNav items={breadcrumbs} />

        <article className="section-padding">
          <div className="container-default">
            <div className="max-w-4xl mx-auto">
              {/* Article Header */}
              <header className="blog-article-header">
                <h1 className="blog-article-title">{title}</h1>
                <div className="blog-article-meta">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span className="font-[600]">Isolation QC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <time dateTime={publishDate}>
                      {new Date(publishDate).toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{readTime} de lecture</span>
                  </div>
                </div>
                <img 
                  src={featuredImage}
                  alt={imageAlt}
                  className="blog-article-image"
                  loading="eager"
                />
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px]">
                {/* Table of Contents - Desktop */}
                {tableOfContents.length > 0 && (
                  <aside className="hidden lg:block lg:col-span-4">
                    <div className="blog-toc">
                      <h2 className="blog-toc-title">Table des matières</h2>
                      <nav className="blog-toc-list">
                        {tableOfContents.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => scrollToSection(item.id)}
                            className={`blog-toc-item block text-left w-full ${activeSection === item.id ? 'active' : ''}`}
                          >
                            {item.title}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </aside>
                )}

                {/* Article Body */}
                <div className={tableOfContents.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'}>
                  <div className="blog-article-body">
                    {children}
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="blog-related-articles">
                  <h2 className="text-h3 mb-[32px]">Articles connexes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                    {relatedArticles.map((article, index) => (
                      <Link 
                        key={index}
                        to={article.slug}
                        className="flex items-start gap-[16px] p-[20px] bg-[hsl(var(--secondary))] rounded-[var(--radius-lg)] hover:bg-[hsl(var(--blog-card-hover))] transition-colors group"
                      >
                        <img 
                          src={article.image}
                          alt={article.imageAlt}
                          className="w-[80px] h-[80px] object-cover rounded-[var(--radius)] shrink-0"
                          loading="lazy"
                        />
                        <div className="flex-1">
                          <h3 className="text-[16px] font-[600] text-[hsl(var(--primary))] mb-[4px] group-hover:text-[hsl(var(--accent))] transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-[14px] text-[hsl(var(--foreground-secondary))] line-clamp-2">
                            {article.excerpt}
                          </p>
                        </div>
                        <ChevronRight size={20} className="text-[hsl(var(--accent))] shrink-0 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Section */}
              <div className="blog-cta-section">
                <h2 className="text-[28px] md:text-[32px] font-[700] text-[hsl(var(--primary))] mb-[16px]">
                  Besoin d'une inspection gratuite ?
                </h2>
                <p className="text-[16px] text-[hsl(var(--foreground-secondary))] mb-[24px]">
                  Notre équipe d'experts est prête à évaluer vos besoins en isolation et décontamination.
                </p>
                <Link to="/contact" className="btn-primary text-white">
                  Inspection gratuite
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogArticleTemplate;
