import { useState } from "react";
import type { FormProps } from "../../types/types";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from "../../styles/Form.module.scss";


export const Form = ({ selectedMaterials }: FormProps) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      ...formValues,
      materials: {
        wall: selectedMaterials.wall
          ? {
              name: selectedMaterials.wall.name,
              id: selectedMaterials.wall.id,
            }
          : null,

        angles: selectedMaterials.angles
          ? {
              name: selectedMaterials.angles.name,
              id: selectedMaterials.angles.id,
            }
          : null,

        corner: selectedMaterials.corner
          ? {
              name: selectedMaterials.corner.name,
              id: selectedMaterials.corner.id,
            }
          : null,
      },
    };

    console.log("send data: ", formData); // <---- ЦЕ ОБЬ'ЄКТ З УСІМА ДАНИМИ ПРО ЮЗЕРА + КОЛЬОРИ ТА МАТЕРІАЛИ ЯКІ ВІН ОБРАВ.
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        className={styles.name}
        name="name"
        type="text"
        onChange={handleChange}
        value={formValues.name}
        placeholder="ім'я"
      />

      <Input
        className={styles.email}
        name="email"
        type="email"
        onChange={handleChange}
        value={formValues.email}
        placeholder="email (не обов'язково)"
      />

      <Input
        className={styles.phone}
        name="phone"
        type="tel"
        onChange={handleChange}
        value={formValues.phone}
        placeholder="телефон"
      />

      <Input
        className={styles.comments}
        name="comment"
        type="text"
        onChange={handleChange}
        value={formValues?.comment}
        placeholder="коментарі (не обов'язково)"
      />

      <Button
        className={styles.btnSubmit}
        type="submit"
        text="надіслати"
      />
    </form>
  );
};
