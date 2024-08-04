import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import "./DragDropFileUpload.scss";

interface DragDropFileUploadProps {
  onDrop: (acceptedFiles: File[]) => void;
  accept: { [key: string]: string[] };
}

const DragDropFileUpload: React.FC<DragDropFileUploadProps> = ({
  onDrop,
  accept,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDropAccepted = useCallback(
    (acceptedFiles: File[]) => {
      setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
      onDrop(acceptedFiles);
    },
    [onDrop, uploadedFiles]
  );

  const handleDelete = (fileName: string) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.name !== fileName));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropAccepted,
    multiple: true,
    accept: accept,
  });

  return (
    <Box sx={{ width: "100%" }}>
      {uploadedFiles.length === 0 && (
        <Box
          {...getRootProps()}
          className={`dropzone ${isDragActive ? "active" : ""}`}
          sx={{
            border: "2px dashed #ccc",
            borderRadius: "4px",
            p: 4,
            textAlign: "center",
            cursor: "pointer",
            mb: 2,
          }}
        >
          <input {...getInputProps()} />
          <CloudUploadIcon sx={{ fontSize: 48, mb: 2 }} />
          <Typography variant="h6">
            {isDragActive
              ? "Drop the files here..."
              : "Drag & drop files here, or click to select files"}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Select Files
          </Button>
        </Box>
      )}
      <List>
        {uploadedFiles.map((file, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(file.name)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={file.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DragDropFileUpload;
