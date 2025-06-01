import { useState, forwardRef, useImperativeHandle } from "react";
import type { FormProps } from "../../types/types";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from "../../styles/Form.module.scss";


export const Form = forwardRef(({ selectedMaterials, setOpenModal }: FormProps, ref) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });


  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  useImperativeHandle(ref, ()=> ({
    clearErrors
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "name") {
      setErrorName(false);
    }

    if (name === "phone") {
      setErrorPhone(false)
    }

    if (name === "email") {
      setErrorEmail(false)
    }

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (name === "name") {
      setErrorName(false);
    }

    if (name === "phone") {
      setErrorPhone(false)
    }

    if (name === "email") {
      setErrorEmail(false)
    }
  }

  const validForm = () => {
    const namePattern = /^([A-Za-zА-Яа-яЁёЇїІіЄєҐґ]{3,20})(\s[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]{3,20})?$/u;
    const phonePattern = /^(?:\+380|380|0)\d{9}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const { name, phone, email } = formValues;

    const trimmedPhone = phone.trim();
    const trimmedName = name.trim();

    if (!phonePattern.test(trimmedPhone) && !namePattern.test(trimmedName)) {
      setErrorName(true);
      setErrorPhone(true);
      return false;
    }

    if (!namePattern.test(trimmedName)) {
      setErrorName(true);
      return false;
    }

    if (!phonePattern.test(trimmedPhone)) {
      setErrorPhone(true);
      return false;
    }

    if (email.trim() !== "" && !emailPattern.test(email.trim())) {
      setErrorEmail(true);
      return false;
    }

    return true;
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      ...formValues,
      comment: formValues.comment ? formValues.comment : "немає коментарів",
      email: formValues.email ? formValues.email : "немає email",
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

    if(!validForm()){
      return
    }

    console.log("send data: ", formData); // <---- ЦЕ ОБЬ'ЄКТ З УСІМА ДАНИМИ ПРО ЮЗЕРА + КОЛЬОРИ ТА МАТЕРІАЛИ ЯКІ ВІН ОБРАВ.

    setFormValues({
      name: "",
      email: "",
      phone: "",
      comment: "",
    });

    setOpenModal(false);
  };


  const clearErrors = () => {
    setErrorName(false);
    setErrorPhone(false);
    setErrorEmail(false);
  };


  return (
    <form className={styles.form} onSubmit={handleSubmit} method="post">
      <Input
        className={errorName ? `${styles.name} ${styles.errorName}` :  styles.name}
        name="name"
        type="text"
        onChange={handleChange}
        value={formValues.name}
        onFocus={handleFocus}
        placeholder={errorName ? "Ім'я обов'язкове!*" : "Ім'я"}
      />

      <Input
        className={errorPhone ? `${styles.phone} ${styles.errorPhone}` : styles.phone}
        name="phone"
        type="tel"
        onChange={handleChange}
        value={formValues.phone}
        onFocus={handleFocus}
        placeholder={errorPhone ? "Телефон обов'язковий!*" : "Телефон"}
      />

      <Input
        className={errorEmail ? `${styles.email} ${styles.errorEmail}` : styles.email}
        name="email"
        type="email"
        onChange={handleChange}
        value={formValues.email}
        onFocus={handleFocus}
        placeholder="email (не обов'язково)"
      />

      <Input
        className={styles.comments}
        name="comment"
        type="text"
        onChange={handleChange}
        value={formValues.comment}
        placeholder="коментарі (не обов'язково)"
      />

      <Button
        className={styles.btnSubmit}
        type="submit"
        text="надіслати"
      />
    </form>
  );
});
