import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Typography, IconButton, Box, Grid, Paper } from '@mui/material'; // Import components from Material-UI
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'; // Import icons for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import your CSS file for additional styling

function Home() {
  const sliderRef = React.useRef(null); // Create a ref for Slider component

  // Function to move to the previous slide
  const goToPrevSlide = () => {
    sliderRef.current.slickPrev(); // Call slickPrev() method of Slider component
  };

  // Function to move to the next slide
  const goToNextSlide = () => {
    sliderRef.current.slickNext(); // Call slickNext() method of Slider component
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Box mt={4} mb={4}> {/* Add margin top and bottom */}
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: '2rem' }}>
          Welcome to <span style={{ color: '#ffd700' }}>Gleam</span>!
        </Typography>
        <Slider {...settings} ref={sliderRef}>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/2666/5894/files/TeesCollectionsPageBanner_99bd353f-3623-4251-8f6e-cd87a6d68bdf_2800x1200.jpg?v=1702453337" alt="carousel item 1" className="carousel-image" />
          </div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0425/2709/6991/files/080122-jzs-web-banners_1024x1024.jpg?v=1659540861" alt="carousel item 2" className="carousel-image" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3333,w_5000,x_0,y_0/c_limit,dpr_1.25,f_auto,fl_lossy,q_80,w_1488/SeptemberShop-courtesy_gb1yug.jpg" alt="carousel item 3" className="carousel-image" />
          </div>
        </Slider>
      </Box>
      {/* Modern navigation buttons */}
      <IconButton onClick={goToPrevSlide} sx={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }}>
        <ArrowBackIos />
      </IconButton>
      <IconButton onClick={goToNextSlide} sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: '1' }}>
        <ArrowForwardIos />
      </IconButton>
      {/* Additional content */}
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1">
                Learn more about our company and what we offer.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h2" gutterBottom>
                Latest Products
              </Typography>
              <Typography variant="body1">
                Check out our newest arrivals and hottest products.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
