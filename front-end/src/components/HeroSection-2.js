import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection-2.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://youtu.be/I2UBjN5ER4s'></video>
      <h1>OUR VOLUNTEERS</h1>
      <p>GIVE BACK TO COMMUNITY</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN UP
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;