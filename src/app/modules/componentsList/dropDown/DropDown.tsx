import React from "react";
import CopyCard from "../copyCard/CopyCard";

const DropDown = () => {
  const paragraphContent = `
  import React from "react";

const DropDown = () => {
  return (
    <div className="px-10 ">
      <select className="form-select" aria-label="Select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  );
};

export default DropDown;

  `;
  return (
    <div className="px-10 ">
      <div>
        <select className="form-select" aria-label="Select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mt-5">
        <CopyCard content={paragraphContent} />
      </div>
    </div>
  );
};

export default DropDown;
