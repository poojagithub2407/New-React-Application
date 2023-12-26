import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const DialogModel = ({ open, handleClose, dialogStyle, children }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ style: dialogStyle }}
    >
      <DialogContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          {children}
        </div>
        <DialogContentText
          style={{
            paddingRight: "60px",
            marginTop: "10px",
            paddingLeft: "60px",
          }}
        >
          Submitting...
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default DialogModel;
