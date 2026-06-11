import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBlogs } from '../utils/blogStore';
import './BlogPage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setBlogs(getBlogs());
  }, []);

  // Filter logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tldr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'All' || 
      blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'AI & Automation', 'Web Development', 'Mobile Apps'];

  return (
    <div className="blog-page">
      <SEO 
        title="Engineering & AI Automation Blog" 
        description="Discover insights on autonomous AI workflows, Next.js web application architecture, cross-platform mobile apps, and developer operation scaling strategies."
        path="/blog"
      />

      <header className="blog-page__hero">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
            className="blog-page__hero-content"
          >
            <span className="section-label">AMAKLABS KNOWLEDGE</span>
            <h1 className="blog-page__title">
              Engineering <span className="gradient-text">Intelligence</span>
            </h1>
            <p className="blog-page__lead">
              Deep dives, technical architectures, and expert insights on autonomous operations, custom web systems, and high-performance software.
            </p>
          </motion.div>
        </div>
      </header>

      <section className="blog-page__filters-section">
        <div className="container">
          <div className="blog-page__controls">
            {/* Search */}
            <div className="blog-page__search-wrapper">
              <Search className="blog-page__search-icon" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                className="blog-page__search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Pills */}
            <div className="blog-page__categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`blog-page__cat-btn${selectedCategory === cat ? ' blog-page__cat-btn--active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="blog-page__grid-section">
        <div className="container">
          {filteredBlogs.length > 0 ? (
            <motion.div 
              className="blog-page__grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } }
              }}
            >
              {filteredBlogs.map((blog, idx) => (
                <motion.article 
                  key={blog.slug} 
                  className="blog-card"
                  variants={fadeUp}
                  custom={idx * 0.05}
                >
                  <div className="blog-card__header">
                    <span className="blog-card__category">{blog.category}</span>
                    <span className="blog-card__read-time">
                      <Clock size={12} /> {blog.readTime}
                    </span>
                  </div>

                  <h2 className="blog-card__title">
                    <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                  </h2>

                  <p className="blog-card__tldr">
                    {blog.tldr}
                  </p>

                  <div className="blog-card__footer">
                    <div className="blog-card__meta">
                      <span className="blog-card__author">
                        <User size={12} /> {blog.author}
                      </span>
                      <span className="blog-card__date">
                        <Calendar size={12} /> {blog.date}
                      </span>
                    </div>
                    <Link to={`/blog/${blog.slug}`} className="blog-card__link">
                      Read Post <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="blog-page__empty">
              <h3>No articles found</h3>
              <p>Try refining your search keyword or selecting a different category filter.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default BlogPage;
