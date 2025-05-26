
import styles from "../../styles/House.module.scss"
import base from "/background/back.jpg"
import front from "/background/front.png"
import filterStyles from "../../styles/Filters.module.scss"


type LayerConfig = {
  wall: string
  angles: string
  corner: string
}

type LayerFilterConfig = {
  wall: string;
  angles: string;
  corner: string;
};

type HouseProps = {
  layers: LayerConfig
  layerFilters: LayerFilterConfig;
}

export const House = ({ layers, layerFilters }: HouseProps) => {


  return (
    <div className={styles.house}>
      <img className={styles.base} src={base} alt="house" />
      <img className={`${styles.wall} ${filterStyles[layerFilters.wall] || ''}`} src={layers.wall} alt="walls" />
      <img className={`${styles.angles} ${filterStyles[layerFilters.angles] || ''}`} src={layers.angles} alt="angles" />
      <img className={`${styles.corner} ${filterStyles[layerFilters.corner] || ''}`} src={layers.corner} alt="corner" />
      <img className={styles.front} src={front} alt="front" />
    </div>
  )
}
