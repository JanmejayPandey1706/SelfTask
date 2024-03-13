import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const ProgressBar = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography my={2}>
          {" "}
          <b>Storage Overview </b>
        </Typography>
        <Typography my={2}>
          {" "}
          <b>3.4 GB </b> of 15 GB
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={20}
        sx={{ height: "10px", borderRadius: "5px" }}
      />
    </Box>
  );
};

export default ProgressBar;
