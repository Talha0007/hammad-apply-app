import React from "react";
import { Box, Grid, Typography, Link, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
// import KinstaLogo from "./KinstaLogo"; // Assuming you have a Kinsta logo component or image

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa", // Light background color for the footer
        paddingY: 4, // Vertical padding to create height
        width: "100%",
        minHeight: "300px", // Set a minimum height for larger height
      }}
    >
      <Container maxWidth="lg">
        {/* Top Section with Logo and Social Icons */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ paddingBottom: 3 }}
        >
          {/* Left - Kinsta Logo */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography variant="h5">Keinsta</Typography>
            {/* Replace with actual logo */}
          </Grid>

          {/* Right - Social Media Icons */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: { xs: "center", md: "right" },
              marginTop: { xs: 2, md: 0 },
            }}
          >
            <Link
              href="https://facebook.com"
              target="_blank"
              sx={{ marginX: 1 }}
            >
              <FacebookIcon fontSize="large" color="primary" />
            </Link>
            <Link
              href="https://pinterest.com"
              target="_blank"
              sx={{ marginX: 1 }}
            >
              <PinterestIcon fontSize="large" color="error" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              sx={{ marginX: 1 }}
            >
              <InstagramIcon fontSize="large" color="secondary" />
            </Link>
          </Grid>
        </Grid>

        {/* Address Section */}
        <Box
          sx={{
            textAlign: "center",
            paddingY: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "16px", md: "18px" } }}
          >
            1234 Kinsta Avenue, Web City, DevState, 56789
          </Typography>
        </Box>

        {/* Copyright Section */}
        <Box
          sx={{
            textAlign: "center",
            paddingTop: 3,
          }}
        >
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Kinsta. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
