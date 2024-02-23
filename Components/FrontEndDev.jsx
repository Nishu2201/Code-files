import React from "react";
import '../Styles/FrontEndDev.css';
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

function FrontEndDev(){
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
         <section className="frontdev-page">
            <div class="frontdev-container">

                <div class="frontdev-row align-items-center ">
                    <div class="col-md-6 col-sm-12">
                        <div class="frontdev_banner">

                            <div class="frontdev-title d-flex align-items-center ">
                                <div class="frontdev-icon">
                                    <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/shape.png" alt="" />
                                </div>
                                <h3 >AIRAI: Elevating Digital Experiences with Exceptional Mohali's Best</h3>
                            </div>
                            <h1> <span> Front-end Developers</span> </h1>
                            <p className="frontdev-para">Welcome to AIRAI, where we redefine digital experiences through cutting-edge front-end
development services. Based in Mohali, Punjab, we specialize in crafting user-friendly web
interfaces, lightning-fast single-page applications (SPAs), and captivating websites and apps.
With our Frontdev solutions, we ensure that your online presence not only looks stunning but also
delivers intuitive user experiences.</p>
                        </div>
                    </div>
                    <div class=" scrollable_bg">

                        <div class="frontdev text-center ">
                            <img width="473" height="403" src="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Contact-us" decoding="async"
                                srcset="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png 473w, https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner-300x256.png 300w" sizes="(max-width: 473px) 100vw, 473px" />
                        </div>

                    </div>
                </div>

            </div>
        </section>
        <br/>
        <br/>
        {/* Frontend-role page start here  */}
        {/* front-page of backend-dev ended here  */}

  <section className="Frontrole-page">
            <div class="Frontrole-container">

                <div class="Frontrole-row align-items-center ">
                <div class=" FrontRole-img">

<div class="Frontrole text-center ">
    <img width="350" height="350" src={pic2}  alt="Contact-us" />
</div>

</div>
                    <div class="col-md-6 col-sm-12">
                        <div class="Frontrole_banner">

                           
                            <h1> <span> The Role of a Front-End Developer</span> </h1>
                            <p className="FrontRol-para">The Front-End Developer at our company is a creative force, translating design concepts into seamless, 
                            responsive web interfaces. Utilizing expertise in HTML, CSS, and JavaScript,
                             they optimize applications for speed and cross-platform compatibility. This role demands a keen eye for detail,
                              troubleshooting skills, and a commitment to staying current with industry trends. Collaborating closely
                               with design and back-end teams, our Front-End Developer contributes to the creation of visually stunning and 
                               highly functional user experiences, ensuring our digital presence aligns with brand standards and user expectations.</p>
                        </div>
                        <button type="button"  className="frontRole-btn">
                        <span><p className="Rolebtn-para">Our Services</p></span>
                            <em><img src={arrow} alt="" width="800" className="FrontBtnImg" /></em>
                            
                        </button>
                    </div>
                    
                </div>

            </div>
        </section>
 
<section className="FrontEndcards">
    <div className="FrontCard-container">
   <div> <h1 className="Frontheading-cards">Front-End Solutions</h1> </div>
   <div className="FrontcardSlider">
   <Slider {...settings}>
    
   <div class="FrontRoleCard Frontcard-1">
   <div className="FrontHead-part">
     <em className="headingICON-Img ">
                  <img
                    src={android}
                    alt="pics"
                    width="30"
                     className="frontheadImg1"
                  />
                </em>
                <h2 className="frontroleCards-headings">  CSS3 and HTML5
                </h2></div>
      <p className="frontroleCards-text">
      We strongly believe that responsive design has the ability to improve
user engagement. Our front-end developers construct websites and web applications
that smoothly adjust to different device sizes and types by process-dataively using HTML5 and
CSS3. Across all platforms—desktop and mobile—our designs remain elegant and
consistent.</p>
      </div> 
      <div class="FrontRoleCard Frontcard-2">
      <div className="FrontHead-part">
      <em className="headingICON-Img">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="frontheadImg2"
                  />
                </em>
                <h2 className="frontroleCards-headings"> Framework-Based Custom JavaScript Development
                </h2></div>
      <p className="frontroleCards-text">
      JavaScript empowers dynamic user interfaces with features like animations, parallax scrolling, and picture carousels. Leveraging frameworks such as React, Vue, and Angular, our team crafts robust desktop, mobile, and online applications. Through client-side routing and API integration, 
      we ensure stable performance and seamless user experiences.</p>
    </div>
      <div class="FrontRoleCard Frontcard-3">
    <div className="FrontHead-part">
    <em className="headingICON-Img ">
                 <img
                   src={CPS}
                   alt="pics"
                   width="30"
                    className="frontheadImg3"
                 />
              </em>
              <h2 className="frontroleCards-headings"> CMS Theming</h2> </div>
     <p className="frontroleCards-text">
     Make a statement with unique CMS theming for WordPress, Drupal,
Magento, and Joomla platforms. By crafting custom layouts that showcase your brand
identity, our front-end developers help you establish a distinctive online presence and
increase user engagement.</p>
     </div>
     <div class="FrontRoleCard Frontcard-1">
     <div className="FrontHead-part">
      <em className="headingICON-Img">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="frontheadImg2"
                  />
                </em>
                <h2 className="frontroleCards-headings"> UI/UX Design</h2></div>
      <p className="frontroleCards-text">
      Our specialty is turning ideas into clear user interfaces and captivating
experiences. Our UI/UX designs, which are based on data-driven insights gleaned from
thorough user research, combine aesthetics with utility. We put user-centric design ideas
first from conception to completion in order to produce outstanding digital solutions.
      </p> 
    </div>
    <div class="FrontRoleCard Frontcard-2">
    <div className="FrontHead-part">
      <em className="headingICON-Img">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="frontheadImg2"
                  />
                </em>
                <h2 className="frontroleCards-headings"> Applications on a single <br/>page (SPAs)</h2></div>
      <p className="frontroleCards-text">
      With our single-page applications, which
provide app-like experiences on a single web page, you may experience the smooth flow
of material. SPAs reduce the number of page refreshes, guaranteeing quick and
seamless user experiences.</p>
    </div>
    <div class="FrontRoleCard Frontcard-3">
    <div className="FrontHead-part">
      <em className="headingICON-Img">
                  <img
                    src={IOs}
                    alt="pics"
                    width="30"
                     className="frontheadImg2"
                  />
                </em>
                <h2 className="frontroleCards-headings"> Progressive online <br/> Applications (PWAs)
                </h2></div>
      <p className="frontroleCards-text">
      These online applications offer a native
app-like experience, helping you embrace the future of web development. We create
PWAs with responsive designs, push notifications, offline accessibility, and lightning-fast
load times by utilizing frameworks such as React.</p>
    </div>
    </Slider></div>
    </div>
</section>
         {/* How we work code start here  */}
         <div className="Our-Process">
    <section className="Our-work">
      <div className="process-container">
        <div className="process-text">
          <em className="process-icon">
            <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/how_work_icon.svg" alt="Requirement" width="30"  />
          </em>
          <h2>Our Process</h2>
        </div>
        <div className='process-heading'>
        <h3 >We put the work into your idea, and here’s how we do it!</h3>
        </div>
        <div className="process-part ">
          <Slider {...sliderSettings}>
           
              <div className="process-place">
                <div className="process-data">
                  <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Idea.svg" alt="" /></em>
                    <h3>Requirement Analysis</h3>
                </div>
                <div className="process-max">
                  <p className="process-max_para">First, we understand your objectives and goals, timeline, budget limit, and vision. We work
together to identify which engagement model best suits your requirements.</p>
                </div>
              </div>
         
              <div className="process-place">
                <div className="process-data">
                  <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Iterations.svg" alt="" /></em>
                 
                    <h3>Develop a Strategy </h3>
                </div>
                <div className="process-max">
                  <p className="process-max_para">We create detailed strategies and plans that include benchmarks, KPIs, and the assignment of
front-end engineers.</p>
                </div>
              </div>
           
           
              <div className="process-place">
                  <div className="process-data">
                    <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Conceptualization.svg" alt="" /></em>
                  
                      <h3>Design Finalization</h3>
                  </div>
                  <div className="process-max">
                    <p className="process-max_para">Once you give your approval, we get to work on front-end development and design, keeping you
updated at every stage.</p>
                  </div>
               
              </div>

              <div className="process-place">
                  <div className="process-data">
                    <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Development-Cycle.svg" alt="" /></em>
                   
                      <h3>Development and Testing</h3>
                  </div>
                  <div className="process-max">
                    <p className="process-max_para">We develop the website while adhering to the latest web
standards and conduct rigorous testing to eliminate any bugs or glitches.</p>
                  </div>
                </div>

              <div className="process-place">
                  <div className="process-data">
                    <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Launch.svg" alt="" /></em>
                    
                      <h3>  Delivery and Support</h3>
                  </div>
                  <div className="process-max">
                    <p className="process-max_para">Upon completion, we deliver the website to you and provide
ongoing support to address any further needs or enhancements.</p>
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
    </div>
    <br/>
  {/* front-page of web-dev ended here  */}
  <section className="FrontUs-section">
            <div className="Front-container">
                <div className="Frontdev-section-title">
                    <em className="FrontUs_icon"><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/why_us.svg" alt="" width="30" /></em>
                    <h2>Why choose Airai</h2>
                </div>
                <div className="Frontdev-section-content">
                  
                    <div className="Frontdev-section">
                        <h3 >Because we match your project expectations with our<br/> unwavering commitment.</h3>
                        <p className="Frontdev-ptext">We have a team of talented developers with years of experience in the industry.</p>
                    </div>
                    {/* <div className="Frontdev-section-button"> */}
                        <button type="button"  className="FrontUs-btn">
                            <em><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/phone.png" alt="" width="300" className="FrontUs-img" /></em>
                            <span><p>Schedule A Call</p></span>
                        </button>
                    {/* </div> */}
                </div>
                {/* <div className="frontEnd-boxes"> */}
                <div className="process-part slick_dot_space slick-initialized slick-slider slick-dotted" id="services-slider">
                <Slider {...sliderSettings1}>
                  <div className="slick-slide">
                    <div className="frontEnd-box">
                        <div className="front-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/tailored.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="tailored" decoding="async" loading="lazy" /></i>
                            <h5>ICustomized Solutions</h5>
                            <p className="Front-para">We place a high value on working together to develop solutions
that are specifically suited to your particular needs. We customize our services to meet
your needs, whether you prefer to work with your in-house team or require back-end
assistance.</p>
                        </div>
                    </div>
                    </div>
                    <div className="slick-slide">
                    <div className="frontEnd-box">
                        <div className="front-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/project.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="project" decoding="async" loading="lazy" /></i>
                            <h5>Top Expertise</h5>
                            <p className="Front-para">Our developers combine technical expertise with outstanding
communication, critical thinking, and problem-solving abilities to make up the top 1% of
front-end expertise.</p>
                        </div>
                    </div>
                    </div>
                    <div className="slick-slide">
                    <div className="frontEnd-box">
                        <div className="front-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/quality.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="quality" decoding="async" loading="lazy" /></i>
                            <h5>Responsive Engagement Models</h5>
                            <p className="Front-para">We provide customizable engagement models
based on your project's needs and preferences, ranging from staff augmentation to
dedicated teams and end-to-end outsourcing.</p>
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
                                         <h3 class="Fronth2-para">Have An Idea?</h3>
                                         <p className="Frontcontact-para">Partner with AIRAI for unparalleled front-end development solutions that elevate your digital
presence and drive success. Let's embark on a journey to reimagine the possibilities of your
online experiences.</p>
                                        
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
   </div></>
    );
}


export default FrontEndDev;