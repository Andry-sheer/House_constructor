import type { LayerFilterConfig, LayerType, MaterialTab } from "../types/types";
import { layerImageMap } from "./layerImageMap";

export function getUpdatedLayer(
  selectTab: MaterialTab,
  layerVariants: Record<LayerType, number>,
  layerFilters: LayerFilterConfig,
  layerKey: LayerType
): string {
  let path = layerImageMap[selectTab][layerKey][layerVariants[layerKey]];

  if (layerKey === "wall") {
    {/* WALL SINGLETON */}
    if (layerFilters.wall === "singleton1") {
      path = "/assets/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton2") {
      path = "/assets/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton3") {
      path = "/assets/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton4") {
      path = "/assets/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton5") {
      path = "/assets/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton6") {
      path = "/assets/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton7") {
      path = "/assets/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton8") {
      path = "/assets/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton9") {
      path = "/assets/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton10") {
      path = "/assets/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton11") {
      path = "/assets/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton12") {
      path = "/assets/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton13") {
      path = "/assets/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton14") {
      path = "/assets/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton15") {
      path = "/assets/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton16") {
      path = "/assets/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton17") {
      path = "/assets/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton18") {
      path = "/assets/walls/layers-singletone/w-singletone.png";
    }

    {/* WALL MARBLE */}
    if (layerFilters.wall === "marble1") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble2") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble3") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble4") {
      path = "/assets/walls/layers-marble/w-marble2.png";
    } else if (layerFilters.wall === "marble5") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble6") {
      path = "/assets/walls/layers-marble/w-marble2.png";
    } else if (layerFilters.wall === "marble7") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble8") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble9") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble10") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble11") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble12") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble13") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble14") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble15") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble16") {
      path = "/assets/walls/layers-marble/w-marble2.png";
    } else if (layerFilters.wall === "marble17") {
      path = "/assets/walls/layers-marble/w-marble2.png";
    } else if (layerFilters.wall === "marble18") {
      path = "/assets/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble19") {
      path = "/assets/walls/layers-marble/w-marble2.png";
    } else if (layerFilters.wall === "marble20") {
      path = "/assets/walls/layers-marble/w-marble.png";
    }
  }

  if (layerKey === "angles") {
    {/* ANGLES SINGLETON */}
    if (layerFilters.angles === "singleton1") {
      path = "/assets/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton2") {
      path = "/assets/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton3") {
      path = "/assets/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton4") {
      path = "/assets/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton5") {
      path = "/assets/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton6") {
      path = "/assets/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton7") {
      path = "/assets/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton8") {
      path = "/assets/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton9") {
      path = "/assets/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton10") {
      path = "/assets/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton11") {
      path = "/assets/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton12") {
      path = "/assets/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton13") {
      path = "/assets/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton14") {
      path = "/assets/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton15") {
      path = "/assets/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton16") {
      path = "/assets/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton17") {
      path = "/assets/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton18") {
      path = "/assets/angles/layers-singletone/c-singletone.png";
    }

    {/* ANGLES MARBLE */}
    if (layerFilters.angles === "marble1") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble2") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble3") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble4") {
      path = "/assets/angles/layers-marble/c-marble2.png";
    } else if (layerFilters.angles === "marble5") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble6") {
      path = "/assets/angles/layers-marble/c-marble2.png";
    } else if (layerFilters.angles === "marble7") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble8") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble9") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble10") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble11") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble12") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble13") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble14") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble15") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble16") {
      path = "/assets/angles/layers-marble/c-marble2.png";
    } else if (layerFilters.angles === "marble17") {
      path = "/assets/angles/layers-marble/c-marble2.png";
    } else if (layerFilters.angles === "marble18") {
      path = "/assets/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble19") {
      path = "/assets/angles/layers-marble/c-marble2.png";
    } else if (layerFilters.angles === "marble20") {
      path = "/assets/angles/layers-marble/c-marble.png";
    }
  }

  if (layerKey === "corner") {
    {/* CORNER SINGLETON */}
    if (layerFilters.corner === "singleton1") {
      path = "/assets/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton2") {
      path = "/assets/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton3") {
      path = "/assets/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton4") {
      path = "/assets/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton5") {
      path = "/assets/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton6") {
      path = "/assets/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton7") {
      path = "/assets/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton8") {
      path = "/assets/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton9") {
      path = "/assets/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton10") {
      path = "/assets/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton11") {
      path = "/assets/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton12") {
      path = "/assets/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton13") {
      path = "/assets/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton14") {
      path = "/assets/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton15") {
      path = "/assets/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton16") {
      path = "/assets/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton17") {
      path = "/assets/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton18") {
      path = "/assets/basement/layers-singletone/b-singletone.png";
    }

    {/* CORNER MARBLE */}
    if (layerFilters.corner === "marble1") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble2") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble3") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble4") {
      path = "/assets/basement/layers-marble/b-marble2.png";
    } else if (layerFilters.corner === "marble5") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble6") {
      path = "/assets/basement/layers-marble/b-marble2.png";
    } else if (layerFilters.corner === "marble7") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble8") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble9") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble10") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble11") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble12") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble13") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble14") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble15") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble16") {
      path = "/assets/basement/layers-marble/b-marble2.png";
    } else if (layerFilters.corner === "marble17") {
      path = "/assets/basement/layers-marble/b-marble2.png";
    } else if (layerFilters.corner === "marble18") {
      path = "/assets/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble19") {
      path = "/assets/basement/layers-marble/b-marble2.png";
    } else if (layerFilters.corner === "marble20") {
      path = "/assets/basement/layers-marble/b-marble.png";
    }
  }

  return path;
}
