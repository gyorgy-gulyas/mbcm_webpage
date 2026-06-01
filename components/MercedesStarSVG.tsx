type Props = {
  size?: number;
  className?: string;
  strokeOpacity?: number;
  fillOpacity?: number;
};

export function MercedesStarSVG({
  size = 72,
  className = "",
  strokeOpacity = 0.45,
  fillOpacity = 0.9,
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden
    >
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity={strokeOpacity}
      />
      <path
        d="M 50 16 L 58.7 44 L 80.3 67 L 50 60.5 L 19.7 67 L 41.3 44 Z"
        fill="currentColor"
        fillOpacity={fillOpacity}
      />
    </svg>
  );
}
