import { useState, useEffect } from 'react';
import PixelSprite from '../../utils/PixelSprite';
import './GameStart.css';

// Wall-E palette
// 0=transparent, 1=sandy-rust body, 2=dark tread, 3=amber eye,
// 4=dark shadow, 5=teal solar, 6=eye highlight
const WALLE_PALETTE = {
  0: 'none',
  1: '#a07840',
  2: '#1c1c1c',
  3: '#f5c220',
  4: '#4a2e0e',
  5: '#00ccaa',
  6: '#ddd8a0',
};

// Wall-E — frame A (treads position 1)
const FRAME_A = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,3,3,0,0,3,3,0,0,0,0,0,0],
  [0,0,0,3,3,6,3,3,3,6,3,0,0,0,0,0],
  [0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0],
  [0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,1,1,4,1,5,5,5,1,4,1,1,0,0,0],
  [0,0,1,1,4,1,5,5,5,1,4,1,1,0,0,0],
  [0,0,1,1,4,1,1,1,1,1,4,1,1,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
  [0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

// Wall-E — frame B (treads shifted for roll animation)
const FRAME_B = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,3,3,0,0,3,3,0,0,0,0,0,0],
  [0,0,0,3,3,6,3,3,3,6,3,0,0,0,0,0],
  [0,0,0,3,3,3,3,3,3,3,3,0,0,0,0,0],
  [0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [0,0,1,1,4,1,5,5,5,1,4,1,1,0,0,0],
  [0,0,1,1,4,1,5,5,5,1,4,1,1,0,0,0],
  [0,0,1,1,4,1,1,1,1,1,4,1,1,0,0,0],
  [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

const FIREFLIES = [
  { left: '7%',  bottom: '28%', size: 5,  delay: '0s',    dur: '4s'   },
  { left: '14%', bottom: '42%', size: 7,  delay: '0.7s',  dur: '3.2s' },
  { left: '24%', bottom: '33%', size: 4,  delay: '1.2s',  dur: '5s'   },
  { left: '34%', bottom: '52%', size: 6,  delay: '0.3s',  dur: '3.8s' },
  { left: '44%', bottom: '38%', size: 5,  delay: '2s',    dur: '4.5s' },
  { left: '54%', bottom: '48%', size: 7,  delay: '1.5s',  dur: '3.6s' },
  { left: '64%', bottom: '32%', size: 5,  delay: '0.8s',  dur: '4.2s' },
  { left: '74%', bottom: '58%', size: 4,  delay: '2.3s',  dur: '3s'   },
  { left: '83%', bottom: '43%', size: 6,  delay: '0.5s',  dur: '5.2s' },
  { left: '91%', bottom: '36%', size: 5,  delay: '1.8s',  dur: '3.9s' },
  { left: '29%', bottom: '62%', size: 3,  delay: '3s',    dur: '6s'   },
  { left: '68%', bottom: '68%', size: 4,  delay: '2.5s',  dur: '5.5s' },
];

export default function GameStart({ onStart }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setFrame(f => f === 0 ? 1 : 0), 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gs-root">

      {/* Floating teal particles */}
      {FIREFLIES.map((f, i) => (
        <div
          key={i}
          className="gs-firefly"
          style={{
            left: f.left,
            bottom: f.bottom,
            width: f.size,
            height: f.size,
            animationDelay: f.delay,
            animationDuration: f.dur,
          }}
        />
      ))}

      {/* Studio label */}
      <p className="gs-studio">✦ TINKERBOT STUDIOS ✦</p>

      {/* Titles */}
      <div className="gs-titles">
        <h1 className="gs-mainTitle">PATTI SHIN</h1>
        <div className="gs-divider" />
        <h2 className="gs-subTitle">SOFTWARE ENGINEER</h2>
        <p className="gs-tag">overgrown edition</p>
      </div>

      {/* Start button */}
      <button className="gs-startBtn" onClick={onStart}>
        [ PRESS START ]
      </button>

      {/* Scene: cyberpunk alley with overgrown buildings */}
      <div className="gs-scene">

        {/* Building silhouettes — left */}
        <div className="gs-ruin gs-ruin-l1" />
        <div className="gs-ruin gs-ruin-l2" />
        <div className="gs-ruin gs-ruin-l3" />
        {/* Building silhouettes — right */}
        <div className="gs-ruin gs-ruin-r1" />
        <div className="gs-ruin gs-ruin-r2" />
        <div className="gs-ruin gs-ruin-r3" />

        {/* Overgrown trees — dark silhouettes */}
        <div className="gs-tree gs-tree-l">
          <div className="gs-tree-canopy gs-tree-canopy-top" />
          <div className="gs-tree-canopy gs-tree-canopy-mid" />
          <div className="gs-tree-trunk" />
        </div>
        <div className="gs-tree gs-tree-r">
          <div className="gs-tree-canopy gs-tree-canopy-top" />
          <div className="gs-tree-canopy gs-tree-canopy-mid" />
          <div className="gs-tree-trunk" />
        </div>

        {/* Ground ivy clusters */}
        <div className="gs-bush gs-bush-l" />
        <div className="gs-bush gs-bush-r" />

        {/* Wall-E rolling sprite */}
        <div className="gs-sprite">
          <PixelSprite
            pixels={frame === 0 ? FRAME_A : FRAME_B}
            palette={WALLE_PALETTE}
            size={4}
          />
        </div>

        {/* Ground — dark stone */}
        <div className="gs-ground" />
      </div>
    </div>
  );
}
