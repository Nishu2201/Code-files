import React from "react";
import '../Styles/WebDev.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Camlogo from "../assets/company logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeSquare, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import WebImg from '../Images/webPic.gif';


function WebDev(){
    const sliderSettings1 = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
      autoplaySpeed: 2000,
      };
    return(
        <>
        <section className="webDev-page">
            <div class="webDev-container">

                <div class="webDev-row align-items-center ">
                    <div class="col-md-6 col-sm-12">
                        <div class="webDev_banner">

                            <div class="webDev-title d-flex align-items-center ">
                                <div class="webDev-icon">
                                    <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/shape.png" alt="" />
                                </div>
                                <h3 >Increase Your Online Presence: Mohali's Top</h3>
                            </div>
                            <h1> <span> Web Development Experts</span> </h1>
                            <p className="webDev-para">Are you seeking the perfect blend of creativity, functionality, and professionalism for your online
                                presence? Look no further than AIRAI, the leading web development company in Mohali. With a
                                proven track record of delivering exceptional websites specially designed and customized as
                                per our clients business needs, we stand out as the go-to choice for businesses in Mohali and
                                Chandigarh.</p>
                        </div>
                    </div>
                    <div class=" scrollable_bg">

                        <div class="webDev text-center ">
                            <img width="473" height="403" src={WebImg} class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Contact-us" decoding="async"
                                 />
                        </div>

                    </div>
                </div>

            </div>
        </section>
        <br/>
        <br/>
        {/* How we work code start here  */}
        <section className='data'>
        <div className="Choose_Airai">
    <section className="how_it_work">
      <div className="work-container">
        <div className="work-text">
          <em className="work_icon">
            <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/how_work_icon.svg" alt="Requirement" width="30"  />
          </em>
          <h2>Our Process</h2>
        </div>
        <div className='work-heading'>
        <h3 >We put the work into your idea, and here’s how we do it!</h3>
        </div>
        <div className="work_part slick_dot_space slick-initialized slick-slider slick-dotted" id="services-slider">
          <Slider {...sliderSettings}>
            <div className="slick-slide">
              <div className="work_place">
                <div className="effect">
                  <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Idea.svg" alt="" /></em>
                  <div className="d-flex justify-content-center">
                    <h3>Requirement Analysis</h3>
                  </div>
                </div>
                <div className="work_max">
                  <p className="work-max-para">We begin by thoroughly understanding your requirements and
objectives to ensure that we deliver a website that exceeds your expectations.</p>
                </div>
              </div>
            </div>

            <div className="slick-slide">
              <div className="work_place">
                <div className="effect">
                  <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Iterations.svg" alt="" /></em>
                  <div className="d-flex justify-content-center">
                    <h3>Research and Planning </h3>
                  </div>
                </div>
                <div className="work_max">
                  <p className="work-max-para">Our research team provides you with relevant examples and
insights to help you visualize the final product.</p>
                </div>
              </div>
            </div>
            <div className="slick-slide" >
              <div className="work_place">
                  <div className="effect">
                    <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Conceptualization.svg" alt="" /></em>
                    <div className="d-flex justify-content-center">
                      <h3>Design Finalization</h3>
                    </div>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">Once the design is approved, our expert developers bring it to life,
ensuring pixel-perfect precision and functionality.</p>
                  </div>
                </div>
              </div>

           

              <div className="slick-slide" >
              <div className="work_place">
                  <div className="effect">
                    <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Development-Cycle.svg" alt="" /></em>
                    <div className="d-flex justify-content-center">
                      <h3>Development and Testing</h3>
                    </div>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">We develop the website while adhering to the latest web
standards and conduct rigorous testing to eliminate any bugs or glitches.</p>
                  </div>
                </div>
              </div>

              <div className="slick-slide" >
              <div className="work_place">
                  <div className="effect">
                    <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Launch.svg" alt="" /></em>
                    <div className="d-flex justify-content-center">
                      <h3>  Delivery and Support</h3>
                    </div>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">Upon completion, we deliver the website to you and provide
ongoing support to address any further needs or enhancements.</p>
                  </div>
                </div>
              </div>
              </Slider>
            </div>
         

          <ul className="slick-dots" role="tablist">
            <li className="slick-active" role="presentation">
              <button type="button" role="tab" aria-controls="slick-slide40" aria-label="1 of 6" tabIndex="0" >1</button>
            </li>
            <li role="presentation" className="">
              <button type="button" role="tab" aria-controls="slick-slide41" aria-label="2 of 6" tabIndex="-1">2</button>
            </li>
            <li role="presentation" className="">
              <button type="button" role="tab" aria-controls="slick-slide41" aria-label="2 of 6" tabIndex="-1">2</button>
            </li>
            <li role="presentation" className="">
              <button type="button" role="tab" aria-controls="slick-slide41" aria-label="2 of 6" tabIndex="-1">2</button>
            </li>
            <li role="presentation" className="">
              <button type="button" role="tab" aria-controls="slick-slide41" aria-label="2 of 6" tabIndex="-1">2</button>
            </li>
            <li role="presentation" className="">
              <button type="button" role="tab" aria-controls="slick-slide41" aria-label="2 of 6" tabIndex="-1">2</button>
            </li>
           
          </ul>
        </div>
  
    </section>
    </div></section>
    <br/>
        {/* front-page of web-dev ended here  */}
        <section className="WebDevUs-section">
                <div className="WebDev-container">
                    <div className="custom-section-title">
                        <em className="WebDevUs_icon"><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/why_us.svg" alt="" width="30" /></em>
                        <h2>Why choose Airai</h2>
                    </div>
                    <div className="custom-section-content">

                        <div className="custom-section">
                            <h3>Because we match your project expectations with our<br /> unwavering commitment.</h3>
                            <p className="light-black">We have a team of talented developers with years of experience in the industry.</p>
                        </div>
                        {/* <div className="custom-section-button"> */}
                        <button type="button" className="WebDevUs-btn">
                            <em><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/phone.png" alt="" width="300" className="WebDevUs-img" /></em>
                            <span><p>Schedule A Call</p></span>
                        </button>
                        {/* </div> */}
                    </div>
                    {/* <div className="webDev-boxes"> */}
                    <div className="work_part slick_dot_space slick-initialized slick-slider slick-dotted" id="services-slider">
                        <Slider {...sliderSettings1}>
                            <div className="slick-slide">
                                <div className="webCustom-box">
                                    <div className="WebDev-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/tailored.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="tailored" decoding="async" loading="lazy" /></i>
                                        <h5>Expertise</h5>
                                        <p className="WebDev-para">With a team of seasoned profess-<br/>ionals boasting over 12 years of experience,
we possess the skills and knowledge to crafttop-notch websites using a variety of
plat-<br/>forms and frameworks, including WordPress, Magento, OpenCart, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="webCustom-box">
                                    <div className="WebDev-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/project.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="project" decoding="async" loading="lazy" /></i>
                                        <h5>Comprehensive Services</h5>
                                        <p className="WebDev-para">From custom website develop-<br />ment to theme integration,
CMS integration, and PHP or ASP.Net website creation, we offer a wide range of
services to cater to your every need.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="webCustom-box">
                                    <div className="WebDev-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/quality.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="quality" decoding="async" loading="lazy" /></i>
                                        <h5>Search Engine Friendliness</h5>
                                        <p className="WebDev-para">Our websites are meticulously designed to be search
engine friendly, ensuring maximum visibility and organic traffic for your business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="webCustom-box">
                                    <div className="WebDev-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>User Experience</h5>
                                        <p className="WebDev-para">We prioritize user experience, crafting websites that are not only
visually appealing but also fast-loading and easy to navigate, leading to higher user
engagement and conversion rates.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="webCustom-box">
                                    <div className="WebDev-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Quality Assurance</h5>
                                        <p className="WebDev-para">Our rigorous testing process ensures that your website is error-free
and performs flawlessly across all devices and browsers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="webCustom-box">
                                    <div className="WebDev-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Personalized Support</h5>
                                        <p className="WebDev-para">We provide dedicated support services to address any issues or
concerns you  may have, ensuring a seamless experiencefrom start to finish.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="webCustom-box">
                                    <div className="WebDev-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Innovative Game Design</h5>
                                        <p className="WebDev-para">Combine aesthetics and accessibi-<br />lity  for a smooth user
                                            experience.</p>
                                    </div>
                                </div> </div>
                            {/* <div className="slick-slide">
                                <div className="webDev-box">
                                    <div className="WebDev-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Expert Tech Professionals</h5>
                                        <p className="WebDev-para"> Specialized in AR, VR, Metaverse, Unity, <br /> Unreal, and
                                            more.</p>
                                    </div>
                                </div></div> */}
                            {/* <div className="slick-slide">
                                <div className="webDev-box">
                                    <div className="WebDev-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Full-Cycle Game Development</h5>
                                        <p className="WebDev-para">Covering pre-production, production, <br /> and
                                            post-production.</p>
                                    </div>
                                </div> </div> */}
                            {/* <div className="slick-slide">
                                <div className="webDev-box">
                                    <div className="WebDev-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Client Satisfaction</h5>
                                        <p className="WebDev-para">We prioritize your positive experience <br /> throughout the
                                            development process.</p>
                                    </div>
                                </div></div> */}
                        </Slider>
                    </div>
                </div>
            </section>
            {/* <br /><br /> */}
             {/* contact form & detail code start here  */}
        <section class="contact-idea-sec ">

<section class="quote_section contact-idea">
     <div class="detail-container">
     <div class="form_section wow fadeInUpSlide" data-wow-duration="1s" data-wow-delay="0.4s">
       <div class="deatil-row">
          <div class="col-lg-6">
           <div class="contact_Wrapper h-100 d-flex flex-column justify-content-between pr-xl-5">
                <div class="title_h2_new">
                                         <h3 class="Webh2-para">Have An Idea?</h3>
                                         <p className="Webcontact-para">Embrace the power of digitalization and unlock your business's full potential. Contact us today
to get started on your Web development journey!</p>
                                        
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
             <button class="send-btn-Web" type="submit" id="submit" name="submit">Send
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
             {/* Fotter section start here .... */}
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
    )
}

export default WebDev;