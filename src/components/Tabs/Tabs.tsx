import type { MaterialTab } from "../../constants/types";
import { Button } from "../Button/Button";
import styles from "../../styles/Tabs.module.scss";

type TypeTabs = {
  tab: string;
  setTab: (tab: MaterialTab) => void;
};

export const Tabs = ({ tab, setTab }: TypeTabs) => {
  return (
    <div className={styles.tabs}>
      <Button
        className={`${styles.tab} ${tab === "antique" ? styles.activeTab : ""}`}
        text="АНТИК"
        onClick={() => setTab("antique")}
      />

      <Button
        className={`${styles.tab} ${
          tab === "singleton" ? styles.activeTab : ""
        }`}
        text="ОДНОТОН"
        onClick={() => setTab("singleton")}
      />

      <Button
        className={`${styles.tab} ${tab === "marble" ? styles.activeTab : ""}`}
        text="МАРМУР"
        onClick={() => setTab("marble")}
      />

      <Button
        className={`${styles.tab} ${tab === "klinker" ? styles.activeTab : ""}`}
        text="КЛІНКЕР"
        onClick={() => setTab("klinker")}
      />
    </div>
  );
};
