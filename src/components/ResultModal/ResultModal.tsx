
import type { ResultModalProps } from "../../types/types";
import { IconComponent } from "../IconComponent/IconComponent";
import { VscChromeClose } from "react-icons/vsc";
import { MdDone } from "react-icons/md";
import { Button } from "../Button/Button";
import styles from "../../styles/ResultModal.module.scss"



export const ResultModal = ({openResult, setOpenResult}: ResultModalProps) => {
  const handleCloseModalResult = () => {
    setOpenResult(false)
  }

  return (
    <div className={`${styles.resultOverLayWrapper} ${openResult ? styles.showModalResult : styles.hideModalResult}`}>
      <div className={styles.resultOverLay} onClick={handleCloseModalResult}>
        <div className={styles.resultWrapper}>
          <div className={styles.result}>
            <Button 
              className={styles.btnCloseResult} 
              onClick={handleCloseModalResult}
              icon={<IconComponent icon={VscChromeClose} fill="#212121" />}
            />

            <div className={styles.imageResult}>
              <IconComponent className={styles.imgIcon} icon={MdDone} />
            </div>

            <h2 className={styles.title}>Дякуємо за замовлення!</h2>

            <p className={styles.subTitle}>
              Найближчим часом наші менеджери з вами зв'яжуться!
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
