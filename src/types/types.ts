import type { ReactNode } from "react";

import type { IconType } from "react-icons";

export type TypeText = "text" | "number" | "email" | "password" | "tel";

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

export type HouseComponentProps = {
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
  resetHouse: () => void;
  setOpenModal: (open: boolean) => void;
  setOpenResult: (open: boolean)=> void;
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

export type InputProps = {
  id?: string;
  type: TypeText;
  value: string;
  name?: string;
  className: string;
  placeholder?: string;
  disabled?: boolean;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type Material = {
  id: number;
  name: string;
};

export type SelectedMaterials = {
  wall?: Material | null;
  corner?: Material | null;
  angles?: Material | null;
};

export type FormProps = {
  selectedMaterials: SelectedMaterials;
  setOpenModal: (val: boolean) => void;
  setOpenResult: (open: boolean)=> void;
  resetHouse: ()=> void
};

export type ValidationParams = {
  name: string;
  phone: string;
  email: string;
  setErrorName: (val: boolean) => void;
  setErrorPhone: (val: boolean) => void;
  setErrorEmail: (val: boolean) => void;
};


export type ResultModalProps = {
  openResult: boolean
  setOpenResult: (open: boolean)=> void;
}
