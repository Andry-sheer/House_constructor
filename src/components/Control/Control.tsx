import { useEffect, useState } from "react";
import type { LayerConfig, LayerFilterConfig } from "../../App";
import type { TypeSelectTab } from "../../constants/layerPaths";
import type { TypeMaterial } from "../../constants/typeMaterial";
import type { MaterialTab } from "../../constants/filterMap";
import { filterMap } from "../../constants/filterMap";
import { Tabs } from "../Tabs/Tabs";
import { AnticArray } from "../../constants/antique";
import { klinkerArray } from "../../constants/klinker";
import { marbleArray } from "../../constants/marble";
import { SingleTonArray } from "../../constants/singleton";
import checkedMaterial from "/icons/selected.png";
import styles from "../../styles/Control.module.scss";

export type layersType = "wall" | "angles" | "corner";

type ControlProps = {
  activeLayer: layersType;
  setActiveLayer: (activeLayer: layersType) => void;
  layers: LayerConfig;
  setLayers: React.Dispatch<React.SetStateAction<LayerConfig>>;
  layerFilters: LayerFilterConfig;
  setLayerFilters: React.Dispatch<React.SetStateAction<LayerFilterConfig>>;
  selectTab: TypeSelectTab;
  setSelectTab: (selectTab: TypeSelectTab) => void;
  selectedMaterials: {
    wall: TypeMaterial | null;
    angles: TypeMaterial | null;
    corner: TypeMaterial | null;
  };
  setSelectedMaterials: React.Dispatch<
    React.SetStateAction<{
      wall: TypeMaterial | null;
      angles: TypeMaterial | null;
      corner: TypeMaterial | null;
    }>
  >;
};

export const Control = ({
  activeLayer,
  setSelectTab,
  setActiveLayer,
  setLayerFilters,
  selectedMaterials,
  setSelectedMaterials,
}: ControlProps) => {
  const [tab, setTab] = useState<
    "antique" | "singleton" | "marble" | "klinker"
  >("antique");

  if (tab === "antique") {
    setSelectTab("antique");
  } else if (tab === "klinker") {
    setSelectTab("klinker");
  } else if (tab === "marble") {
    setSelectTab("marble");
  } else {
    setSelectTab("singleton");
  }

  const colorArray: Record<
    "antique" | "singleton" | "marble" | "klinker",
    TypeMaterial[]
  > = {
    antique: AnticArray,
    singleton: SingleTonArray,
    marble: marbleArray,
    klinker: klinkerArray,
  };

  const [materials, setMaterials] = useState<TypeMaterial[]>(colorArray[tab]);

  const getFilterClass = (tab: MaterialTab, id: number): string => {
    return filterMap[tab][id] || "";
  };

  const handleClickColor = (clickedItem: TypeMaterial) => {
    const updatedMaterials = materials.map((item) =>
      item.id === clickedItem.id
        ? { ...item, isSelect: true }
        : { ...item, isSelect: false }
    );
    setMaterials(updatedMaterials);

    setSelectedMaterials((prev) => ({
      ...prev,
      [activeLayer]: clickedItem,
    }));

    const filterClassName = getFilterClass(tab, clickedItem.id);

    setLayerFilters((prev) => ({
      ...prev,
      [activeLayer]: filterClassName,
    }));
  };

  useEffect(() => {
    setMaterials(colorArray[tab].map((item) => ({ ...item, isSelect: false })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <div className={styles.controlPanel}>
      <div className={styles.layerSelector}>
        <div
          className={`${styles.selectLayer} ${
            activeLayer === "wall" ? styles.activeLayer : ""
          }`}
          onClick={() => setActiveLayer("wall")}
        >
          <div className={styles.checkBox}>
            {activeLayer === "wall" && (
              <span className={styles.checkBoxChecked}></span>
            )}
          </div>
          {`СТІНИ: ${
            selectedMaterials.wall
              ? `${selectedMaterials.wall.name}${selectedMaterials.wall.id}`
              : "не вибрано"
          }`}
        </div>

        <div
          className={`${styles.selectLayer} ${
            activeLayer === "angles" ? styles.activeLayer : ""
          }`}
          onClick={() => setActiveLayer("angles")}
        >
          <div className={styles.checkBox}>
            {activeLayer === "angles" && (
              <span className={styles.checkBoxChecked}></span>
            )}
          </div>
          {`КУТИ: ${
            selectedMaterials.angles
              ? `${selectedMaterials.angles.name}${selectedMaterials.angles.id}`
              : "не вибрано"
          }`}
        </div>

        <div
          className={`${styles.selectLayer} ${
            activeLayer === "corner" ? styles.activeLayer : ""
          }`}
          onClick={() => setActiveLayer("corner")}
        >
          <div className={styles.checkBox}>
            {activeLayer === "corner" && (
              <span className={styles.checkBoxChecked}></span>
            )}
          </div>
          {`ЦОКОЛЬ: ${
            selectedMaterials.corner
              ? `${selectedMaterials.corner.name}${selectedMaterials.corner.id}`
              : "не вибрано"
          }`}
        </div>
      </div>

      <Tabs tab={tab} setTab={setTab} />

      <div className={styles.colors}>
        {materials.map((item) => (
          <div
            className={styles.blockMaterial}
            onClick={() => handleClickColor(item)}
            key={item.id}
          >
            <img
              className={styles.materialBg}
              src={item.img}
              alt={`${item.name} ${item.id}`}
            />
            {item.isSelect && (
              <div className={styles.iconWrapper}>
                <img
                  className={styles.icon}
                  src={checkedMaterial}
                  alt="selected"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
