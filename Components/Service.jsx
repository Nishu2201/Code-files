import React, { useEffect, useState } from 'react';
import '../Styles/Service.css';
import Camlogo from "../assets/company logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelopeSquare, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';



const sliderSettings1 = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};


const ImageCarousel = ({ data, title }) => {
    const [slideIndex, setSlideIndex] = useState(1);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        plusSlides(1);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    function showSlides(n) {
      const slides = document.querySelectorAll(`.${title}-ImgSlide`);
      if (n > slides.length) {
        setSlideIndex(1);
      }
      if (n < 1) {
        setSlideIndex(slides.length);
      }
  
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
  
      slides[slideIndex - 1].style.display = 'block';
    }
  
    function plusSlides(n) {
      setSlideIndex((prevIndex) => {
        const newIndex = prevIndex + n;
        return newIndex > data.length ? 1 : newIndex < 1 ? data.length : newIndex;
      });
    }
  
    useEffect(() => {
      showSlides(slideIndex);
    }, [slideIndex]);
  
    return (
      <section className="images_Carousel">
        <div className="ImgSlider-container">
          {data.map((item, index) => (
            <div key={index} className={`ImgSlide fade ${title}-ImgSlide`}>
              <img className="ImgSlide-image" src={item.image} alt={`ImgSlide_pic_${index}`} />
              <div className="ImgSlide-content">
                <h3 className="ImgSlide-title">{item.title}</h3>
                <p className="ImgSlide-desc">{item.description}</p>
              </div>
              <div className="OtherText">
                <h1 className="OtherText-Content">{title} Designs</h1>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
          }
function Service(){
    const mobileAppData = [
        {
          title: 'Mobile-App 1',
          description: 'Transform your ideas into effective mobile applications. Our team of experienced and skilled developers specializes in developing innovative and user-friendly mobile apps for both Android and iOS platforms. With our cutting-edge solutions, you can stay ahead of the competition in the app market.',
          image: 'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Mobile-App 2',
          description: 'Another description for the second mobile app.',
          image: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
        },
        {
          title: 'Mobile-App 3',
          description: 'Yet another description for the third mobile app.',
          image: 'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
      ];
      
      const webData = [
        {
          title: 'Web Design 1',
          description: 'Boost your online visibility with our expert web development services. From responsive and sleek designs to robust backend functionalities, we create websites that not only look stunning but also perform seamlessly.',
          image: 'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Web Design 2',
          description: 'Another description for the second web design.',
          image: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
        },
        {
          title: 'Web Design 3',
          description: 'Yet another description for the third web design.',
          image: 'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
      ];
      
      const gameData = [
        {
          title: 'Game 1',
          description: 'Create engaging gaming experiences for your audience. Our game production service combines technological know-how with creativity to create visually appealing and captivating games for a variety of platforms. With our tailored solutions, your gaming initiatives will be elevated.',
          image: 'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Game 2',
          description: 'Another description for the second game.',
          image: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
        },
        {
          title: 'Game 3',
          description: 'Yet another description for the third game.',
          image: 'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
      ];
      
      
      const blockchainData = [
        {
          title: 'Blockchain Design 1',
          description: 'Boost your online visibility with our expert web development services. From responsive and sleek designs to robust backend functionalities, we create websites that not only look stunning but also perform seamlessly.',
          image: 'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Blockchain Design 2',
          description: 'Another description for the second blockchain design.',
          image: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
        },
        {
          title: 'Blockchain Design 3',
          description: 'Yet another description for the third blockchain design.',
          image: 'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
      ];
      const frontendData = [
        {
          title: 'Front-End Development 1',
          description: 'Boost your online visibility with our expert web development services. From responsive and sleek designs to robust backend functionalities, we create websites that not only look stunning but also perform seamlessly.',
          image: 'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Front-End Development 2',
          description: 'Another description for the second blockchain design.',
          image: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
        },
        {
          title: 'Front-End Development 3',
          description: 'Yet another description for the third blockchain design.',
          image: 'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
      ];
      const backendData = [
        {
          title: 'Back-End Development 1',
          description: 'Boost your online visibility with our expert web development services. From responsive and sleek designs to robust backend functionalities, we create websites that not only look stunning but also perform seamlessly.',
          image: 'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'Back-End Development 2',
          description: 'Another description for the second blockchain design.',
          image: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
        },
        {
          title: 'Back-End Development  3',
          description: 'Yet another description for the third blockchain design.',
          image: 'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
      ];
      const designData = [
        {
          title: '3D Modeling',
          description: 'Boost your online visibility with our expert web development services. From responsive and sleek designs to robust backend functionalities, we create websites that not only look stunning but also perform seamlessly.',
          image: 'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
        {
          title: 'UI/UX Design',
          description: 'Another description for the second blockchain design.',
          image: 'https://images.unsplash.com/photo-1682687220566-5599dbbebf11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
        },
        {
          title: 'Character Modeling',
          description: 'Yet another description for the third blockchain design.',
          image: 'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        },
      ];

    return(
        <>
        <section className="OurService-page">
            <div className="OurService-container">

                <div className="OurService-row align-items-center ">
                    <div className="col-md-6 col-sm-12">
                        <div className="OurService_banner">

                            <div className="OurServiceUs-title d-flex align-items-center ">
                                <div className="OurService-icon">
                                    <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/shape.png" alt="" />
                                </div>
                                <h3>Our Services</h3>
                            </div>
                            <h1>Welcome to <span>Airai's Services</span> </h1>
                            <p className="OurService-para">Elevate your digital presence with our diverse range of services. 
                            From cutting-edge web development and mobile applications to innovative blockchain solutions, game development, 
                            and captivating 3D designs, we bring your ideas to life. Our team is dedicated to delivering tailored solutions 
                            that seamlessly blend creativity and technology. <br/> Whether you're envisioning a dynamic website, a mobile app that
                             stands out, secure blockchain implementations, engaging games, or immersive 3D designs, 
                            we have the expertise to turn your vision into reality. 
                            Explore the possibilities with our comprehensive suite of services.
                            </p>

                            {/* <p classNameName="OurService-para">What sets AIRAI apart is our constant commitment to both technology and artistry. We
                                understand that great games are created when visually striking graphics, stunning visuals, and
                                compelling stories come together. That's why our team comprises not just skilled developers,
                                but artists, and innovators who bring diverse and unique viewpoints to the table.</p> */}
                        </div>
                    </div>
                    <div className=" ServiceImg_bg">

                        <div className="OurService text-center ">
                            <img width="473" height="403" src="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Contact-us" decoding="async"
                                srcset="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png 473w, https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner-300x256.png 300w" sizes="(max-width: 473px) 100vw, 473px" />
                        </div>

                    </div>
                </div>

            </div>
        </section><br /><br />
        <div>
      <ImageCarousel data={mobileAppData} title="Mobile-App" />
      {/* <br /> */}
      <ImageCarousel data={webData} title="Web" />
      {/* <br /> */}
      <ImageCarousel data={gameData} title="Game" />
      {/* <br /> */}
      <ImageCarousel data={blockchainData} title="Blockchain" />
      <ImageCarousel data={frontendData} title="Front-End" />
      <ImageCarousel data={ backendData} title="Back-End" />
      <ImageCarousel data={designData} title="Our" />
    </div>
{/* Front-end Image-Carousel end here */}


  <section className="ourServicesUs-section">
                <div className="ourServices-container">
                    <div className="our-section-title">
                        <em className="ourServicesUs_icon"><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/why_us.svg" alt="" width="30" /></em>
                        <h2>Why choose Airai</h2>
                    </div>
                    <div className="our-section-content">

                        <div className="our-section">
                            <h3>Because we match your project expectations with our<br /> unwavering commitment.</h3>
                            <p className="light-black">We have a team of talented developers with years of experience in the industry.</p>
                        </div>
                        {/* <div className="our-section-button"> */}
                        <button type="button" className="ourServicesUs-btn">
                            <em><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/phone.png" alt="" width="300" className="ourServicesUs-img" /></em>
                            <span><p>Schedule A Call</p></span>
                        </button>
                        {/* </div> */}
                    </div>
                    {/* <div className="ourServ-boxes"> */}
                    <div className="work_part slick_dot_space slick-initialized slick-slider slick-dotted" id="services-slider">
                        <Slider {...sliderSettings1}>
                            <div className="slick-slide">
                                <div className="ourServ-box">
                                    <div className="ourServices-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/tailored.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="tailored" decoding="async" loading="lazy" /></i>
                                        <h5>Expertise</h5>
                                        <p className="ourServices-para">With a team of seasoned profess-<br/>ionals boasting over 12 years of experience,
we possess the skills and knowledge to crafttop-notch websites using a variety of
plat-<br/>forms and frameworks, including WordPress, Magento, OpenCart, and more.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="ourServ-box">
                                    <div className="ourServices-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/project.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="project" decoding="async" loading="lazy" /></i>
                                        <h5>Comprehensive Services</h5>
                                        <p className="ourServices-para">From our website develop-<br />ment to theme integration,
CMS integration, and PHP or ASP.Net website creation, we offer a wide range of
services to cater to your every need.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="ourServ-box">
                                    <div className="ourServices-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/quality.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="quality" decoding="async" loading="lazy" /></i>
                                        <h5>Search Engine Friendliness</h5>
                                        <p className="ourServices-para">Our websites are meticulously designed to be search
engine friendly, ensuring maximum visibility and organic traffic for your business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="ourServ-box">
                                    <div className="ourServices-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>User Experience</h5>
                                        <p className="ourServices-para">We prioritize user experience, crafting websites that are not only
visually appealing but also fast-loading and easy to navigate, leading to higher user
engagement and conversion rates.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="ourServ-box">
                                    <div className="ourServices-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Quality Assurance</h5>
                                        <p className="ourServices-para">Our rigorous testing process ensures that your website is error-free
and performs flawlessly across all devices and browsers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="ourServ-box">
                                    <div className="ourServices-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Personalized Support</h5>
                                        <p className="ourServices-para">We provide dedicated support services to address any issues or
concerns you  may have, ensuring a seamless experiencefrom start to finish.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="slick-slide">
                                <div className="ourServ-box">
                                    <div className="ourServices-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Innovative Game Design</h5>
                                        <p className="ourServices-para">Combine aesthetics and accessibi-<br />lity  for a smooth user
                                            experience.</p>
                                    </div>
                                </div> </div>
                            {/* <div className="slick-slide">
                                <div className="ourServ-box">
                                    <div className="ourServices-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Expert Tech Professionals</h5>
                                        <p className="ourServices-para"> Specialized in AR, VR, Metaverse, Unity, <br /> Unreal, and
                                            more.</p>
                                    </div>
                                </div></div> */}
                            {/* <div className="slick-slide">
                                <div className="ourServ-box">
                                    <div className="ourServices-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Full-Cycle Game Development</h5>
                                        <p className="ourServices-para">Covering pre-production, production, <br /> and
                                            post-production.</p>
                                    </div>
                                </div> </div> */}
                            {/* <div className="slick-slide">
                                <div className="ourServ-box">
                                    <div className="ourServices-box">
                                        <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                                        <h5>Client Satisfaction</h5>
                                        <p className="ourServices-para">We prioritize your positive experience <br /> throughout the
                                            development process.</p>
                                    </div>
                                </div></div> */}
                        </Slider>
                    </div>
                </div>
            </section><br />
            
           {/* contact form & detail code start here  */}
        <section class="contact-idea-sec ">

<section class="quote_section contact-idea">
     <div class="detail-container">
     <div class="form_section wow fadeInUpSlide" data-wow-duration="1s" data-wow-delay="0.4s">
       <div class="deatil-row">
          <div class="col-lg-6">
           <div class="contact_Wrapper h-100 d-flex flex-column justify-content-between pr-xl-5">
                <div class="title_h2_new">
                                         <h3 class="serviceh2-para">Have An Idea?</h3>
                                         <p className="Servicecontact-para">Connect with us today to embark on a journey of innovation and success with AIRAI, 
                                         your premier partner in Mohali. 
                                         Let's collaborate and create a successful history together! Fill out the form to get started.</p>
                                        
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
        {/* Footer start here  */}

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

export default Service;