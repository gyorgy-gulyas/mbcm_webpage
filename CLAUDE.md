@AGENTS.md

# MBCM webpage — Claude session quickref

**Projekt:** Mercedes-Benz Classic Magyarország hivatalos klub-weblap. Részletes projekt-kontextus a memóriában (`memory/MEMORY.md`).

## Stack
- Next.js 16.2 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind v4 (CSS-first config, `@theme inline` blokk a `app/globals.css`-ben)
- React Three Fiber + drei (3D Mercedes csillag, később autó modellek)
- GSAP + @gsap/react (scroll/timeline animációk, még nem használt)
- Lenis (smooth scroll, még nem használt)
- Framer Motion (kisebb UI átmenetek, még nem használt)

## Mappastruktúra
- `app/` — Next.js App Router, `layout.tsx` és `page.tsx`
- `components/` — UI komponensek (NavBar, Hero, MercedesStar, StarScene, CustomCursor)
- `public/` — statikus assetek
  - `hero-placeholder.mp4` — **a felhasználó tölti fel** (Veo 3 generálta hero videó)
  - `hero-poster.svg` — fallback poster, ha nincs videó

## Dizájn tokenek (`app/globals.css`)
- `--background`: `#050505` (mély fekete)
- `--foreground`: `#f5f3ee` (krém)
- `--silver-bright` / `--silver` / `--silver-deep` — Mercedes ezüst tónusok
- `--accent`: `#9a8866` (meleg arany akcentus, klasszikus)
- Fontok: Inter (sans) + Cormorant Garamond (display serif)

## Futtatás
```
npm run dev    # localhost:3000
npm run build  # prod build, TypeScript ellenőrzés
```

## Jelenlegi állapot (2026-06-01)
- Hero szekció prototípus készen (§1 a wireframe-ből)
- A többi szekció a `app/page.tsx`-ben placeholderként szerepel
- Hero videó hiányzik (`public/hero-placeholder.mp4`) — gradient fallback aktív
