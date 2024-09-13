import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import background from "../assets/tree.jpg";

const AboutUs = () => {
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
          About Us
        </Typography>
      </Box>
      <Container maxWidth="md" sx={{ padding: "40px 0" }}>
        {/* Main Heading */}
        <Typography variant="h3" component="h1" textAlign="center" gutterBottom>
          Discover Media Blendly
        </Typography>
        <Typography variant="h5" component="h2" textAlign="center" gutterBottom>
          Where Stories Ignite Imagination
        </Typography>

        {/* Section 1: Our Vision */}
        <Box sx={{ marginBottom: "40px" }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Our Vision: Fueling Creativity & Connection
          </Typography>
          <Typography variant="body1" paragraph>
            At <strong>Media Blendly</strong>, we dream of a world where every
            story finds its voice. Our platform is designed to empower both
            readers and creators, offering a space where imagination knows no
            bounds. We believe that storytelling has the power to connect
            people, inspire change, and transcend borders.
          </Typography>
        </Box>

        {/* Section 2: What We Offer */}
        <Box sx={{ marginBottom: "40px" }}>
          <Typography variant="h4" component="h3" gutterBottom>
            What We Offer: Stories for Every Soul
          </Typography>
          <Typography variant="body1" paragraph>
            Dive into a diverse world of genres—action-packed adventures,
            heartwarming romances, thrilling mysteries, historical epics, and
            visionary science fiction. Whether you’re a reader seeking your next
            favorite tale or a writer eager to share your narrative,{" "}
            <strong>Media Blendly</strong> is your stage.
          </Typography>
        </Box>

        {/* Section 3: Our Platform */}
        <Box sx={{ marginBottom: "40px" }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Our Platform: Crafted for Storytellers
          </Typography>
          <Typography variant="body1" paragraph>
            Our user-friendly platform is built with both readers and creators
            in mind. Customize your reading experience, explore curated content,
            and enjoy interactive features that let you engage directly with
            stories and fellow enthusiasts. <strong>Media Blendly</strong> isn’t
            just a platform—it’s a creative playground.
          </Typography>
        </Box>

        {/* Section 4: Connect with Us */}
        <Box sx={{ marginBottom: "40px" }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Connect with Us: Bringing Stories to Life
          </Typography>
          <Typography variant="body1" paragraph>
            We go beyond traditional storytelling by hosting live events,
            virtual meetups with authors, and community-driven discussions. At{" "}
            <strong>Media Blendly</strong>, we don’t just read stories—we bring
            them to life. Join our vibrant community and experience storytelling
            like never before.
          </Typography>
        </Box>

        {/* Section 5: Get in Touch */}
        <Box sx={{ marginBottom: "40px" }}>
          <Typography variant="h4" component="h3" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" paragraph>
            We’re always eager to hear from you! Whether you have feedback,
            questions, or just want to say hi, reach out to us at{" "}
            <strong>support@mediablendly.com</strong>. Follow us on social media
            to stay updated with the latest news, story releases, and community
            events.
          </Typography>
          <Typography variant="body2" textAlign="center" color="textSecondary">
            Thank you for being part of Media Blendly, where stories transform,
            inspire, and connect us all.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;
