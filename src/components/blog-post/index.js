import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    Promise.all([
      fetch('/blog/manifest.json')
        .then(r => r.json())
        .then(data => data.posts?.find(p => p.slug === slug) ?? null)
        .catch(() => null),
      fetch(`/blog/${slug}.md`)
        .then(r => {
          if (!r.ok) throw new Error('not found');
          return r.text();
        }),
    ])
      .then(([postMeta, markdown]) => {
        setMeta(postMeta);
        setContent(markdown);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="bp-root">

      {/* ── Top bar ── */}
      <div className="bp-topbar">
        <button className="bp-back" onClick={() => navigate(-1)}>
          ◂ BACK
        </button>
        <span className="bp-breadcrumb">QUEST LOG / {slug}</span>
      </div>

      {loading && (
        <div className="bp-state">
          <span className="bp-stateText">LOADING SCROLL...</span>
        </div>
      )}

      {error && (
        <div className="bp-state">
          <span className="bp-stateText bp-error">404 — SCROLL NOT FOUND</span>
          <button className="bp-back" onClick={() => navigate('/')}>
            ◂ RETURN TO BASE
          </button>
        </div>
      )}

      {!loading && !error && (
        <article className="bp-article">

          {/* ── Post header ── */}
          <header className="bp-header">
            <div className="bp-stageBadge">QUEST LOG ENTRY</div>
            {meta && (
              <>
                <h1 className="bp-title">{meta.title}</h1>
                <div className="bp-meta">
                  <span className="bp-date">{meta.date}</span>
                  {meta.tags?.map(tag => (
                    <span key={tag} className="bp-tag">{tag}</span>
                  ))}
                </div>
              </>
            )}
            <div className="bp-divider" />
          </header>

          {/* ── Markdown content ── */}
          <div className="bp-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>

        </article>
      )}
    </div>
  );
}
