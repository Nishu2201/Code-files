/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import '../Styles/Sliders.css';
const Sliders = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      plusSlides(1);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  });

  const showSlides = (n) => {
    let newIndex = n;
    const slides = document.getElementsByClassName("slide");

    if (newIndex > slides.length) {
      newIndex = 1;
    }
    if (newIndex < 1) {
      newIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Display the current slide
    slides[newIndex - 1].style.display = "block";
    setSlideIndex(newIndex);
  };

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  return (
    <div className="slider-container">
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className={`slide fade ${slideIndex === index + 1 ? 'active' : ''}`}>
          {/* Your slide content here */}
          <img className="slide-image" src={`https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80`} alt='pics'/>
          <div className="slide-content">
            <h3 className="slide-title">title {index + 1}</h3>
            <p className="slide-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, necessitatibus.
            </p>
            <a href="/" className="slide-btn">
              button <ion-icon name="arrow-forward-circle"></ion-icon>
            </a>
          </div>
          <div className="slide-number-container">
            <p className="slider-number">{`0${index + 1}`}</p>
            <hr />
            <p className="slider-number">03</p>
          </div>
        </div>
      ))}

      {/* Next and previous buttons */}
      <div className="slider-nav">
       
        {/* <a className="slider-nav-btn" onClick={() => plusSlides(-1)}> */}
          <ion-icon name="caret-back-outline"></ion-icon>
        {/* </a> */}
        
        {/* <a className="slider-nav-btn" onClick={() => plusSlides(1)}> */}
          <ion-icon name="caret-forward-outline"></ion-icon>
        {/* </a> */}
      </div>

      {/* The dots/circles */}
      <div className="dot-container">
        {Array.from({ length: 3 }, (_, index) => (
          <span key={index} className={`dot ${slideIndex === index + 1 ? 'active' : ''}`} onClick={() => currentSlide(index + 1)}></span>
        ))}
      </div>
    </div>
  );
};

export default Sliders;