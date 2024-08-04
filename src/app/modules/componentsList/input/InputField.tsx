import { useState } from "react";
import FormInput from "./Input";
import CopyCard from "../copyCard/CopyCard";

const InputField = () => {
  const paragraphContent = `import React, { InputHTMLAttributes } from "react";

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

  SCSS:
  $input-focus-color:#03fa24;
$input-border-color:#d1d1d1;

.form-input {
    position: relative;
    width: 100% !important;

    input {
        width: 100% !important;
        height: 40px;
        font-size: 14px !important;
        padding: 12px;
        outline: none;
        border: 1px solid $input-border-color !important;
        box-sizing: border-box;
        border-radius: 8px !important;
        &::placeholder {
            opacity: 0;
        }
        &:focus + label,
        &:not(:placeholder-shown) + label {
            color: #888 !important;
            top: 0;
            font-size: 10px !important;
            letter-spacing: 0.25px;
            background: rgb(255, 255, 255);
            /* background: linear-gradient(0deg,
            rgba(255, 255, 255, 1) 50%,
            rgba(247, 247, 247, 0) 50%); */
            padding: 4px;
        }
        &:focus {
            border: 1px solid $input-focus-color !important;
            box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset;
        }
        &:hover {
            box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
        }
        &:disabled {
            background-color: #fff;
            cursor: not-allowed;
            color: #888888;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            transition: background-color 5000s ease-in-out 0s;
            -webkit-text-fill-color: #000;
        }

        &:disabled + label {
            background-color: #fff;
            cursor: not-allowed;
            color: #000 !important;
        }
    }

    label {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px !important;
        color: #000000;
        letter-spacing: 0.3px;
        transition: 0.1s;
        padding: 0px 4px 0px 4px !important;
        cursor: text;
        background: linear-gradient(0deg, rgba(255, 255, 255, 1) 50%, rgba(247, 247, 247, 0) 50%) !important;
    }
}
  `;

  return (
    <div className="px-10 ">
      <div>
        <FormInput label="Input" />
      </div>
      <div className="mt-5">
        <CopyCard content={paragraphContent} />
      </div>
    </div>
  );
};

export default InputField;
