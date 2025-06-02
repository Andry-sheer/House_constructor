import type { LayerType, MaterialTab } from "../types/types";

export const layerImageMap: Record<MaterialTab, Record<LayerType, Record<number, string>>> = {
  antique: {
    wall: {
      1: "/assets/walls/layers-antique/w-antick.png",
    },
    angles: {
      1: "/assets/angles/layers-antique/c-antick.png",
    },
    corner: {
      1: "/assets/basement/layers-antique/b-antick.png",
    },
  },

  klinker: {
    wall: {
      1: "/assets/walls/layers-klincker/w-brick.png",
    },
    angles: {
      1: "/assets/angles/layers-klincker/c-brick.png",
    },
    corner: {
      1: "/assets/basement/layers-klincker/b-brick.png",
    },
  },

  marble: {
    wall: {
      1: "/assets/walls/layers-marble/w-marble.png",
      2: "/assets/walls/layers-marble/w-marble2.png",
    },
    angles: {
      1: "/assets/angles/layers-marble/c-marble.png",
      2: "/assets/angles/layers-marble/c-marble2.png",
    },
    corner: {
      1: "/assets/basement/layers-marble/b-marble.png",
      2: "/assets/basement/layers-marble/b-marble2.png",
    },
  },

  singleton: {
    wall: {
      1: "/assets/walls/layers-singletone/w-singletone2.png",
      2: "/assets/walls/layers-singletone/w-singletone.png",
      3: "/assets/walls/layers-singletone/w-singletone2.png",
    },
    angles: {
      1: "/assets/angles/layers-singletone/c-singletone.png",
      2: "/assets/angles/layers-singletone/c-singletone2.png",
    },
    corner: {
      1: "/assets/basement/layers-singletone/b-singletone.png",
      2: "/assets/basement/layers-singletone/b-singletone2.png",
    },
  },
};
