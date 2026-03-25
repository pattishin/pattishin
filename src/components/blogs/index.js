import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import './Blogs.css';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/blog/manifest.json')
      .then(r => r.json())
      .then(data => {
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="lg" className="blogContainer">

      <div className="gameStageBanner">
        <div className="gsb-top">
          <span className="gsb-badge">STAGE 01</span>
          <div className="gsb-line" />
          <span className="gsb-title">SCROLL OF CHRONICLES</span>
          <div className="gsb-line" />
        </div>
        <p className="gsb-desc">📖 Collect scrolls of wisdom  ·  XP REWARD: 300</p>
      </div>

      <h3 className="blogHeader">
        <div className="blogTitle">
          <span role="img" aria-label="pen">🖋️</span>
          <span>{" Blog"}</span>
        </div>
      </h3>

      {loading && (
        <p className="blogLoading">LOADING SCROLLS...</p>
      )}

      <Grid2 container spacing={3}>
        {posts.map(post => (
          <Grid2 key={post.slug} size={{ xs: 12, lg: 4 }}>
            <button
              className="blogCard"
              onClick={() => navigate(`/blog/${post.slug}`)}
              aria-label={`Read ${post.title}`}
            >
              <div className="blogQuestTag">ACTIVE QUEST ▶</div>
              <h4 className="blogCardTitle">{post.title}</h4>
              <p className="blogCardDate">{post.date}</p>
              <p className="blogCardDesc">{post.description}</p>
              {post.tags && (
                <div className="blogCardTags">
                  {post.tags.map(tag => (
                    <span key={tag} className="blogCardTag">{tag}</span>
                  ))}
                </div>
              )}
              <div className="blogXPReward">+ 300 XP</div>
            </button>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
