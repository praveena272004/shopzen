import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  Paper,
} from "@mui/material";
import { clearCart } from "../redux/cartSlice.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim() || !form.address.trim() || !form.phone.trim()) {
      Swal.fire("Oops!", "Please fill in all details.", "warning");
      return;
    }

    // Phone number must be exactly 10 digits
    if (!/^\d{10}$/.test(form.phone)) {
      Swal.fire(
        "Invalid Phone",
        "Please enter a valid 10-digit phone number.",
        "error"
      );
      return;
    }

    Swal.fire({
      title: "🎉 Order Placed Successfully!",
      html: `<p>Thank you, <strong>${form.name}</strong>!</p>
             <p>Your order will be delivered to:</p>
             <p><em>${form.address}</em></p>
             <strong>Total: $${total.toFixed(2)}</strong>`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#FF6F61",
      background: "#2C2C2C",
      color: "#E0E0E0",
    }).then(() => {
      dispatch(clearCart());
      navigate("/");
    });
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#e65a50",
          fontWeight: "bolder",
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        Order Summary
      </Typography>

      {items.length === 0 && (
        <Typography sx={{ color: "#241b1bff" }}>
          No items in your order.
        </Typography>
      )}

      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            mb: 2,
            p: 2,
            border: "1px solid #444444",
            borderRadius: 2,
            backgroundColor: "#3A3A3A",
            color: "#E0E0E0",
            alignItems: "center",
          }}
        >
          <Typography sx={{ flex: { xs: "100%", sm: 2 } }}>
            {item.title}
          </Typography>
          <Typography sx={{ flex: "1", textAlign: "center" }}>
            Qty: {item.quantity}
          </Typography>
          <Typography sx={{ flex: "1", textAlign: "center" }}>
            ${(item.price * item.quantity).toFixed(2)}
          </Typography>
        </Box>
      ))}

      {items.length > 0 && (
        <>
          <Typography
            variant="h6"
            sx={{ color: "#e65a50", fontWeight: "bolder", mt: 2 }}
          >
            Total: ${total.toFixed(2)}
          </Typography>

          {/* Checkout Form */}
          <center>
            <Paper
              sx={{ mt: 3, p: 3, backgroundColor: "#3A3A3A", maxWidth: 500 }}
            >
              <form onSubmit={handleFormSubmit}>
                <TextField
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                  InputProps={{
                    style: {
                      backgroundColor: "#3A3A3A", 
                      color: "#E0E0E0", 
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#B0B0B0" }, 
                  }}
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

                <TextField
                  label="Address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                  InputProps={{
                    style: {
                      backgroundColor: "#3A3A3A", 
                      color: "#E0E0E0", 
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#B0B0B0" }, 
                  }}
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
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                  inputProps={{ maxLength: 10 }}
                  InputProps={{
                    style: {
                      backgroundColor: "#3A3A3A", 
                      color: "#E0E0E0", 
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#B0B0B0" }, 
                  }}
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
                      backgroundColor: "#FF6F61",
                      color: "#FFFFFF",
                      fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }, 
                      px: { xs: 1, sm: 2, md: 3 }, 
                      py: { xs: 0.4, sm: 0.6, md: 0.8 }, 
                      "&:hover": { backgroundColor: "#e65a50" },
                    }}
                  >
                    Confirm Order
                  </Button>
                </center>
              </form>
            </Paper>
          </center>
        </>
      )}
    </Container>
  );
};

export default OrderSummary;
