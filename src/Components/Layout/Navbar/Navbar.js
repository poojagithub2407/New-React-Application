import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold' }}>
            <Link style={{ textDecoration: 'none', color: 'black' }}>APP LOGO</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>DASHBOARD</Link>
          </Button>
          <Button color="inherit">
            <Link to="/createAds" style={{ textDecoration: 'none', color: 'inherit' }}>CREATE ADS</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
