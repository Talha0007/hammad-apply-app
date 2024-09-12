import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";
import emailjs from "emailjs-com";

const platforms = ["Facebook", "Instagram", "Reddit", "Twitter", "Pinterest"];

const useForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    platform: "",
    pageLink: "",
    verificationAnswer: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return [formData, handleChange];
};

const FormComponent = () => {
  const [formData, handleChange] = useForm();
  const [emailError, setEmailError] = useState("");
  const [verificationQuestion, setVerificationQuestion] = useState({});
  const [verificationError, setVerificationError] = useState("");

  useEffect(() => {
    generateVerificationQuestion();
  }, []);

  const generateVerificationQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setVerificationQuestion({ num1, num2, answer: num1 + num2 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email confirmation
    if (formData.email !== formData.confirmEmail) {
      setEmailError("Emails do not match.");
      return;
    } else {
      setEmailError("");
    }

    // Validate arithmetic question
    if (parseInt(formData.verificationAnswer) !== verificationQuestion.answer) {
      setVerificationError("Verification answer is incorrect.");
      return;
    } else {
      setVerificationError("");
    }

    // Prepare template data for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      platform: formData.platform,
      pageLink: formData.pageLink,
      date: new Date().toLocaleDateString(),
    };

    // Send email via EmailJS
    emailjs
      .send(
        "service_446nyvy",
        "template_l17as0v",
        templateParams,
        "4afdQh7Rm-LbSfyCj"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your application has been submitted successfully!");
      })
      .catch((err) => {
        console.error("Failed to send email. Error:", err);
      });

    // Optionally reset the form
    // setFormData({ name: "", email: "", confirmEmail: "", platform: "", pageLink: "", verificationAnswer: "" });
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h4" textAlign="center" marginBottom={3}>
        Apply Now
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Email Field */}
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Confirm Email Field */}
        <TextField
          fullWidth
          label="Confirm Email"
          name="confirmEmail"
          type="email"
          value={formData.confirmEmail}
          onChange={handleChange}
          margin="normal"
          required
          error={!!emailError}
          helperText={emailError}
        />

        {/* Platform Select */}
        <TextField
          fullWidth
          select
          label="Platform"
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          margin="normal"
          required
        >
          {platforms.map((platform) => (
            <MenuItem key={platform} value={platform}>
              {platform}
            </MenuItem>
          ))}
        </TextField>

        {/* Page Link Field */}
        <TextField
          fullWidth
          label="Page Link"
          name="pageLink"
          value={formData.pageLink}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Arithmetic Verification Question */}
        <Grid container alignItems="center" marginTop={2}>
          <Typography marginRight={1}>
            {`What is ${verificationQuestion.num1} + ${verificationQuestion.num2}?`}
          </Typography>
          <TextField
            name="verificationAnswer"
            type="number"
            value={formData.verificationAnswer}
            onChange={handleChange}
            required
            error={!!verificationError}
            helperText={verificationError}
          />
        </Grid>

        {/* Submit Button */}
        <Box textAlign="center" marginTop={4}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FormComponent;
