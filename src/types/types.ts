import type { ReactNode } from "react";

import type { IconType } from "react-icons";

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

export type HouseProps = {
  layers: LayerConfig;
  layerFilters: LayerFilterConfig;
};

export type propsButton = {
  text?: string;
  type?: "submit" | "reset" | "button";
  className: string;
  disable?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
};


export type IconProps = {
  icon: IconType;
  size?: string | number;
  className?: string;
  color?: string;
  fill?: string;
};


export type ModalProps = {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  selectedMaterials: {
    wall: TypeMaterial | null;
    angles: TypeMaterial | null;
    corner: TypeMaterial | null;
  };
};


export type TypeTabs = {
  tab: string;
  setTab: (tab: MaterialTab) => void;
};

export type SelectedMaterialPerLayer = {
  selected: { tab: MaterialTab; material: TypeMaterial } | null;
  activeTab: MaterialTab;
};
