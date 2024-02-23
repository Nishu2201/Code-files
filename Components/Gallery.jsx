import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
const Gallery = () => {
  const activate = (e) => {
    const slider = document.querySelector(".slider");
    const items = document.querySelectorAll(".item");

    if (e.target.matches(".next")) {
      slider.append(items[0]);
    }

    if (e.target.matches(".prev")) {
      slider.prepend(items[items.length - 1]);
    }
  };

  return (
    
    <section class="gallery-sec">
    <div className='gallery-container'>
      <ul className='slider'>
        <li className='item' style={{ backgroundImage: "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Lossless Youths"</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. </p>
            <button>Read More</button>
          </div>
        </li>
        <li className='item' style={{ backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Estrange Bond"</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. </p>
            <button>Read More</button>
          </div>
        </li>
        <li className='item' style={{ backgroundImage: "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"The Gate Keeper"</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim. </p>
            <button>Read More</button>
          </div>
        </li>
        <li className='item' style={{ backgroundImage: "url('https://images7.alphacoders.com/878/878663.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Last Trace Of Us"</h2>
            <p className='description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li className='item' style={{ backgroundImage: "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"Urban Decay"</h2>
            <p className='description'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li className='item' style={{ backgroundImage: "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')" }}>
          <div className='content'>
            <h2 className='title'>"The Migration"</h2>
            <p className='description'> Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
              praesentium nisi. Id laboriosam ipsam enim. </p>
            <button>Read More</button>
          </div>
        </li>
      </ul>
      <nav className='arrow-nav'>
        <IonIcon className='btn prev' icon={arrowBackOutline} onClick={activate}></IonIcon>
        <IonIcon className='btn next' icon={arrowForwardOutline} onClick={activate}></IonIcon>
      </nav>
    </div>
    </section>
  );
};

export default Gallery;
