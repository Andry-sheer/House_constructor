import "normalize.css";
import styles from "./styles/App.module.scss";
import { useEffect, useState } from "react";
import { House } from "./components/House/House";
import { Control } from "./components/Control/Control";
import { Button } from "./components/Button/Button";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { getUpdatedLayer } from "./constants/layerUtils";
import type {
  LayerType,
  MaterialTab,
  TypeMaterial,
  LayerFilterConfig,
  LayerConfig,
} from "./types/types";
import { filterMap } from "./constants/filterMap";

const layerTypes: LayerType[] = ["wall", "angles", "corner"];

type SelectedMaterialPerLayer = {
  selected: { tab: MaterialTab; material: TypeMaterial } | null;
  activeTab: MaterialTab;
};

export const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeLayer, setActiveLayer] = useState<LayerType>("wall");

  const [selectedMaterials, setSelectedMaterials] = useState<
    Record<LayerType, SelectedMaterialPerLayer>
  >({
    wall: { selected: null, activeTab: "antique" },
    angles: { selected: null, activeTab: "antique" },
    corner: { selected: null, activeTab: "antique" },
  });

  const [layerVariants, setLayerVariants] = useState<Record<LayerType, number>>({
    wall: 1,
    angles: 1,
    corner: 1,
  });

  const [layerFilters, setLayerFilters] = useState<LayerFilterConfig>({
    wall: "",
    angles: "",
    corner: "",
  });

  const [layers, setLayers] = useState<LayerConfig>(() => {
    const initial: Partial<LayerConfig> = {};
    layerTypes.forEach(type => {
      initial[type] = getUpdatedLayer(
        "antique",
        { wall: 1, angles: 1, corner: 1 },
        { wall: "", angles: "", corner: "" },
        type
      );
    });
    return initial as LayerConfig;
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const selected = selectedMaterials[activeLayer].selected;
    if (!selected) return;

    const { tab, material } = selected;
    const filter = filterMap[tab][material.id] || "";

    setLayerFilters(prev => ({
      ...prev,
      [activeLayer]: filter,
    }));

    const updatedPath = getUpdatedLayer(
      tab,
      layerVariants,
      { ...layerFilters, [activeLayer]: filter },
      activeLayer
    );

    setLayers(prev => ({
      ...prev,
      [activeLayer]: updatedPath,
    }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMaterials[activeLayer].selected, activeLayer, layerVariants]);

  useEffect(() => {
    const allSelected = layerTypes.every(
      type => selectedMaterials[type].selected !== null
    );
    setIsValid(allSelected);
  }, [selectedMaterials]);

  const getSelectedForModal = () => ({
    wall: selectedMaterials.wall.selected?.material || null,
    angles: selectedMaterials.angles.selected?.material || null,
    corner: selectedMaterials.corner.selected?.material || null,
  });

  return (
    <div className={styles.HouseConstructor}>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <House layers={layers} layerFilters={layerFilters} />

          <div className={styles.subContainer}>
            <Control
              activeLayer={activeLayer}
              setActiveLayer={setActiveLayer}
              selectedMaterials={selectedMaterials}
              setSelectedMaterials={setSelectedMaterials}
              layerVariants={layerVariants}
              setLayerVariants={setLayerVariants}
            />

            <Button
              className={isValid ? styles.btnOpenForm : styles.btnOpenFormDisabled}
              text="відправити заявку"
              onClick={isValid ? () => setOpenModal(true) : undefined}
            />
          </div>

          <Button
            className={
              isValid ? styles.btnOpenFormMobile : styles.btnOpenFormMobileDisabled
            }
            text="відправити заявку"
            onClick={isValid ? () => setOpenModal(true) : undefined}
          />
        </div>
      </div>

      <ModalWindow
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedMaterials={getSelectedForModal()}
      />
    </div>
  );
};
