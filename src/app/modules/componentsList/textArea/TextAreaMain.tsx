import React from "react";
import TextAreaField from "./TextArea";
import CopyCard from "../copyCard/CopyCard";

const TextAreaMain = () => {
  const paragraphContent = `
  import React, { TextareaHTMLAttributes } from 'react';

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, ...textareaProps }) => {
  return (
    <>
      <div className={"form-float openhouse-des"}>
        <textarea {...textareaProps} id={label} placeholder="" spellCheck="false"></textarea>
        <label htmlFor={label} className="floating-label">
          {label}
        </label>
      </div>
    </>
  );
};

export default TextAreaField;

SCSS:
textarea:focus ~ .floating-label,
textarea:not(:placeholder-shown) ~ .floating-label,
input:not(:focus):valid ~ .floating-label {
    // padding: 12px;
    color: #888 !important;
    top: 0px;
    left: 10px;
    transform: translateY(-50%);
    transition: 0.1s;
    padding: 4px;
    letter-spacing: 0.25px !important;
    font-size: 10px;
    opacity: 1;
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 60%, rgba(247, 247, 247, 0) 40%);
}

.openhouse-des textarea {
    outline: none;
    border: 1px solid $input-border-color !important;
    font-size: 14px !important;
    resize: none;
    width: 100%;
    padding: 10px 10px 0 13px;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 8px !important;
}

.form-float textarea:focus {
    outline: 0;
    border: 1px solid $input-focus-color !important;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.04) inset;
    // letter-spacing: 0.25px;
}

.form-float textarea:hover {
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
}

.floating-label {
    position: absolute;
    pointer-events: none;
    left: 12px;
    top: 12px;
    transition: 0.2s ease all;
    transition: 0.1s;
    // letter-spacing: 0.25px;
    font-size: 14px;
}

.form-float {
    position: relative;
}

.openHouseinput input::placeholder {
    padding-left: 16px !important;
}

  `;
  return (
    <div className="px-10">
      <div>
        <TextAreaField label="Text Area" rows={3} />
      </div>
      <div className="mt-5">
        <CopyCard content={paragraphContent} />
      </div>
    </div>
  );
};

export default TextAreaMain;
