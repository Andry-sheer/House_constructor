import styles from "../../styles/ModalWindow.module.scss";
import { Button } from "../Button/Button";
import { VscChromeClose } from "react-icons/vsc";
import { IconComponent } from "../IconComponent/IconComponent";
import type { TypeMaterial } from "../../constants/typeMaterial";

type ModalProps = {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  selectedMaterials: {
    wall: TypeMaterial | null;
    angles: TypeMaterial | null;
    corner: TypeMaterial | null;
  };
};

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

            <p className={styles.title}>
              {`стіни: ${
                selectedMaterials.wall
                  ? `${selectedMaterials.wall.name} №${selectedMaterials.wall.id}`
                  : "не вибрано"
              }`}
            </p>
            <p className={styles.title}>
              {`кути: ${
                selectedMaterials.angles
                  ? `${selectedMaterials.angles.name} №${selectedMaterials.angles.id}`
                  : "не вибрано"
              }`}
            </p>
            <p className={styles.title}>
              {`цоколь: ${
                selectedMaterials.corner
                  ? `${selectedMaterials.corner.name} №${selectedMaterials.corner.id}`
                  : "не вибрано"
              }`}
            </p>
          </div>

          <span className={styles.divider}></span>

          {/* <form>
            <input type="text" />
            <span className={styles.divider}></span>
            <input type="text" />
            <span className={styles.divider}></span>
            <input type="text" />

            <button type="submit">submit</button>
          </form> */}
        </div>
      </div>
    </div>
  );
};
