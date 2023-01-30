import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Typed from 'typed.js';



export default function Home() {

  useEffect(() => {
    new Typed('.typed', {
      strings: ["Backend Developer"],
      loop: false,
      typeSpeed: 150,
      backSpeed: 200,
      backDelay: 2000
    });
  }, []);

  return (
    <>
      <Head>
        <title>Dalton Pineault | Home</title>
      </Head>
      <Navbar />
      <div id="hero" className="hero route bg-image" style={{ backgroundImage: "url(img/heromaybe.jpeg)" }}>
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <p className="display-6">Hello, <span style={{ color: '#09b537' }}>World!</span></p>
              <h1 className="hero-title mb-4 text-muted">Dalton Pineault</h1>
              <p className="hero-subtitle"><span style={{ color: 'orangered' }} className="typed"></span></p>
              {/* <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
            </div>
          </div>
        </div>
      </div>

      <main id="main">

        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-5">
                          <div className="about-img">
                            <img src="img/me1.jpeg" className="img-fluid rounded b-shadow-a" alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-7">
                          <div className="about-info">
                            <p><span className="title-s">Name: </span> <span>Dalton Pineault</span></p>
                            <p><span className="title-s">Profile: </span> <span>Backend Developer</span></p>
                            <p><span className="title-s">Email: </span> <span>me@daltonpineault.dev</span></p>
                            <p><span className="title-s">Phone: </span> <span>(617) 557-0089</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <p className="title-s">My Skills</p>
                        <span>NodeJS</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                        <span>React / Next</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                        <span>Java / Spring Boot</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                        <span>PHP / Laravel</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                        <span>Golang</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: '78%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                        <span>SQL / Postgres</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                        <span>MongoDB</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">
                            About Me
                          </h5>
                        </div>
                        <p className="lead">
                          Hello, my name is Dalton, I'm from Ontario Canada and the tech industry is my biggest passion. I grew up in a small northern town
                          with very little access to the internet. I spent most of my days as a kid fixing and building bikes, playing hockey, and building things.
                          I've always had the passion for figuring out how things work, fixing them into a working state again, and overall just tinkering.
                        </p>
                        <p className="lead">
                          Around 15 years old I moved away from my small town, and then.. I found the internet. I started playing minecraft with friends,
                          and was immediately learning how to build mods and put together servers. I started programming Minecraft mods and 2D game engines in java
                          for a couple of years, until I found the web.
                        </p>
                        <p className="lead">
                          I started learning Web Development in Spring of 2017 and never looked back since! Around January of 2019 I had received my first two certifcations
                          from the CCA. I learned Laravel and got my first freelance gig by 2018. I love the freedom web development offers a tinkerer like myself.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services-mf pt-5 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    Things I Like To Use
                  </h3>
                  <p className="subtitle-a">
                    Some Of The Frameworks And Langauges I've Used And Learnt Over The Years
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-briefcase"></i></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Node JS</h2>
                    <p className="s-description text-center">
                      I've used NodeJS for many different types of web applications. Some of the packages i've used are:
                      Express, Socket.IO, MongoDB & Mongoose, NextJS & more. I've used NodeJS for about 6 years.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Java</h2>
                    <p className="s-description text-center">
                      Java has always had a special place in my heart - It's where my programming journey started. I've used java for many different purposes including small 2d game engines,
                      chats bots, and web apps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-bar-chart"></i></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">PHP / Laravel</h2>
                    <p className="s-description text-center">
                      Shortly after my early java days, I found the web. Building websites in html/css only got so much cooler when I learnt about PHP.
                      I quickly picked up on php and jumped right into laravel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-binoculars"></i></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">React / Next</h2>
                    <p className="s-description text-center">
                      While I'm no means a 'designer', I can find my way around a frontend and get it looking how I want. As a backend developer, watching content
                      seamsly update without page reloads, is nice. I've been using react for 3-4 years now.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-brightness-high"></i></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Rust</h2>
                    <p className="s-description text-center">
                      I fell in love with rust when I first heard about it. Witing code in rust feels very.. natural.
                      I tinker with it in my spare time building CLI apps and chat bots. The speed and extensive error handling in rust is phenomonal.
                      I could code all day in rust.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="bi bi-calendar4-week"></i></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Svelte</h2>
                    <p className="s-description text-center">
                      I think svelte's approach to how they handle dom manipulation is by far the best out there.
                      Writing a svelte component feels so nice and clean. I build my personal projects using svelte almost all the time. CYBERNETICALLY ENHANCED WEB APPS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    Portfolio
                  </h3>
                  <p className="subtitle-a">
                    Check Out Some Of The Things I've Made
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="work-box">
                  <Link href="/projects/playgroundapi" data-gallery="portfolioGallery" className="portfolio-lightbox">
                    <div className="work-img">
                      <img src="img/playgroundapi.png" alt="" className="img-fluid" />
                    </div>
                  </Link>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">A Playground API</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Development</span> / <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <Link href="/projects/playgroundapi"><span className="bi bi-plus-circle"></span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <Link href='/projects/lionheartgg' data-gallery="portfolioGallery" className="portfolio-lightbox">
                    <div className="work-img">
                      <img src="img/lh2.png" alt="" className="img-fluid" />
                    </div>
                  </Link>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">LionheartGG</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Development</span> / <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <Link href="/projects/lionheartgg"><span className="bi bi-plus-circle"></span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <Link href='/projects/lionheartgg' data-gallery="portfolioGallery" className="portfolio-lightbox">
                    <div className="work-img">
                      <img src="img/playgroundapi.png" alt="" className="img-fluid" />
                    </div>
                  </Link>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">SimpleChat(coming soon)</h2>
                        <div className="w-more">
                          <span className="w-ctegory">NodeJS</span> / <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <Link href="/projects/lionheartgg"><span className="bi bi-plus-circle"></span></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4">
                <div className="work-box">
                  <a href="img/work-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                    <div className="work-img">
                      <img src="img/playgroundapi.png" alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Bindo Laro Cado</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href="img/work-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                    <div className="work-img">
                      <img src="playgroundapi.png" alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Studio Lena Mado</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href="img/work-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                    <div className="work-img">
                      <img src="img/work-6.jpg" alt="" className="img-fluid" />
                    </div>
                  </a>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Studio Big Bang</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2017</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <a href="portfolio-details.html"> <span className="bi bi-plus-circle"></span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </section>

        <div className="testimonials paralax-mf bg-image" style={{ backgroundImage: "url('/img/heromaybe.jpeg')" }}>
          <div className="overlay-mf"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                  <div className="swiper-wrapper">

                    <div className="swiper-slide">
                      <div className="testimonial-box">
                        <div className="author-test">
                          <img src="img/testimonial-2.jpg" alt="" className="rounded-circle b-shadow-a" />
                          <span className="author">Jake Alonso</span>
                        </div>
                        <div className="content-test">
                          <p className="description lead">
                            "Working with Dalton was a pleasure, he was professional, quick, and to the point. I would highly recommend him to anyone looking for a developer"
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-box">
                        <div className="author-test">
                          <img src="img/testimonial-4.jpg" alt="" className="rounded-circle b-shadow-a" />
                          <span className="author">Marta Socrate</span>
                        </div>
                        <div className="content-test">
                          <p className="description lead">
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>

                <div id="testimonial-mf" className="owl-carousel owl-theme">

                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="blog" className="blog-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    Blog
                  </h3>
                  <p className="subtitle-a">
                    A Personal Look Into My Life & Projects
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-blog">
                  <div className="card-img">
                    <Link href="/blog/lionheart"><img src="img/lh2.png" alt="" className="img-fluid" /></Link>
                  </div>
                  <div className="card-body">
                    <div className="card-category-box">
                      <div className="card-category">
                        <h6 className="category">Wordpress Development</h6>
                      </div>
                    </div>
                    <h3 className="card-title"><a href="blog-single.html">The Lionheart Journey</a></h3>
                    <p className="card-description">
                      Read about the decisions behind the making of lionheartgg and how it all came to life
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="post-author">
                      <a href="#">
                        <img src="img/me1.jpeg" alt="" className="avatar rounded-circle" />
                        <span className="author">Dalton Pineault</span>
                      </a>
                    </div>
                    <div className="post-date">
                      <span className="bi bi-clock"></span> 5 min
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-blog">
                  <div className="card-img">
                    <Link href="/blog/playgroundapi"><img src="img/playgroundapi2.png" alt="" className="img-fluid" /></Link>
                  </div>
                  <div className="card-body">
                    <div className="card-category-box">
                      <div className="card-category">
                        <h6 className="category">Backend Development</h6>
                      </div>
                    </div>
                    <h3 className="card-title"><Link href='/blog/playgroundapi'>Why did I decide to build a random api?</Link></h3>
                    <p className="card-description">
                      Read along to find out why I decided to build a random api and the design choices behind it
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="post-author">
                      <a href="#">
                        <img src="img/me1.jpeg" alt="" className="avatar rounded-circle" />
                        <span className="author">Dalton Pineault</span>
                      </a>
                    </div>
                    <div className="post-date">
                      <span className="bi bi-clock"></span> 10 min
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-blog">
                  <div className="card-img">
                    <a href="blog-single.html"><img src="img/playgroundapi.png" alt="" className="img-fluid" /></a>
                  </div>
                  <div className="card-body">
                    <div className="card-category-box">
                      <div className="card-category">
                        <h6 className="category">Backend Development</h6>
                      </div>
                    </div>
                    <h3 className="card-title"><a href="blog-single.html">How To Build A Chat App With NodeJS</a></h3>
                    <p className="card-description">
                      This is a very quick and easy to follow tutorial on how to build a realtime chat application using socket.io
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="post-author">
                      <a href="#">
                        <img src="img/me1.jpeg" alt="" className="avatar rounded-circle" />
                        <span className="author">Dalton Pineault</span>
                      </a>
                    </div>
                    <div className="post-date">
                      <span className="bi bi-clock"></span> 15 min
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: "url('/img/heromaybe.jpeg')" }}>
          <div className="overlay-mf"></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  <div id="contact" className="box-shadow-full">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="title-box-2">
                          <h5 className="title-left">
                            Send Message Us
                          </h5>
                        </div>
                        <div>
                          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
                                </div>
                              </div>
                              <div className="col-md-12 text-center my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                              </div>
                              <div className="col-md-12 text-center">
                                <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="title-box-2 pt-4 pt-md-0">
                          <h5 className="title-left">
                            Get in Touch
                          </h5>
                        </div>
                        <div className="more-info">
                          <p className="lead">
                            Looking for someone to complete a project? Need advice? Reach out to me and we'll get you pointed in the right direction
                          </p>
                          <ul className="list-ico">
                            <li><span className="bi bi-geo-alt"></span> Thunder Bay, Ontario, Canada</li>
                            {/* <li><span className="bi bi-phone"></span> (617) 557-0089</li> */}
                            <li><span className="bi bi-envelope"></span> me@daltonpineault.dev</li>
                          </ul>
                        </div>
                        {/* <div className="socials">
                          <ul>
                            <li><a href=""><span className="ico-circle"><i className="bi bi-facebook"></i></span></a></li>
                            <li><a href=""><span className="ico-circle"><i className="bi bi-instagram"></i></span></a></li>
                            <li><a href=""><span className="ico-circle"><i className="bi bi-twitter"></i></span></a></li>
                            <li><a href=""><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
