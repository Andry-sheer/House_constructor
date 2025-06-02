
import type { MaterialTab } from "../types/types";

export const layerPaths: Record<
  MaterialTab,
  Record<"wall" | "angles" | "corner", string>
> = {
  antique: {
    wall: "/assets/images/walls/layers-antique/w-antick.png",
    angles: "/assets/images/angles/layers-antique/c-antick.png",
    corner: "/assets/images/basement/layers-antique/b-antick.png",
  },
  singleton: {
    wall: "/assets/images/walls/layers-singletone/w-singletone.png",
    angles: "/assets/images/angles/layers-singletone/c-singletone.png",
    corner: "/assets/images/basement/layers-singletone/b-singletone.png",
  },
  klinker: {
    wall: "/assets/images/walls/layers-klincker/w-brick.png",
    angles: "/assets/images/angles/layers-klincker/c-brick.png",
    corner: "/assets/images/basement/layers-klincker/b-brick.png",
  },
  marble: {
    wall: "/assets/images/walls/layers-marble/w-marble.png",
    angles: "/assets/images/angles/layers-marble/c-marble.png",
    corner: "/assets/images/basement/layers-marble/b-marble.png",
  },
};
