import React, { useEffect, useState } from "react";
import img1 from "./assets/img/rslogo3.png";
import img4 from "./assets/img/screens/app/4.png";
import about from "./assets/img/latest/about.png";
import service from "./assets/img/latest/service.png";
import service1 from "./assets/img/latest/service1.png";
import service2 from "./assets/img/latest/service2.png";
import service3 from "./assets/img/latest/service3.png";
import profile from "./assets/img/latest/profile.jpg";
import profile1 from "./assets/img/latest/client2.jfif";
import profile2 from "./assets/img/latest/client3.jfif";
import profile3 from "./assets/img/latest/client4.jfif";
import menu1 from "./assets/img/latest/40black.png";
import "../src/assets/css/demo.min.css";
import "../src/assets/css/laapp.min.css";
import Menu from "./Components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Carousel } from "3d-react-carousal";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import rslogo from "./assets/img/rslogo2.png";
import rslogo3 from "./assets/img/rslogo3.png";
import webdevelopment from "./assets/img/webdevelopment 2.jpg";
import youngpeoplestanding from "./assets/img/Website/youngpeoplestanding.jpg";

import "./Common.css";

function Main() {
  useEffect(() => {
    AOS.init();

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const [modal_small, setmodal_small] = useState(false);

  function tog_small() {
    setmodal_small(!modal_small);
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [form, setform] = useState(true);
  const [sticky, setSticky] = useState("");
  const [visible, setvisible] = useState(true);
  console.log(form);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass =
      scrollTop >= 200
        ? "mobres navbar navbar-expand-md main-nav navigation fixed-top sidebar-lef navbar-sticky"
        : "mobres navbar navbar-expand-md main-nav navigation fixed-top sidebar-lef";
    setSticky(stickyClass);
    console.log(stickyClass);
  };
  const classes = `${sticky}`;

  const popupclose = () => {
    setvisible(!visible);
    setmodal_small(false);
  };

  const settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };




  let slides = [
    <div className="card"><img style={{ width: "600px", height: "200px" }} src={service} alt="1" /></div>,
    <div className="card"><img style={{ width: "600px", height: "200px" }} src={service1} alt="2" /></div>,
    <div className="card"><img style={{ width: "600px", height: "200px" }} src={service2} alt="3" /></div>,
    <div className="card"><img style={{ width: "600px", height: "200px" }} src={service3} alt="4" /></div>,
    <div className="card"><img style={{ width: "600px", height: "200px" }} src={youngpeoplestanding} alt="5" /></div>
  ];

  const callback = function (index) {
    console.log("callback", index);
  };

  const images = [service, service1, service2, service3];
  const [imgIndex, setImgIndex] = useState(0)

  return (
    <div>
      <main className="overflow-hidden position-relative">
        <header
          className="header alter3-header section gradient gradient-primary-auxiliary text-contrast"
          id="home"
        >
          <div className="shapes-container">
            <div className="animation-shape shape-ring animation--rotating-diagonal">
              <div />
            </div>
            <div className="animation-shape shape-circle animation--clockwise">
              <div />
            </div>
            <div className="animation-shape shape-triangle animation--anti-clockwise">
              <div className="animation--rotating" />
            </div>
            <div className="animation-shape shape-diamond animation--anti-clockwise">
              <div className="animation--rotating" />
            </div>
            <div className="static-shape shape-ring-1" />
            <div className="static-shape shape-ring-2" />
            <div className="static-shape shape-circle-1" />
            <div className="static-shape pattern-dots-1" />
            <div className="static-shape pattern-dots-2" />
            <div className="static-shape ghost-shape ghost-shape-1" />
          </div>

          {visible ? (
            <div
              onClick={() => {
                setvisible(!visible);
              }}
              className="mnupostion"
            >
              <a
                onClick={() => {
                  tog_small();
                }}
                // onClick={toggle}
                className="btn menubtn "
              >
                <i>
                  {" "}
                  <img src={menu1} />{" "}
                </i>
              </a>
            </div>
          ) : (
            <div
              onClick={() => {
                setvisible(!visible);
              }}
              className="mnupostion"
            >
              <a
                onClick={() => {
                  tog_small();
                }}
                className="btn menubtn "
              >
                <i class="fa fa-times" aria-hidden="true"></i>
              </a>
            </div>
          )}
          <div className="text-center">
            <img
              className="mx-auto d-block"
              src={rslogo}
              height="120px"
              alt="logo"
              style={{ paddingTop: "20px" }}
            />
          </div>
          <div className="container bring-to-front">
            {/* <h4 >RS Square</h4> */}
            <div className="row">
              <div className="col-md-6">
                <h2
                  data-aos="fade-left"
                  data-aos-delay={500}
                // className="d-block display-md-4 light"
                >
                  {/* <b
                    style={{ fontWeight: "900" }}
                    data-aos="fade-right"
                    data-aos-delay={500}
                  >
                    A new way
                  </b> */}

                  Your business deserves an outstanding website to
                  speak for itself.

                </h2>
                {/* <p data-aos="fade-up"
                  data-aos-delay={500} className="lead">Your amazing product deserves an outstanding way to show it. Dashcore will
                  provide you with a quality template no matter what your idea is about.</p> */}

                <p data-aos="fade-up" data-aos-delay={500} className="lead psty">
                  RSSquare will provide you with friendly
                  services to achieve the very goal
                </p>
                {/* <nav className="nav mt-5">
                  <a
                    href="#"
                    className="nav-link mr-3 btn btn btn-rounded btn-contrast"
                  >
                    <i className="fas fa-tag mr-3" /> Plans &amp; pricing{" "}
                  </a>
                  <a
                    href="#"
                    className="nav-link btn btn-rounded btn-outline-contrast"
                  >
                    Start now
                  </a>
                </nav> */}
              </div>
              <div className="col=md-6">

                <section className="slidersst section alter3-features roundslide">
                  <div style={{ float: "right" }} className="shapes-container">
                    <div className="shape shape-ring shape-ring-1">
                      <div style={{ width: "400px", height: "400px" }} className="animation animation--rotating " />
                    </div>
                    <div className="shape shape-ring shape-ring-2">
                      <div style={{ width: "450px", height: "450px" }} className="animation animation--rotating " />
                    </div>
                    <div className="shape shape-circle animation--clockwise">
                      <div />
                    </div>
                  </div>



                  {/* <Carousel
                    slides={[
                      <div className="card"><img src={service} /> </div>,
                      <div className="card"><img src={service} /> </div>,
                      <div className="card"><img src={service} /></div>
                    ]}
                  /> */}
                  {/* 
<div style={{position: "initial"}}>
                <Carousel
                style={{position:"inherit"}}
                  className="dslide"
                  slides={slides}
                  autoplay={true}
                  interval={5000}
                  onSlideChange={callback}
                />
                </div> */}


                </section>
                <div className="slidest slidemarg">

                  <Carousel slides={slides} autoplay={true} interval={5000} onSlideChange={callback} />
                </div>

              </div>
            </div>
          </div>
        </header>


        {/* Isometric Mockups */}
        <section className="isometric-mockups">
          {/* <div
            className="tablet ipad landscape"
            data-aos="fade-left"
            data-aos-delay={0}
          >
            <div className="screen">
              <img src={img1} alt="img" />
             
            </div>
            <div className="button" />
          </div>
          <div
            className="iphone light phone-big"
            data-aos="fade-left"
            data-aos-delay={500}
          >
            <div className="screen">
              <img src={img4} alt="img" />
            </div>
            <div className="notch" />
          </div> */}



          {/* <div class="cog-image">
      
 
      <img src={service} alt="img1" /> 
    </div>  */}
          {/* <img src={service} alt="img2" /> 
      <img src={service} alt="img3" />  */}

          {/* <div
            className="iphone light phone-big"
            data-aos="fade-left"
            data-aos-delay={500}
          >
            <div className="screen">
              <img src={img4} alt="img" />
            </div>
            <div className="notch" />
          </div> */}
          {/* 
          </div> */}

          {/* <div className=" light phone-small" data-aos="fade-down" data-aos-delay={800}>
                        <div className="screen"><img src={service} alt="..." /></div>
                        <div className="notch" />
                    </div> */}
          {/* <div className="tablet ipad portrait" data-aos="fade-up" data-aos-delay={1200}>
                        <div className="screen"><img src={img3} alt="..." /></div>
                        <div className="button" />
                    </div> */}
        </section>

        {/* Partners */}

        {/* <div class="gallery">
      
          <img src={webdevelopment} alt="img1" /> 

        </div> */}
        {/* <div class="gallery">
  <img src="https://picsum.photos/id/104/400/400" alt="a dream catcher" />
  <img src="https://picsum.photos/id/1082/400/400" alt="a piano" />
  <img src="https://picsum.photos/id/158/400/400" alt="a live concert" />
  <img src="https://picsum.photos/id/234/400/400" alt="Paris" />
</div> */}

        <section className="section alter3-partners bg-contrast edge top-left "  id="features">
          <div className="container bring-to-front">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading">
                  <i className="fas fa-handshake fa-3x accent mb-3" />
                  <h3
                    className="text-alternate heading-line"
                    data-aos="fade-left"
                    data-aos-delay={100}
                  >
                    We've partnered with awesome folks
                  </h3>

                  <p
                    className="lead"
                    data-aos="fade-right"
                    data-aos-delay={500}
                  >
                    {" "}
                    Our company provides software consulting services. Impact
                    Consulting is an important client we have been working with.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img
                    data-aos="fade-up"
                    data-aos-delay={300}
                    src={service}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section alter3-features" id="about">
          <div className="container">
            <div className=" alter3-header text-contrast">
              <div className="shapes-container">
                <div className="animation-shape shape-ring animation--rotating-diagonal text-danger">
                  <div />
                </div>
                <div className="animation-shape shape-diamond animation--anti-clockwise">
                  <div className="animation--rotating" />
                </div>
                <div className="animation-shape shape-ring animation--rotating-diagonal text-danger">
                  <div />
                </div>
                <div className="animation-shape shape-diamond animation--anti-clockwise">
                  <div className="animation--rotating" />
                </div>
                <div className="animation-shape shape-ring animation--rotating-diagonal text-danger">
                  <div />
                </div>
                <div className="animation-shape shape-diamond animation--anti-clockwise">
                  <div className="animation--rotating" />
                </div>
                <div className="animation-shape shape-ring animation--rotating-diagonal text-danger">
                  <div />
                </div>
                <div className="animation-shape shape-diamond animation--anti-clockwise">
                  <div className="animation--rotating" />
                </div>
              </div>
            </div>

            <div className="shapes-container">
              <div className="shape shape-ring shape-ring-1">
                <div className="animation animation--rotating" />
              </div>
              <div className="shape shape-ring shape-ring-2">
                <div className="animation animation--rotating" />
              </div>
              <div className="shape shape-circle animation--clockwise">
                <div />
              </div>
              <div className="shape background-shape-main" />
            </div>
            {/* about.. */}
            <div className="row align-items-center mb-4">
              <div className="col-lg-5 order-lg-last">
                <div className="section-heading mt-4">
                  <h2
                    className="heading-line"
                    data-aos="fade-right"
                    data-aos-delay={300}
                  >
                    About
                  </h2>

                  <p className="text-justify" data-aos="fade-left" data-aos-delay={600}>
                    RS Square is a small company providing software consulting
                    and website design services. We provide consulting services
                    to clients with resources experienced in .NET, Html, Css,
                    Java, Manual/Automation testing.
                  </p>
                  <p className="text-justify" data-aos="fade-right" data-aos-delay={900}>
                    We want to help businesses
                    with their website design and maintenance needs. Delivering
                    a quality, appealing and maintainable website is our focus
                  </p>
                </div>
              </div>

              <div className="col-lg-7 pr-lg-6">
                <div className="row">
                  <div className="img-box">
                    <img
                      data-aos="fade-down"
                      data-aos-delay={300}
                      src={about}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section alter3-features" id="product">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-heading">
                  <h2
                    className="heading-line"
                    data-aos="fade-right"
                    data-aos-delay={300}
                  >
                    Our Services
                  </h2>
                  <p
                    className="lead text-muted my-4 semi-bold"
                    data-aos="fade-down"
                    data-aos-delay={500}
                  >
                    Website Design
                  </p>

                  {/* <p
                    data-aos="fade-left"
                    style={{ fontWeight: "bold" }}
                    data-aos-delay={600}
                  >
                    Website layout ,<br></br>
                    Development,<br></br>
                    Unlimited Revisions,<br></br>
                    Live Website,<br></br>
                    Maintainence,<br></br>
                  </p> */}

                  <span  data-aos="fade-left" data-aos-delay={300}> <i style={{fontSize: "13px"}} class="fa fa-arrow-right mr-2" aria-hidden="true"></i><a className="fonstst"> WEBSITE LAYOUT</a></span><br />
                  <span data-aos="fade-right" data-aos-delay={600}> <i  style={{fontSize: "13px"}}  class="fa fa-arrow-right mr-2" aria-hidden="true"></i><a className="fonstst"> DEVELOPMENT</a></span><br />
                  <span data-aos="fade-left" data-aos-delay={900}> <i  style={{fontSize: "13px"}}  class="fa fa-arrow-right mr-2" aria-hidden="true"></i><a className="fonstst"> UNLIMITED REVISIONS</a></span><br />
                  <span data-aos="fade-right" data-aos-delay={1000}> <i  style={{fontSize: "13px"}}  class="fa fa-arrow-right mr-2" aria-hidden="true"></i><a className="fonstst"> LIVE WEBSITE</a></span><br />
                  <span data-aos="fade-left" data-aos-delay={1200}> <i  style={{fontSize: "13px"}}  class="fa fa-arrow-right mr-2" aria-hidden="true"></i><a className="fonstst"> MAINTAINENCE</a></span><br />




                  <p className="text-justify" data-aos="fade-left" data-aos-delay={600}>
                    Above are the main areas when designing a website. We will
                    be part of every step until it goes live and even after
                    that. We provide one year of free maintenance and charge
                    minimally later. Since the website is designed in house, any
                    changes can be done accordingly without much hassle.
                  </p>
                  <p className="text-justify" data-aos="fade-right" data-aos-delay={900}>
                  We support multiple revisions to design the web site completely
                    as per your will. We bring your business website to its
                    doorstep.
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6 rotated-cards">
                    <div data-aos="fade-down" data-aos-delay={0}>
                      <div className="card border-0 shadow mb-5 tilt">
                        <img src={service1} />
                      </div>
                    </div>
                    <div data-aos="fade-down" data-aos-delay={900}>
                      <div className="card border-0 shadow mb-5 tilt">
                        <img src={service2} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 rotated-cards">
                    <div data-aos="fade-down" data-aos-delay={1600}>
                      <div className="card border-0 shadow mb-5 tilt">
                        <img src={service3} />
                      </div>
                    </div>
                    <div data-aos="fade-down" data-aos-delay={2000}>
                      <div className="card border-0 shadow mb-5 tilt">
                        <img src={webdevelopment} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </section>

        <section className="section faqs-dd bg-light edge top-left">
          <div className="shapes-container">
            <div className="absolute icon" data-aos="fade-down-left">
              <i className="fas fa-question" />
            </div>
          </div>
          <div
            className="container"
            src="https://assets6.lottiefiles.com/packages/lf20_irzr6exa.json"
          >
            {/* <lottie-player  speed="1" style={{ background:"none" }}  loop controls autoplay></lottie-player> */}

            <div className="container" id="reviews">
              <div className="section-heading text-center">
                <h2
                  className="heading-line"
                  data-aos="fade-left"
                  data-aos-delay={200}
                >
                  Client Reviews
                </h2>
                <p className="lead" data-aos="fade-right" data-aos-delay={400}>
                  Want to know more about our Client reviews ?
                </p>
              </div>

              <Slider {...settings2} className="mt-5">
                <div className="cardpad">
                  <div className="card border-0 shadow tilt mt-5">
                    <div className="card-body container mt-3 mb-3">
                      <div className="d-flex justify-content-center">
                        <img
                          src={profile}
                          className="avatar-md1 rounded-circle img-thumbnail"
                        />
                      </div>
                      <h5 className="text-center mt-2">Stella Larson</h5>
                      <p className="text-center">
                        {" "}
                        A customer review is a reflection of a customer's
                        experience with your company's products or services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cardpad">
                  <div className="card border-0 shadow tilt mt-5">
                    <div className="card-body container mt-3 mb-3">
                      <div className="d-flex justify-content-center">
                        <img
                          src={profile1}
                          className="avatar-md1 rounded-circle img-thumbnail"
                        />
                      </div>
                      <h5 className="text-center mt-2">Stella Larson</h5>
                      <p className="text-center">
                        {" "}
                        A customer review is a reflection of a customer's
                        experience with your company's products or services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cardpad">
                  <div className="card border-0 shadow tilt mt-5">
                    <div className="card-body container mt-3 mb-3">
                      <div className="d-flex justify-content-center">
                        <img
                          src={profile2}
                          className="avatar-md1 rounded-circle img-thumbnail"
                        />
                      </div>
                      <h5 className="text-center mt-2">Stella Larson</h5>
                      <p className="text-center">
                        {" "}
                        A customer review is a reflection of a customer's
                        experience with your company's products or services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cardpad">
                  <div className="card border-0 shadow tilt mt-5">
                    <div className="card-body container mt-3 mb-3">
                      <div className="d-flex justify-content-center">
                        <img
                          src={profile3}
                          className="avatar-md1 rounded-circle img-thumbnail"
                        />
                      </div>
                      <h5 className="text-center mt-2">Stella Larson</h5>
                      <p className="text-center">
                        {" "}
                        A customer review is a reflection of a customer's
                        experience with your company's products or services.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>

        {/* Start For Free */}

        {/* <section className='mt-5 '>
          <div className='container'>
            <div className="section-heading text-center">
              <h2 className="heading-line" data-aos="fade-left" data-aos-delay={200}>Client Reviews</h2>
              <p className="lead" data-aos="fade-right" data-aos-delay={400}>Want to know more about our Client reviews ?</p>
            </div>


            <Slider {...settings2} className="mt-5" >
              <div className='cardpad'>
                <div className='card border-0 shadow tilt mt-5'>
                  <div className='card-body container mt-3 mb-3'>
                    <div className='d-flex justify-content-center'>
                      <img src={profile}
                        className="avatar-md1 rounded-circle img-thumbnail"
                      />
                    </div>
                    <h5 className='text-center mt-2'>Stella Larson</h5>
                    <p className='text-center'> A customer review is a reflection of a customer's experience with your company's products or services.</p>
                  </div>
                </div>
              </div>
              <div className='cardpad'>
              <div className='card border-0 shadow tilt mt-5'>
                <div className='card-body container mt-3 mb-3'>
                  <div className='d-flex justify-content-center'>
                    <img src={profile1}
                      className="avatar-md1 rounded-circle img-thumbnail"
                    />
                  </div>
                  <h5 className='text-center mt-2'>Stella Larson</h5>
                  <p className='text-center'> A customer review is a reflection of a customer's experience with your company's products or services.</p>
                </div>
              </div>
              </div>
               <div className='cardpad'>
               <div className='card border-0 shadow tilt mt-5'>
              <div className='card-body container mt-3 mb-3'>
                <div className='d-flex justify-content-center'>
                  <img src={profile2}
                    className="avatar-md1 rounded-circle img-thumbnail"
                  />
                </div>
                <h5 className='text-center mt-2'>Stella Larson</h5>
                <p className='text-center'> A customer review is a reflection of a customer's experience with your company's products or services.</p>
              </div>
               </div>
              </div>
              <div className='cardpad'>
                <div className='card border-0 shadow tilt mt-5'>
              <div className='card-body container mt-3 mb-3'>
                <div className='d-flex justify-content-center'>
                  <img src={profile3}
                    className="avatar-md1 rounded-circle img-thumbnail"
                  />
                </div>
                <h5 className='text-center mt-2'>Stella Larson</h5>
                <p className='text-center'> A customer review is a reflection of a customer's experience with your company's products or services.</p>
              </div>
               </div>
              </div>
              </Slider>

</div>
    </section > */}
        {/* <div className='card border-0 shadow tilt' style={{ padding: "20px" }}>
                <div className='text-center'>
                  <img src={profile1}
                    className="avatar-md1 rounded-circle img-thumbnail"
                  />
                </div>


                <div className='cardbody container mt-3 mb-3'>
                  <h5 className='text-center'>Stella Larson</h5>
                  <p className='text-center'> A customer review is a reflection of a customer's experience with your company's products or services.</p>
                </div>
              </div>

              <div className='card border-0 shadow tilt' style={{ padding: "20px" }}>

                <div className='text-center'>
                  <img src={profile2}
                    className="avatar-md1 rounded-circle img-thumbnail"
                  />
                </div>

                <div className='cardbody container mt-3 mb-3'>
                  <h5 className='text-center'>Stella Larson</h5>
                  <p className='text-center'> A customer review is a reflection of a customer's experience with your company's products or services.</p>
                </div>
              </div>

              <div className='card border-0 shadow tilt' style={{ padding: "20px" }}>
                <div className='text-center'>
                  <img src={profile3}
                    className="avatar-md1 rounded-circle img-thumbnail"
                  />
                </div>


                <div className='cardbody container mt-3 mb-3'>
                  <h5 className='text-center'>Stella Larson</h5>
                  <p className='text-center'> A customer review is a reflection of a customer's experience with your company's products or services.</p>
                </div>

              </div> */}

        <section className="section start-free" id="trial">
          <div className="shapes-container">
            <i className="icon pe pe-7s-hourglass pe-3x" />{" "}
            <i className="icon pe pe-7s-magic-wand pe-3x" />{" "}
            <i className="icon pe pe-7s-rocket pe-3x" />{" "}
            <i className="icon pe pe-7s-plugin pe-3x" />{" "}
            <i className="icon pe pe-7s-like pe-3x" />{" "}
            <i className="icon pe pe-7s-clock pe-3x" />{" "}
            <i className="icon pe pe-7s-smile pe-3x" />{" "}
            <i className="icon pe pe-7s-piggy pe-3x" />{" "}
            <i className="icon pe pe-7s-shield pe-3x" />{" "}
            <i className="icon pe pe-7s-server pe-3x" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="section-heading text-center">
                  <i className="pe pe-7s-unlock fa-3x text-alternate" />
                  <h2 className="heading-line bold mt-4">Contact</h2>
                  <p className="lead text-muted">
                  We bring your business website to its doorstep. Please contact us for your 
                  consulting and website needs.
                    {/* <span className="italic">
                      don't let this offer pass in from of your eyes
                    </span> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="nav flex-column flex-md-row align-items-center justify-content-center">
              {/* <a href="#!" className="btn btn-alternate btn-lg py-3 px-4 bold mr-0 mr-md-3 mb-3 mb-md-0">Sign up</a> */}

              <a
                href="rssquarellc@gmail.com"
                style={{ cursor: "pointer" }}
                className="btn btn-outline-info btn-lg py-3 px-4 bold"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
        {/* Contact Channels */}
        <section className="section">
          <div className="container bring-to-front">
            {/* <div className="row gap-y">
        <div className="col-md-6">
          <div className="rounded media bg-contrast shadow-lg p-4" data-aos="fade-left" data-aos-delay={200}>
            <div className="icon-shape mr-4"><i className="pe pe-7s-cash pe-3x" /></div>
            <div className="media-body">
              <h4 className="text-primary">Contact Sales</h4><a href="mailto:support@5studios.net" className="more-link d-flex align-items-center mt-0">sales@5studios.net</a>
              <p className="mt-4">Looking for a custom quote? Need to tell us more about your project?
                Want a demonstration? Drop us a line</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="rounded media bg-contrast shadow-lg p-4" data-aos="fade-right" data-aos-delay={200}>
            <div className="icon-shape mr-4"><i className="pe pe-7s-help2 pe-3x" /></div>
            <div className="media-body">
              <h4 className="text-primary">Technical Support</h4><a href="mailto:support@5studios.net" className="more-link d-flex align-items-center mt-0">support@5studios.net</a>
              <p className="mt-4">Any question about how to integrate your product?. Don't fret, our geek
                team is ready for you.</p>
            </div>
          </div>
        </div>
      </div> */}
          </div>
        </section>
      </main>

      {/* footer */}

      <footer
        //  style={{ backgroundImage: `url(${backgroundimg})` }}
        className="backimgh site-footer section bg-dark text-contrast edge top-left"
      >
        <div className="container py-3 ">
          <div className="row gap-y text-center text-md-left mt-4 ">
            <div className="col-md-4 mr-auto ">
              {/* <img src={logolight} alt="" className="logo" /> */}
              {/* <h5 className="logo d-none d-md-block text-dark">
                <b style={{ fontWeight: "900", color: "#073f5e" }}>RS</b> Square
              </h5> */}
              <div>
                <img src={img1} style={{width:"100px"}} />
              </div>
              <p className="text-dark">
                An entity that takes pride in its consulting and website
                services
              </p>
              {/* <p className="text-dark">
                Your business deserves an outstanding website to speak for itself.
                RSSquare will provide you with friendly services to achieve the very goal
              </p> */}
            </div>
            <div className="col-md-5 mt-4">
              <h5 style={{ color: "#073f5e" }}>
                <b>Contact info</b>
              </h5>
              
              <p className="text-dark">603 809 5884</p>
              <p className="text-dark">rssquarellc@gmail.com</p>
              {/* <nav className="nav flex-column"><a className="nav-item py-2 text-contrast " href="#"><b className="text-dark">About</b></a> <a className="nav-item py-2 text-contrast" href="#"><b className="text-dark">Services</b></a> <a className="nav-item py-2 text-contrast" href="#"><b className="text-dark">Blog</b></a></nav> */}
            </div>
            {/* <div className="col-md-2">
            <nav className="nav flex-column"><a className="nav-item py-2 text-contrast text-dark" href="#"><b className="text-dark">Features</b></a> <a className="nav-item py-2 text-contrast" href="#"><b className="text-dark">API</b></a> <a className="nav-item py-2 text-contrast" href="#"><b className="text-dark">Customers</b></a></nav>
          </div>
          <div className="col-md-2">
            <nav className="nav flex-column"><a className="nav-item py-2 text-contrast text-dark" href="#"><b className="text-dark">Careers</b></a> <a className="nav-item py-2 text-contrast" href="#"><b className="text-dark">Contact</b></a> <a className="nav-item py-2 text-contrast" href="#"><b className="text-dark">Search</b></a></nav>
          </div> */}
            <div className="col-md-2  mt-4">
              <h6 className="mb-3">
                <b style={{ color: "#073f5e" }}>Follow us</b>
              </h6>
              <nav className="nav justify-content-around">
                <a href="#" className="btn btn-circle btn-sm brand-facebook">
                  <i className="fab fa-facebook" style={{ fontSize: "20px" }} />
                </a>
                <a href="#" className="btn btn-circle btn-sm brand-twitter">
                  <i className="fab fa-twitter" style={{ fontSize: "20px" }} />
                </a>
                <a href="#" className="btn btn-circle btn-sm brand-instagram">
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "20px" }}
                  />
                </a>
              </nav>
            </div>
          </div>
          <hr className="mt-5 op-5" />
          <div className="row small">
            <div className="col-md-4">
              <p className="mt-2 mb-0 text-center text-md-left text-dark">
                © 2022<a href="#"> RSSQUARE</a>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Modal
        size="xl"
        isOpen={modal_small}
        toggle={() => {
          tog_small();
        }}
        style={{ width: "100%" }}
        className="modal-fullscreen"
      >
        <div className="row">
          <div className="col-6" style={{ background: "#ecf4f7d4" }}>
            <div
              style={{ float: "right" }}
              className="text-center mt-4 modalpad"
            >
              <ul className="nav navbar-nav ml-auto mt-3">
                <h1>
                  <li
                    data-aos="fade-up"
                    data-aos-delay={300}
                    className="nav-item "
                  >
                    <a
                      onClick={() => {
                        popupclose();
                      }}
                      className="nav-link scrollto"
                      href="#home"
                      style={{ fontWeight: "900", color: "#023646" }}
                    >
                      <b>
                        <i>Home</i>
                      </b>
                    </a>
                  </li>
                </h1>
                <h1>
                  {" "}
                  <li
                    data-aos="fade-up"
                    data-aos-delay={900}
                    className="nav-item "
                  >
                    <a
                      onClick={() => {
                        popupclose();
                      }}
                      className="nav-link scrollto "
                      href="#about"
                      style={{ fontWeight: "900", color: "#023646" }}
                    >
                      <i>About</i>
                    </a>
                  </li>
                </h1>
                <h1>
                  <li
                    data-aos="fade-up"
                    data-aos-delay={1200}
                    className="nav-item "
                  >
                    <a
                      onClick={() => {
                        popupclose();
                      }}
                      className="nav-link scrollto "
                      href="#product"
                      style={{ fontWeight: "900", color: "#023646" }}
                    >
                      <i>Services</i>
                    </a>
                  </li>
                </h1>
                <h1>
                  <li
                    data-aos="fade-up"
                    data-aos-delay={1500}
                    className="nav-item "
                  >
                    <a
                      onClick={() => {
                        popupclose();
                      }}
                      className="nav-link scrollto "
                      href="#reviews"
                      style={{ fontWeight: "900", color: "#023646" }}
                    >
                      <i>Review</i>
                    </a>
                  </li>
                </h1>
                <h1>
                  <li
                    data-aos="fade-up"
                    data-aos-delay={1900}
                    className="nav-item "
                  >
                    <a
                      onClick={() => {
                        popupclose();
                      }}
                      className="nav-link scrollto "
                      href="#trial"
                      style={{ fontWeight: "900", color: "#023646" }}
                    >
                      <i>Contact</i>
                    </a>
                  </li>
                </h1>
              </ul>
            </div>
          </div>
          <div className="col-6" style={{ background: "#c8e5ed9e" }}></div>
        </div>
      </Modal>

      <Modal
        isOpen={modal}
        size="xl"
        toggle={toggle}
        className="modal-fullscreen"
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Main;
