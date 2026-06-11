import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, MessageSquare } from 'lucide-react';
import { SEO } from '../components/SEO';
import { getBlogBySlug } from '../utils/blogStore';
import './BlogDetailPage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const post = getBlogBySlug(slug);
    setBlog(post);
  }, [slug]);

  if (!blog) {
    return (
      <div className="blog-detail-page blog-detail-page--not-found">
        <SEO title="Article Not Found" description="The requested blog post could not be found." />
        <div className="container">
          <h2>Article Not Found</h2>
          <p>The blog post you are searching for does not exist or has been removed.</p>
          <Link to="/blog" className="btn-primary">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="blog-detail-page">
      <SEO 
        title={blog.title} 
        description={blog.tldr}
        path={`/blog/${blog.slug}`}
      />

      <article className="blog-post">
        {/* Header Metadata */}
        <header className="blog-post__header">
          <div className="container container--narrow">
            <Link to="/blog" className="blog-post__back">
              <ArrowLeft size={14} /> Back to Blog
            </Link>

            <span className="blog-post__category">{blog.category}</span>
            
            <h1 className="blog-post__title">{blog.title}</h1>
            
            <div className="blog-post__meta">
              <span className="blog-post__meta-item">
                <User size={14} /> By {blog.author}
              </span>
              <span className="blog-post__meta-item">
                <Calendar size={14} /> {blog.date}
              </span>
              <span className="blog-post__meta-item">
                <Clock size={14} /> {blog.readTime} Read
              </span>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <main className="blog-post__body container container--narrow">
          {/* Step 1 AEO: Blockquote TL;DR block */}
          <blockquote className="blog-post__tldr-block">
            <strong>TL;DR:</strong> {blog.tldr}
          </blockquote>

          {/* Intro Section */}
          <p className="blog-post__intro">{blog.intro}</p>

          {/* Step 2 AEO: H2 Definition block */}
          {blog.definitionTitle && blog.definitionContent && (
            <section className="blog-post__definition-section">
              <h2 className="blog-post__h2">{blog.definitionTitle}</h2>
              <p className="blog-post__definition-text">
                {blog.definitionContent}
              </p>
            </section>
          )}

          {/* Rest of the H2/H3 body sections */}
          {blog.sections && blog.sections.map((section, idx) => (
            <section key={idx} className="blog-post__section">
              <h2 className="blog-post__h2">{section.heading}</h2>
              <p className="blog-post__text">{section.content}</p>
            </section>
          ))}

          {/* Step 3 AEO: Comparison Table */}
          {blog.comparisonTitle && blog.comparisonRows && blog.comparisonRows.length > 0 && (
            <section className="blog-post__table-section">
              <h2 className="blog-post__h2">{blog.comparisonTitle}</h2>
              <div className="blog-post__table-wrapper">
                <table className="blog-post__table">
                  <thead>
                    <tr>
                      {blog.comparisonHeaders && blog.comparisonHeaders.map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {blog.comparisonRows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Conclusion */}
          {blog.conclusion && (
            <section className="blog-post__section">
              <h2 className="blog-post__h2">Conclusion</h2>
              <p className="blog-post__text">{blog.conclusion}</p>
            </section>
          )}

          {/* Step 4 AEO: FAQ Section (Exactly 5 items formatted for extraction) */}
          {blog.faqs && blog.faqs.length > 0 && (
            <section className="blog-post__faq-section">
              <h2 className="blog-post__faq-heading">Frequently Asked Questions</h2>
              <div className="blog-post__faq-list">
                {blog.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={`faq-item${activeFaq === index ? ' faq-item--active' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="faq-item__question">
                      <span>{faq.q}</span>
                      <span className="faq-item__toggle" />
                    </div>
                    <div className="faq-item__answer">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </article>
    </div>
  );
}

export default BlogDetailPage;
