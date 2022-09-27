import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { AddPropIcon, AgendaBtn } from "../mainDashboard/MainDashboard.styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius:1,
  boxShadow: 24,
  p: 4,
};

const CustomModal = ({children, open, setOpen}) => {
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div>
        <AgendaBtn onClick={handleOpen}>
          <AddPropIcon/>
        </AgendaBtn>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
              {children}
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default CustomModal;
