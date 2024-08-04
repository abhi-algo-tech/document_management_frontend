import React, { useState } from "react";
import "../../../../_metronic/assets/sass/components/_uploadFile.scss"; // Import the SCSS file for styling
import CopyCard from "../copyCard/CopyCard";

const UploadFile: React.FC = () => {
  const [dragging, setDragging] = useState(false);

  const paragraphContent1 = `
import React, { useState } from "react";
import "../../../../_metronic/assets/sass/components/_uploadFile.scss"; // Import the SCSS file for styling

const UploadFile: React.FC = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    // Handle dropped files here
    console.log(files);
  };

  return (
    <div className="px-10 w-50">
      <div
        className={`;
  const paragraphContent2 = `upload-container \${dragging ? "dragging" : ""}`;
  const paragraphContent3 = `}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="upload-area">
          <p>Drag & Drop files here</p>
          <p>or</p>
          <input type="file" className="file-input" />
          <button className="upload-btn">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
`;
  const paragraphContent =
    paragraphContent1 + paragraphContent2 + paragraphContent3;
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    // Handle dropped files here
    console.log(files);
  };

  return (
    <div className="px-10">
      <div>
        <div
          className={`upload-container ${dragging ? "dragging" : ""}`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="upload-area">
            <p>Drag & Drop files here</p>
            <p>or</p>
            <input type="file" className="file-input" />
            <button className="upload-btn">Upload</button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <CopyCard content={paragraphContent} />
      </div>
    </div>
  );
};

export default UploadFile;
