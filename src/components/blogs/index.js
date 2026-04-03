import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import './Blogs.css';

// Node anchor points — matching SVG viewBox 0 0 100 100
// Positions wind left-to-right like a river across the map
const MAP_POSITIONS = [
  { x: 8,  y: 60 },   // index 0 — latest post (Wall-E here)
  { x: 28, y: 38 },
  { x: 50, y: 65 },
  { x: 70, y: 35 },
  { x: 88, y: 57 },
];

// Cubic-bezier path winding through all 5 node anchors
const MAP_PATH =
  'M 8,60 C 18,60 20,38 28,38 C 38,38 42,65 50,65 C 60,65 62,35 70,35 C 80,35 80,57 88,57';

function WallE() {
  return (
    <svg
      className="wallE"
      viewBox="0 0 32 44"
      width="52"
      height="70"
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="8-bit Wall-E"
    >
      {/* Treads */}
      <rect x="1" y="34" width="30" height="9"  fill="#2e1e08" rx="3"/>
      <rect x="3" y="36" width="5"  height="5"  fill="#4a3010" rx="2"/>
      <rect x="13" y="36" width="5"  height="5"  fill="#4a3010" rx="2"/>
      <rect x="23" y="36" width="5"  height="5"  fill="#4a3010" rx="2"/>
      <rect x="1" y="38" width="30" height="1"  fill="#120b00" opacity="0.55"/>

      {/* Body */}
      <rect x="4" y="18" width="24" height="17" fill="#c8902c" rx="1"/>
      {/* Stripe */}
      <rect x="4" y="22" width="24" height="3"  fill="#a07020"/>
      {/* Solar panel */}
      <rect x="7" y="26" width="18" height="7"  fill="#1a4080" rx="1"/>
      <rect x="8" y="27" width="4"  height="5"  fill="#2458a8"/>
      <rect x="14" y="27" width="4"  height="5"  fill="#2458a8"/>
      <rect x="20" y="27" width="4"  height="5"  fill="#2458a8"/>

      {/* Neck */}
      <rect x="12" y="14" width="8" height="5" fill="#b07828"/>

      {/* Head */}
      <rect x="5" y="8" width="22" height="7" fill="#c8902c" rx="1"/>

      {/* Eye housings */}
      <rect x="4"  y="2" width="10" height="10" fill="#1a1a1a" rx="5"/>
      <rect x="18" y="2" width="10" height="10" fill="#1a1a1a" rx="5"/>
      {/* Eye bridge */}
      <rect x="13" y="4" width="6" height="6" fill="#282828"/>

      {/* Eye lenses */}
      <rect x="6"  y="4" width="6" height="6" fill="#40a8c8" rx="3"/>
      <rect x="20" y="4" width="6" height="6" fill="#40a8c8" rx="3"/>

      {/* Eye highlights */}
      <rect x="7"  y="5" width="2" height="2" fill="#a0e4f8"/>
      <rect x="21" y="5" width="2" height="2" fill="#a0e4f8"/>
      <rect x="10" y="8" width="1" height="1" fill="#60c0e0" opacity="0.6"/>
      <rect x="24" y="8" width="1" height="1" fill="#60c0e0" opacity="0.6"/>
    </svg>
  );
}

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

  // Merge real posts with locked placeholder slots
  const nodes = MAP_POSITIONS.map((pos, i) => ({
    ...pos,
    post:     posts[i] || null,
    locked:   !posts[i],
    isLatest: i === 0 && posts.length > 0,
  }));

  return (
    <Container maxWidth="lg" className="blogContainer">

      <div className="gameStageBanner">
        <div className="gsb-top">
          <span className="gsb-badge">STAGE 01</span>
          <div className="gsb-line" />
          <span className="gsb-title">SCROLL OF CHRONICLES</span>
          <div className="gsb-line" />
        </div>
        <p className="gsb-desc">🗺️ Navigate the map · Collect scrolls of wisdom · XP REWARD: 300 per level</p>
      </div>

      <h3 className="blogHeader">
        <div className="blogTitle">
          <span role="img" aria-label="map">🗺️</span>
          <span>{' Blog Map'}</span>
        </div>
      </h3>

      {loading && <p className="blogLoading">LOADING MAP...</p>}

      {!loading && (
        <div className="gameMapScrollWrapper">
          <div className="gameMapCanvas">

            {/* Winding river path */}
            <svg
              className="mapPathSvg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="riverGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="1.2" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Outer glow */}
              <path d={MAP_PATH} className="mapRiverGlow" filter="url(#riverGlow)"/>
              {/* Main river */}
              <path d={MAP_PATH} className="mapRiverMain"/>
              {/* Bright center line */}
              <path d={MAP_PATH} className="mapRiverCore"/>
            </svg>

            {/* Level nodes */}
            {nodes.map((node, i) => (
              <div
                key={i}
                className={[
                  'levelNode',
                  node.isLatest ? 'levelLatest' : '',
                  node.locked   ? 'levelLocked'  : '',
                ].join(' ')}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                {/* Cute Wall-E hovers above the latest level */}
                {node.isLatest && <WallE />}

                {/* Platform card */}
                <div className="levelPlatform">
                  <div className="levelBadge">LVL {i + 1}</div>

                  {!node.locked ? (
                    <button
                      className="levelButton"
                      onClick={() => navigate(`/blog/${node.post.slug}`)}
                      aria-label={`Read ${node.post.title}`}
                    >
                      <div className="levelTitle">{node.post.title}</div>
                      <div className="levelDate">{node.post.date}</div>
                      {node.isLatest && <div className="levelCurrent">▶ CURRENT</div>}
                      <div className="levelXP">+300 XP</div>
                    </button>
                  ) : (
                    <div className="levelLockBox">
                      <div className="levelLockIcon">🔒</div>
                      <div className="levelLockText">LOCKED</div>
                    </div>
                  )}
                </div>

                {/* 3-D stone base */}
                <div className="levelBase"/>
              </div>
            ))}

          </div>
        </div>
      )}

    </Container>
  );
}
