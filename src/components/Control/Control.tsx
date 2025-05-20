import { useState } from "react";
import { Tabs } from "../Tabs/Tabs";
import { AnticArray } from "../../constants/antique";
import { klinkerArray } from "../../constants/klinker";
import { marbleArray } from "../../constants/marble";
import { SingleTonArray } from "../../constants/singleton";
import styles from "../../styles/Control.module.scss";
import type { TypeMaterial } from "../../constants/typeMaterial";
import { Button } from "../Button/Button";

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

  return (
    <div className={styles.controlPanel}>
      <div className={styles.layerSelector}>
        <Button
          text={`СТІНИ: {tab}: {№7} || #1`}
          className={`${styles.selectForm} ${activeLayer === "wall" ? styles.activeForm : ""}`}
          onClick={() => setActiveLayer("wall")}
        />

        <Button
          text={`КУТИ: {tab}: {№7} || #1`}
          className={`${styles.selectForm} ${activeLayer === "angles" ? styles.activeForm : ""}`}
          onClick={() => setActiveLayer("angles")}
        />

        <Button
          text={`ЦОКОЛЬ: {tab}: {№7} || #1`}
          className={`${styles.selectForm} ${activeLayer === "corner" ? styles.activeForm : ""}`}
          onClick={() => setActiveLayer("corner")}
        />

      </div>

      <Tabs tab={tab} setTab={setTab} />
      <div className={styles.colors}>
        {colorArray[tab].map((item) => (
          <div className={styles.blockMaterial} key={item.id}>
            <img
              className={styles.materialBg}
              src={item.img}
              alt={`${item.name} ${item.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
