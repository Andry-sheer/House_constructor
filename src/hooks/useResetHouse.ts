
import { useCallback } from "react";
import type { LayerType, LayerConfig, SelectedMaterialPerLayer } from "../types/types";
import { getUpdatedLayer } from "../constants/layerUtils";

interface UseResetHouseProps {
  setSelectedMaterials: React.Dispatch<React.SetStateAction<Record<LayerType, SelectedMaterialPerLayer>>>;
  setLayerVariants: React.Dispatch<React.SetStateAction<Record<LayerType, number>>>;
  setLayerFilters: React.Dispatch<React.SetStateAction<Record<LayerType, string>>>;
  setLayers: React.Dispatch<React.SetStateAction<LayerConfig>>;
}

export const useResetHouse = ({
  setSelectedMaterials,
  setLayerVariants,
  setLayerFilters,
  setLayers,
}: UseResetHouseProps) => {
  const resetHouse = useCallback(() => {
    const initialMaterials: Record<LayerType, SelectedMaterialPerLayer> = {
      wall: { selected: null, activeTab: "antique" },
      angles: { selected: null, activeTab: "antique" },
      corner: { selected: null, activeTab: "antique" },
    };

    const initialVariants = { wall: 1, angles: 1, corner: 1 };
    const initialFilters = { wall: "", angles: "", corner: "" };

    const initialLayers: LayerConfig = {
      wall: getUpdatedLayer("antique", initialVariants, initialFilters, "wall"),
      angles: getUpdatedLayer("antique", initialVariants, initialFilters, "angles"),
      corner: getUpdatedLayer("antique", initialVariants, initialFilters, "corner"),
    };

    setSelectedMaterials(initialMaterials);
    setLayerVariants(initialVariants);
    setLayerFilters(initialFilters);
    setLayers(initialLayers);
  }, [setSelectedMaterials, setLayerVariants, setLayerFilters, setLayers]);

  return { resetHouse };
};