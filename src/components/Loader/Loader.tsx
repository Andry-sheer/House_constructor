import styles from "../../styles/Loader.module.scss";

export const Loader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`${styles.loaderWrapper} ${!isVisible ? styles.fadeOut : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.spinner}></div>
        <p className={styles.title}>LOADING...</p>
      </div>
    </div>
  );
};

