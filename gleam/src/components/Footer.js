import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link component and useLocation hook for routing
import { Typography, Grid, Container } from '@mui/material';

function Footer() {
  const location = useLocation();

  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {location.pathname === '/aboutus' ? ( // Check if current path is home
                'About Us'
              ) : (
                <Link to="/aboutus">About Us</Link> // If not, render Link component
              )}
            </Typography>
            <Typography variant="body2">
              Learn more about our company and mission.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {location.pathname === '/contactus' ? ( // Check if current path is contact us
                'Contact Us'
              ) : (
                <Link to="/contactus">Contact Us</Link> // If not, render Link component
              )}
            </Typography>
            <Typography variant="body2">
              Get in touch with our support team.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Useful Links
            </Typography>
            <Typography variant="body2">
              <Link to="/shipping">Shipping Information</Link>
            </Typography>
            <Typography variant="body2">
              <Link to="/returns">Return Policy</Link>
            </Typography>
            <Typography variant="body2">
              <Link to="/faqs">FAQs</Link>
            </Typography>
            <Typography variant="body2">
              <Link to="/support">Customer Support</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
