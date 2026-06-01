const ref = { current: 0 };

export function setScrollProgress(value: number) {
  ref.current = Math.max(0, Math.min(1, value));
}

export function getScrollProgress(): number {
  return ref.current;
}
