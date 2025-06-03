import "normalize.css";
import { useEffect, useState } from "react";
import { useResetHouse } from "./hooks/useResetHouse";
import { HouseComponent } from "./components/HouseComponent/HouseComponent";
import { Control } from "./components/Control/Control";
import { Button } from "./components/Button/Button";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { getUpdatedLayer } from "./constants/layerUtils";
import { Loader } from "./components/Loader/Loader";
import type {
  LayerType,
  LayerFilterConfig,
  LayerConfig,
  SelectedMaterialPerLayer,
} from "./types/types";
import { filterMap } from "./constants/filterMap";
import { useDisableScroll } from "./hooks/useDisableScroll";
import { useLoaderTimer } from "./hooks/useLoaderTimer";
import { ResultModal } from "./components/ResultModal/ResultModal";
import styles from "./styles/App.module.scss";


export const App = () => {
  const layerTypes: LayerType[] = ["wall", "angles", "corner"];
  const [openModal, setOpenModal] = useState(false);
  const [activeLayer, setActiveLayer] = useState<LayerType>("wall");
  const [isValid, setIsValid] = useState(false);
  const [openResult, setOpenResult] = useState(false);
  const [showHide, setShowHide] = useState(false);

  const { isLoading, showLoader } = useLoaderTimer(1000, 1000);
  useDisableScroll(isLoading);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMaterials]);
  

  const getSelectedForModal = () => ({
    wall: selectedMaterials.wall.selected?.material || null,
    angles: selectedMaterials.angles.selected?.material || null,
    corner: selectedMaterials.corner.selected?.material || null,
  });

  const { resetHouse } = useResetHouse({
    setSelectedMaterials,
    setLayerVariants,
    setLayerFilters,
    setLayers,
  });

  return (
    <div className={styles.HouseConstructor}>
      {showLoader && <Loader isVisible={isLoading} />}
      <div className={styles.container} onClick={() => setShowHide(false)}>
        <div className={styles.containerInner}>
          <HouseComponent layers={layers} layerFilters={layerFilters} />

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
              onClick={isValid ? () => setOpenModal(true) : (e)=> {
                e.stopPropagation();
                setShowHide(true)}
              }
            />

            <div className={showHide ? styles.hint : styles.hintHide }>
              <p className={styles.hintTitle}>Щоб продовжити далі</p>
              <p className={styles.hintTitle}>спочатку оберіть категорії та кольори!</p>
            </div>
          </div>

          <Button
            className={
              isValid ? styles.btnOpenFormMobile : styles.btnOpenFormMobileDisabled
            }
            text="відправити заявку"
            onClick={isValid ? () => setOpenModal(true) : (e)=> {
              e.stopPropagation();
              setShowHide(true)}
            }
          />
        </div>
      </div> 

      <ModalWindow
        openModal={openModal}
        setOpenModal={setOpenModal}
        resetHouse={resetHouse}
        setOpenResult={setOpenResult}
        selectedMaterials={getSelectedForModal()}
      />

      <ResultModal openResult={openResult} setOpenResult={setOpenResult} />
    </div> 
  );
};
