import React, { useEffect, useRef } from "react";
 import '../Styles/About.css';
 import Camlogo from "../assets/company logo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeSquare, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
 import InnoImg from '../Images/Innovation.gif';
 import Satisfy from '../Images/satisfaction.gif';
 import Proquality from '../Images/quality.gif';
 import Port from '../Images/portfolio.gif';
 import globe from '../Images/impact.gif';
 import leader from '../Images/client.gif';
 import Empower from '../Images/Empower.gif';
 import Craft from '../Images/Crafting.gif';
 import Driver from '../Images/Driver.gif';
 import Mision from '../Images/Mision.gif';
 import Vision from '../Images/Vision.gif';
 import OurGoal from '../Images/OurGoal.gif';
 import AboutImgage from '../Images/softPic.jpg';
 import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Blockchain from '../Images/Blockchain.svg';
import devOps from '../Images/devOps.svg';
import Game from '../Images/Game.svg';
import Java from '../Images/JAVA.svg';
import Meta from '../Images/Metaverse.svg';
import Quality from '../Images/Quality.svg';
import service from '../Images/services.svg';
import web from '../Images/Web.svg';
// import aboutpic2 from '../Images/about-pic2.jpg';
// import {  Row, Col } from "reactstrap";
function About(){
  const servicesData = [
    { img: Java, title: 'Mobile Development ' },
    { img: web, title: 'Web Development' },
    { img: Game, title: 'Game Development' },
    { img: Blockchain, title: 'Blockchain Development' },
    { img: devOps, title: 'Front-End Development' },
    { img: Meta, title: 'Graphic/Game Designing' },
    { img: Quality, title: 'Backend Development' },
    { img: Quality, title: '3D Modeling/Animation' },
    { img: Quality, title: 'UI/UX Design' },
    { img: Quality, title: 'NFT Design/Development' },
  ];
    //   how we work slider 
      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
      autoplaySpeed: 2000,
      };
      // Choose Us SliderSettings array
  const sliderSettings1 = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};
    const ref = useRef(null);
  useEffect(() =>{
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
        if (rect.top <= windowHeight) {
            const cards = ref.current.querySelectorAll('.goal-card');
            cards.forEach((card, index) => {
              card.style.transitionDelay = `${0.2 * (index + 1)}s`;
              card.classList.add('isVisible');
            });
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    
    return(
        <>
        <section className="about-page">
        <div class="about-container">

<div class="about-row align-items-center ">
    <div class="col-md-6 col-sm-12">
        <div class="about_banner">

            <div class="aboutUs-title d-flex align-items-center ">
                <div class="about-icon">
                    <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/shape.png" alt="" />
                </div>
                <h3>ABOUT US</h3>
            </div>
            <h1 className="Top-About">Welcome to <span>Airai</span> </h1>
            <p className="about-para">where creativity meets innovation in the world of game design and
development. We create beyond the box immersive digital experiences. In the constantly
changing game industry, we are driven by our passion, innovation, and dedication to quality.We
are a group of creative minds with a simple yet ambitious goal: to redefine the gaming industry.
</p>
       
<p className="about-para">What sets AIRAI apart is our constant commitment to both technology and artistry. We
understand that great games are created when visually striking graphics, stunning visuals, and
compelling stories come together. That's why our team comprises not just skilled developers,
but artists, and innovators who bring diverse and unique viewpoints to the table.</p>
        </div>
    </div>
    <div class=" scrollable_bg">

        <div class="about text-center ">
            <img width="473" height="403" src="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Contact-us" decoding="async"
                srcset="https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner.png 473w, https://www.chicmic.in/wp-content/uploads/2024/01/Contact-us-banner-300x256.png 300w" sizes="(max-width: 473px) 100vw, 473px" />
        </div>

    </div>
</div>

</div>
</section> <br/> 
           <br/>
    
    <section className="Goal-section">
      <div className="Our-Goal" >
        <div className="TopHeads">
      <em className="topIcon-Img ">
                  <img
                    src={OurGoal}
                    alt="pics"
                    width="30"
                     className="topIcon-Img-PICS"
                  />
                </em>
        <h2 className="top-title"> 
                Our Goals</h2></div>
        <div className="goal-row">
          <div className="goal-card scroll-animation">
            <div className="Goal-title">
            <em className="Icon-Img ">
                  <img
                    src={InnoImg}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
              <h2>Innovation</h2>
              <p className="goal-para">Constantly push the boundaries of creativity and technology in digital experiences.</p>
            </div>
          </div>
          <div className="goal-card scroll-animation ">
            <div className="Goal-title">
            <em className="Icon-Img ">
                  <img
                    src={Satisfy}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
              <h2>Client Satisfaction</h2>
              <p className="goal-para">Ensure client success through transparent communication and collaborative partnerships.</p>
            </div>
          </div>
          <div className="goal-card scroll-animation ">
            <div className="Goal-title">
            <em className="Icon-Img ">
                  <img
                    src={Proquality}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
              <h2>Quality</h2>
              <p className="goal-para">Deliver exceptional quality in game development and digital solutions.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Our-Goal">
       
        <div className="TopHeads">
        <em className="topIcon-Img ">
                  <img
                    src={Mision}
                    alt="pics"
                    width="30"
                     className="topIcon-Img-PICS"
                  />
                </em> 
                <h2 className="top-title">Our Mission</h2> </div>
        <div className="goal-row">
          <div className="goal-card scroll-animation ">
            <div className="Goal-title">
            <em className="IconCraft-Img ">
                  <img
                    src={Craft}
                    alt="pics"
                    width="30"
                     className="AboutCraft-Img"
                  />
                </em>
              <h2>Crafting Immersive Experiences</h2>
              <p className="goal-para">To create games and digital solutions that transport users into captivating realms.</p>
            </div>
          </div>
          <div className="goal-card scroll-animation ">
            <div className="Goal-title">
            <em className="Icon-Img ">
                  <img
                    src={Driver}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
              <h2>Tech-Driven Excellence</h2>
              <p className="goal-para">Embrace cutting-edge technology to stay at the forefront of the industry.</p>
            </div>
          </div>
          <div className="goal-card scroll-animation ">
            <div className="Goal-title">
            <em className="Icon-Img ">
                  <img
                    src={Empower}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
              <h2>Client Empowerment</h2>
              <p className="goal-para">Empower clients by translating their visions into digital realities.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Our-Goal">
      <div className="TopHeads">
        
        <em className="topIcon-Img ">
                  <img
                    src={Vision}
                    alt="pics"
                    width="30"
                     className="topIcon-Img-PICS"
                  />
                </em>                                                
                <h2 className="top-title">Our Vision</h2> </div>
        <div className="goal-row">
          <div className="goal-card scroll-animation ">
            <div className="Goal-title">
            <em className="Icon-Img ">
                  <img
                    src={leader}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
              <h2>Industry Leadership</h2>
              <p className="goal-para">To be recognized as leaders in innovative game design and development.</p>
            </div>
          </div>
          <div className="goal-card scroll-animation ">
            <div className="Goal-title">
            <em className="Icon-Img ">
                  <img
                    src={globe}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
              <h2>Global Impact</h2>
              <p className="goal-para">Extend our reach globally, leaving a mark on the digital landscape.</p>
            </div>
          </div>
          <div className="goal-card scroll-animation ">
            <div className="Goal-title">
            <em className="Icon-Img ">
                  <img
                    src={Port}
                    alt="pics"
                    width="30"
                     className="AboutIcon-Img"
                  />
                </em>
              <h2>Diverse Portfolio:</h2>
              <p className="goal-para">Build a diverse portfolio that caters to various industries and technological advancements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <br/>
    <br/> */}
    <section class="aboutUs">
		<div class="aboutUs-container">
			<div class="aboutUs-row align-items-center">
				<div class="abouUs-data col-lg-6">
					<figure className="mainImg" >
						<img src={AboutImgage} alt="Airai" width="730" class="abouUsImg"/>
					</figure>
				</div>
				<div class="col-lg-6">
					<div class="about_us_intro">
						<h2 class="head-h2">We love transforming product ideas to digital realities.</h2>
						<p className="About-head-para">
                        Every game, in our opinion, ought to tell a unique story. We invest the time to fully comprehend
the core of every project, crafting an immersive experience. We infuse magic into every line of
code, whether crafting fantastical worlds or adopting cutting-edge technology. Even if technology serves as our foundation, we never forget about the human factor, which gives our
games happiness, excitement, and emotional connection.

						</p>
						<p  className="About-head-para">
                        Collaborating with clients as partners,
communication, transparency and satisfaction<br/> are at the core of our strong relationships.

Join AIRAI, where every game is an adventure, and every project is an opportunity to elevate
digital experiences. Let's embark on a journey of endless possibilities, where the sky's not the
limit—it's just the beginning.

						</p>
						<div class="commonList">
							<ul className="aboutUs-ul">
								<li className="aboutUs-li">Mobile &amp; Web App Development
								</li>
								<li className="aboutUs-li">Game Development
								</li>
								<li className="aboutUs-li">UI/UX Design</li>
								<li className="aboutUs-li">And much more
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
                              {/* service section start here  */}

                              <div className="Service-content">
      <section className="services">
          <div className="service-row1">
            <div className="col-lg-12 col-sm-12">
              <div
                className="mb-2 title_h2_new d-flex align-items-center wow fadeInUpSlide"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDuration: '1s',
                  animationDelay: '0.4s',
                  animationName: 'fadeInUpSlide',
                }}
              >
                <em className="services_icon bg-white">
                  <img
                    src={service}
                    alt=""
                    width="30"
                    className="img-fluid"
                  />
                </em>
                <h2 className="h4 mb-0">Services</h2>
              </div>
            </div>
          </div>
          <div className="service-row2">
            <div className="text">
              <h2>
                Enjoy a Decade-worth of Experience!
              </h2>
              <p
                className="light-black wow fadeInUpSlide"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                style={{
                  visibility: 'visible',
                  animationDuration: '1s',
                  animationDelay: '0.4s',
                  animationName: 'fadeInUpSlide',
                }}
              >
                Enjoy the best NFT App Development Services from a company with
                more than a decade of experience in <br/> the industry. Our team of
                expert developers understands how to innovate and create
                products that boost business goals.
              </p>
            </div>
            </div>
            <a href="/service"  className="button-link">  <button
  type="button"
  className="Aboutcta_btn"
>
  Know more.
</button></a>       

                <div className="services_blocks">
      <div className="services_blocks_row">
        {servicesData.map((service, index) => (
          <div className="Service-box" key={index}>
            <i>
              <img src={service.img} alt={service.title} />
              <p>{service.title}</p>
            </i>
            <div className="hover-content">
          <p>{service.additionalText}</p>
        </div>
          </div>
        ))}
      </div>
    </div>
    
    </section> 
    </div>
    <br/>
    <br/>
    {/* service section ended here  */}
{/* How we work section start here  */}
<section className='data'>
<div className="Choose_Airai">
    <section className="how_it_work">
      <div className="work-container">
        <div className="work-text">
          <em className="work_icon">
            <img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/how_work_icon.svg" alt="Requirement" width="30"  />
          </em>
          <h2>How we work</h2>
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
                    <h3>Plan</h3>
                  </div>
                </div>
                <div className="work_max">
                  <p className="work-max-para">Strategize for success. We analyze goals, crafting a roadmap that aligns every
step with your vision.</p>
                </div>
              </div>
            </div>

            <div className="slick-slide">
              <div className="work_place">
                <div className="effect">
                  <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Iterations.svg" alt="" /></em>
                  <div className="d-flex justify-content-center">
                    <h3>Design: </h3>
                  </div>
                </div>
                <div className="work_max">
                  <p className="work-max-para">Ignite creativity. Our team brings ideas to life, prioritizing aesthetics and
functionality for engaging designs.</p>
                </div>
              </div>
            </div>
            <div className="slick-slide" >
              <div className="work_place">
                  <div className="effect">
                    <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Conceptualization.svg" alt="" /></em>
                    <div className="d-flex justify-content-center">
                      <h3>Develop</h3>
                    </div>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">Transform concepts seamlessly. Our developers use cutting-edge tech to
create robust solutions that exceed expectations.</p>
                  </div>
                </div>
              </div>

           

              <div className="slick-slide" >
              <div className="work_place">
                  <div className="effect">
                    <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Development-Cycle.svg" alt="" /></em>
                    <div className="d-flex justify-content-center">
                      <h3>Test</h3>
                    </div>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">Ensure excellence. Rigorous testing guarantees a flawless product, identifying and
resolving issues before launch.</p>
                  </div>
                </div>
              </div>

              <div className="slick-slide" >
              <div className="work_place">
                  <div className="effect">
                    <em><img src="https://www.chicmic.in/wp-content/uploads/2024/02/Launch.svg" alt="" /></em>
                    <div className="d-flex justify-content-center">
                      <h3>  Deliver </h3>
                    </div>
                  </div>
                  <div className="work_max">
                    <p className="work-max-para">Culmination of hard work. We deliver with precision, ensuring your product
reaches its destination seamlessly and on time.</p>
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
    {/* How we work eneded here */}
{/* Choose Ariai section start here .... */}
    <section className="ChooseUs-section">
            <div className="Choose-container">
                <div className="custom-section-title">
                    <em className="ChooseUs_icon"><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/why_us.svg" alt="" width="30" /></em>
                    <h2>Why choose Airai</h2>
                </div>
                <div className="custom-section-content">
                  
                    <div className="custom-section">
                        <h3 >Because we match your project expectations with our<br/> unwavering commitment.</h3>
                        <p className="About_Choose ">We have a team of talented developers with years of experience in the industry.</p>
                    </div>
                    {/* <div className="custom-section-button"> */}
                        <button type="button"  className="ChooseUs-btn">
                            <em><img src="https://www.chicmic.in/wp-content/themes/chicmic/img/android/phone.png" alt="" width="300" className="ChooseUs-img" /></em>
                            <span><p>Schedule A Call</p></span>
                        </button>
                    {/* </div> */}
                </div>
                {/* <div className="custom-boxes"> */}
                <div className="work_part slick_dot_space slick-initialized slick-slider slick-dotted" id="services-slider">
                <Slider {...sliderSettings1}>
                  <div className="slick-slide">
                    <div className="custom-box">
                        <div className="Choose-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/tailored.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="tailored" decoding="async" loading="lazy" /></i>
                            <h5>Innovative Solutions</h5>
                            <p className="Choose-para">Transform ideas into robust web solutions <br/> for brand growth.</p>
                        </div>
                    </div>
                    </div>
                    <div className="slick-slide">
                    <div className="custom-box">
                        <div className="Choose-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/project.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="project" decoding="async" loading="lazy" /></i>
                            <h5>Thorough Research</h5>
                            <p className="Choose-para">Craft creative gaming interfaces by <br/>understanding customer
personas.</p>
                        </div>
                    </div>
                    </div>
                    <div className="slick-slide">
                    <div className="custom-box">
                        <div className="Choose-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/quality.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="quality" decoding="async" loading="lazy" /></i>
                            <h5>Technical Expertise:</h5>
                            <p className="Choose-para">Utilize cutting-edge tools for unique and <br/>interactive game designs.</p>
                        </div>
                    </div>
                    </div>
                    <div className="slick-slide">
                    <div className="custom-box">
                        <div className="Choose-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                            <h5>Rapid Development</h5>
                            <p className="Choose-para">Set fixed timeframes, ensuring accuracy <br/> and minimizing delays.</p>
                        </div>
                    </div>
                    </div>
                    <div className="slick-slide">
                    <div className="custom-box">
                        <div className="Choose-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                            <h5>Assured Quality</h5>
                            <p className="Choose-para">Rigorous testing guarantees flawless <br/>gaming experiences.</p>
                        </div>
                    </div>
                    </div>
                    <div className="slick-slide">
                    <div className="custom-box">
                        <div className="Choose-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                            <h5>Communication & Transparency</h5>
                            <p className="Choose-para">Use Agile and Jira for enhanced <br/> collaboration.</p>
                        </div>
                    </div>
                    </div>
                    <div className="slick-slide">
                    <div className="custom-box">
                        <div className="Choose-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                            <h5>Innovative Game Design</h5>
                            <p className="Choose-para">Combine aesthetics and accessibility <br/> for a smooth user
experience.</p>
                        </div>
                    </div> </div>
                    <div className="slick-slide">
                    <div className="custom-box">
                        <div className="Choose-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                            <h5>Expert Tech Professionals</h5>
                            <p className="Choose-para"> Specialized in AR, VR, Metaverse, Unity, <br/> Unreal, and
more.</p>
                        </div>
                    </div></div>
                    <div className="slick-slide">
                    <div className="custom-box">
                        <div className="Choose-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                            <h5>Full-Cycle Game Development</h5>
                            <p className="Choose-para">Covering pre-production, production, <br/> and 
post-production.</p>
                        </div>
                    </div> </div>
                    <div className="slick-slide">
                    <div className="custom-box">
                        <div className="Choose-box">
                            <i><img width="60" height="60" src="https://www.chicmic.in/wp-content/uploads/2023/08/expertise.svg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="expertise" decoding="async" loading="lazy" /></i>
                            <h5>Client Satisfaction</h5>
                            <p className="Choose-para">We prioritize your positive experience <br/> throughout the  
                            development process.</p>
                        </div>
                    </div></div>
  </Slider>
                </div>
            </div>
        </section>
        <br/>
        <br/>
        {/* Choose Ariai section start here .... */}
         {/* contact form & detail code start here  */}

     <section class="contact-idea-sec ">

<section class="quote_section contact-idea">
     <div class="detail-container">
     <div class="form_section wow fadeInUpSlide" data-wow-duration="1s" data-wow-delay="0.4s">
       <div class="deatil-row">
          <div class="col-lg-6">
           <div class="contact_Wrapper h-100 d-flex flex-column justify-content-between pr-xl-5">
                <div class="title_h2_new">
                                         <h3 class="h2-para">Have An Idea?</h3>
                                         <p className="contact-para">Contact us today to embark on a journey of innovation and success with AIRAI, your premier
development partner in Mohali. Let's collaborate and create a successful history
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
                             {/* <br/>
                             <br/> */}
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

export default About;