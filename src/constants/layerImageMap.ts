import type { LayerType, MaterialTab } from "../types/types";

export const layerImageMap: Record<MaterialTab, Record<LayerType, Record<number, string>>> = {
  antique: {
    wall: {
      1: "/assets/images/walls/layers-antique/w-antick.png",
    },
    angles: {
      1: "/assets/images/angles/layers-antique/c-antick.png",
    },
    corner: {
      1: "/assets/images/basement/layers-antique/b-antick.png",
    },
  },

  klinker: {
    wall: {
      1: "/assets/images/walls/layers-klincker/w-brick.png",
    },
    angles: {
      1: "/assets/images/angles/layers-klincker/c-brick.png",
    },
    corner: {
      1: "/assets/images/basement/layers-klincker/b-brick.png",
    },
  },

  marble: {
    wall: {
      1: "/assets/images/walls/layers-marble/w-marble.png",
      2: "/assets/images/walls/layers-marble/w-marble2.png",
    },
    angles: {
      1: "/assets/images/angles/layers-marble/c-marble.png",
      2: "/assets/images/angles/layers-marble/c-marble2.png",
    },
    corner: {
      1: "/assets/images/basement/layers-marble/b-marble.png",
      2: "/assets/images/basement/layers-marble/b-marble2.png",
    },
  },

  singleton: {
    wall: {
      1: "/assets/images/walls/layers-singletone/w-singletone2.png",
      2: "/assets/images/walls/layers-singletone/w-singletone.png",
      3: "/assets/images/walls/layers-singletone/w-singletone2.png",
    },
    angles: {
      1: "/assets/images/angles/layers-singletone/c-singletone.png",
      2: "/assets/images/angles/layers-singletone/c-singletone2.png",
    },
    corner: {
      1: "/assets/images/basement/layers-singletone/b-singletone.png",
      2: "/assets/images/basement/layers-singletone/b-singletone2.png",
    },
  },
};
