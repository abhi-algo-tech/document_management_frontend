import React, { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...rest }) => {
  return (
    <div className="form-input">
      <input id={label} placeholder={label} {...rest} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default FormInput;
