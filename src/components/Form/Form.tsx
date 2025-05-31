
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from "../../styles/Form.module.scss";

export const Form = () => {
  return (
    <form className={styles.form}>
      <Input className={styles.name} name="name" type="text" onChange={()=> ''} value="" placeholder="ім'я" />
      <Input className={styles.email} name="email" type="email" onChange={()=> ''} value="" placeholder="email" />
      <Input className={styles.phone} name="phone" type="tel" onChange={()=> ''} value="" placeholder="телефон" />
      <Input className={styles.comments} name="comment" type="text" onChange={()=> ''} value="" placeholder="коментарі" />
      <Button className={styles.btnSubmit} type="submit" text="надіслати" />
    </form>
  )
}
