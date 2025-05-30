
import type { LayerType, MaterialTab, TypeMaterial } from "./types"

export type SelectedMaterialPerLayer = {
  selected: { tab: MaterialTab; material: TypeMaterial } | null;
  activeTab: MaterialTab;
};

export type ControlProps = {
  activeLayer: LayerType;
  setActiveLayer: (activeLayer: LayerType) => void;
  selectedMaterials: Record<LayerType, SelectedMaterialPerLayer>;
  setSelectedMaterials: React.Dispatch<
    React.SetStateAction<Record<LayerType, SelectedMaterialPerLayer>>
  >;
  layerVariants: Record<LayerType, number>;
  setLayerVariants: React.Dispatch<React.SetStateAction<Record<LayerType, number>>>;
};