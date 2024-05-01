import React from 'react'
import './Hero.css'

export default function Hero() {
    return (
      <div className="hero">
        <p>👋Hello I'm</p>
        <h1>Somayeh Khanbabaei</h1>
        <p>Front-end developer based in the Netherlands</p>
        <div className='hero-btns'>
          <a href="/contact" title="contact page" className="hero-btns_branding mr-2">Contact me</a>
          <a href="/about" title="about page" className="hero-btns_branding ml-2">About me</a>
        </div>
      </div>
    );
  };