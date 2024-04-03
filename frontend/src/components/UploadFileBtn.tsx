import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useRef } from "react";

const UploadFileBtn = ({ uploadMedia }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button
        className="uploadBtn"
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        onClick={() => inputRef?.current?.click()}
      >
        Upload file
      </Button>
      <input
        className="VisuallyHiddenInput"
        type="file"
        required
        ref={inputRef}
        onChange={(e) => {
          uploadMedia(e.target.files[0]);
        }}
      />
    </>
  );
};

export default UploadFileBtn;
