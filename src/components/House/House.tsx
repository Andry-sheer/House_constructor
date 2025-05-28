import type { LayerConfig, LayerFilterConfig } from "../../constants/types";
import styles from "../../styles/House.module.scss";
import base from "/background/back.jpg";
import front from "/background/front.png";
import filterStyles from "../../styles/Filters.module.scss";

type HouseProps = {
  layers: LayerConfig;
  layerFilters: LayerFilterConfig;
};

export const House = ({ layers, layerFilters }: HouseProps) => {
  return (
    <div className={styles.house}>
      <img className={styles.base} src={base} alt="house background" />

      <img
        className={`${styles.wall} ${filterStyles[layerFilters.wall] || ""}`}
        src={layers.wall}
        alt="walls"
      />

      <img
        className={`${styles.angles} ${filterStyles[layerFilters.angles] || ""}`}
        src={layers.angles}
        alt="angles"
      />

      <img
        className={`${styles.corner} ${filterStyles[layerFilters.corner] || ""}`}
        src={layers.corner}
        alt="corner"
      />

      <img className={styles.front} src={front} alt="front" />
    </div>
  );
};
