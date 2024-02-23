/* eslint-disable react-hooks/exhaustive-deps */
// Assuming you have imported your images at the top of the file like this
import React, { useState, useEffect } from "react";
import App1 from '../Images/App1.png';
import App2 from '../Images/App2.jpg';
import App3 from '../Images/App3.png';
import App4 from '../Images/App4.jpg';
import GameDes from '../Images/GameDesign.jpg';
import Web1 from '../Images/Web1.jpg';
import Web3 from '../Images/Website.jpg';
import Web2 from '../Images/WebDes2.jpg';
import Web4 from '../Images/Web4.jpg';
import Web5 from '../Images/website2.png';

const Gallery1 = () => {
  const [selected, setSelected] = useState(0);
  const [images, setImages] = useState([]);
  const imagesCount =10; // Updated to 5 as you provided 5 images
  const imagesArray = [App1, App2,App3 ,App4 ,GameDes, Web1, Web2, Web3, Web4, Web5];

  const handleSelection = () => {
    const galleryImages = document.getElementsByClassName('wrapper');

    if (selected === galleryImages.length - 1) {
      document.getElementsByClassName('right')[0].classList.add('disabled');
    } else {
      document.getElementsByClassName('right')[0].classList.remove('disabled');
    }

    if (selected === 0) {
      document.getElementsByClassName('left')[0].classList.add('disabled');
    } else {
      document.getElementsByClassName('left')[0].classList.remove('disabled');
    }

    for (let i = 0; i < galleryImages.length; i++) {
      const img = galleryImages[i];
      if (img.id === `image_${selected}`) {
        img.classList.add('selected');
      } else {
        img.classList.remove('selected');
      }
    }
  };

  const handleRightClick = () => {
    setSelected((prevSelected) => (prevSelected < imagesCount - 1 ? prevSelected + 1 : prevSelected));
  };

  const handleLeftClick = () => {
    setSelected((prevSelected) => (prevSelected > 0 ? prevSelected - 1 : prevSelected));
  };

  const init = () => {
    const tempImages = [];
    for (let i = 0; i < imagesCount; i++) {
      const imageWrapper = (
        <div key={i} id={`image_${i}`} className={`wrapper ${i === selected ? 'selected' : ''}`}>
          <img src={imagesArray[i]} alt={''} width={1000} height={850} className="img-slides"/>
          {/* <img src={imagesArray[i]} alt={''} className="flipped" width={550} height={650} /> */}
        </div>
      );
      tempImages.push(imageWrapper);
    }
    setImages(tempImages);
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    handleSelection();
  }, [selected]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleRightClick();
    }, 3000); // Auto-advance every 3 seconds (adjust as needed)

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [selected]); 
  
  return (
    <div className="gallery">
      <div id="slider" className="slider">
        {images}
      </div>
      <div className="arrows">
        <div className={`left ${selected === 0 ? 'disabled' : ''}`} onClick={handleLeftClick}>
          <div className="left" aria-label="Previous">
            {/* You can use the provided SVG or your own */}
            <svg viewBox="0 0 512 512" width="25" title="chevron-circle-left">
              <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z" />
            </svg>
          </div>
        </div>
        <div className={`right ${selected === imagesCount - 1 ? 'disabled' : ''}`} onClick={handleRightClick}>
          <div className="right" aria-label="Next">
            {/* You can use the provided SVG or your own */}
            <svg viewBox="0 0 512 512" width="25" title="chevron-circle-right">
              <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery1;
