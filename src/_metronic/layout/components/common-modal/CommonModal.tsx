import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import "./CommonModal.scss";

interface CommonModalProps {
  open: boolean;
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

const CommonModal: React.FC<CommonModalProps> = ({
  open,
  title,
  content,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Box className="common-modal">
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          className="modal-title"
        >
          {title}
        </Typography>
        <Box className="modal-content">{content}</Box>
        <Box className="modal-actions">
          <Button
            onClick={onClose}
            variant="outlined"
            className="cancel-button"
          >
            {cancelText}
          </Button>
          {onConfirm && (
            <Button onClick={onConfirm} variant="contained">
              {confirmText}
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default CommonModal;
