import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import BlogCard from './BlogCard';
import ScrollReveal from './ScrollReveal';
import useFacebookPixel from '../hooks/useFacebookPixel';

const BlogSection = () => {
  const { t } = useLanguage();
  const { track } = useFacebookPixel();
  const articles = t('blog.articles');

  const blogImages = [
    "https://images.unsplash.com/photo-1687046423521-2cc65132d5af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1679274742404-4320c22ebe75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1671084853769-ba7c27b345e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1687046423521-2cc65132d5af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1679274742404-4320c22ebe75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ];

  useEffect(() => {
    track('ViewContent', { 
      content_name: 'Blog Section',
      content_type: 'blog',
      content_ids: articles.map((_, i) => `article_${i}`)
    });
  }, []);

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <span className="text-accent-600 font-bold tracking-wider uppercase text-sm mb-2 block">Actualités</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-heading">{t('blog.title')}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
                <BlogCard article={article} index={index} image={blogImages[index]} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;