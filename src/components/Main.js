import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import UpgradeAccountUi from "./UpgradeAccountUi";
import ProgressBar from "./ProgressBar";
import Cards from "./Cards";
import Table from "./Table";

const Main = () => {
  const arr = [
    {
      name: "Shared files",
      totalFile: "1203 files",
      totalSpace: "3.2 GB",
      color: "#efefef",
    },
    {
      name: "Media",
      totalFile: "1203 files",
      totalSpace: "1.2 GB",
      color: "#d7d7d7",
    },
    {
      name: "Documents",
      totalFile: "1203 files",
      totalSpace: "4.9 GB",
      color: "#808080",
    },
    {
      name: "Other",
      totalFile: "1203 files",
      totalSpace: "2.3 GB",
      color: "#6082B6",
    },
  ];
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "firstName", headerName: "First name", width: 200 },
    { field: "lastName", headerName: "Last name", width: 200 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 200,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <div>
      <Typography mb={2}>Overview</Typography>
      <Divider />
      <UpgradeAccountUi />
      <ProgressBar />
      <Typography my={2}>Storage Details</Typography>
      <Box display="flex" gap={4}>
        {arr.map((cur, id) => (
          <>
            <Cards
              name={cur.name}
              totalFile={cur.totalFile}
              totalSpace={cur.totalFile}
              color={cur.color}
            />
          </>
        ))}
      </Box>
      <Typography mt={4} mb={2}>
        Recent files
      </Typography>
      <Table {...{ columns, rows }} />
    </div>
  );
};

export default Main;
