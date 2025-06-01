import { useRef } from "react";
import type { ModalProps } from "../../types/types";
import { Button } from "../Button/Button";
import { VscChromeClose } from "react-icons/vsc";
import { IconComponent } from "../IconComponent/IconComponent";
import { Form } from "../Form/Form";
import styles from "../../styles/ModalWindow.module.scss";

export const ModalWindow = ({
  openModal,
  setOpenModal,
  resetHouse,
  setOpenResult,
  selectedMaterials,
}: ModalProps ) => {
  const formRef = useRef<{ clearErrors: () => void }>(null);

  const handleCloseModal = () => {
    setOpenModal(false)
    setTimeout(()=> {
      formRef?.current?.clearErrors();
    }, 300)
  }
  
  return (
    <div
      className={`${styles.modalOverlayWrapper} ${
        openModal ? styles.showModal : styles.hideModal
      }`}
    >
      <div
        className={styles.modalOverlay}
        onClick={handleCloseModal}
      />
      <div className={styles.modal}>
        <div className={styles.modalWrapper}>
          <Button
            className={styles.btnClose}
            onClick={handleCloseModal}
            icon={<IconComponent icon={VscChromeClose} fill="#212121" />}
          />

          <div className={styles.description}>
            <p className={styles.title}>
              Я хочу отримати оцінку вартості для таких кольорів:
            </p>

            <div className={styles.labelWrapper}>
              стіни:{" "}
              <span className={styles.label}>{`${
                selectedMaterials.wall
                  ? `${selectedMaterials.wall.name}: №${selectedMaterials.wall.id}`
                  : "не вибрано"
              }`}
              </span>
            </div>

            <div className={styles.labelWrapper}>
              кути:{" "}
              <span className={styles.label}>
              {`${
                selectedMaterials.angles
                  ? `${selectedMaterials.angles.name}: №${selectedMaterials.angles.id}`
                  : "не вибрано"
              }`}
              </span>
            </div>

            <div className={styles.labelWrapper}>
              цоколь:{" "}
              <span className={styles.label}>
              {`${
                selectedMaterials.corner
                  ? `${selectedMaterials.corner.name}: №${selectedMaterials.corner.id}`
                  : "не вибрано"
              }`}
              </span>
            </div>
          </div>

          <span className={styles.divider}></span>

          <Form 
            ref={formRef} 
            selectedMaterials={selectedMaterials} 
            setOpenModal={setOpenModal} 
            setOpenResult={setOpenResult}
            resetHouse={resetHouse}
          />

        </div>
      </div>
    </div>
  );
};
