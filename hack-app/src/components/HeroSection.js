import React from 'react';
import './HeroSection.css';
import '../App.css';
function HeroSection(){
  return (
    <div className='hero-container'>
    <video src="/videos/cartune.mp4" autoPlay loop muted />
    <h1>Haias Company</h1>
    <p>Only the highest quality.</p>
    </div>
  )
}

export default HeroSection
