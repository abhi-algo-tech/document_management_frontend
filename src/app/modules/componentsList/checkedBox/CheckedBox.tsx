import React from "react";
import CopyCard from "../copyCard/CopyCard";

const CheckedBox = () => {
  const paragraphContent = `
  import React from "react";

const CheckedBox = () => {
  return (
    <div className="px-10 w-50">
      <div className="mb-10">
        <div className="form-check form-check-custom form-check-solid">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>
      </div>

      <div className="mb-10">
        <div className="form-check form-check-custom form-check-solid">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Checked checkbox
          </label>
        </div>
      </div>

      <div className="mb-10">
        <div className="form-check form-check-custom form-check-solid">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            disabled
            id="flexCheckDisabled"
          />
          <label className="form-check-label" htmlFor="flexCheckDisabled">
            Disabled checkbox
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckedBox;

  `;
  return (
    <div className="px-10 ">
      <div>
        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
          </div>
        </div>

        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Checked checkbox
            </label>
          </div>
        </div>

        <div className="mb-10">
          <div className="form-check form-check-custom form-check-solid">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              disabled
              id="flexCheckDisabled"
            />
            <label className="form-check-label" htmlFor="flexCheckDisabled">
              Disabled checkbox
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

export default CheckedBox;
