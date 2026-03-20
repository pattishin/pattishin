// Color palette for the Tron/8-bit theme
const PALETTE = {
  0: 'none',        // transparent
  1: '#00ffe7',     // primary teal
  2: '#001a33',     // dark navy (screen/body fill)
  3: '#0088ff',     // electric blue
  4: '#ffffff',     // white highlight
  5: '#ff00ff',     // magenta accent
  6: '#7fff00',     // lime green (firefly glow)
};

/**
 * Renders an inline SVG pixel-art sprite from a 16x16 pixel array.
 * Each value in the array maps to PALETTE above.
 */
export default function PixelSprite({ pixels, size = 8, className }) {
  const dim = 16 * size;
  return (
    <svg
      width={dim}
      height={dim}
      viewBox={`0 0 ${dim} ${dim}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ imageRendering: 'pixelated', display: 'block' }}
    >
      {pixels.map((row, r) =>
        row.map((col, c) =>
          col !== 0 ? (
            <rect
              key={`${r}-${c}`}
              x={c * size}
              y={r * size}
              width={size}
              height={size}
              fill={PALETTE[col]}
            />
          ) : null
        )
      )}
    </svg>
  );
}
