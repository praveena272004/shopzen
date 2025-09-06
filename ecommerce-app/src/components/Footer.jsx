import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => (
  <Box 
    className="footer"
    sx={{
      textAlign: 'center',
      p: 2,
      mt: 5,
      bgcolor: '#221f1fff',   
      color: '#FFFFFF',      
    }}
  >
    <Typography>© 2025 ShopZen. All Rights Reserved.</Typography>
  </Box>
);

export default Footer;
