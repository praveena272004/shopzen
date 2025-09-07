import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice.js";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Swal.fire({
      title: "Added!",
      text: `${product.title} has been added to your cart.`,
      icon: "success",
      confirmButtonColor: "#FF6F61",
      background: "#2C2C2C",
      color: "#E0E0E0",
    });
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        margin: "auto",
        borderRadius: 4,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ffffff", 
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 12px 20px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{
          objectFit: "contain",
          padding: "10px",
          backgroundColor: "#3A3A3A",
        }}
        loading="lazy"
      />
      <CardContent sx={{ backgroundColor: "#3A3A3A", color: "#E0E0E0" }}>
        <Typography
          variant="body1"
          gutterBottom
          noWrap
          sx={{ color: "#E0E0E0" }}
        >
          {product.title}
        </Typography>
        <Typography variant="h6" sx={{ color: "#E0E0E0" }}>
          ${product.price}
        </Typography>
      </CardContent>
       
      <CardActions sx={{ backgroundColor: "#3A3A3A" }}>
        <Button
          size="small"
          component={Link}
          to={`/product/${product.id}`}
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#444444",
            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }, 
            px: { xs: 1, sm: 2, md: 3 }, 
            py: { xs: 0.4, sm: 0.6, md: 0.8 }, 
            "&:hover": { backgroundColor: "#555555" },
          }}
        >
          View
        </Button>
        <Button
          size="small"
          onClick={handleAddToCart}
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#FF6F61",
            fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }, 
            px: { xs: 1, sm: 2, md: 3 }, 
            py: { xs: 0.4, sm: 0.6, md: 0.8 },
            "&:hover": { backgroundColor: "#e65a50" },
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
