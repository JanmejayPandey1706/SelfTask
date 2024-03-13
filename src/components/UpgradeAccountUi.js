import { Button, Typography } from "@mui/material";
import React from "react";

const UpgradeAccountUi = () => {
  return (
    <div className="bg-[#efefef] my-10 p-[2rem] rounded-lg">
      <Typography mb={2}>
        <b>Upgrade Account </b>
      </Typography>
      <p className="mb-4">
        100GB storage, Access to Dlex support experts, Option to add your
        family, Extra member benefits.{" "}
      </p>
      <Button variant="contained">Upgrade Account</Button>
    </div>
  );
};

export default UpgradeAccountUi;
