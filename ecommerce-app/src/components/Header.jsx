import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Badge,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <AppBar
      position="sticky" 
      sx={{
        backgroundColor: "#2C2C2C",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)", 
        zIndex: 1200, 
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", 
          px: { xs: 1.5, sm: 3, md: 4 },
          py: { xs: 0.5, sm: 1 },
        }}
      >
        {/* Logo + ShopZen */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            component="img"
            src="/Shopzen-icon.svg"
            alt="ShopZen Logo"
            sx={{
              width: { xs: 30, sm: 40, md: 50 },
              height: "auto",
              display: "block",
              verticalAlign: "middle",
            }}
          />
          <Typography
            sx={{
              fontWeight: "bolder",
              fontSize: { xs: "1.7rem", sm: "1.8rem", md: "2.3rem" },
              color: "#E0E0E0",
              textShadow: {xs:"1px 2px 4px #FF6F61", sm: "2px 2px 4px #FF6F61" },
              fontFamily: "'Poppins', sans-serif",
              lineHeight: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            ShopZen
          </Typography>
        </Box>

        {/* Navigation Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, sm: 2, md: 3 },
          }}
        >
          <IconButton
            component={NavLink}
            to="/"
            sx={{
              color: "#FF6F61",
              "&:hover": { color: "#FFFFFF" },
            }}
          >
            <HomeIcon sx={{ fontSize: { xs: 22, sm: 26, md: 32 } }} />
          </IconButton>

          <IconButton component={NavLink} to="/cart" color="inherit">
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon
                sx={{ color: "#FF6F61", fontSize: { xs: 22, sm: 26, md: 32 },"&:hover": { color: "#FFFFFF" }, }}
              />
            </Badge>
          </IconButton>

          <IconButton
            component={NavLink}
            to="/feedback"
            sx={{
              color: "#FF6F61",
              "&:hover": { color: "#FFFFFF" },
            }}
          >
            <FeedbackIcon sx={{ fontSize: { xs: 22, sm: 26, md: 32 } }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
