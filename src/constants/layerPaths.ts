
import type { MaterialTab } from "../types/types";

export const layerPaths: Record<
  MaterialTab,
  Record<"wall" | "angles" | "corner", string>
> = {
  antique: {
    wall: "/assets/walls/layers-antique/w-antick.png",
    angles: "/assets/angles/layers-antique/c-antick.png",
    corner: "/assets/basement/layers-antique/b-antick.png",
  },
  singleton: {
    wall: "/assets/walls/layers-singletone/w-singletone.png",
    angles: "/assets/angles/layers-singletone/c-singletone.png",
    corner: "/assets/basement/layers-singletone/b-singletone.png",
  },
  klinker: {
    wall: "/assets/walls/layers-klincker/w-brick.png",
    angles: "/assets/angles/layers-klincker/c-brick.png",
    corner: "/assets/basement/layers-klincker/b-brick.png",
  },
  marble: {
    wall: "/assets/walls/layers-marble/w-marble.png",
    angles: "/assets/angles/layers-marble/c-marble.png",
    corner: "/assets/basement/layers-marble/b-marble.png",
  },
};
