import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import PublicIcon from "@mui/icons-material/Public";
import PaidIcon from "@mui/icons-material/Paid";
import FeedIcon from "@mui/icons-material/Feed";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import background from "../assets/tree.jpg";
import background1 from "../assets/grass.jpg";
import { Link } from "react-router-dom";

const styles = {
  fullSizeImage: {
    height: "80vh",
    marginTop: "-85px",
    zIndex: "-1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    textAlign: "center",
    color: "#fff",
    padding: "20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
};

const MainPage = () => {
  return (
    <Box sx={{ maxWidth: "100%", margin: "auto" }}>
      <Box
        sx={styles.fullSizeImage}
        style={{ backgroundImage: `url('${background}')` }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            color: "#fff",
            fontSize: {
              xs: "30px",
              sm: "40px",
              md: "56px",
            },
          }}
        >
          Let's Make Connections
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          marginTop={8}
          sx={{ color: "#fff", textAlign: "center", padding: "0 4px" }}
        >
          Leverage social media to promote your stories and unlock new revenue
          streams. Let’s dive into business possibilities.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/applynow"
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            textTransform: "capitalize",
            marginTop: "20px",
          }}
        >
          Apply Now
        </Button>
      </Box>

      <Grid container justifyContent="center" spacing={6} marginTop={1}>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            fontSize={32}
            textAlign={"center"}
            sx={{
              display: "flex", // Makes it a flex container
              justifyContent: "center", // Centers horizontally
              alignItems: "center", // Centers vertically
              gap: "8px", // Adds some spacing between the icon and text
            }}
          >
            <ArticleIcon fontSize="large" />
            Article
          </Typography>

          <Typography variant="body2" textAlign={"center"}>
            Choose an article to share.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            fontSize={32}
            textAlign={"center"}
            sx={{
              display: "flex", // Makes it a flex container
              justifyContent: "center", // Centers horizontally
              alignItems: "center", // Centers vertically
              gap: "8px", // Adds some spacing between the icon and text
            }}
          >
            <PublicIcon fontSize="large" />
            Social
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            Share to social platforms.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            fontSize={32}
            textAlign={"center"}
            sx={{
              display: "flex", // Makes it a flex container
              justifyContent: "center", // Centers horizontally
              alignItems: "center", // Centers vertically
              gap: "8px", // Adds some spacing between the icon and text
            }}
          >
            <PaidIcon fontSize="large" />
            Revenue
          </Typography>
          <Typography variant="body2" textAlign={"center"}>
            Earn revenue from shares.
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          height: "50vh",
          width: { xs: "100%", md: "70%" },
          margin: "30px auto",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          backgroundImage: `url('${background1}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          borderRadius: "30px",
        }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            color: "#fff",
            fontSize: {
              xs: "30px",
              sm: "30px",
              md: "56px",
            },
          }}
        >
          Begin your journey today
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          marginTop={2}
          sx={{ color: "#fff", textAlign: "center", padding: "0 4px" }}
        >
          Spread our articles and make money...
        </Typography>

        <Box
          sx={{
            width: "60%",
            marginTop: "40px",
            padding: "10px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: {
              md: "space-between",
              sm: "center",
            },
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography>🌍 Feel free to contact us!</Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/applynow"
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "capitalize",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4} maxWidth={"70%"} margin={"20px auto"}>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            paddingBottom: "25px",
            // borderRadius: "10px",
          }}
        >
          <ContactSupportIcon fontSize="large" sx={{ margin: "0 0 20px" }} />
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            Customer Support
          </Typography>
          <Typography sx={{ fontSize: "18px", margin: "12px 0" }}>
            We are here 24/7 to server you
          </Typography>
          <Link
            to={"/applynow"}
            style={{
              color: "gray",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
            }}
          >
            Contact Us <ArrowRightAltIcon fontSize="small" />
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            backgroundColor: "#3b82f6",
            paddingBottom: "25px",
          }}
        >
          <FeedIcon
            fontSize="large"
            sx={{ color: "white", margin: "0 0 20px" }}
          />
          <Typography
            sx={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
          >
            Go and read our Published Articles
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "18px", margin: "12px 0" }}
          >
            Explore the best Articles as per your need & interest...
          </Typography>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
            }}
          >
            Go to Blog Site <ArrowRightAltIcon fontSize="small" />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
