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