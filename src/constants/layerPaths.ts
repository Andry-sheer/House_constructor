
import type { MaterialTab } from "./types";

export const layerPaths: Record<
  MaterialTab,
  Record<"wall" | "angles" | "corner", string>
> = {
  antique: {
    wall: "/walls/layers-antique/w-antick.png",
    angles: "/angles/layers-antique/c-antick.png",
    corner: "/basement/layers-antique/b-antick.png",
  },
  singleton: {
    wall: "/walls/layers-singletone/w-singletone.png",
    angles: "/angles/layers-singletone/c-singletone.png",
    corner: "/basement/layers-singletone/b-singletone.png",
  },
  klinker: {
    wall: "/walls/layers-klincker/w-brick.png",
    angles: "/angles/layers-klincker/c-brick.png",
    corner: "/basement/layers-klincker/b-brick.png",
  },
  marble: {
    wall: "/walls/layers-marble/w-marble.png",
    angles: "/angles/layers-marble/c-marble.png",
    corner: "/basement/layers-marble/b-marble.png",
  },
};

console.log(layerPaths);
