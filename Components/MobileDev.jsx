import React from "react";
import '../Styles/MobileDev.css';
import CPS from '../Images/CPS.png';
import android from '../Images/android.png';
import IOs from '../Images/ios.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Camlogo from "../assets/company logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeSquare, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import PageImg from '../Images/mob1.gif';
function MobileDev(){
    const sliderSettings1 = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    
    return(
         <>
         <section className="mobDev-page">
            <div class="mobDev-container">

                <div class="mobDev-row align-items-center ">
                    <div class="col-md-6 col-sm-12">
                        <div class="mobDev_banner">

                            <div class="mobDev-title d-flex align-items-center ">
                                <div class="mobDev-icon">
                                    <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/shape.png" alt="" />
                                </div>
                                <h3 >AIRAI: Innovate, Create, Dominate: Mohali's Best</h3>
                            </div>
                            <h1> <span> Mobile App Developers</span> </h1>
                            <p className="mobDev-para">Are you seeking to enhance devlopmober engagement and boost brand recognition through devlopmob
mobile app solutions? Look no further! AIRAI stands ready to elevate your business to new
heights with our expertise in mobile technologies and frameworks. We offer best mobile app
development services in mohali, punjab. Our expert team specializes in both native and hybrid
platform solutions, ensuring that your app reaches your target audience effectively.</p>
                        </div>
                    </div>
                    <div class=" Mobile_bg">

                        <div class="mobDev text-center ">
                            <img width="743" height="403" src={PageImg} class="Page-img" alt="Contact-us" 
                                 />
                        </div>

                    </div>
                </div>

            </div>
        </section>
        
        {/* cards code start here */}
        <section className='data-Mob'>
        <section className="Mobilecards">
        
        <h1 className="heading-cards">Mobile App Solutions</h1>
        <div class="mobCard-container">
      
  <div class="div-transform">
    <div class="card card-1">
     <em className="headingICON-Img ">
                  <img
                    src={android}
                    alt="pics"
                    width="30"
                     className="heading-Img1"
                  />
                </em>
                <h2 className="cards-headings"> Android Development</h2>
      <p className="cards-text">
      Are you seeking to enhance devlopmober engagement and boost brand recognition through devlopmob
mobile app solutions? <br/>Look no further! AIRAI stands ready to elevate your business to new
heights with our expertise in mobile technologies and frameworks. 
{/* We offer best mobile app development services in mohali, punjab.  */}
<br/>Our expert team specializes in both native and hybrid
platform solutions, ensuring that your app reaches your target audience effectively.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="card card-2">
      <em className="headingICON-Img">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="heading-Img2"
                  />
                </em>
                <h2> iOS Development</h2>
      <p className="cards-text">
      Given how widely available Apple products are becoming, it's critical to serve a diverse range of
clientele. Our iOS development team makes use of a variety of cutting-edge technologies to
make sure your application is accessible and easy to use on iPhones and iPads. We help you
maximize your reach and engage a broader audience.
      </p>
      {/* <h4>Read More ➡</h4> */}
    </div>
    <div class="card card-3">
     <em className="headingICON-Img ">
                  <img
                    src={CPS}
                    alt="pics"
                    width="30"
                     className="heading-Img3"
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
</section> </section>
        <br/>
        <br/>
  {/* front-page of web-dev ended here  */}
  <section className="MobDevUs">
                <div className="MobDevelop-container">
                    <div className="devlopmob-section-title">
                        <em className="MobDevelopUs_icon"><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/why_us.svg" alt="" width="30" /></em>
                        <h2>Why choose Airai</h2>
                    </div>
                    <div className="devlopmob-section-content">

                        <div className="devlopmob-section">
                            <h3>Because we match your project expectations with our<br /> unwavering commitment.</h3>
                            <p className="Mob-Dev Para">We have a team of talented developers with years of experience in the industry.</p>
                        </div>
                        {/* <div className="devlopmob-section-button"> */}
                        <button type="button" className="MobDevelopUs-btn">
                            <em><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/phone.png" alt="" width="300" className="MobDevelopUs-img" /></em>
                            <span><p>Schedule A Call</p></span>
                        </button>
                        {/* </div> */}
                    </div>
                    {/* <div className="devMob_BOXes"> */}
                    <div className="devmob_part slick_dot_space slick-initialized slick-slider slick-dotted" id="services-slider">
                        <Slider {...sliderSettings1}>
                            <div className="slick-slide">
                                <div className="devMob_BOX">
                                    <div className="MobDevelop-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/tailored.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="tailored" decoding="async" loading="lazy" /></i>
                                        <h5>Significant Results</h5>
                                        <p className="MobDevelop-para">Working with Fortec Web Solutions Pvt. Ltd. as a partner means
directing your ideas toward significant results.</p></div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="devMob_BOX">
                                    <div className="MobDevelop-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/project.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="project" decoding="async" loading="lazy" /></i>
                                        <h5>Enhanced Brand Recognition and consumer Engagement:</h5>
                                        <p className="MobDevelop-para">Our area of expertise is
creating intuitive  mobile applications that increase brand awareness and consumer
engagement.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="devMob_BOX">
                                    <div className="MobDevelop-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/quality.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="quality" decoding="async" loading="lazy" /></i>
                                        <h5>Enhanced Business Operations</h5>
                                        <p className="MobDevelop-para">We build strong relationships with both current and
new clients by utilizing our  <br/>mobile apps to enhance business operations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="devMob_BOX">
                                    <div className="MobDevelop-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Customized Solutions</h5>
                                        <p className="MobDevelop-para">We provide mobile app solutions that are specially designed to
meet your unique business requirements and tastes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="devMob_BOX">
                                    <div className="MobDevelop-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Outstanding User Experience</h5>
                                        <p className="MobDevelop-para">Using devlopmobized UX/UI design, our skilled developers
concentrate on providing outstanding user experiences.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="devMob_BOX">
                                    <div className="MobDevelop-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Scalability and Security</h5>
                                        <p className="MobDevelop-para">We design mobile apps with scalability and security in mind,
ensuring your app can grow alongside your business without compromising user
experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="devMob_BOX">
                                    <div className="MobDevelop-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Timely Delivery</h5>
                                        <p className="MobDevelop-para">We value your time and prioritize timely delivery without compromising
on quality throughout the development process.</p>
                                    </div>
                                </div> </div>
                            
                        </Slider>
                    </div>
                </div>
            </section><br /><br />
           {/* contact form & detail code start here  */}
        <section class="contact-idea-sec ">

<section class="quote_section contact-idea">
     <div class="detail-container">
     <div class="form_section wow fadeInUpSlide" data-wow-duration="1s" data-wow-delay="0.4s">
       <div class="deatil-row">
          <div class="col-lg-6">
           <div class="contact_Wrapper h-100 d-flex flex-column justify-content-between pr-xl-5">
                <div class="title_h2_new">
                                         <h3 class="mobileh2-para">Have An Idea?</h3>
                                         <p className="mobilecontact-para">Embrace the power of digitalization and unlock your business's full potential. Contact us today
to get started on your mobile app development journey!</p>
                                        
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
                                             <p class="text-para">Feel free to fill out the form, and our team will get in touch within
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
             <button class="send-btn-Mob" type="submit" id="submit" name="submit">Send
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
                             {/* <br/>
                             <br/> */}
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
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Services</a></li>
                                <li><a href="/">Contact</a></li>
                                {/* <li>code <a href="https://github.com/berru-g/web3.0">berru-g</a></li> */}
                            </ul>
                        </div>
                        <div className="footer-section links">
                            <h3>Airai Services</h3>
                            <ul>
                                <li><a href="/">Mobile Development</a></li>
                                <li><a href="/">Web development</a></li>
                                <li><a href="/">Game Development</a></li>
                                <li><a href="/">Blockchain</a></li>
                                <li><a href="/">UI/UX</a></li>
                            </ul>
                        </div>
                        <div className="footer-section contact">
                            <h3>Contact</h3>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> AIRAI TECHNOLOGIES PVT. LTD.<br /> F-177, KAILASH TOWER, PHASE 8B, MOHALI, PB</p>
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
        </div></>
    );
}


export default MobileDev;