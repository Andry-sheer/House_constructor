export type LayerType = "wall" | "angles" | "corner";

export type MaterialTab = "antique" | "singleton" | "klinker" | "marble";

export type LayerConfig = Record<LayerType, string>;

export type LayerFilterConfig = Record<LayerType, string>;

export type TypeMaterial = {
  name: string;
  img: string;
  id: number;
  isSelect?: boolean;
};
