import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ApplyForm from "../components/ApplyForm";

import background from "../assets/tree.jpg";

const ApplicationPage = () => {
  return (
    <>
      <Box
        sx={{
          height: "30vh",
          marginTop: "-85px",
          zIndex: "-1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{ backgroundImage: `url('${background}')` }}
      >
        <Typography
          variant="h1"
          align="center"
          marginTop={10}
          sx={{
            color: "#fff",
            fontSize: {
              xs: "30px",
              sm: "40px",
              md: "56px",
            },
          }}
        >
          Apply here by Submit Form
        </Typography>
      </Box>
      <ApplyForm />
    </>
  );
};

export default ApplicationPage;
