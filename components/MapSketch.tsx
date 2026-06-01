type Props = {
  className?: string;
};

export function MapSketch({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      aria-label="Térképvázlat — 1239 Budapest, Haraszti út 48"
      role="img"
    >
      <rect
        x="0.5"
        y="0.5"
        width="239"
        height="239"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="0.6"
      />

      <g stroke="currentColor" strokeOpacity="0.12" strokeWidth="0.5">
        <line x1="0" y1="56" x2="240" y2="56" />
        <line x1="0" y1="118" x2="240" y2="118" />
        <line x1="0" y1="178" x2="240" y2="178" />
        <line x1="64" y1="0" x2="64" y2="240" />
        <line x1="176" y1="0" x2="176" y2="240" />
      </g>

      <g stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.2">
        <line x1="0" y1="36" x2="240" y2="46" />
        <line x1="20" y1="240" x2="50" y2="0" />
        <line x1="32" y1="220" x2="225" y2="200" />
      </g>

      <line
        x1="6"
        y1="208"
        x2="234"
        y2="42"
        stroke="currentColor"
        strokeOpacity="0.92"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      <g transform="translate(120 124)">
        <circle
          r="20"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />
        <circle r="12" fill="currentColor" fillOpacity="0.08" />
        <circle r="4.5" fill="currentColor" />
      </g>

      <g
        fill="currentColor"
        fontFamily="var(--font-inter), sans-serif"
        fontWeight="500"
        textAnchor="middle"
      >
        <text x="120" y="163" fontSize="8" letterSpacing="2.4">
          HARASZTI ÚT 48
        </text>
      </g>

      <g
        fill="currentColor"
        fillOpacity="0.6"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="7"
        letterSpacing="2.8"
      >
        <text x="14" y="226">XXIII · SOROKSÁR</text>
        <text x="226" y="226" textAnchor="end">
          1239
        </text>
      </g>

      <g
        transform="translate(212 18)"
        fill="currentColor"
        fillOpacity="0.55"
        fontFamily="var(--font-inter), sans-serif"
        fontSize="8"
      >
        <text textAnchor="end">N</text>
        <line
          x1="3"
          y1="2"
          x2="3"
          y2="-7"
          stroke="currentColor"
          strokeOpacity="0.55"
          strokeWidth="0.8"
        />
        <polygon points="0,-5 3,-9 6,-5" fill="currentColor" fillOpacity="0.55" />
      </g>
    </svg>
  );
}
