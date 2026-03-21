// Colour palette — plant core × vintage computer
const PALETTE = {
  0: 'none',      // transparent
  1: '#7bc950',   // leaf green
  2: '#1a2d14',   // dark forest (suit body)
  3: '#8b5e3c',   // bark / earth brown (boots)
  4: '#e8dcc8',   // warm cream (skin / highlights)
  5: '#e06890',   // flower pink (hair — whimsical)
  6: '#ccff44',   // firefly chartreuse (glow accents)
};

/**
 * Renders an inline SVG pixel-art sprite from a 16×16 pixel array.
 * Each value maps to PALETTE above.
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
