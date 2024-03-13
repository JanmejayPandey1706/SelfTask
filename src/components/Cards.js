import { Card, Typography } from "@mui/material";
import React from "react";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";

const Cards = ({ name, totalFile, totalSpace, color }) => {
  return (
    <Card
      sx={{
        padding: "1rem",
        width: "25%",
        backgroundColor: color,
        borderRadius: "1rem",
      }}
    >
      <ContactEmergencyIcon />
      <Typography mt={2} variant="h6">
        {name}
      </Typography>
      <Typography>{totalFile}</Typography>
      <Typography mt={3}>
        <b>{totalSpace}</b>
      </Typography>
    </Card>
  );
};

export default Cards;
