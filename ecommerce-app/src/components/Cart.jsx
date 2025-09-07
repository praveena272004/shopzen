import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Button, Box } from "@mui/material";
import { removeFromCart, clearCart } from "../redux/cartSlice.js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imgLoading, setImgLoading] = useState({});
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    Swal.fire({
      title: "Removed!",
      text: "Item removed from cart.",
      icon: "info",
      timer: 1000,
      showConfirmButton: false,
      background: "#2C2C2C",
      color: "#E0E0E0",
    });
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      Swal.fire({
        title: "Cart Empty",
        icon: "warning",
        timer: 1200,
        showConfirmButton: false,
        background: "#2C2C2C",
        color: "#E0E0E0",
      });
      return;
    }
    navigate("/order");
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container className="cart-container" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#e65a50",
          fontWeight: "bolder",
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        Shop Cart
      </Typography>
      {items.length === 0 && (
        <Typography
          variant="h5"
          sx={{
            color: "#302a2aff",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
          }}
        >
          Your cart is empty.
        </Typography>
      )}
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
            p: 2,
            border: "1px solid #444444",
            borderRadius: 2,
            backgroundColor: "#3A3A3A",
            color: "#E0E0E0",
            gap: 2,
          }}
        >
          {/* Product */}
          <Box
            sx={{
              width: 60,
              height: 60,
              backgroundColor: "#2C2C2C",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {imgLoading[item.id] && (
              <CircularProgress size={20} sx={{ color: "#FF6F61" }} />
            )}
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              loading="lazy"
              onLoad={() =>
                setImgLoading((prev) => ({ ...prev, [item.id]: false }))
              }
              onError={() =>
                setImgLoading((prev) => ({ ...prev, [item.id]: false }))
              }
              sx={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: imgLoading[item.id] ? "none" : "block",
              }}
            />
          </Box>

          <Typography sx={{ flex: { xs: "100%", sm: 2 } }}>
            {item.title}
          </Typography>
          <Typography sx={{ flex: "1", textAlign: "center" }}>
            Qty: {item.quantity}
          </Typography>
          <Typography sx={{ flex: "1", textAlign: "center" }}>
            ${(item.price * item.quantity).toFixed(2)}
          </Typography>
          <Button
            variant="outlined"
            color="error"
            sx={{
              mt: { xs: 1, sm: 0 },
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 0.4, sm: 0.6, md: 0.8 },
            }}
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </Button>
        </Box>
      ))}
      {items.length > 0 && (
        <>
          <Typography
            variant="h6"
            sx={{ color: "#e65a50", mt: 2, fontWeight: "bolder" }}
          >
            Total: ${total.toFixed(2)}
          </Typography>

          <Button
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
            onClick={handleCheckout}
          >
            Place Order
          </Button>

          <Button
            variant="outlined"
            sx={{
              mt: 2,
              ml: 2,
              color: "#FF6F61",
              borderColor: "#FF6F61",
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 0.4, sm: 0.6, md: 0.8 },
              "&:hover": {
                backgroundColor: "#FF6F61",
                color: "#FFFFFF",
              },
            }}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
