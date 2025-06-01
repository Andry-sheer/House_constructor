import type { LayerType, MaterialTab, TypeMaterial } from "../../types/types";
import type { ControlProps } from "../../types/material";
import { Tabs } from "../Tabs/Tabs";
import { AnticArray } from "../../constants/antique";
import { klinkerArray } from "../../constants/klinker";
import { marbleArray } from "../../constants/marble";
import { SingleTonArray } from "../../constants/singleton";
import checkedMaterial from "/icons/selected.png";
import styles from "../../styles/Control.module.scss";

const materialMap: Record<MaterialTab, TypeMaterial[]> = {
  antique: AnticArray,
  singleton: SingleTonArray,
  marble: marbleArray,
  klinker: klinkerArray,
};

export function Control({
  activeLayer,
  setActiveLayer,
  selectedMaterials,
  setSelectedMaterials,
  setLayerVariants,
}: ControlProps) {
  const activeTab = selectedMaterials[activeLayer].activeTab;
  const selected = selectedMaterials[activeLayer].selected;
  const materials = materialMap[activeTab];

  const handleTabChange = (tab: MaterialTab) => {
    setSelectedMaterials(prev => ({
      ...prev,
      [activeLayer]: {
        ...prev[activeLayer],
        activeTab: tab,
      },
    }));
  };

  const handleClickColor = (material: TypeMaterial) => {
    setSelectedMaterials(prev => ({
      ...prev,
      [activeLayer]: {
        selected: { tab: activeTab, material },
        activeTab,
      },
    }));

    setLayerVariants(prev => ({
      ...prev,
      [activeLayer]: 1,
    }));
  };

  const isSelected = (material: TypeMaterial) => {
    return selected?.tab === activeTab && selected.material.id === material.id;
  };

  return (
    <div className={styles.controlPanel}>

      <div className={styles.layerSelector}>
        {(["wall", "angles", "corner"] as LayerType[]).map(layer => {
          const selectedItemMaterial = selectedMaterials[layer].selected;
          return (
            <div
              key={layer}
              className={`${styles.selectLayer} ${
                activeLayer === layer ? styles.activeLayer : ""
              }`}
              onClick={() => setActiveLayer(layer)}
            >
              <div className={styles.checkBox}>
                {activeLayer === layer && <span className={styles.checkBoxChecked} />}
              </div>
              {layer === "wall" &&
                `СТІНИ: ${selectedItemMaterial ? `${selectedItemMaterial.material.name}: №${selectedItemMaterial.material.id}` : "не обрано"}`}
              {layer === "angles" &&
                `КУТИ: ${selectedItemMaterial ? `${selectedItemMaterial.material.name}: №${selectedItemMaterial.material.id}` : "не обрано"}`}
              {layer === "corner" &&
                `ЦОКОЛЬ: ${selectedItemMaterial ? `${selectedItemMaterial.material.name}: №${selectedItemMaterial.material.id}` : "не обрано"}`}
            </div>
          );
        })}
      </div>

      <Tabs tab={activeTab} setTab={handleTabChange} />

      <div className={styles.colors}>
        {materials.map(material => (
          <div
            key={material.id}
            className={styles.blockMaterial}
            onClick={() => handleClickColor(material)}
          >
            <img
              className={styles.materialBg}
              src={material.img}
              alt={`${material.name} ${material.id}`}
            />
            {isSelected(material) && (
              <div className={styles.iconWrapper}>
                <img className={styles.icon} src={checkedMaterial} alt="selected" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
