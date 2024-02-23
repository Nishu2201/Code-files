import React from "react";
import '../Styles/BackEndDev.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Camlogo from "../assets/company logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeSquare, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import CPS from '../Images/CPS.png';
import android from '../Images/android.png';
import IOs from '../Images/ios.png';
import pic2 from '../Images/pic2.png';
import arrow from '../Images/down-arrow.gif';


function BackEndDev(){
    const sliderSettings1 = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    return(
         <>
         <section className="backDev-page">
            <div class="backDev-container">

                <div class="backDev-row align-items-center ">
                    <div class="col-md-6 col-sm-12">
                        <div class="backDev_banner">

                            <div class="backDev-title d-flex align-items-center ">
                                <div class="backDev-icon">
                                    <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/shape.png" alt="" />
                                </div>
                                <h3 >AIRAI: Innovate, Create, Dominate: Mohali's Best</h3>
                            </div>
                            <h1> <span> Back-End Developers</span> </h1>
                            <p className="backDev-para">Are you looking for exceptional back-end expertise to support your web applications? Look no
further than AIRAI, the leading back-end development company in Mohali, Punjab. With a focus
on excellence and backrolevation, we specialize in crafting robust back-end solutions tailored to
your unique needs.</p>
                        </div>
                    </div>
                    <div class=" scrollable_bg">

                        <div class="backDev text-center ">
                            <img width="473" height="403" src="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Contact-us" decoding="async"
                                srcset="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png 473w, https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner-300x256.png 300w" sizes="(max-width: 473px) 100vw, 473px" />
                        </div>

                    </div>
                </div>

            </div>
        </section>
        <br/>
        <br/>
  {/* front-page of backend-dev ended here  */}

  <section className="backrole-page">
            <div class="backrole-container">

                <div class="backrole-row align-items-center ">
                <div class=" Role-img">

<div class="backrole text-center ">
    <img width="350" height="350" src={pic2}  alt="Contact-us" />
</div>

</div>
                    <div class="col-md-6 col-sm-12">
                        <div class="backrole_banner">

                           
                            <h1> <span> The Role of a Back-End Developer</span> </h1>
                            <p className="Role-para">At AIRAI, our dedicated team of back-end developers is committed to delivering excellence in
every facet of your project. From designing and developing server-side applications to
managing databases and crafting APIs, our experts handle it all with finesse. Here's a glimpse
into the tasks our back-end developers excel at</p>
                        </div>
                        <button type="button"  className="backRole-btn">
                        <span><p className="bckRole-para">Our Services</p></span>
                            <em><img src={arrow} alt="" width="800" className="Bckrolebtn-img" /></em>
                            
                        </button>
                    </div>
                    
                </div>

            </div>
        </section>
 
<section className="BackEndcards">
    <div className="RoleCard-container">
   <div> <h1 className="Roleheading-cards">Back-End Solutions</h1> </div>
   <div className="CardsSlide">
   <Slider {...settings}>
    
   <div class="BackRolecard rolecard-1">
   <div className="header-part">
     <em className="headingICON-Img ">
                  <img
                    src={android}
                    alt="pics"
                    width="30"
                     className="Roleheading-Img1"
                  />
                </em>
                <h2 className="Rolecards-headings"> Server-Side Application Development</h2></div>
      <p className="Rolecards-text">
      Our programmers build dependable solutions
that guarantee flawless user experiences by quickly handling front-end requests using
Java, Python, Ruby, and Node.js.</p>
      </div> 
      <div class="BackRolecard rolecard-2">
      <div className="header-part">
      <em className="headingICON-Img">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="Roleheading-Img2"
                  />
                </em>
                <h2 className="Rolecards-headings"> Database Design and Management</h2></div>
      <p className="Rolecards-text">
      GWe provide effective database solutions that are
customized to meet your requirements. We are skilled in SQL queries and have worked
with databases such as PostgreSQL and MySQL.</p>
    </div>
      <div class="BackRolecard rolecard-3">
    <div className="header-part">
    <em className="headingICON-Img ">
                 <img
                   src={CPS}
                   alt="pics"
                   width="30"
                    className="Roleheading-Img3"
                 />
              </em>
              <h2 className="Rolecards-headings"> API Development</h2> </div>
     <p className="Rolecards-text">
     To facilitate seamless communication between front-end and
back-end components, we place a high priority on the design and implementation of
safe, scalable, and user-friendly APIs.</p>
     </div>
     <div class="BackRolecard rolecard-1">
     <div className="header-part">
      <em className="headingICON-Img">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="Roleheading-Img2"
                  />
                </em>
                <h2 className="Rolecards-headings"> Security & Authentication</h2></div>
      <p className="Rolecards-text">
      With strong authentication and authorization protocols, our
developers protect your application from attacks like SQL injection and cross-site
scripting attacks.
      </p> 
    </div>
    <div class="BackRolecard rolecard-2">
    <div className="header-part">
      <em className="headingICON-Img">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="Roleheading-Img2"
                  />
                </em>
                <h2 className="Rolecards-headings"> Monitoring and Performance Optimization</h2></div>
      <p className="Rolecards-text">
      To guarantee smooth operation, we
constantly keep an eye on the performance of your application. Using tools like New
Relic and Datadog, we quickly locate and fix bottlenecks.</p>
    </div>
    </Slider></div>
    </div>
</section>
{/* <section className="BackEndcards"></section> */}
        <br/>
        <br/>
  <section className="backUs-section">
                <div className="back-container">
                    <div className="backend-section-title">
                        <em className="backUs_icon"><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/why_us.svg" alt="" width="30" /></em>
                        <h2>Why choose Airai</h2>
                    </div>
                    <div className="backend-section-content">

                        <div className="backend-section">
                            <h3>Because we match your project expectations with our<br /> unwavering commitment.</h3>
                            <p className="light-black">We have a team of talented developers with years of experience in the industry.</p>
                        </div>
                        {/* <div className="backend-section-button"> */}
                        <button type="button" className="backUs-btn">
                            <em><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/phone.png" alt="" width="300" className="backUs-img" /></em>
                            <span><p>Schedule A Call</p></span>
                        </button>
                        {/* </div> */}
                    </div>
                    {/* <div className="backend-boxes"> */}
                    <div className="work_part slick_dot_space slick-initialized slick-slider slick-dotted" id="services-slider">
                        <Slider {...sliderSettings1}>
                            <div className="slick-slide">
                                <div className="backend-box">
                                    <div className="back-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/tailored.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="tailored" decoding="async" loading="lazy" /></i>
                                        <h5>Expertise</h5>
                                        <p className="back-para">Supported by a group of qualified experts, we bring years of expertise and
understanding to the table, guaranteeing excellent solutions backendized to your unique
needs.</p></div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="backend-box">
                                    <div className="back-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/project.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="project" decoding="async" loading="lazy" /></i>
                                        <h5>Role</h5>
                                        <p className="back-para">By adopting the newest technology and best practices, we stay ahead of
the competition and are able to provide creative solutions that advance your digital
objectives.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="backend-box">
                                    <div className="back-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/quality.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="quality" decoding="async" loading="lazy" /></i>
                                        <h5>Customization</h5>
                                        <p className="back-para">We recognize the individuality of each project. In order to ensure that
our solutions are a perfect fit for your business goals, we work closely with you to
understand your needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="backend-box">
                                    <div className="back-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Reliability</h5>
                                        <p className="back-para">You can rely on us to be your reliable back-end development partner
because we have a track record of delivering high-quality solutions on schedule and
under budget.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="backend-box">
                                    <div className="back-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Customer satisfaction</h5>
                                        <p className="back-para">Our primary goal is our clients satisfaction. We work hard to
always go above and beyond your expectations by offering unmatched assistance and
support during the whole development process and beyond.</p>
                                    </div>
                                </div>
                            </div>

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
                                         <h3 class="BackEndh2-para">Have An Idea?</h3>
                                         <p className="Backcontact-para">Take your web applications to the next level with AIRAI's top-notch back-end development
services. Join with us now and start your journey towards digital success.</p>
                                        
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


export default BackEndDev;