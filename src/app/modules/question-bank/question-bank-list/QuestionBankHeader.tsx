import React, { useState } from "react";
import { Button } from "@mui/material";
import CommonModal from "../../../../_metronic/layout/components/common-modal/CommonModal";
import QuestionBankDragDrop from "./QuestionBankDragDrop";

const QuestionBankHeader = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    console.log("Confirmed");
    setOpen(false);
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
        content={<QuestionBankDragDrop />}
        onClose={handleClose}
        onConfirm={handleConfirm}
        confirmText="Upload"
      />
    </div>
  );
};

export default QuestionBankHeader;
