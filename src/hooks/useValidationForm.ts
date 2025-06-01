import { useCallback } from "react";
import type { ValidationParams } from "../types/types";


export const useValidationForm = () => {
  const validateForm = useCallback(
    ({ name, phone, email, setErrorName, setErrorPhone, setErrorEmail }: ValidationParams) => {
      const namePattern =
        /^([A-Za-zА-Яа-яЁёЇїІіЄєҐґ]{3,20})(\s[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]{3,20})?$/u;
      const phonePattern = /^(?:\+380|380|0)\d{9}$/;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const trimmedName = name.trim();
      const trimmedPhone = phone.trim();
      const trimmedEmail = email.trim();

      let isValid = true;

      if (!namePattern.test(trimmedName)) {
        setErrorName(true);
        isValid = false;
      }

      if (!phonePattern.test(trimmedPhone)) {
        setErrorPhone(true);
        isValid = false;
      }

      if (trimmedEmail !== "" && !emailPattern.test(trimmedEmail)) {
        setErrorEmail(true);
        isValid = false;
      }

      return isValid;
    },
    []
  );

  return { validateForm };
};