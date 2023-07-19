import React, { useState } from "react";
import Button from "@mui/material/Button";

const PopUpButton = ({ onAdd, children, title }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        {title}
      </Button>
      {children && React.cloneElement(children, { open, onClose: handleClose, onAdd })}
    </div>
  );
};

export default PopUpButton;