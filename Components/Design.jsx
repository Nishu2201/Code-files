import React from "react";
import '../Styles/Design.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Camlogo from "../assets/company logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeSquare, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import CPS from '../Images/CPS.png';
import android from '../Images/android.png';
import IOs from '../Images/ios.png';
import Landing from '../Images/Landing-pic.png';
// import LogoICon from '../Images/Logo-ICon.jpg';
import WebdeV from '../Images/Web_dev.png';
import WebDes from '../Images/WebPic.png';

function Design(){
    const sliderSettings1 = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return(
         <>
         <section className="design-page">
            <div class="design-container">

                <div class="design-row align-items-center ">
                    <div class="col-md-6 col-sm-12">
                        <div class="design_banner">

                            <div class="design-title d-flex align-items-center ">
                                <div class="design-icon">
                                    <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/shape.png" alt="" />
                                </div>
                                <h4>Design Beyond Boundaries: Mohali's Trusted Agency for</h4>
                            </div>
                            <h1> <span> Creative design Solutions</span> </h1>
                            <p className="design-para">Welcome to our world, where gaming experiences are beyond the realm of the mind and
creativity has no limitations. Being the leading Mohali, Punjab, game design and development
company, we produce captivating, immersive gaming experiences. Our innovative development
services enable us to accomplish your gaming goals for mobile, PC, and console platforms.</p>
                        </div>
                    </div>
                    <div class=" scrollable_bg">

                        <div class="design text-center ">
                            <img width="473" height="403" src="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Contact-us" decoding="async"
                                srcset="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png 473w, https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner-300x256.png 300w" sizes="(max-width: 473px) 100vw, 473px" />
                        </div>

                    </div>
                </div>

            </div>
        </section>
        {/* <br/>
        <br/> */}

          
        {/* cards code start here  */}
        
        <section className="Full-pageCards"></section>
        <section className="DesignCards">
        
        <h1 className="DesHeader">Design services</h1>
        <div class="descards-container">
      
  <div class="descad-transform">
    <div class="DesCad DesCad-1">
     <em className="desIcon-Pics ">
                  <img
                    src={android}
                    alt="pics"
                    width="30"
                     className="DesH1-Pics"
                  />
                </em>
                <h2 className="des-HEADINGS"> Graphic Designing</h2>
      <p className="destext">
      With captivating and engaging visuals, our talented graphic
designers bring your ideas to reality. We make sure that every design, from marketing
brochures to branding materials, perfectly conveys your unique voice and message.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="DesCad DesCad-2">
      <em className="desIcon-Pics">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="DesPicture2"
                  />
                </em>
                <h2 className="des-HEADINGS2"> UI/UX (App, Website, Game design)</h2>
      <p className="destext">
      UI/UX is an essential component of all we do in the
design of apps, websites, and games. Our UI/UX designers create user-friendly
interfaces that improve usability and make consumers satisfied. We make sure every
interaction—whether it's through a game, website, or mobile app—is seamless and fun.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="DesCad DesCad-3">
     <em className="desIcon-Pics ">
                  <img
                    src={CPS}
                    alt="pics"
                    width="30"
                     className="DesPicture3"
                  />
               </em>
               <h2> Logo Design</h2> 
      <p className="destext">
      The foundation of your brand identification is your logo. Our designers
create original, unique, creative and memorable logos that effectively conveys your
brand's values to your target audience.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    
  </div>
</div>
</section>
<section className="DesignCards">
        
        <h1 className="DesHeader">Web services</h1>
        <div class="descards-container">
      
  <div class="descad-transform">
    <div class="DesCad DesCad-1">
     <em className="desIcon-Pics ">
                  <img
                    src={WebDes}
                    alt="pics"
                    width="30"
                     className="DesH1-Pics"
                  />
                </em>
                <h2 className="des-HEADINGS">  Web Design </h2>
      <p className="destext">
      Use our unique web design solutions to improve your website's online
visibility. Whether you require a dynamic e-commerce platform or a refined corporate
website, we blend creativity and functionality to provide a flawless user experience
across all platforms.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="DesCad DesCad-2">
      <em className="desIcon-Pics">
                  <img
                    src={Landing}
                    alt="pics"
                   
                    height="30"
                     className="WebDesPicture2"
                  />
                </em>
                <h2 className="des-HEADINGS-2"> Landing Page</h2>
      <p className="destext">
      Use our eye-catching landing page designs to make a strong first
impression. We optimize every component to increase engagement and boost
conversions, making it easier for you to meet your marketing goals and objectives.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="DesCad DesCad-3">
     <em className="desIcon-Pics ">
                  <img
                    src={WebdeV}
                    alt="pics"
                    width="30"
                     className="DesPicture3"
                  />
               </em>
               <h2> Web Development</h2> 
      <p className="destext">
      Use our unique web Development solutions to improve your website's online
visibility. Whether you require a dynamic e-commerce platform or a refined corporate
website, we blend creativity and functionality to provide a flawless user experience
across all platforms.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    
  </div>
</div>
</section>
<section className="DesignCards">
        
        <h1 className="DesHeader">Model Design services</h1>
        <div class="descards-container">
      
  <div class="descad-transform">
    <div class="DesCad DesCad-1">
     <em className="desIcon-Pics ">
                  <img
                    src={android}
                    alt="pics"
                    width="30"
                     className="DesH1-Pics"
                  />
                </em>
                <h2 className="des-HEADINGS"> 3D modeling</h2>
      <p className="destext">
      With the help of our expert modeling services, transport your audience to
stunning 3D landscapes. We carefully create 3D models of things, people, and places to
give your creative ideas depth and reality.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="DesCad DesCad-2">
      <em className="desIcon-Pics">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="DesPicture2"
                  />
                </em>
                <h2 className="des-HEADINGS2"> Character Modeling</h2>
      <p className="destext">
      Our character modeling expertise brings your fictional creations to
life with personality and charm For storytelling, gaming, or animation, we design
enduring characters who connect with your viewership.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="DesCad DesCad-3">
     <em className="desIcon-Pics ">
                  <img
                    src={CPS}
                    alt="pics"
                    width="30"
                     className="DesPicture3"
                  />
               </em>
               <h2> Prop modeling</h2> 
      <p className="destext">
      Our services help you bring your ideas into existence with accuracy
and detail, whether they are for product designs or architectural prototypes. Whether it's
for a video game, or advertisement, we deliver high-quality 3D models that meet your
exact specifications.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
  </div>
</div>
</section>
<section className="DesignCards">
        
        <h1 className="DesHeader">Game Development services</h1>
        <div class="descards-container">
      
  <div class="descad-transform">
    <div class="DesCad DesCad-1">
     <em className="desIcon-Pics ">
                  <img
                    src={android}
                    alt="pics"
                    width="30"
                     className="DesH1-Pics"
                  />
                </em>
                <h2 className="des-HEADINGS"> Environment Design</h2>
      <p className="destext">
      Transport your audience to immersive worlds with our
environment design services. Whether it's for film, gaming, or virtual reality, we create
rich and detailed environments that enhance storytelling and immersion.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="DesCad DesCad-2">
      <em className="desIcon-Pics">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="DesPicture2"
                  />
                </em>
                <h2 className="des-HEADINGS2"> Game Asset Design</h2>
      <p className="destext">
      Level up your game development with our game asset design
services. From characters to props to environments, we create high-quality assets that
elevate the visual appeal and gameplay experience of your game.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="DesCad DesCad-3">
     <em className="desIcon-Pics ">
                  <img
                    src={CPS}
                    alt="pics"
                    width="30"
                     className="DesPicture3"
                  />
               </em>
               <h2> Game Art</h2> 
      <p className="destext">
      Our game art services cover everything from concept art to final assets,
ensuring your game stands out with captivating visuals and immersive aesthetics.
Whether it's 2D or 3D, we bring your game world to life with creativity and skill.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    
  </div>
</div>
</section>
<section className="DesignCards">
        
        <h1 className="DesHeader"> Modeling & Rendering services</h1>
        <div class="descards-container">
      
  <div class="descad-transform">
    <div class="DesCad DesCad-1">
     <em className="desIcon-Pics ">
                  <img
                    src={android}
                    alt="pics"
                    width="30"
                     className="DesH1-Pics"
                  />
                </em>
                <h2 className="des-HEADINGS"> 3D Modeling & Rendering</h2>
      <p className="destext">
      With the help of our expert modeling services, transport your audience to
stunning 3D landscapes. We carefully create 3D models of things, people, and places to
give your creative ideas depth and reality.
Showcase your designs with photorealistic 3D renderings that wow your
audience. Our rendering experts bring your concepts to life with lighting, shading, and
composition techniques that create stunning visuals.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="DesCad DesCad-2">
      <em className="desIcon-Pics">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="DesPicture2"
                  />
                </em>
                <h2 className="des-HEADINGS2"> 3D Avatar</h2>
      <p className="destext">
      Personalize your digital presence with custom 3D avatars that reflect your
unique identity. Whether it's for gaming, virtual events, or social media, we create
avatars that capture your personality and style.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="DesCad DesCad-3">
     <em className="desIcon-Pics ">
                  <img
                    src={CPS}
                    alt="pics"
                    width="30"
                     className="DesPicture3"
                  />
               </em>
               <h2> NFT Creation (2D, 3D)</h2> 
      <p className="destext">
      Ride the wave of the digital art revolution with our NFT creation
services. Whether it's 2D illustrations or 3D sculptures, we help you tokenize your
creations and unlock new possibilities in the world of blockchain art.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    
  </div>
</div>
</section>

        <br/>
  {/* front-page of game-dev ended here  */}
  <section className="designUs-section">
                <div className="design-container">
                    <div className="desSec-section-title">
                        <em className="designUs_icon"><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/why_us.svg" alt="" width="30" /></em>
                        <h2>Why choose Airai</h2>
                    </div>
                    <div className="desSec-section-content">

                        <div className="desSec-section">
                            <h3>We have the expertise to make your gaming ideas a reality<br /> due
to our years of experience.</h3>
                            <p className="light-black">We have a team of talented developers with years of experience in the industry.</p>
                        </div>
                        {/* <div className="desSec-section-button"> */}
                        <button type="button" className="designUs-btn">
                            <em><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/phone.png" alt="" width="300" className="designUs-img" /></em>
                            <span><p>Schedule A Call</p></span>
                        </button>
                        {/* </div> */}
                    </div>
                    {/* <div className="designs-boxes"> */}
                    <div className="work_part slick_dot_space slick-initialized slick-slider slick-dotted" id="services-slider">
                        <Slider {...sliderSettings1}>
                            <div className="slick-slide">
                                <div className="designs-box">
                                    <div className="design-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/tailored.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="tailored" decoding="async" loading="lazy" /></i>
                                        <h5>Creating Gaming Legacies</h5>
                                        <p className="design-para">We design experiences that have a lasting impact in
addition to games. With unmatched creativity and skill, our team is committed to honing
your game development concepts and seeing them through to completion.</p></div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="designs-box">
                                    <div className="design-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/project.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="project" decoding="async" loading="lazy" /></i>
                                        <h5>Top-Notch Design Services</h5>
                                        <p className="design-para">Our in-house designers are passionate about
world-building and narrative, and they work diligently to develop each and every detail of
your game to captivate players and keep them engaged for hours on end.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="designs-box">
                                    <div className="design-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/quality.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="quality" decoding="async" loading="lazy" /></i>
                                        <h5>Proven Track Record</h5>
                                        <p className="design-para">With a track record of delivering amazing game development
solutions, we have established ourselves as industry leaders. Our portfolio clearly
demonstrates our dedication to excellence and innovation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="designs-box">
                                    <div className="design-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Let's Strategize</h5>
                                        <p className="design-para">Ready to embark on your gaming journey? Let's collaborate to turn
your visions into reality. Whether you're a seasoned developer or a newcomer to the
gaming industry, we have the expertise and passion to help you succeed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="designs-box">
                                    <div className="design-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Experience the Difference</h5>
                                        <p className="design-para">Explore our creative game design and development
portfolio to see the magic we can create together. From captivating worlds to memorable
characters, we bring your gaming fantasies to life with unrivaled skill and passion.</p>
                                    </div>
                                </div>
                            </div>
                           
                        </Slider>
                    </div>
                </div>
            </section>
            {/* <br /><br /> */}
            {/* Contact  ended here  */}
            <section class="contact-idea-sec ">

<section class="quote_section contact-idea">
     <div class="detail-container">
     <div class="form_section wow fadeInUpSlide" data-wow-duration="1s" data-wow-delay="0.4s">
       <div class="deatil-row">
          <div class="col-lg-6">
           <div class="contact_Wrapper h-100 d-flex flex-column justify-content-between pr-xl-5">
                <div class="title_h2_new">
                                         <h3 class="h2-para">Have An Idea?<br />
                                             We Would Love To Help.</h3>
                                         <p class="text-para">Feel free to fill out the form, and our team will get in touch within
                                             <strong> 24 hours.</strong></p>
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
             <button class="send-btn mx-auto btn-primary mt-0 cta_btn" type="submit" id="submit" name="submit">Send
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


export default Design;