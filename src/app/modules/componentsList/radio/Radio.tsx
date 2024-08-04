import React from "react";
import CopyCard from "../copyCard/CopyCard";

const Radio = () => {
  const paragraphContent = `
  
  import React from "react";

  const Radio = () => {
    return (
      <div className="px-10 w-50">
        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input
              className="form-check-input"
              type="radio"
              value=""
              id="flexRadioDefault"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault">
              Default radio
            </label>
          </div>
        </div>
  
        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input
              className="form-check-input"
              type="radio"
              value=""
              id="flexRadioChecked"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioChecked">
              Checked radio
            </label>
          </div>
        </div>
  
        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input
              className="form-check-input"
              type="radio"
              value=""
              disabled
              id="flexRadioDisabled"
            />
            <label className="form-check-label" htmlFor="flexRadioDisabled">
              Disabled radio
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  export default Radio;
  `;
  return (
    <div className="px-10 ">
      <div>
        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input
              className="form-check-input"
              type="radio"
              value=""
              id="flexRadioDefault"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault">
              Default radio
            </label>
          </div>
        </div>

        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input
              className="form-check-input"
              type="radio"
              value=""
              id="flexRadioChecked"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioChecked">
              Checked radio
            </label>
          </div>
        </div>

        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input
              className="form-check-input"
              type="radio"
              value=""
              disabled
              id="flexRadioDisabled"
            />
            <label className="form-check-label" htmlFor="flexRadioDisabled">
              Disabled radio
            </label>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <CopyCard content={paragraphContent} />
      </div>
    </div>
  );
};

export default Radio;
