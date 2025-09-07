import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice.js";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/data/products.json?_v=" + Date.now()) 
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("products", JSON.stringify(data));
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      })
      .catch((err) => console.error("Error loading product:", err));
  }, [id]);

  const handleAdd = () => {
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

  if (!product)
    return <CircularProgress sx={{ display: "block", mx: "auto", mt: 5 }} />;

  return (
    <Container
      sx={{
        mt: 5,
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "center",
      }}
    >
      {/* Product Image */}
      <Box
        component="img"
        src={product.image}
        alt={product.title}
        sx={{
          height: { xs: 200, sm: 250, md: 300 },
          objectFit: "contain",
          flex: 1,
          backgroundColor: "#3A3A3A",
          padding: 1,
          borderRadius: 2,
        }}
      />

      {/* Product Details Box */}
      <Box
        sx={{
          flex: { xs: "100%", sm: 2 },
          minWidth: 250,
          backgroundColor: "#3A3A3A",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#FF6F61",
            fontWeight: "bold",
            fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
          }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: "#FF6F61",
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
          }}
        >
          ${product.price}
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{
            color: "#E0E0E0",
            fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" },
            lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
          }}
        >
          {product.description}
        </Typography>

        <center>
          <Button
            variant="contained"
            onClick={handleAdd}
            sx={{
              backgroundColor: "#FF6F61",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#e65a50",
              },
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              px: { xs: 1, sm: 2, md: 3 },
              py: { xs: 0.4, sm: 0.6, md: 0.8 },
            }}
          >
            Add to Cart
          </Button>
        </center>
      </Box>
    </Container>
  );
};

export default ProductDetails;
