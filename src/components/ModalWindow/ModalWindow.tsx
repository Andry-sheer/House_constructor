import { Button } from "../Button/Button";
import { VscChromeClose } from "react-icons/vsc";
import { IconComponent } from "../IconComponent/IconComponent";
import type { ModalProps } from "../../types/types";
import styles from "../../styles/ModalWindow.module.scss";
import { Form } from "../Form/Form";

export const ModalWindow = ({
  openModal,
  setOpenModal,
  selectedMaterials,
}: ModalProps) => {
  
  return (
    <div
      className={`${styles.modalOverlayWrapper} ${
        openModal ? styles.showModal : styles.hideModal
      }`}
    >
      <div
        className={styles.modalOverlay}
        onClick={() => setOpenModal(false)}
      />
      <div className={styles.modal}>
        <div className={styles.modalWrapper}>
          <Button
            className={styles.btnClose}
            onClick={() => setOpenModal(false)}
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

          <Form selectedMaterials={selectedMaterials} />

        </div>
      </div>
    </div>
  );
};
