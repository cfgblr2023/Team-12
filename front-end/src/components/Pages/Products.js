
import React from 'react';
import '../../App.css';
import Donate from '../Donate';

// import Cards from '../Cards';
import Footer from '../Footer';
// import HeroSection from '../HeroSection-2';
import Lms from './LSM'
// import Footer from '../Footer';

function Products() {
  return (
    <>
      <Lms />

      {/* <HeroSection /> */}
      <br /><br />
      <Donate />
      <br /><br /><br />
      <Footer />
    </>
  );
}

export default Products;
