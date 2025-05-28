import "normalize.css";
import styles from "./styles/App.module.scss";
import { useEffect, useState } from "react";
import { House } from "./components/House/House";
import { Control } from "./components/Control/Control";
import { Button } from "./components/Button/Button";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { getUpdatedLayer } from "./constants/layerUtils";
import type { LayerType, MaterialTab, LayerFilterConfig, LayerConfig, TypeMaterial } from "./constants/types";

const layerTypes: LayerType[] = ["wall", "angles", "corner"];

export const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectTab, setSelectTab] = useState<MaterialTab>("antique");
  const [activeLayer, setActiveLayer] = useState<LayerType>("wall");

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
      initial[type] = getUpdatedLayer("antique", {
        wall: 1,
        angles: 1,
        corner: 1,
      }, {
        wall: "",
        angles: "",
        corner: "",
      }, type);
    });
    return initial as LayerConfig;
  });

  const [selectedMaterials, setSelectedMaterials] = useState<Record<LayerType, TypeMaterial | null>>({
    wall: null,
    angles: null,
    corner: null,
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setLayerVariants(prev => ({
      ...prev,
      [activeLayer]: 1,
    }));
  }, [selectTab, activeLayer]);

  useEffect(() => {
    const updatedPath = getUpdatedLayer(selectTab, layerVariants, layerFilters, activeLayer);
    setLayers(prev => ({
      ...prev,
      [activeLayer]: updatedPath,
    }));
  }, [selectTab, layerVariants, layerFilters, activeLayer]);

  useEffect(() => {
    const allSelected = layerTypes.every(type => selectedMaterials[type]);
    setIsValid(allSelected);
  }, [selectedMaterials]);

  return (
    <div className={styles.HouseConstructor}>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <House layers={layers} layerFilters={layerFilters} />

          <div className={styles.subContainer}>
            <Control
              activeLayer={activeLayer}
              setActiveLayer={setActiveLayer}
              layerFilters={layerFilters}
              setLayerFilters={setLayerFilters}
              selectTab={selectTab}
              setSelectTab={setSelectTab}
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
        selectedMaterials={selectedMaterials}
      />
    </div>
  );
};