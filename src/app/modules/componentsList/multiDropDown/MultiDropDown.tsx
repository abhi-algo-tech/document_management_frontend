import React from "react";
import Select from "react-select";
import CopyCard from "../copyCard/CopyCard";

const MultiDropDown = () => {
  const paragraphContent = `import React from "react";
  import Select from "react-select";
  
  const MultiDropDown = () => {
    const options = [
      { value: "option 1", label: "Option 1" },
      { value: "option 2", label: "Option 2" },
      { value: "option 3", label: "Option 3" },
      { value: "option 4", label: "Option 4" },
      { value: "option 5", label: "Option 5" },
    ];
    return (
      <div className="px-10 w-50">
        <div className="mb-10">
          <Select
            className=" react-select"
            classNamePrefix="react-select"
            options={options}
            placeholder="Select an option"
            isMulti
          />
        </div>
      </div>
    );
  };
  
  export default MultiDropDown;
  `;
  const options = [
    { value: "option 1", label: "Option 1" },
    { value: "option 2", label: "Option 2" },
    { value: "option 3", label: "Option 3" },
    { value: "option 4", label: "Option 4" },
    { value: "option 5", label: "Option 5" },
  ];
  return (
    <div className="px-10 ">
      <div className="mb-10">
        <Select
          className=" react-select"
          classNamePrefix="react-select"
          options={options}
          placeholder="Select an option"
          isMulti
        />
      </div>
      <div className="mt-5">
        <CopyCard content={paragraphContent} />
      </div>
    </div>
  );
};

export default MultiDropDown;
