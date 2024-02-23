import React from "react";
import '../Styles/GameDev.css';
import CPS from '../Images/CPS.png';
import android from '../Images/android.png';
import IOs from '../Images/ios.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Camlogo from "../assets/company logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeSquare, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

function GameDev(){
    const sliderSettings1 = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return(
         <>
         <section className="gameDev-page">
            <div class="gameDev-container">

                <div class="gameDev-row align-items-center ">
                    <div class="col-md-6 col-sm-12">
                        <div class="gameDev_banner">

                            <div class="gameDev-title d-flex align-items-center ">
                                <div class="gameDev-icon">
                                    <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/shape.png" alt="" />
                                </div>
                                <h4>AIRAI: Where Innovation Meets Gaming - Mohali's Trusted</h4>
                            </div>
                            <h1> <span> Game Development Partner</span> </h1>
                            <p className="gameDev-para">AIRAI is the place to go if you're looking for the best game development services in Mohali. We
feel immense pride in being known as the Best Game Development Company in Mohali, one of
the few pioneers in the mobile game development industry. We distinguish ourselves with our
unmatched experience and unwavering commitment to quality, having demonstrated our ability
to produce outstanding iOS, Android, HTML, PC, and other games for a large number of
satisfied gDevers.</p>
                        </div>
                    </div>
                    <div class=" scrollable_bg">

                        <div class="gameDev text-center ">
                            <img width="473" height="403" src="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Contact-us" decoding="async"
                                srcset="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png 473w, https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner-300x256.png 300w" sizes="(max-width: 473px) 100vw, 473px" />
                        </div>

                    </div>
                </div>

            </div>
        </section>
        {/* <br/> */}
        
        {/* cards code start here  */}
        <section className='data-Game'>
        <section className="Gamecards">
        
        <h1 className="GameHead">Game Development services</h1>
        <div class="gamcard-container">
      
  <div class="card-transform">
    <div class="Gcard Gcard-1">
     <em className="headingICON-Img ">
                  <img
                    src={android}
                    alt="pics"
                    width="30"
                     className="Gheading-Img1"
                  />
                </em>
                <h2 className="heading-1"> Android Game Development</h2>
      <p className="cards-text">
      Android Game Development: Collaborate with the leading
expert on Android games development, AIRAI, and experience exceptional outcomes firsthand.
Our team uses the newest game design techniques to create visually stunning 2D and 3D
games that are affordable. Additionally to improve your gaming experience, we also offer free
demos and in-game advertisements.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="Gcard Gcard-2">
      <em className="headingICON-Img">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="Gheading-Img2"
                  />
                </em>
                <h2 className="heading-2"> iOS Game Development</h2>
      <p className="cards-text">
      Due to the iPhone's unique position in the worldwide market, there is
a constant need for exceptional iPhone games. The best iPhone games are what we do best at
AIRAI; they have compelling narratives, stunning visuals, and vibrant settings that keep players
interested for hours on end.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="Gcard Gcard-3">
     <em className="headingICON-Img ">
                  <img
                    src={CPS}
                    alt="pics"
                    width="30"
                     className="Gheading-Img3"
                  />
               </em>
               <h2> Cross-Platform Solutions</h2> 
      <p className="cards-text">
      Save time and cost by opting for our top-notch Hybrid Mobile Applications. Our cross-platform
development expertise allows us to create applications that run seamlessly on various devices
and operating systems. Whether it's Android or iOS, our hybrid solutions ensure consistent
performance and user experience across different platforms.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    
  </div>
</div>
</section></section>

        <br/>
       
  {/* front-page of game-dev ended here  */}
  <section className="GameUs-section">
                <div className="Game-container">
                    <div className="gDev-section-title">
                        <em className="GameUs_icon"><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/why_us.svg" alt="" width="30" /></em>
                        <h2>Why choose Airai</h2>
                    </div>
                    <div className="gDev-section-content">

                        <div className="gDev-section">
                            <h3>We have the expertise to make your gaming ideas a reality<br /> due
to our years of experience.</h3>
                            <p className="light-black">We have a team of talented developers with years of experience in the industry.</p>
                        </div>
                        {/* <div className="gDev-section-button"> */}
                        <button type="button" className="GameUs-btn">
                            <em><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/phone.png" alt="" width="300" className="GameUs-img" /></em>
                            <span><p>Schedule A Call</p></span>
                        </button>
                        {/* </div> */}
                    </div>
                    {/* <div className="gDev-boxes"> */}
                    <div className="work_part slick_dot_space slick-initialized slick-slider slick-dotted" id="services-slider">
                        <Slider {...sliderSettings1}>
                            <div className="slick-slide">
                                <div className="gDev-box">
                                    <div className="Game-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/tailored.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="tailored" decoding="async" loading="lazy" /></i>
                                        <h5>Unmatched Expertise</h5>
                                        <p className="Game-para">We have the expertise to make your gaming ideas a reality due
to our years of experience and team of professional experts in the field.Our ability to
work across a wide range of platforms guarantees that your game will stand out in the
crowded market of today.</p></div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="gDev-box">
                                    <div className="Game-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/project.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="project" decoding="async" loading="lazy" /></i>
                                        <h5>Cutting-Edge Solutions</h5>
                                        <p className="Game-para">We provide cutting-edge gaming experiences that go above
and beyond your expectations  by utilizing the newest technology and techniques.  Our
cutting-edge gaming solutions are unmatched because we consistently develop new
gameplay mechanics and <br/>visually captivating graphics.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="gDev-box">
                                    <div className="Game-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/quality.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="quality" decoding="async" loading="lazy" /></i>
                                        <h5>Client-Centric Approach</h5>
                                        <p className="Game-para">At AIRAI, our top priority is our clients' satisfaction.
Throughout the development process, we collaborate closely with you to  make sure your
goals are precisely and superbly achieved and your vision is realized.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="gDev-box">
                                    <div className="Game-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Reasonably priced</h5>
                                        <p className="Game-para">We provide competitive prices without compromising quality
because we recognize how important it is to stay within a certain budget. All businesses
can benefit from our various price choices, which make premium game production
affordable.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="gDev-box">
                                    <div className="Game-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Exceptional Support</h5>
                                        <p className="Game-para">Our dedication to quality doesn't end when <br/>the project is
completed. We guarantee that your game will run smoothly long after it has been
released by offering continuous support and maintenance services.</p>
                                    </div>
                                </div>
                            </div>
                           
                        </Slider>
                    </div>
                </div>
            </section>
            <br /><br />

                 {/* contact form & detail code start here  */}
                 <section class="contact-idea-sec ">

<section class="quote_section contact-idea">
     <div class="detail-container">
     <div class="form_section wow fadeInUpSlide" data-wow-duration="1s" data-wow-delay="0.4s">
       <div class="deatil-row">
          <div class="col-lg-6">
           <div class="contact_Wrapper h-100 d-flex flex-column justify-content-between pr-xl-5">
                <div class="title_h2_new">
                                         <h3 class="gameh2-para">Have An Idea?</h3>
                                         <p className="gamecontact-para">Choose AIRAI as your game development partner and experience the difference firsthand.
Elevate your gaming experience with our cutting-edge solutions, and
unwavering commitment to excellence. Let's start on a journey to create unforgettable gaming
experiences together.</p>
                                        
                                     </div>
                                     <div class="contact-card_grid">
                                         <div class="contact-card-row">
                                             <div class="col-md-12 mb-md-4 mb-4">
                                                 <div class="contact-card-box bg-white d-flex align-items-center">
                                                     <em class="detail-icon"><img
                                                         src="https://www.chicmic.in/wp-content/themes/chicmic/img/landing/contact-form/email.svg"
                                                         alt="Email" width="30" /></em>
                                                     <div class="d-flex flex-column form-icon-items">
                                                         <span>Mail us</span>
                                                         <strong>
                                                             contact@airaigames.in</strong>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div class="col-md-12 mb-md-4 mb-4">
                                                 <div class="contact-card-box  bg-white d-flex  align-items-center">
                                                     <em class="detail-icon"><img
                                                         src="https://www.chicmic.in/wp-content/themes/chicmic/img/landing/contact-form/hiring.svg"
                                                         alt="Email" width="30" /></em>
                                                     <div class="d-flex flex-column form-icon-items">
                                                         <span>For Hiring Inquiry</span>
                                                         <strong>+91-8560003222, +91-172-0000000</strong>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div class="col-12 mb-md-4 mb-4">
                                                 <div class="contact-card-box  bg-white d-flex align-items-center">
                                                     <em class="detail-icon"><img
                                                         src="https://www.chicmic.in/wp-content/themes/chicmic/img/landing/contact-form/whatsapp.svg"
                                                         alt="Whatsapp" width="30" /></em>
                                                     <div class="d-flex flex-column form-icon-items">
                                                         <span>Whatsapp</span>
                                                         <strong>+91-8560003222</strong>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div class="col-12 mb-md-0 mb-4">
                                                 <div class="contact-card-box  bg-white d-flex align-items-center">
                                                     <em class="detail-icon"><img
                                                         src="https://www.chicmic.in/wp-content/themes/chicmic/img/landing/contact-form/skype.svg"
                                                         alt="Skype" width="30" /></em>
                                                     <div class="d-flex flex-column form-icon-items">
                                                         <span>Skype</span>
                                                         <strong>sales@airaigames.in</strong>
                                                     </div>
                                                 </div>
                                             </div>
                                             <p class="gameContext-para">Feel free to fill out the form, and our team will get in touch within
                                             <strong> 24 hours.</strong></p>
                                         </div>
                                     </div>
                                 </div>
                                 </div>
                             </div>
                             <div className=" col-lg-6">
                                 <div className="quotes-form">
                                     <div className="quotes-form-column">
                             <div class="col-md-12 text-center">
      <p class="global_success_1 label-success"></p> 
     <p class="global_error_1 label-error"></p>
 </div>
 {/* <div class="alert alert-success position-fixed" role="alert" id="inner_form_success" style="display:none;"></div> */}
 <form className="form-contact" id="inner_form_get_started" name="inner_form_get_started" action="#" method="post" class=""
     enctype="multipart/form-data" onsubmit="return validateInnerForm();">
     <div class="formData-row">
         <div class="col-md-12">
             <div class="Contactform-group">
                  {/* <label>Name<sup> *</sup></label>  */}
                 <div class="position-relative input-field">
                     <input type="text" class="form-control" id="name_1" name="name_1" aria-describedby="name_1"
                         placeholder="Name"/>
                     <em class="label-icon">
                         <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/landing/contact-form/username.svg"
                             alt="username" width="30" className="label-img"/></em>
                 </div>
                 <p class="label-error" id="name_1_error"></p>
             </div>
         </div>
         <div class="col-md-12">
             <div class="Contactform-group">
                  {/* <label>E-mail<sup> *</sup></label> */}
                 <div class="position-relative input-field">
                     <input type="email" class="form-control" id="email_1" name="email_1" aria-describedby="email_1"
                         placeholder="Email" />
                     <em class="label-icon">
                         <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/landing/contact-form/email-icon.svg"
                             alt="email" width="30" className="label-img" /></em>
                 </div>
                 <p class="label-error" id="email_1_error"></p>
             </div>
         {/* </div>*/}
         </div>
         <div class="col-md-12">
             <div class="Contactform-group">
                 <textarea class="form-control" id="message_1" name="message_1"
                     placeholder="Tell us about your project"></textarea>
                 <p class="label-error" id="message_1_error"></p>
             </div>
         </div>
         <div class="col-md-12">
             <div class="position-relative badge_wrap">
                 <em class="badge-icon">
                     <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/landing/contact-form/security-badge.svg"
                         alt="security badge" width="30" className="NDA-icon"/>
                 </em>
                 Your Idea is Fully Protected By Our <strong>Non Disclosure <br/>Agreement (NDA)</strong>
             </div>
         </div>
         <div class="col-md-12 mt-4">
             <button class="send-btn-Game" type="submit" id="submit" name="submit">Send
                 Message</button>
         </div>
         </div> 
         </form> </div>
         </div>
                                 </div>
                             </div>
                             </div>
                             </section>
                             </section>
                             <br/>
                             <br/>
                             {/* contact form ended here */}
        {/* Footer section start here */}
        <div className="footer">
   <section className="footer-sec">
   <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Our links</h3>
          <ul>
          <li><a href="/">Home</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* <li>code <a href="https://github.com/berru-g/web3.0">berru-g</a></li> */}
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Airai Services</h3>
          <ul>
            <li><a href="/mobile devlopmement">Mobile Development</a></li>
            <li><a href="/web devlopmement">Web development</a></li>
            <li><a href="/game devlopmement">Game Development</a></li>
            <li><a href="/blockchain devlopmement">Blockchain</a></li>
            <li><a href="/design">UI/UX</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> AIRAI TECHNOLOGIES PVT. LTD.<br/> F-177, KAILASH TOWER, PHASE 8B, MOHALI, PB</p> 
          <p><FontAwesomeIcon icon={faEnvelopeSquare} />  contact@example.com</p>
          <p> <FontAwesomeIcon icon={faPhone} /> +1 234 567 890</p>
        </div>
      </div>
      {/* 
    <div className="Copyright-content">
      <p> Copyright &copy;
        <script>
          document.write(new Date().getFullYear());
        </script>
        All rights reserved | Airai
      </p>
    </div> */}
      <div className="footer-bottom">
        <p> All rights reserved |
           <img src={Camlogo} alt="Company Logo" className="camlogo" /></p>
      </div>
    </div>
   </section>
   </div>
        </>
    );
}


export default GameDev;