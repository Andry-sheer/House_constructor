import type { LayerType, MaterialTab } from "./types";

export const layerImageMap: Record<MaterialTab, Record<LayerType, Record<number, string>>> = {
  antique: {
    wall: {
      1: "/walls/layers-antique/w-antick.png",
    },
    angles: {
      1: "/angles/layers-antique/c-antick.png",
    },
    corner: {
      1: "/basement/layers-antique/b-antick.png",
    },
  },

  klinker: {
    wall: {
      1: "/walls/layers-klincker/w-brick.png",
    },
    angles: {
      1: "/angles/layers-klincker/c-brick.png",
    },
    corner: {
      1: "/basement/layers-klincker/b-brick.png",
    },
  },

  marble: {
    wall: {
      1: "/walls/layers-marble/w-marble.png",
      2: "/walls/layers-marble/w-marble2.png",
    },
    angles: {
      1: "/angles/layers-marble/c-marble.png",
      2: "/angles/layers-marble/c-marble2.png",
    },
    corner: {
      1: "/basement/layers-marble/b-marble.png",
      2: "/basement/layers-marble/b-marble2.png",
    },
  },

  singleton: {
    wall: {
      1: "/walls/layers-singletone/w-singletone2.png",
      2: "/walls/layers-singletone/w-singletone.png",
      3: "/walls/layers-singletone/w-singletone2.png",
    },
    angles: {
      1: "/angles/layers-singletone/c-singletone.png",
      2: "/angles/layers-singletone/c-singletone2.png",
    },
    corner: {
      1: "/basement/layers-singletone/b-singletone.png",
      2: "/basement/layers-singletone/b-singletone2.png",
    },
  },
};
