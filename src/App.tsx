import "normalize.css";
import styles from "./styles/App.module.scss";
import { House } from "./components/House/House";
import { Control } from "./components/Control/Control";
import { useEffect, useState } from "react";
import { Button } from "./components/Button/Button";
import { layerPaths } from "./constants/layerPaths";

const defaultLayers: LayerConfig = {
  wall: "/walls/layers-antique/w-antick.png",
  angles: "/angles/layers-marble/c-marble2.png",
  corner: "/basement/layers-singletone/b-singletone2.png",
};

export type LayerConfig = {
  wall: string;
  angles: string;
  corner: string;
};

export type LayerFilterConfig = {
  wall: string;
  angles: string;
  corner: string;
};

export const App = () => {
  const [layers, setLayers] = useState<LayerConfig>(defaultLayers);
  const [activeLayer, setActiveLayer] = useState<"wall" | "angles" | "corner">(
    "wall"
  );
  const [selectTab, setSelectTab] = useState<
    "antique" | "singleton" | "klinker" | "marble"
  >("antique");
  const [layerFilters, setLayerFilters] = useState<LayerFilterConfig>({
    wall: "",
    angles: "",
    corner: "",
  });

  useEffect(() => {
    setLayers((prev) => ({
      ...prev,
      [activeLayer]: layerPaths[selectTab][activeLayer],
    }));
  }, [selectTab, activeLayer]);

  return (
    <div className={styles.HouseConstructor}>
      <div className={styles.container}>
        <div className={styles.containerInner}>
          <House layers={layers} layerFilters={layerFilters} />

          <div className={styles.subContainer}>
            <Control
              activeLayer={activeLayer}
              setActiveLayer={setActiveLayer}
              layers={layers}
              setLayers={setLayers}
              layerFilters={layerFilters}
              setLayerFilters={setLayerFilters}
              selectTab={selectTab}
              setSelectTab={setSelectTab}
            />

            <Button
              className={styles.btnOpenForm}
              text="відправити заявку"
              onClick={() => console.log("click submit")}
            />
          </div>

          <Button
            className={styles.btnOpenFormMobile}
            text="відправити заявку"
            onClick={() => console.log("click submit")}
          />
        </div>
      </div>
    </div>
  );
};
