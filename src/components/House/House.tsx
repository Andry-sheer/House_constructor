
import styles from "../../styles/House.module.scss"
import base from "/background/back.jpg"
import front from "/background/front.png"

type LayerConfig = {
  wall: string
  angles: string
  corner: string
}

type HouseProps = {
  layers: LayerConfig
}

export const House = ({ layers }: HouseProps) => {

  return (
    <div className={styles.house}>
      <img className={styles.base} src={base} alt="house" />
      <img className={styles.wall} src={layers.wall} alt="walls" />
      <img className={`${styles.angles}`} src={layers.angles} alt="angles" />
      <img className={styles.corner} src={layers.corner} alt="corner" />
      <img className={styles.front} src={front} alt="front" />
    </div>
  )
}
