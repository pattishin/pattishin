import { useState, useEffect } from 'react';
import PixelSprite from '../../utils/PixelSprite';
import './GameStart.css';

// Pixel palette: 0=transparent, 1=teal, 2=navy, 3=blue, 4=white, 5=magenta
const FRAME_A = [
  [0,0,0,5,5,5,5,5,5,5,0,0,0,0,0,0],
  [0,0,5,5,4,4,4,4,4,5,5,5,0,0,0,0],
  [0,0,0,4,4,4,4,4,4,4,4,0,0,0,0,0],
  [0,0,0,4,3,4,4,4,3,4,4,0,0,0,0,0],
  [0,0,0,4,4,4,4,4,4,4,4,0,0,0,0,0],
  [0,0,0,0,4,1,4,4,1,4,0,0,0,0,0,0],
  [0,0,1,1,2,2,2,2,2,2,1,1,0,0,0,0],
  [0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0],
  [0,1,2,1,2,2,1,2,2,1,2,1,2,1,0,0],
  [0,0,1,2,2,2,1,2,2,1,2,2,1,0,0,0],
  [0,0,0,1,1,0,2,2,2,2,0,1,1,0,0,0],
  [0,0,0,2,2,0,2,2,2,2,0,2,2,0,0,0],
  [0,0,0,2,2,0,0,2,2,0,0,2,2,0,0,0],
  [0,0,0,3,3,0,0,0,0,0,0,3,3,0,0,0],
  [0,0,3,3,0,0,0,0,0,0,0,0,3,3,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

const FRAME_B = [
  [0,0,0,5,5,5,5,5,5,5,0,0,0,0,0,0],
  [0,0,5,5,4,4,4,4,4,5,5,5,0,0,0,0],
  [0,0,0,4,4,4,4,4,4,4,4,0,0,0,0,0],
  [0,0,0,4,3,4,4,4,3,4,4,0,0,0,0,0],
  [0,0,0,4,4,4,4,4,4,4,4,0,0,0,0,0],
  [0,0,0,0,4,1,4,4,1,4,0,0,0,0,0,0],
  [0,0,1,1,2,2,2,2,2,2,1,1,0,0,0,0],
  [0,1,2,2,2,2,2,2,2,2,2,2,1,0,0,0],
  [0,1,2,1,2,2,1,2,2,1,2,1,2,1,0,0],
  [0,0,1,2,2,2,1,2,2,1,2,2,1,0,0,0],
  [0,0,0,1,1,0,2,2,2,2,0,1,1,0,0,0],
  [0,0,2,2,0,0,0,2,2,0,0,0,2,2,0,0],
  [0,2,2,0,0,0,0,0,2,2,0,0,0,2,2,0],
  [0,2,3,0,0,0,0,0,0,3,0,0,0,3,2,0],
  [0,3,3,0,0,0,0,0,0,3,3,0,0,3,3,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

const DATA_BITS = [
  { left: '8%',  bottom: '30%', size: 6,  delay: '0s',    dur: '4s',  blue: false },
  { left: '15%', bottom: '45%', size: 8,  delay: '0.7s',  dur: '3s',  blue: true  },
  { left: '25%', bottom: '35%', size: 5,  delay: '1.2s',  dur: '5s',  blue: false },
  { left: '35%', bottom: '55%', size: 10, delay: '0.3s',  dur: '3.5s',blue: true  },
  { left: '45%', bottom: '40%', size: 6,  delay: '2s',    dur: '4.5s',blue: false },
  { left: '55%', bottom: '50%', size: 8,  delay: '1.5s',  dur: '3.8s',blue: false },
  { left: '65%', bottom: '35%', size: 6,  delay: '0.8s',  dur: '4.2s',blue: true  },
  { left: '75%', bottom: '60%', size: 5,  delay: '2.3s',  dur: '3.2s',blue: false },
  { left: '82%', bottom: '45%', size: 8,  delay: '0.5s',  dur: '5s',  blue: true  },
  { left: '90%', bottom: '38%', size: 6,  delay: '1.8s',  dur: '3.7s',blue: false },
  { left: '30%', bottom: '65%', size: 4,  delay: '3s',    dur: '6s',  blue: true  },
  { left: '70%', bottom: '70%', size: 5,  delay: '2.5s',  dur: '5.5s',blue: false },
];

export default function GameStart({ onStart }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setFrame(f => f === 0 ? 1 : 0), 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="gs-root">

      {/* Floating data particles */}
      {DATA_BITS.map((b, i) => (
        <div
          key={i}
          className="gs-dataBit"
          style={{
            left: b.left,
            bottom: b.bottom,
            width: b.size,
            height: b.size,
            animationDelay: b.delay,
            animationDuration: b.dur,
            background: b.blue ? 'var(--tron-blue)' : 'var(--tron-teal)',
            boxShadow: b.blue
              ? '0 0 8px var(--tron-blue), 0 0 20px rgba(0,136,255,0.5)'
              : '0 0 8px var(--tron-teal), 0 0 20px rgba(0,255,231,0.5)',
          }}
        />
      ))}

      {/* Studio label */}
      <p className="gs-studio">✦ PATTI SHIN STUDIOS ✦</p>

      {/* Titles */}
      <div className="gs-titles">
        <h1 className="gs-mainTitle">PATTI SHIN</h1>
        <div className="gs-divider" />
        <h2 className="gs-subTitle">THE HERO&apos;S JOURNEY</h2>
        <p className="gs-tag">on the grid</p>
      </div>

      {/* Start button */}
      <button className="gs-startBtn" onClick={onStart}>
        [ PRESS START ]
      </button>

      {/* Scene: Tron cityscape */}
      <div className="gs-scene">

        {/* Buildings — left side */}
        <div className="gs-bld gs-bld-l1" />
        <div className="gs-bld gs-bld-l2" />
        <div className="gs-bld gs-bld-l3" />
        {/* Buildings — right side */}
        <div className="gs-bld gs-bld-r1" />
        <div className="gs-bld gs-bld-r2" />
        <div className="gs-bld gs-bld-r3" />

        {/* Circuit trees — far ends */}
        <div className="gs-tree gs-tree-ll" />
        <div className="gs-tree gs-tree-rr" />

        {/* Walking sprite */}
        <div className="gs-sprite">
          <PixelSprite pixels={frame === 0 ? FRAME_A : FRAME_B} size={4} />
        </div>

        {/* Neon ground */}
        <div className="gs-ground" />
      </div>
    </div>
  );
}
