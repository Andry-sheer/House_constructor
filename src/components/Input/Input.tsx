import type { InputProps } from "../../types/types";

export const Input = ({type="text", placeholder, className, value, disabled, name, id, onChange}: InputProps) => {
  return <input 
      className={className} 
      type={type} 
      value={value}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange} 
    />;
};
