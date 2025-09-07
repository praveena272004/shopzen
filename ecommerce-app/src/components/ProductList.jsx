import React, { useEffect, useState } from "react";
import { Grid, CircularProgress, Box } from "@mui/material";
import ProductCard from "./ProductCard.jsx";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // First check localStorage
    const savedProducts = localStorage.getItem("products");

    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
      setLoading(false);
    } else {
      // Fetch from local JSON file
      fetch("/data/products.json")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          localStorage.setItem("products", JSON.stringify(data)); // cache in localStorage
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error loading products:", err);
          setLoading(false);
        });
    }
  }, []);

  if (loading)
    return <CircularProgress sx={{ display: "block", mx: "auto", mt: 5 }} />;

  return (
    <Box
      sx={{ px: { xs: 1, sm: 3, md: 5 }, py: 5, backgroundColor: "#f5f5f5" }}
    >
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {products.map((product) => (
          <Grid key={product.id} display="flex" justifyContent="center">
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
