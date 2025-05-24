import { useEffect, useState } from "react";
import { Tabs } from "../Tabs/Tabs";
import { AnticArray } from "../../constants/antique";
import { klinkerArray } from "../../constants/klinker";
import { marbleArray } from "../../constants/marble";
import { SingleTonArray } from "../../constants/singleton";
import type { TypeMaterial } from "../../constants/typeMaterial";
import checkedMaterial from '/icons/selected.png';
import styles from "../../styles/Control.module.scss";

export type layersType = "wall" | "angles" | "corner";

type ActiveLayer = {
  activeLayer: string;
  setActiveLayer: (activeLayer: layersType) => void;
};

export const Control = ({ activeLayer, setActiveLayer }: ActiveLayer) => {
  const [tab, setTab] = useState<
    "antique" | "singleton" | "marble" | "klinker"
  >("antique");


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

  // type TypeItem = {
  //   isSelect: boolean
  //   id: number
  //   name: string
  //   img: string
  // }

  // const handleClickColor = (item): TypeItem => {
  //   if (item.isSelect === 'true')
  //   console.log(`item: ${item.isSelect}`)
  // }

useEffect(() => {
  setMaterials(colorArray[tab].map(item => ({ ...item, isSelect: false })));
}, [tab]);


const handleClickColor = (clickedItem: TypeMaterial) => {
  const updatedMaterials = materials.map(item =>
    item.id === clickedItem.id ? { ...item, isSelect: true } : { ...item, isSelect: false } 
  );
  setMaterials(updatedMaterials);
};




  return (
    <div className={styles.controlPanel}>
      <div className={styles.layerSelector}>
        <div
          className={`${styles.selectLayer} ${activeLayer === 'wall' ? styles.activeLayer : ""}`}
          onClick={() => setActiveLayer("wall")}
        >
          <div className={styles.checkBox}>
            {activeLayer === 'wall' && <span className={styles.checkBoxChecked}></span>}
          </div>
          {`СТІНИ: ОДНОТОН: №16`}
        </div>

        <div
          className={`${styles.selectLayer} ${activeLayer === 'angles' ? styles.activeLayer : ""}`}
          onClick={() => setActiveLayer("angles")}
        >
          <div className={styles.checkBox}>
            {activeLayer === 'angles' && <span className={styles.checkBoxChecked}></span>}
          </div>
          {`КУТИ: КЛІНКЕР: №7`}
        </div>

        <div
          className={`${styles.selectLayer} ${activeLayer === 'corner' ? styles.activeLayer : ""}`}
          onClick={() => setActiveLayer("corner")}
        >
          <div className={styles.checkBox}>
            {activeLayer === 'corner' && <span className={styles.checkBoxChecked}></span>}
          </div>
          {`ЦОКОЛЬ: АНТИК: №24`}
        </div>

      </div>

      <Tabs tab={tab} setTab={setTab} />

      <div className={styles.colors}>
        {materials.map((item) => (
          <div 
            className={styles.blockMaterial}
            onClick={() => handleClickColor(item)}
            key={item.id}>
            <img
              className={styles.materialBg}
              src={item.img}
              alt={`${item.name} ${item.id}`}
            />
              {item.isSelect ? <div className={styles.iconWrapper}>
                <img className={styles.icon} src={checkedMaterial} alt="selected" />
              </div> : null}
          </div>
        ))}
      </div>
    </div>
  );
};
