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
      path = "/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton2") {
      path = "/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton3") {
      path = "/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton4") {
      path = "/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton5") {
      path = "/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton6") {
      path = "/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton7") {
      path = "/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton8") {
      path = "/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton9") {
      path = "/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton10") {
      path = "/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton11") {
      path = "/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton12") {
      path = "/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton13") {
      path = "/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton14") {
      path = "/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton15") {
      path = "/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton16") {
      path = "/walls/layers-singletone/w-singletone.png";
    } else if (layerFilters.wall === "singleton17") {
      path = "/walls/layers-singletone/w-singletone2.png";
    } else if (layerFilters.wall === "singleton18") {
      path = "/walls/layers-singletone/w-singletone.png";
    }

    {/* WALL MARBLE */}
    if (layerFilters.wall === "marble1") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble2") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble3") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble4") {
      path = "/walls/layers-marble/w-marble2.png";
    } else if (layerFilters.wall === "marble5") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble6") {
      path = "/walls/layers-marble/w-marble2.png";
    } else if (layerFilters.wall === "marble7") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble8") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble9") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble10") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble11") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble12") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble13") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble14") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble15") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble16") {
      path = "/walls/layers-marble/w-marble2.png";
    } else if (layerFilters.wall === "marble17") {
      path = "/walls/layers-marble/w-marble2.png";
    } else if (layerFilters.wall === "marble18") {
      path = "/walls/layers-marble/w-marble.png";
    } else if (layerFilters.wall === "marble19") {
      path = "/walls/layers-marble/w-marble2.png";
    } else if (layerFilters.wall === "marble20") {
      path = "/walls/layers-marble/w-marble.png";
    }
  }

  if (layerKey === "angles") {
    {/* ANGLES SINGLETON */}
    if (layerFilters.angles === "singleton1") {
      path = "/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton2") {
      path = "/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton3") {
      path = "/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton4") {
      path = "/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton5") {
      path = "/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton6") {
      path = "/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton7") {
      path = "/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton8") {
      path = "/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton9") {
      path = "/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton10") {
      path = "/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton11") {
      path = "/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton12") {
      path = "/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton13") {
      path = "/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton14") {
      path = "/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton15") {
      path = "/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton16") {
      path = "/angles/layers-singletone/c-singletone.png";
    } else if (layerFilters.angles === "singleton17") {
      path = "/angles/layers-singletone/c-singletone2.png";
    } else if (layerFilters.angles === "singleton18") {
      path = "/angles/layers-singletone/c-singletone.png";
    }

    {/* ANGLES MARBLE */}
    if (layerFilters.angles === "marble1") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble2") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble3") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble4") {
      path = "/angles/layers-marble/c-marble2.png";
    } else if (layerFilters.angles === "marble5") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble6") {
      path = "/angles/layers-marble/c-marble2.png";
    } else if (layerFilters.angles === "marble7") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble8") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble9") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble10") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble11") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble12") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble13") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble14") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble15") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble16") {
      path = "/angles/layers-marble/c-marble2.png";
    } else if (layerFilters.angles === "marble17") {
      path = "/angles/layers-marble/c-marble2.png";
    } else if (layerFilters.angles === "marble18") {
      path = "/angles/layers-marble/c-marble.png";
    } else if (layerFilters.angles === "marble19") {
      path = "/angles/layers-marble/c-marble2.png";
    } else if (layerFilters.angles === "marble20") {
      path = "/angles/layers-marble/c-marble.png";
    }
  }

  if (layerKey === "corner") {
    {/* CORNER SINGLETON */}
    if (layerFilters.corner === "singleton1") {
      path = "/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton2") {
      path = "/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton3") {
      path = "/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton4") {
      path = "/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton5") {
      path = "/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton6") {
      path = "/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton7") {
      path = "/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton8") {
      path = "/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton9") {
      path = "/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton10") {
      path = "/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton11") {
      path = "/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton12") {
      path = "/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton13") {
      path = "/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton14") {
      path = "/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton15") {
      path = "/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton16") {
      path = "/basement/layers-singletone/b-singletone.png";
    } else if (layerFilters.corner === "singleton17") {
      path = "/basement/layers-singletone/b-singletone2.png";
    } else if (layerFilters.corner === "singleton18") {
      path = "/basement/layers-singletone/b-singletone.png";
    }

    {/* CORNER MARBLE */}
    if (layerFilters.corner === "marble1") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble2") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble3") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble4") {
      path = "/basement/layers-marble/b-marble2.png";
    } else if (layerFilters.corner === "marble5") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble6") {
      path = "/basement/layers-marble/b-marble2.png";
    } else if (layerFilters.corner === "marble7") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble8") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble9") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble10") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble11") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble12") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble13") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble14") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble15") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble16") {
      path = "/basement/layers-marble/b-marble2.png";
    } else if (layerFilters.corner === "marble17") {
      path = "/basement/layers-marble/b-marble2.png";
    } else if (layerFilters.corner === "marble18") {
      path = "/basement/layers-marble/b-marble.png";
    } else if (layerFilters.corner === "marble19") {
      path = "/basement/layers-marble/b-marble2.png";
    } else if (layerFilters.corner === "marble20") {
      path = "/basement/layers-marble/b-marble.png";
    }
  }

  return path;
}
