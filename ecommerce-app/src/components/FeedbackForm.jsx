import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Box, TextField, Button, Typography } from "@mui/material";
import Swal from "sweetalert2"; 

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  feedback: Yup.string().required("Feedback is required"),
});

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Feedback submitted:", data);

    Swal.fire({
      title: "Thank you! 🎉",
      text: "Your feedback has been submitted successfully.",
      icon: "success",
      background: "#1E1E1E",
      color: "#E0E0E0",
      confirmButtonColor: "#FF6F61",
      iconColor: "#FF6F61",
    });

    reset();
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: { xs: 2, sm: "auto" },
        mt: 5,
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        bgcolor: "#2C2C2C",
        boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
      }}
    >
      <center>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#e65a50",
          fontWeight: "bolder",
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        Feedback Form
      </Typography>
      </center>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#2C2C2C",
              color: "#E0E0E0",
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#FF6F61" },
              "&.Mui-focused fieldset": { borderColor: "#FF6F61" },
            },
            "& .MuiInputLabel-root": { color: "#aaa" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#FF6F61" },
          }}
        />

        {/* Email */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#2C2C2C",
              color: "#E0E0E0",
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#FF6F61" },
              "&.Mui-focused fieldset": { borderColor: "#FF6F61" },
            },
            "& .MuiInputLabel-root": { color: "#aaa" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#FF6F61" },
          }}
        />

        {/* Feedback */}
        <TextField
          label="Feedback"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          {...register("feedback")}
          error={!!errors.feedback}
          helperText={errors.feedback?.message}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#2C2C2C",
              color: "#E0E0E0",
              "& fieldset": { borderColor: "#555" },
              "&:hover fieldset": { borderColor: "#FF6F61" },
              "&.Mui-focused fieldset": { borderColor: "#FF6F61" },
            },
            "& .MuiInputLabel-root": { color: "#aaa" },
            "& .MuiInputLabel-root.Mui-focused": { color: "#FF6F61" },
          }}
        />
        <center>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#FF6F61",
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }, 
              px: { xs: 1, sm: 2, md: 3 }, 
              py: { xs: 0.4, sm: 0.6, md: 0.8 },
              "&:hover": { bgcolor: "#e65b50" },
            }}
          >
            Submit
          </Button>
        </center>
      </form>
    </Box>
  );
};

export default FeedbackForm;
