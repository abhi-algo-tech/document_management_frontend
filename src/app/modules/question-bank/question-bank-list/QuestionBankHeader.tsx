import React, { useState } from "react";
import { Button } from "@mui/material";
import CommonModal from "../../../../_metronic/layout/components/common-modal/CommonModal";
import QuestionBankDragDrop from "./QuestionBankDragDrop";
import { useImportQuestionBanks } from "../hooks/queries/QuestionBankQuery";
import { useQueryClient } from "react-query";

// Define a type for the error object if known; otherwise, use unknown
type ErrorType = unknown;

const QuestionBankHeader: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [blob, setBlob] = useState<Blob | null>(null);

  const importMutation = useImportQuestionBanks();
  const queryClient = useQueryClient();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    if (blob) {
      const formData = new FormData();
      // Create a dummy filename and type; adjust as needed
      formData.append("file", blob, "uploaded-file");

      importMutation.mutate(formData, {
        onSuccess: () => {
          console.log("File uploaded successfully");
          setOpen(false);
          queryClient.invalidateQueries("questionBanks");
        },
        onError: (error: ErrorType) => {
          console.error("Error uploading file:", error);
        },
      });
    }
  };

  const handleFileChange = (blob: Blob) => {
    console.log("blob:", blob);
    setBlob(blob);
  };

  return (
    <div className="d-flex justify-content-end p-2">
      <Button
        className="btn btn-primary"
        variant="contained"
        onClick={handleOpen}
      >
        Upload Excel
      </Button>
      <CommonModal
        open={open}
        title="Upload"
        content={<QuestionBankDragDrop onFileChange={handleFileChange} />}
        onClose={handleClose}
        onConfirm={handleConfirm}
        confirmText="Upload"
      />
    </div>
  );
};

export default QuestionBankHeader;
