import React from "react";
import { Container } from "@mui/material";
import DragDropFileUpload from "../../../../_metronic/layout/components/drag-and-drop/DragDropFileUpload";

interface QuestionBankDragDropProps {
  onFileChange: (file: File) => void;
}

const QuestionBankDragDrop: React.FC<QuestionBankDragDropProps> = ({
  onFileChange,
}) => {
  const handleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileChange(acceptedFiles[0]);
    }
  };
  const acceptedFileTypes = {
    // "image/*": [".jpeg", ".png", ".jpg", ".gif"],
    // "application/pdf": [".pdf"],
    "application/vnd.ms-excel": [".xls", ".xlsx"],
    // "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    //   ".docx",
    // ],
    // "application/msword": [".doc"],
  };

  return (
    <Container>
      <h1>Drag and Drop File Upload</h1>
      <DragDropFileUpload onDrop={handleDrop} accept={acceptedFileTypes} />
    </Container>
  );
};

export default QuestionBankDragDrop;
