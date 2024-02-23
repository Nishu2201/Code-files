// import React from'react';
// function Home1(){
//     return(
//         <header id="header" class="animated">
//         <div class="container">
//             <nav class="navbar navbar-expand-lg navbar-light justify-content-between align-items-center px-0" id="menuMobile">
//                 <div class="navbar-brand"><a href="https://www.chicmic.in/" class="custom-logo-link" rel="home" aria-current="page"><img width="135" height="88" src="https://www.chicmic.in/wp-content/uploads/2018/11/chicmic-logo.png" class="custom-logo" alt="ChicMic Custom website app game development company" decoding="async" /></a></div>
//                 <div class="d-flex main_nav">
//                     <div class="menu_overlay"></div>
//                     <div class="collapse navbar-collapse" id="navbarCollapse">
//                         <button class="menu_close">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="71.943" height="71.949"
//                                 viewBox="0 0 11.943 11.949">
//                                 <path id="Path_1510" data-name="Path 1510"
//                                     d="M23.951,22.266l-3.928-3.928,3.928-3.928a1.191,1.191,0,1,0-1.684-1.684l-3.928,3.928-3.928-3.928a1.191,1.191,0,0,0-1.684,1.684l3.928,3.928-3.928,3.928a1.152,1.152,0,0,0,0,1.684,1.183,1.183,0,0,0,1.684,0l3.928-3.928,3.928,3.928a1.2,1.2,0,0,0,1.684,0A1.183,1.183,0,0,0,23.951,22.266Z"
//                                     transform="translate(-12.359 -12.354)" fill="#000" />
//                             </svg>
//                         </button>
//                         <div class="navbar-nav ml-auto">
//                             <ul id="menu-header-menu" class="navbar-nav ml-auto">
//                                 <li id="menu-item-15327" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15327"><a href="https://www.chicmic.in/mobile-app-development/">Mobile App Development</a></li>
//                                 <li id="menu-item-16529" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-16529"><a href="https://www.chicmic.in/web-development/">Web Development</a></li>
//                                 <li id="menu-item-8180" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8180"><a href="https://www.chicmic.in/game-development/">Game Development</a></li>
//                                 <li id="menu-item-17230" class="menu-blockchain menu-item menu-item-type-post_type menu-item-object-page menu-item-17230"><a href="https://www.chicmic.in/blockchain/">Blockchain</a></li>
//                                 <li id="menu-item-8185" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8185"><a href="https://www.chicmic.in/design-services/">Design</a></li>
//                                 <li id="menu-item-15303" class="mega_menu_btn menu-item menu-item-type-custom menu-item-object-custom menu-item-15303"><a href="/">Services</a></li>
//                                 <li id="menu-item-8186" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-8186"><a href="/">Portfolio</a>
//                                     <ul class="sub-menu">
//                                         <li id="menu-item-8187" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8187"><a href="https://www.chicmic.in/app-portfolio/">Mobile App Development</a></li>
//                                         <li id="menu-item-8188" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8188"><a href="https://www.chicmic.in/game-portfolio/">Game Development</a></li>
//                                         <li id="menu-item-8189" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8189"><a href="https://www.chicmic.in/web-portfolio/">Web Development</a></li>
//                                         <li id="menu-item-8190" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8190"><a href="https://www.chicmic.in/design-portfolio/">Design Services</a></li>
//                                     </ul>
//                                 </li>
//                                 <li id="menu-item-15302" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-15302"><a href="#">Company</a>
//                                     <ul class="sub-menu">
//                                         <li id="menu-item-15304" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15304"><a href="https://www.chicmic.in/about-us/">About Us</a></li>
//                                         <li id="menu-item-15305" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15305"><a href="https://www.chicmic.in/blogs/">Blogs</a></li>
//                                         <li id="menu-item-15306" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15306"><a href="https://www.chicmic.in/event/">Event</a></li>
//                                         <li id="menu-item-15307" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-15307"><a href="https://www.chicmic.in/contact-us/">Contact</a></li>
//                                         <li id="menu-item-15308" class="black_clr menu-item menu-item-type-post_type menu-item-object-page menu-item-15308"><a href="https://www.chicmic.in/career/">Career</a></li>
//                                     </ul>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                    <div class="logo_DropMenu" onclick="toggleLogoMenu()">
//                         <em class="ems">Company</em>
// {/*                       
// 							// wp_nav_menu( array(
// 							// 'theme_location' => 'menu-1',
// 							// 'menu_id'        => 'primary-menu',
// 							// 'menu_class'	 => 'navbar-nav ml-auto',
// 						// ) );?>
//                     </div> --> */}
//                   <button class="btn common_quote_btn" data-toggle="modal" data-target="#front_get_started">
//                                         Get Started
//                     </button> 
//                     <button class="navbar-toggle" type="button">
//                         <svg width="100" height="100" viewBox="0 0 100 100">
//                             <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
//                             <path class="line line2" d="M 20,50 H 80" />
//                             <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
//                         </svg>
//                     </button>
//                     </div>
//                 </div>
//             </nav>
// </div>
// </header>
// );
// }

// export default Home1;