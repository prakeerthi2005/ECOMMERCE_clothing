import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material'; // Import components from Material-UI
import './AboutUs.css'; // Import the custom CSS file

function AboutUs() {
  return (
    <Container>
      <Box mt={4} className="about-container"> {/* Add margin top and apply custom CSS */}
        <Typography variant="h1" component="h1" gutterBottom className="about-title">
          About Us
        </Typography>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="body1" className="about-content" paragraph>
            Welcome to <strong>Gleam</strong>! We are a passionate team dedicated to providing high-quality products and excellent service to our customers.
          </Typography>
          <Typography variant="body1" className="about-content" paragraph>
            Our journey began with a simple idea: to create a brand that reflects style, elegance, and sophistication. Since then, we have grown into a trusted name in the fashion industry, offering a wide range of clothing and accessories for men and women.
          </Typography>
          <Typography variant="body1" className="about-content" paragraph>
            At <strong>Gleam</strong>, we believe in the power of fashion to inspire confidence and express individuality. That's why we curate our collections with care, ensuring that each piece reflects the latest trends and meets our high standards of quality.
          </Typography>
          <Typography variant="body1" className="about-content" paragraph>
            Our commitment to our customers is unwavering. Whether you're shopping online or visiting one of our stores, we strive to make your experience enjoyable and hassle-free. From fast shipping to responsive customer support, we're here to help every step of the way.
          </Typography>
          <Typography variant="body1" className="about-content" paragraph>
            Thank you for choosing <strong>Gleam</strong>. We look forward to helping you discover your style and make a statement wherever you go.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default AboutUs;
