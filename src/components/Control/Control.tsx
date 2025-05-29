import { useEffect, useState } from "react";
import type { LayerFilterConfig, MaterialTab, LayerType, TypeMaterial } from "../../constants/types";
import { filterMap } from "../../constants/filterMap";
import { Tabs } from "../Tabs/Tabs";
import { AnticArray } from "../../constants/antique";
import { klinkerArray } from "../../constants/klinker";
import { marbleArray } from "../../constants/marble";
import { SingleTonArray } from "../../constants/singleton";
import checkedMaterial from "/icons/selected.png";
import styles from "../../styles/Control.module.scss";

type ControlProps = {
  activeLayer: LayerType;
  setActiveLayer: (activeLayer: LayerType) => void;
  layerFilters: LayerFilterConfig;
  setLayerFilters: React.Dispatch<React.SetStateAction<LayerFilterConfig>>;
  selectTab: MaterialTab;
  setSelectTab: (selectTab: MaterialTab) => void;
  selectedMaterials: Record<LayerType, TypeMaterial | null>;
  setSelectedMaterials: React.Dispatch<React.SetStateAction<Record<LayerType, TypeMaterial | null>>>;
  layerVariants: Record<LayerType, number>;
  setLayerVariants: React.Dispatch<React.SetStateAction<Record<LayerType, number>>>;
};

const materialMap: Record<MaterialTab, TypeMaterial[]> = {
  antique: AnticArray,
  singleton: SingleTonArray,
  marble: marbleArray,
  klinker: klinkerArray,
};

export const Control = ({
  activeLayer,
  setActiveLayer,
  setLayerFilters,
  selectTab,
  setSelectTab,
  selectedMaterials,
  setSelectedMaterials,
  setLayerVariants,
}: ControlProps) => {
  const [tab, setTab] = useState<MaterialTab>(selectTab);
  const [materials, setMaterials] = useState<TypeMaterial[]>([]);

  useEffect(() => {
    setTab(selectTab);
  }, [selectTab]);

  useEffect(() => {
    setSelectTab(tab);
    setLayerVariants(prev => ({ ...prev, [activeLayer]: 1 }));

    const newMaterials = materialMap[tab];
    const firstMaterial = newMaterials[0] || null;

    setSelectedMaterials(prev => ({
      ...prev,
      [activeLayer]: firstMaterial,
    }));

    setLayerFilters(prev => ({
      ...prev,
      [activeLayer]: firstMaterial ? filterMap[tab][firstMaterial.id] : "",
    }));

    setMaterials(
      newMaterials.map(item => ({
        ...item,
        isSelect: item.id === firstMaterial?.id,
      }))
    );
  }, [tab]);

  const handleClickColor = (clickedItem: TypeMaterial) => {
    setMaterials(prev =>
      prev.map(item => ({
        ...item,
        isSelect: item.id === clickedItem.id,
      }))
    );

    setSelectedMaterials(prev => ({
      ...prev,
      [activeLayer]: clickedItem,
    }));

    setLayerFilters(prev => ({
      ...prev,
      [activeLayer]: filterMap[tab][clickedItem.id] || "",
    }));
  };

  return (
    <div className={styles.controlPanel}>
      <div className={styles.layerSelector}>
        {(["wall", "angles", "corner"] as LayerType[]).map(layer => (
          <div
            key={layer}
            className={`${styles.selectLayer} ${activeLayer === layer ? styles.activeLayer : ""}`}
            onClick={() => setActiveLayer(layer)}
          >
            <div className={styles.checkBox}>
              {activeLayer === layer && <span className={styles.checkBoxChecked}></span>}
            </div>
            {layer === "wall" &&
              `СТІНИ: ${selectedMaterials.wall ? `${selectedMaterials.wall.name} ${selectedMaterials.wall.id}` : "не вибрано"}`}
            {layer === "angles" &&
              `КУТИ: ${selectedMaterials.angles ? `${selectedMaterials.angles.name} ${selectedMaterials.angles.id}` : "не вибрано"}`}
            {layer === "corner" &&
              `ЦОКОЛЬ: ${selectedMaterials.corner ? `${selectedMaterials.corner.name} ${selectedMaterials.corner.id}` : "не вибрано"}`}
          </div>
        ))}
      </div>

      <Tabs tab={tab} setTab={setTab} />

      <div className={styles.colors}>
        {materials.map(item => (
          <div
            key={item.id}
            className={styles.blockMaterial}
            onClick={() => handleClickColor(item)}
          >
            <img
              className={styles.materialBg}
              src={item.img}
              alt={`${item.name} ${item.id}`}
            />
            {item.isSelect && (
              <div className={styles.iconWrapper}>
                <img className={styles.icon} src={checkedMaterial} alt="selected" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};