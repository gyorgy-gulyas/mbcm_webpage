"use client";

import dynamic from "next/dynamic";

const HeritageStarScene = dynamic(
  () =>
    import("./HeritageStarScene").then((m) => m.HeritageStarScene),
  { ssr: false }
);

export function CornerStar() {
  return <HeritageStarScene />;
}
