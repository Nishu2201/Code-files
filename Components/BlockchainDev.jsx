import React from "react";
import '../Styles/BlockchainDev.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Camlogo from "../assets/company logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeSquare, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import Blockchain from '../Images/Blockchain.svg';
import devOps from '../Images/devOps.svg';
import Game from '../Images/Game.svg';
import Java from '../Images/JAVA.svg';
import Meta from '../Images/Metaverse.svg';
// import Quality from '../Images/Quality.svg';
import service from '../Images/services.svg';
import web from '../Images/Web.svg';

function BlockchainDev(){
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
      const ServicesData = [
        { img: Java, title: 'Smart Contracts Development ' },
        { img: web, title: 'Crypto Exchange Development' },
        { img: Game, title: 'Web3 Development' },
        { img: Blockchain, title: 'Tokenization' },
        { img: devOps, title: 'NFT Marketplace Development' },
        { img: Meta, title: 'Crypto Marketing' },
      ];

    return(
         <>
         <section className="blockDev-page">
            <div class="blockDev-container">

                <div class="blockDev-row align-items-center ">
                    <div class="col-md-6 col-sm-12">
                        <div class="blockDev_banner">

                            <div class="blockDev-title d-flex align-items-center ">
                                <div class="blockDev-icon">
                                    <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/shape.png" alt="" />
                                </div>
                                <h3 >AIRAI: Empowering Your Business with Innovative</h3>
                            </div>
                            <h1> <span> Blockchain Solutions</span> </h1>
                            <p className="blockDev-para">At AIRAI, we are committed to revolutionizing your business through innovative blockchain
development service in mohali, punjab. With a dedicated team of skilled professionals, we
empower businesses across diverse industries to unlock their full potential and achieve
unparalleled success.</p>
                        </div>
                    </div>
                    <div class=" scrollable_bg">

                        <div class="blockDev text-center ">
                            <img width="473" height="403" src="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Contact-us" decoding="async"
                                srcset="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png 473w, https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner-300x256.png 300w" sizes="(max-width: 473px) 100vw, 473px" />
                        </div>

                    </div>
                </div>

            </div>
        </section>
        <br/>
        <br/>

        {/* BlockServices Section start here   */}
        <section className='data'>
    <div className="BlockService-content">
      <section className="chainService">
          <div className="service-row1">
            <div className="col-lg-12 col-sm-12">
              <div
                className="mb-2 blocktitle_h2_new d-flex align-items-center wow fadeInUpSlide"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDuration: '1s',
                  animationDelay: '0.4s',
                  animationName: 'fadeInUpSlide',
                }}
              >
                <em className="chainService_icon bg-white">
                  <img
                    src={service}
                    alt=""
                    width="30"
                    className="img-fluid"
                  />
                </em>
                <h3 className="headingServ">BlockChain Services</h3>
              </div>
            </div>
          </div>
          <div className="BlockServ-Row2">
            <div className="text">
              <h2>
              Experience Revolutionary Blockchain Solutions!
              </h2>
              <p
                className="BlockChain-TextP">
                Enjoy the best NFT App Development, Blockchain Services from a company with
                more than a decade of experience in <br/> the industry. Our team of
                expert developers understands how to innovate and create
                products that boost business goals.
              </p>
            </div>
            <button
  type="button"
  className="cta_btn"
>
  <em>
    <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/phone.png" alt="" width="300" className="btn-img" />
  </em>
  <span>Book A Demo</span>
</button>
            
          </div>
          

                <div className="chainService_blocks">
      <div className="chainService_blocks_row">
        {ServicesData.map((service, index) => (
          <div className="BlockService-box" key={index}>
            <i>
              <img src={service.img} alt={service.title} />
              <p>{service.title}</p>
            </i>
            {/* <div className="hover-content">
          <p>{service.additionalText}</p>
        </div> */}
          </div>
        ))}
      </div>
    </div>
    
    </section> 
    </div> </section>
      {/* section part ended here  */}
        <br/>
         {/* How we work(our Process) code start here  */}
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
                    <h3>Requirement Gathering and Elicitation</h3>
                  </div>
                </div>
                <div className="work_max">
                  <p className="work-max-para">We kick off every project with a focused
brainstorming session to understand your requirements and mitigate risks.</p>
                </div>
              </div>
            </div>

            <div className="slick-slide">
              <div className="work_place">
                <div className="effect">
                  <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Iterations.svg" alt="" /></em>
                  <div className="d-flex justify-content-center">
                    <h3>Design and Development </h3>
                  </div>
                </div>
                <div className="work_max">
                  <p className="work-max-para">Our experts design and develop robust solutions tailored to
your business needs, ensuring seamless integration and functionality.</p>
                </div>
              </div>
            </div>
            <div className="slick-slide" >
              <div className="work_place">
                  <div className="effect">
                    <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Conceptualization.svg" alt="" /></em>
                    <div className="d-flex justify-content-center">
                      <h3>UAT and QA on Testnets:</h3>
                    </div>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">We conduct rigorous testing to ensure the quality and
reliability of our blockchain products, eliminating any flaws or errors.</p>
                  </div>
                </div>
              </div>

           

              <div className="slick-slide" >
              <div className="work_place">
                  <div className="effect">
                    <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Development-Cycle.svg" alt="" /></em>
                    <div className="d-flex justify-content-center">
                      <h3>Production-Level Deployment</h3>
                    </div>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">Finally, we deploy your blockchain solutions on multiple
platforms, ensuring smooth and hassle-free integration with your existing infrastructure.</p>
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
    </div>
    <br/>
  {/* front-page of web-dev ended here  */}
  <section className='data'>
  <section className="ChooseUs-section">
                <div className="Choose-container">
                    <div className="custom-section-title">
                        <em className="ChooseUs_icon"><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/why_us.svg" alt="" width="30" /></em>
                        <h2>Why choose Airai</h2>
                    </div>
                    <div className="custom-section-content">

                        <div className="custom-section">
                            <h3>Because we match your project expectations with our<br /> unwavering commitment.</h3>
                            <p className="light-black">We have a team of talented developers with years of experience in the industry.</p>
                        </div>
                        {/* <div className="custom-section-button"> */}
                        <button type="button" className="Block-ChooseUs-btn">
                            <em><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/phone.png" alt="" width="300" className="ChooseUs-img" /></em>
                            <span><p className="Block-btn-p">Schedule A Call</p></span>
                        </button>
                        {/* </div> */}
                    </div>
                    {/* <div className="blockDev-boxes"> */}
                    <div className="work_part slick_dot_space slick-initialized slick-slider slick-dotted" id="services-slider">
                        <Slider {...sliderSettings1}>
                            <div className="slick-slide">
                                <div className="blockDev-box">
                                    <div className="Choose-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/tailored.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="tailored" decoding="async" loading="lazy" /></i>
                                        <h5>Expert Developers</h5>
                                        <p className="Choose-para">Benefit from the expertise of our seasoned developers who are
dedicated to delivering exceptional results.</p></div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="BlockDev-box">
                                    <div className="Choose-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/project.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="project" decoding="async" loading="lazy" /></i>
                                        <h5>Client-Oriented Price</h5>
                                        <p className="Choose-para">We offer competitive pricing without compromising on quality or
reliability.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="blockDev-box">
                                    <div className="Choose-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/quality.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="quality" decoding="async" loading="lazy" /></i>
                                        <h5>Custom Blockchain Development</h5>
                                        <p className="Choose-para">Say goodbye to quality roadblocks with our custom
blockchain development services. We offer tailored solutions crafted with the latest
advancements in technology to align with your unique business goals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="blockDev-box">
                                    <div className="Choose-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Business Automation</h5>
                                        <p className="Choose-para">Drive decentralization and automate routine operations with our
secure and scalable blockchain solutions, ensuring efficient and transparent
transactions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="blockDev-box">
                                    <div className="Choose-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Outstanding User Experience</h5>
                                        <p className="Choose-para">Using customized UX/UI design, our skilled developers
concentrate on providing outstanding user experiences.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="blockDev-box">
                                    <div className="Choose-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>AI/ML Solutions</h5>
                                        <p className="Choose-para">Empower your business with intelligent automation technology and
boost effici<br/>-ency with our AI/ML solutions tailored <br/>to your specific needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="blockDev-box">
                                    <div className="Choose-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Strong Collaborations</h5>
                                        <p className="Choose-para">We prioritize collaboration and communi<br/>-cation to ensure the
success of every project.</p>
                                    </div>
                                </div> </div>
                                <div className="slick-slide">
                                <div className="blockDev-box">
                                    <div className="Choose-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>100% Quality</h5>
                                        <p className="Choose-para">Our commitment to excellence guarantees <br/>top-notch solutions that meet
the highest industry standards.</p>
                                    </div>
                                </div> </div>
                                <div className="slick-slide">
                                <div className="blockDev-box">
                                    <div className="Choose-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>New-Age Technology</h5>
                                        <p className="Choose-para">Stay ahead of the curve with our innovative approach and
cutting-edge technologies.</p>
                                    </div>
                                </div> </div>
                                <div className="slick-slide">
                                <div className="blockDev-box">
                                    <div className="Choose-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>24/7 Support:</h5>
                                        <p className="Choose-para">Our dedicated support team is always <br/>available to address your queries
                                        and <br/>concerns.</p>
                                    </div>
                                </div> </div>
                            </Slider>
                    </div>
                </div>
            </section></section>
            
             {/* contact form & detail code start here  */}
        {/* <section class="blockchain-idea-sec ">

<section class="blockCon_section blockchain-idea">
     <div class="blockdetail-container">
     <div class="chainform-section wow fadeInUpSlide" data-wow-duration="1s" data-wow-delay="0.4s">
       <div class="chaindeatil-row">
          <div class="chain-col ">
           <div class="blockcontact_Wrapper h-100 d-flex flex-column justify-content-between pr-xl-5">
                <div class="blocktitle_h2_new">
                                         <h3 class="block-para">Have An Idea?<br />
                                         Contact us today to embark on a journey of innovation and success with AIRAI,
                                             We Would Love To Help.</h3>
                                         
                                     </div>
                                     <div class="blockcontact-card_grid">
                                         <div class="blockcontact-card-row">
                                             <div class="col-md-12 mb-md-4 mb-4">
                                                 <div class="blockcontact-card-box bg-white d-flex align-items-center">
                                                     <em class="blockdetail-icon"><img
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
                                                 <div class="blockcontact-card-box  bg-white d-flex  align-items-center">
                                                     <em class="blockdetail-icon"><img
                                                         src="https://www.chicmic.in/wp-content/themes/chicmic/img/landing/contact-form/hiring.svg"
                                                         alt="Email" width="30" /></em>
                                                     <div class="d-flex flex-column form-icon-items">
                                                         <span>For Hiring Inquiry</span>
                                                         <strong>+91-8560003222, +91-172-0000000</strong>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div class="col-12 mb-md-4 mb-4">
                                                 <div class="blockcontact-card-box  bg-white d-flex align-items-center">
                                                     <em class="blockdetail-icon"><img
                                                         src="https://www.chicmic.in/wp-content/themes/chicmic/img/landing/contact-form/whatsapp.svg"
                                                         alt="Whatsapp" width="30" /></em>
                                                     <div class="d-flex flex-column form-icon-items">
                                                         <span>Whatsapp</span>
                                                         <strong>+91-8560003222</strong>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div class="col-12 mb-md-0 mb-4">
                                                 <div class="blockcontact-card-box  bg-white d-flex align-items-center">
                                                     <em class="blockdetail-icon"><img
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
                                 <div className="blockCons-form">
                                     <div className="blockCons-form-column">
                             <div class="col-md-12 text-center">
      <p class="global_success_1 label-success"></p> 
     <p class="global_error_1 label-error"></p>
 </div>
 
 <form className="chainform-contact" id="inner_form_get_started" name="inner_form_get_started" action="#" method="post" class=""
     enctype="multipart/form-data" onsubmit="return validateInnerForm();">
     <div class="blockdata-row">
         <div class="col-md-12">
             <div class="blockContact-group">
                 
                 <div class="position-relative input-field">
                     <input type="text" class="block-control" id="name_1" name="name_1" aria-describedby="name_1"
                         placeholder="Name"/>
                     <em class="chain-icon">
                         <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/landing/contact-form/username.svg"
                             alt="username" width="30" className="chainIcon-img"/></em>
                 </div>
                 <p class="label-error" id="name_1_error"></p>
             </div>
         </div>
         <div class="col-md-12">
             <div class="blockContact-group">
                
                 <div class="position-relative input-field">
                     <input type="email" class="block-control" id="email_1" name="email_1" aria-describedby="email_1"
                         placeholder="Email" />
                     <em class="chain-icon">
                         <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/landing/contact-form/email-icon.svg"
                             alt="email" width="30" className="chainIcon-img" /></em>
                 </div>
                 <p class="label-error" id="email_1_error"></p>
             </div>
        
         </div>
         <div class="col-md-12">
             <div class="blockContact-group">
                 <textarea class="block-control" id="message_1" name="message_1"
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
                             </section> */}
                             {/* contact form & detail code start here  */}
        <section class="contact-idea-sec ">

<section class="quote_section contact-idea">
     <div class="detail-container">
     <div class="form_section wow fadeInUpSlide" data-wow-duration="1s" data-wow-delay="0.4s">
       <div class="deatil-row">
          <div class="col-lg-6">
           <div class="contact_Wrapper h-100 d-flex flex-column justify-content-between pr-xl-5">
                <div class="title_h2_new">
                                         <h3 class="blockh2-para">Have An Idea?</h3>
                                         <p className="blockcontact-para">Contact us today to embark on a journey of innovation and success with AIRAI, your premier
                                         blockchain development partner in Mohali. Let's collaborate and create a successful history
together!</p>
                                        
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


export default BlockchainDev;