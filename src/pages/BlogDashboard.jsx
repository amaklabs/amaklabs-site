import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Trash2, Save, Sparkles, CheckCircle, AlertTriangle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { addBlog } from '../utils/blogStore';
import './BlogDashboard.css';

export function BlogDashboard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: 'Amarpreet Singh Kounsal',
    category: 'AI & Automation',
    readTime: '5 min',
    tldr: '',
    intro: '',
    definitionTitle: 'What is ',
    definitionContent: '',
    conclusion: '',
  });

  const [sections, setSections] = useState([
    { heading: '', content: '' }
  ]);

  const [comparison, setComparison] = useState({
    title: '',
    headers: '',
    rows: ['']
  });

  // Strict AEO: 5 FAQs
  const [faqs, setFaqs] = useState([
    { q: '', a: '' },
    { q: '', a: '' },
    { q: '', a: '' },
    { q: '', a: '' },
    { q: '', a: '' }
  ]);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Sections management
  const addSection = () => {
    setSections([...sections, { heading: '', content: '' }]);
  };

  const removeSection = (index) => {
    const updated = sections.filter((_, idx) => idx !== index);
    setSections(updated);
  };

  const handleSectionChange = (index, field, value) => {
    const updated = [...sections];
    updated[index][field] = value;
    setSections(updated);
  };

  // FAQs management (strictly 5, but we edit them by index)
  const handleFaqChange = (index, field, value) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  // Comparison management
  const handleComparisonChange = (field, value) => {
    setComparison(prev => ({ ...prev, [field]: value }));
  };

  const addComparisonRow = () => {
    setComparison(prev => ({ ...prev, rows: [...prev.rows, ''] }));
  };

  const removeComparisonRow = (index) => {
    setComparison(prev => ({ 
      ...prev, 
      rows: prev.rows.filter((_, idx) => idx !== index) 
    }));
  };

  const handleComparisonRowChange = (index, value) => {
    const updatedRows = [...comparison.rows];
    updatedRows[index] = value;
    setComparison(prev => ({ ...prev, rows: updatedRows }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Strict Validations for SEO-AEO blog requirements
    if (!formData.title.trim()) return setError('Title is required.');
    if (!formData.tldr.trim()) return setError('TL;DR block is required (AEO primary citation element).');
    if (!formData.definitionContent.trim()) return setError('A definition sentence is required (AEO extraction).');
    
    // Check FAQ count and content constraints
    const invalidFaq = faqs.some(f => !f.q.trim() || !f.a.trim());
    if (invalidFaq) {
      return setError('Strict AEO rule: All 5 FAQs must have a fully written question and answer.');
    }

    const wordyFaqIndex = faqs.findIndex(f => f.a.trim().split(/\s+/).length > 50);
    if (wordyFaqIndex !== -1) {
      return setError(`AEO constraint violated: FAQ #${wordyFaqIndex + 1} answer exceeds 50 words (current length: ${faqs[wordyFaqIndex].a.trim().split(/\s+/).length} words). AI engines skip answers over 50 words.`);
    }

    // Format Comparison data
    let comparisonData = {};
    if (comparison.title.trim() && comparison.headers.trim() && comparison.rows.length > 0) {
      const headers = comparison.headers.split(',').map(h => h.trim());
      const rows = comparison.rows.map(row => row.split(',').map(cell => cell.trim()));
      comparisonData = {
        comparisonTitle: comparison.title,
        comparisonHeaders: headers,
        comparisonRows: rows
      };
    }

    const fullBlog = {
      ...formData,
      sections: sections.filter(s => s.heading.trim() && s.content.trim()),
      ...comparisonData,
      faqs
    };

    try {
      const newPost = addBlog(fullBlog);
      setSuccess(true);
      setTimeout(() => {
        navigate(`/blog/${newPost.slug}`);
      }, 1500);
    } catch (e) {
      setError('An error occurred while saving the blog. Please try again.');
    }
  };

  return (
    <div className="blog-dashboard">
      <SEO 
        title="Authoring & Upload Dashboard" 
        description="Publish search-optimized and AI-citable blog posts detailing software architecture and automation workflows."
      />

      <header className="dashboard__hero">
        <div className="container">
          <span className="section-label">PUBLISHING ENGINE</span>
          <h1 className="dashboard__title">
            Upload SEO-AEO <span className="gradient-text">Articles</span>
          </h1>
          <p className="dashboard__desc">
            Submit long-form articles formatted strictly to support traditional keyword indexing and AI answer citations.
          </p>
        </div>
      </header>

      <main className="dashboard__main container">
        <form onSubmit={handleSubmit} className="dashboard__form">
          
          {/* Metadata Section */}
          <fieldset className="form-section">
            <legend className="form-section__title">1. Document Metadata</legend>
            <div className="form-grid">
              <label className="form-label">
                <span>Article Title</span>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Scaling Workflows with AI"
                  value={formData.title}
                  onChange={handleFormChange}
                  required
                />
              </label>

              <label className="form-label">
                <span>Author</span>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleFormChange}
                  required
                />
              </label>

              <label className="form-label">
                <span>Category</span>
                <select name="category" value={formData.category} onChange={handleFormChange}>
                  <option value="AI & Automation">AI & Automation</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Apps">Mobile Apps</option>
                </select>
              </label>

              <label className="form-label">
                <span>Read Time</span>
                <input
                  type="text"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleFormChange}
                  required
                />
              </label>
            </div>
          </fieldset>

          {/* Step 1 AEO: TL;DR Block quote */}
          <fieldset className="form-section">
            <legend className="form-section__title">
              2. TL;DR Block <span className="aeo-badge">AEO Core</span>
            </legend>
            <label className="form-label">
              <span>Core Summary (2-3 sentences directly answering the article's query)</span>
              <textarea
                name="tldr"
                rows={3}
                placeholder="Autonomous workflows require async triggers, structured document data pipelines, and timezone-aware sprints. Teams using these three ship MVP releases rapidly..."
                value={formData.tldr}
                onChange={handleFormChange}
                required
              />
            </label>
          </fieldset>

          {/* Intro & Definition Section */}
          <fieldset className="form-section">
            <legend className="form-section__title">3. Introduction & "What Is" Definition</legend>
            <label className="form-label" style={{ marginBottom: '20px' }}>
              <span>Introduction Paragraph</span>
              <textarea
                name="intro"
                rows={4}
                placeholder="The administrative overhead in modern SaaS setups is rising..."
                value={formData.intro}
                onChange={handleFormChange}
              />
            </label>

            <div className="form-grid">
              <label className="form-label">
                <span>Definition Title (H2)</span>
                <input
                  type="text"
                  name="definitionTitle"
                  value={formData.definitionTitle}
                  onChange={handleFormChange}
                />
              </label>
              
              <label className="form-label">
                <span>Definition Content (1 clean, highly citable sentence)</span>
                <input
                  type="text"
                  name="definitionContent"
                  placeholder="e.g. Custom AI agents are programs powered by large language models..."
                  value={formData.definitionContent}
                  onChange={handleFormChange}
                  required
                />
              </label>
            </div>
          </fieldset>

          {/* Sections Builder */}
          <fieldset className="form-section">
            <div className="form-section__header">
              <legend className="form-section__title">4. Body Sections</legend>
              <button type="button" className="btn-secondary btn-small" onClick={addSection}>
                <Plus size={14} /> Add Section
              </button>
            </div>
            
            <div className="dashboard__sections-list">
              {sections.map((section, index) => (
                <div key={index} className="dashboard__section-card">
                  <div className="dashboard__section-card-header">
                    <h4>Section #{index + 1}</h4>
                    {sections.length > 1 && (
                      <button type="button" className="btn-icon" onClick={() => removeSection(index)}>
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                  
                  <label className="form-label" style={{ marginBottom: '12px' }}>
                    <span>Heading (H2)</span>
                    <input
                      type="text"
                      placeholder="e.g. Why reasoning agents are shifting operational thresholds"
                      value={section.heading}
                      onChange={(e) => handleSectionChange(index, 'heading', e.target.value)}
                    />
                  </label>

                  <label className="form-label">
                    <span>Content</span>
                    <textarea
                      rows={5}
                      placeholder="Enter body content here..."
                      value={section.content}
                      onChange={(e) => handleSectionChange(index, 'content', e.target.value)}
                    />
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Comparison Table */}
          <fieldset className="form-section">
            <legend className="form-section__title">5. Comparison Table (Optional)</legend>
            <div className="form-grid" style={{ marginBottom: '16px' }}>
              <label className="form-label">
                <span>Table Title</span>
                <input
                  type="text"
                  placeholder="e.g. Rendering architecture comparison"
                  value={comparison.title}
                  onChange={(e) => handleComparisonChange('title', e.target.value)}
                />
              </label>
              <label className="form-label">
                <span>Table Headers (comma-separated list)</span>
                <input
                  type="text"
                  placeholder="Feature, Script-Based, Autonomous Agents"
                  value={comparison.headers}
                  onChange={(e) => handleComparisonChange('headers', e.target.value)}
                />
              </label>
            </div>

            <div className="dashboard__rows-list">
              <span className="form-label-sub">Table Rows (comma-separated cells matching headers count)</span>
              {comparison.rows.map((row, index) => (
                <div key={index} className="dashboard__row-input-wrapper">
                  <input
                    type="text"
                    placeholder="e.g. Setup Complexity, Custom script code, Simple prompt directives"
                    value={row}
                    onChange={(e) => handleComparisonRowChange(index, e.target.value)}
                  />
                  {comparison.rows.length > 1 && (
                    <button type="button" className="btn-icon" onClick={() => removeComparisonRow(index)}>
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
              <button type="button" className="btn-secondary btn-small" onClick={addComparisonRow} style={{ marginTop: '8px' }}>
                <Plus size={14} /> Add Row
              </button>
            </div>
          </fieldset>

          {/* Conclusion */}
          <fieldset className="form-section">
            <legend className="form-section__title">6. Conclusion</legend>
            <label className="form-label">
              <span>Closing summary and call-to-action</span>
              <textarea
                name="conclusion"
                rows={3}
                placeholder="The shift to custom platforms is vital for..."
                value={formData.conclusion}
                onChange={handleFormChange}
              />
            </label>
          </fieldset>

          {/* Strict AEO FAQs (Exactly 5 Accordion items) */}
          <fieldset className="form-section">
            <legend className="form-section__title">
              7. FAQ Section <span className="aeo-badge">Strict AEO: Exactly 5 items</span>
            </legend>
            <p className="form-section__desc">
              AI search engines frequently pull directly from these blocks. Ensure answers are under 50 words and stand completely alone.
            </p>
            
            <div className="dashboard__faq-inputs">
              {faqs.map((faq, index) => (
                <div key={index} className="dashboard__faq-card">
                  <h4>FAQ Question #{index + 1}</h4>
                  
                  <label className="form-label" style={{ marginBottom: '12px' }}>
                    <span>Question</span>
                    <input
                      type="text"
                      placeholder="e.g. Do AI agents replace existing CRM software?"
                      value={faq.q}
                      onChange={(e) => handleFaqChange(index, 'q', e.target.value)}
                      required
                    />
                  </label>

                  <label className="form-label">
                    <span>Answer (Strictly &lt;= 50 words)</span>
                    <textarea
                      rows={2}
                      placeholder="e.g. No. Modern autonomous agents hook directly into HubSpot or Airtable API integrations..."
                      value={faq.a}
                      onChange={(e) => handleFaqChange(index, 'a', e.target.value)}
                      required
                    />
                    <span className="faq-word-count">
                      Word Count: {faq.a.trim() === '' ? 0 : faq.a.trim().split(/\s+/).length} / 50
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Errors and Save */}
          {error && (
            <div className="dashboard__error">
              <AlertTriangle size={18} /> {error}
            </div>
          )}

          {success && (
            <div className="dashboard__success">
              <CheckCircle size={18} /> Article published successfully! Redirecting...
            </div>
          )}

          <div className="dashboard__submit-bar">
            <button type="submit" className="btn-primary">
              <Save size={18} /> Publish to Blog
            </button>
          </div>

        </form>
      </main>
    </div>
  );
}

export default BlogDashboard;
