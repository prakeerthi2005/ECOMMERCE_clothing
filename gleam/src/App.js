import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignInSide from './components/SignIn';
import ContactUs from './components/ContactUs';
import FetchRegistration from './components/FetchRegistration';
import Footer from './components/Footer';
import Clothing from './components/Clothing';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs'; // Import the AboutUs component

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} /> 
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/FetchRegistration" element={<FetchRegistration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
