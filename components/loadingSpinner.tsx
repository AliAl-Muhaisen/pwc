import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const OverlayLoading: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: 100,
      }}
      open={open}
    >
      <CircularProgress color="secondary" size={85} />
    </Backdrop>
  );
};
export default OverlayLoading;
