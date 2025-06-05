import type { HouseComponentProps } from "../../types/types";
import styles from "../../styles/House.module.scss";
import base from "/assets/images/background/back.jpg";
import front from "/assets/images/background/front.png";
import filterStyles from "../../styles/Filters.module.scss";


export const HouseComponent = ({ layers, layerFilters }: HouseComponentProps) => {
  return (
    <div className={styles.house}>
      <img className={styles.base} src={base} alt="house background" />
      
      <img
        loading="lazy"
        className={`${styles.wall} ${filterStyles[layerFilters.wall] || ""}`}
        src={layers.wall}
        alt="walls"
      />

      <img
        loading="lazy"
        className={`${styles.angles} ${filterStyles[layerFilters.angles] || ""}`}
        src={layers.angles}
        alt="angles"
      />

      <img
        loading="lazy"
        className={`${styles.corner} ${filterStyles[layerFilters.corner] || ""}`}
        src={layers.corner}
        alt="corner"
      />

      <img className={styles.front} src={front} alt="front" />
    </div>
  );
};
