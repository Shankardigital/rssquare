import React, { useEffect, useState } from "react";
import logolight from "../assets/img/logo-light.png";
import logo from "../assets/img/logo.png";
import img1 from "../assets/img/screens/tablet/1.png";
import img4 from "../assets/img/screens/app/4.png";
import img2 from "../assets/img/screens/app/2.png";
import img3 from "../assets/img/screens/tablet/2.png";
import tab1 from "../assets/img/logos/1.png";
import log2 from "../assets/img/logos/2.png";
import log3 from "../assets/img/logos/3.png";
import log4 from "../assets/img/logos/4.png";
import log5 from "../assets/img/logos/5.png";
import log6 from "../assets/img/logos/6.png";
import pieces1 from "../assets/img/screens/app/pieces/1.png";
import pieces2 from "../assets/img/screens/app/pieces/2.png";
import pieces3 from "../assets/img/screens/app/pieces/3.png";
import pieces4 from "../assets/img/screens/app/pieces/4.png";
import pieces5 from "../assets/img/screens/app/pieces/5.png";
import app6 from "../assets/img/screens/app/6.png";
import icon1 from "../assets/img/demo/header/apx.svg";
import icon2 from "../assets/img/demo/header/bs.svg";
import icon3 from "../assets/img/demo/header/cordova.svg";
import icon4 from "../assets/img/demo/header/css.svg";
import icon5 from "../assets/img/demo/header/fa.svg";
import icon6 from "../assets/img/demo/header/html.svg";
import icon7 from "../assets/img/demo/header/js.svg";
import icon8 from "../assets/img/demo/header/npm.svg";
import icon9 from "../assets/img/demo/header/sass.svg";
import app1 from "../assets/img/screens/app/1.png";
import about from "../assets/img/latest/about.png";
import service from "../assets/img/latest/service.png";
import service1 from "../assets/img/latest/service1.png";
import service2 from "../assets/img/latest/service2.png";
import service3 from "../assets/img/latest/service3.png";
import Whatsapp from "./Whatsapp";
import menu from "../assets/img/latest/menu.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    AOS.init();

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const [form, setform] = useState(true);
  const [sticky, setSticky] = useState("");
  const [visible, setvisible] = useState(false);
  console.log(form);

  const isSticky = () => {
    // const clik=onClick
    const scrollTop = window.scrollY;
    const stickyClass =
      scrollTop >= 200
        ? "mobres navbar navbar-expand-md main-nav navigation fixed-top sidebar-lef navbar-sticky"
        : "mobres navbar navbar-expand-md main-nav navigation fixed-top sidebar-lef";
    setSticky(stickyClass);
    console.log(stickyClass);
    // const visible = scrollTop >= 250 ? "" : "-800px";
    // // const leftside = clik >= 250 ? "" : "slideLeft";
    // // setlefts(leftside)
    // setvisible(visible);
  };
  const classes = `${sticky}`;

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
            <div className="mnupostion">
              <a className="btn menubtn ">
                <img src={menu} />
              </a>
            </div>
          ) : (
            <div className="mnupostion">
              <a className="btn menubtn">
                <img src={menu} />
              </a>
            </div>
          )}

          <div className="container bring-to-front">
            <div className="row">
              <div className="col-md-6">
                <h1 className=" display-md-3 mt-5 font-md">
                  <b
                    style={{ fontWeight: "900" }}
                    data-aos="fade-right"
                    data-aos-delay={500}
                  >
                    A new way1
                  </b>
                  <span
                    data-aos="fade-left"
                    data-aos-delay={500}
                    className="d-block display-md-4 light"
                  >
                    to showcase your app
                  </span>
                </h1>
                {/* <p data-aos="fade-up"
                                    data-aos-delay={500} className="lead">Your amazing product deserves an outstanding way to show it. Dashcore will
                                    provide you with a quality template no matter what your idea is about.</p> */}
                <p data-aos="fade-up" data-aos-delay={500} className="lead">
                  Your business deserves to have amazing resources working in
                  the team. Your business deserves an outstanding website to
                  speak for itself. RSSquare will provide you with friendly
                  services to achieve the very goal
                </p>
                <nav className="nav mt-5">
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
                </nav>
              </div>
            </div>
          </div>
        </header>

        {/* Isometric Mockups */}
        <section className="isometric-mockups">
          <div
            className="tablet ipad landscape"
            data-aos="fade-left"
            data-aos-delay={0}
          >
            <div className="screen">
              <img src={img1} alt="..." />
            </div>
            <div className="button" />
          </div>
          <div
            className="iphone light phone-big"
            data-aos="fade-left"
            data-aos-delay={500}
          >
            <div className="screen">
              <img src={img4} alt="..." />
            </div>
            <div className="notch" />
          </div>

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

        <section className="section alter3-partners bg-contrast edge top-left">
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi, atque eaque eius esse et harum inventore ipsam
                    laboriosam modi nam necessitatibus nemo pariatur provident.
                  </p>
                </div>
                {/* <div style={{ float: "right" }}>
                                <marquee className="animatestyle" behavior="scroll" direction="down"><a className='text-danger'>a</a></marquee>
                            </div> */}
                <ul className="nav">
                  <li className="nav-item mr-3 py-2 op-5">
                    <img src={tab1} className="icon" alt="" />
                  </li>
                  <li className="nav-item mr-3 py-2 op-5">
                    <img src={log2} className="icon" alt="" />
                  </li>
                  <li className="nav-item mr-3 py-2 op-5">
                    <img src={log3} className="icon" alt="" />
                  </li>
                  <li className="nav-item mr-3 py-2 op-5">
                    <img src={log4} className="icon" alt="" />
                  </li>
                  <li className="nav-item mr-3 py-2 op-5">
                    <img src={log5} className="icon" alt="" />
                  </li>
                  <li className="nav-item mr-3 py-2 op-5">
                    <img src={log6} className="icon" alt="" />
                  </li>
                </ul>
                <a href="#!" className="more-link btn btn-outline-primary bold">
                  Learn more
                </a>
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
        {/* Powerful Features */}
        <section className="section alter3-features" id="features">
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
                  {/* <p className="px-2 text-alternate text-uppercase bold" data-aos="fade-left" data-aos-delay={100}>Powerful features await for you</p> */}
                  <h2
                    className="heading-line"
                    data-aos="fade-right"
                    data-aos-delay={300}
                  >
                    About
                  </h2>
                  <p
                    className="lead text-muted my-4 semi-bold"
                    data-aos="fade-down"
                    data-aos-delay={500}
                  >
                    Laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p data-aos="fade-left" data-aos-delay={600}>
                    Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed
                    do eiusmod tempor incididunt ut labore aliqua. Ut enim adi
                    minim veniam, quis nostrud exercitation
                  </p>
                  <a
                    href="#!"
                    data-aos="fade-up"
                    data-aos-delay={800}
                    className="more-link btn btn-primary text-contrast bold"
                  >
                    Know More
                  </a>
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

            {/* Service.. */}

            <div className="row align-items-center mt-5">
              <div className="col-lg-6">
                <div className="section-heading">
                  {/* <p className="px-2 text-alternate text-uppercase bold" data-aos="fade-left" data-aos-delay={100}>Powerful features await for you</p> */}
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
                    Laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p data-aos="fade-left" data-aos-delay={600}>
                    Lorem ipsum dolor sit amet, consectetur adipiscig elit, sed
                    do eiusmod tempor incididunt ut labore aliqua. Ut enim adi
                    minim veniam, quis nostrud exercitation
                  </p>
                  <a
                    href="#!"
                    data-aos="fade-up"
                    data-aos-delay={800}
                    className="more-link btn btn-primary text-contrast bold"
                  >
                    Know More
                  </a>
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
                    <div data-aos="fade-down" data-aos-delay={500}>
                      <div className="card border-0 shadow mb-5 tilt">
                        <img src={service2} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 rotated-cards">
                    <div data-aos="fade-down" data-aos-delay={800}>
                      <div className="card border-0 shadow mb-5 tilt">
                        <img src={service3} />
                      </div>
                    </div>
                    <div data-aos="fade-down" data-aos-delay={1200}>
                      <div className="card border-0 shadow mb-5 tilt">
                        <img src={service1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Powered Design Blocks */}
        <section className="section powered-design" id="product">
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
            <div className="shape shape-circle shape-circle-1">
              <div data-aos="fade-up-left" data-aos-duration={1500} />
            </div>
            <div className="shape shape-circle shape-circle-2">
              <div
                data-aos="fade-up-left"
                data-aos-duration={1200}
                data-aos-delay={500}
              />
            </div>
            <div className="shape shape-ring animation--rotating-diagonal">
              <div />
            </div>
            <div className="shape shape-triangle shape-animated">
              <div className="animation--rotating" />
            </div>
            <div className="shape pattern-dots-1" />
          </div>
          <div className="container">
            <div className="row gap-y align-items-center">
              <div className="col-md-6">
                <div className="section-heading">
                  <h2
                    className="heading-line"
                    data-aos="fade-left"
                    data-aos-duration={200}
                  >
                    Powered with multiple design blocks
                  </h2>
                  <p
                    className="lead text-muted"
                    data-aos="fade-right"
                    data-aos-duration={400}
                  >
                    Unlock the power of Web Design. Laapp comes with multiple
                    reusable code blocks you can use to build awesome web pages.
                  </p>
                </div>
                <a
                  href="#!"
                  className="btn btn-outline-alternate more-link mt-0"
                  data-aos="fade-up"
                  data-aos-duration={600}
                >
                  Now is the time
                </a>
              </div>
              <div className="col-md-6">
                <div
                  className="hoverstyle"
                  data-aos="fade-right"
                  data-aos-duration={200}
                >
                  <div className="rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast">
                    <figure>
                      <img src={pieces1} className="img-responsive" alt="" />
                    </figure>
                  </div>
                </div>
                <div
                  className="hoverstyle"
                  data-aos="fade-left"
                  data-aos-duration={400}
                >
                  <div className="rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast mt-5">
                    <figure>
                      <img src={pieces2} className="img-responsive" alt="" />
                    </figure>
                  </div>
                </div>
                <div
                  className="hoverstyle"
                  data-aos="fade-right"
                  data-aos-duration={600}
                >
                  <div className="rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast mt-5">
                    <figure>
                      <img src={pieces3} className="img-responsive" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features you can't miss */}
        <section className="section features-cant-miss">
          <div className="shapes-container overflow-clear">
            <div className="shape shape-circle shape-circle-1">
              <div data-aos="fade-up-left" />
            </div>
            <div className="shape shape-circle shape-circle-2">
              <div data-aos="fade-up-right" data-aos-delay={200} />
            </div>
            <div className="shape shape-circle shape-circle-3">
              <div data-aos="fade-up-left" data-aos-delay={400} />
            </div>
            <div className="shape shape-circle shape-circle-4">
              <div data-aos="fade-up-left" data-aos-delay={600} />
            </div>
            <div className="shape shape-triangle shape-animated">
              <div className="animation--rotating" />
            </div>
          </div>
          <div className="container">
            <div className="row gap-y">
              <div className="col-md-6 order-md-last">
                <div className="section-heading">
                  <i className="fas fa-trophy fa-2x text-danger mb-3" />
                  <h2 className="heading-line">Features you can't miss</h2>
                </div>
                <ul className="list-unstyled">
                  <li className="media flex-column flex-md-row text-center text-md-left">
                    <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-mail pe-3x" />
                    <div className="media-body mt-3 mt-md-0">
                      <h5 className="bold mt-0 mb-1">Mail Management</h5>
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet aut autem eum laudantium quas recusandae
                        repellendus voluptate.
                      </p>
                    </div>
                  </li>
                  <li className="media flex-column flex-md-row text-center text-md-left mt-4">
                    <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-users pe-3x" />
                    <div className="media-body mt-3 mt-md-0">
                      <h5 className="bold mt-0 mb-1">Customers Tracking</h5>
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet aut autem eum laudantium quas recusandae
                        repellendus voluptate.
                      </p>
                    </div>
                  </li>
                  <li className="media flex-column flex-md-row text-center text-md-left mt-4">
                    <i className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-graph1 pe-3x" />
                    <div className="media-body mt-3 mt-md-0">
                      <h5 className="bold mt-0 mb-1">Advanced Reporting</h5>
                      <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet aut autem eum laudantium quas recusandae
                        repellendus voluptate.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="bubble bubble-left center-x-md">
                  <figure
                    className="rounded overflow-hidden shadow"
                    data-aos="zoom-in"
                  >
                    <img src={pieces4} className="img-responsive" alt="" />
                  </figure>
                </div>
                <figure className="bubble bubble-right rounded overflow-hidden shadow">
                  <img
                    src={pieces5}
                    className="img-responsive"
                    alt=""
                    data-aos="fade-left"
                  />
                </figure>
                <div className="iphone light">
                  <div className="screen shadow-box">
                    <img src={app6} alt="..." />
                  </div>
                  <div className="notch" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section integration-bubbles">
          <div className="container overflow-hidden">
            <div className="row">
              <div className="col-md-6">
                <div className="bubbles-wrapper">
                  <div className="animations m-0">
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                      <img src={icon1} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        Autoprefixer
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                      <img src={icon2} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        Bootstrap
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                      <img src={icon3} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        Cordova
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                      <img src={icon4} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        CSS
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                      <img src={icon5} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        Fontawesome
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                      <img src={icon6} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        HTML
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                      <img src={icon7} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        Javascript
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                      <img src={icon8} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        Npm
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                      <img src={icon9} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        SASS
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                      <img src={icon1} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        Autoprefixer
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                      <img src={icon2} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        Bootstrap
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                      <img src={icon3} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        Cordova
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md">
                      <img src={icon4} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        CSS
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl">
                      <img src={icon5} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        Fontawesome
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg">
                      <img src={icon6} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        HTML
                      </span>
                    </div>
                    <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl">
                      <img src={icon7} alt="" className="img-responsive" />{" "}
                      <span className="badge badge-contrast shadow-box">
                        Javascript
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-heading">
                  <p
                    className="text-alternate text-uppercase bold"
                    data-aos="fade-down"
                    data-aos-delay={200}
                  >
                    Extending core
                  </p>
                  <h2
                    className="heading-line"
                    data-aos="fade-left"
                    data-aos-delay={400}
                  >
                    Integrations to make it better
                  </h2>
                  <p
                    className="lead text-muted"
                    data-aos="fade-right"
                    data-aos-delay={600}
                  >
                    Ever wonder about the wonder of Laap: We count on hundreds
                    of friends contributing day by day to make Laapp a wonderful
                    tool
                  </p>
                </div>
                <a
                  href="#!"
                  className="more-link"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  Explore all integration
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="section why-choose-us">
          <div className="shapes-container">
            <div className="pattern pattern-dots" />
          </div>
          <div className="container pb-8 bring-to-front">
            <div className="section-heading text-center">
              <h2
                className="heading-line"
                data-aos="fade-down"
                data-aos-delay={200}
              >
                Why you should choose Laap?
              </h2>
              <p
                className="text-muted lead mx-auto"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                Laapp is designed to provide you with the last trends in web
                design. It'll help you to focus on your product, launch your
                website faster and reach more customer.
              </p>
            </div>
            <div className="row gap-y">
              <div className="col-md-6">
                <h4 className="bold text-alternate">
                  It all start by choosing the right tools
                </h4>
                <p className="text-muted lead mb-5">
                  When you're looking for a template you want it to stand-out.
                  Laapp comes with many customizable components.
                </p>
                <ul className="list-unstyled why-icon-list">
                  <li className="list-item">
                    <div className="media align-items-center">
                      <div
                        className="icon-shape mr-3"
                        data-aos="fade-left"
                        data-aos-delay={200}
                      >
                        <div className="shape shape-pipes" />
                        <i className="icon text-alternate fas fa-plug fa-3x" />
                      </div>
                      <div className="media-body">
                        <h5 className="bold">Integrations</h5>
                        <p className="my-0">
                          Aut debitis deserunt ea explicabo hic id incidunt,
                          minus
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="media align-items-center">
                      <div
                        className="icon-shape mr-3"
                        data-aos="fade-right"
                        data-aos-delay={300}
                      >
                        <div className="shape shape-pipes" />
                        <i className="icon text-alternate fas fa-heart fa-3x" />
                      </div>
                      <div className="media-body">
                        <h5 className="bold">Marketing</h5>
                        <p className="my-0">
                          Aliquam amet assumenda debitis dicta distinctio eaque
                          enim
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="media align-items-center">
                      <div
                        className="icon-shape mr-3"
                        data-aos="fade-left"
                        data-aos-delay={400}
                      >
                        <div className="shape shape-pipes" />
                        <i className="icon text-alternate fas fa-headphones fa-3x" />
                      </div>
                      <div className="media-body">
                        <h5 className="bold">Support</h5>
                        <p className="my-0">
                          Consequatur doloremque illum libero nam. Hic, vitae?
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr className="my-5" />
                <div
                  data-aos="fade-up"
                  data-aos-delay={300}
                  className="text-center text-md-left"
                >
                  <a href="#!" className="btn btn-primary text-contrast">
                    Know More
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="rotated-mockups device-twin"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="browser absolute shadow-lg">
                    <img src={img1} alt="..." />
                  </div>
                  <div
                    className="front iphone light"
                    data-aos="fade-down"
                    data-aos-delay={600}
                  >
                    <div className="screen">
                      <img src={app1} alt="..." />
                    </div>
                    <div className="notch" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQs */}
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

            <div className="section-heading text-center">
              <h2
                className="heading-line"
                data-aos="fade-left"
                data-aos-delay={200}
              >
                Frequently Asked Questions
              </h2>
              <p className="lead" data-aos="fade-right" data-aos-delay={400}>
                Want to know more about our services?
              </p>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-lg-auto">
                <div data-aos="fade-up">
                  <div className="card shadow-box shadow-hover mb-3">
                    <div className="card-header">
                      <a
                        href="#"
                        className="card-title collapsed"
                        data-toggle="collapse"
                        data-target="#v1-q1"
                      >
                        What does the package include?
                      </a>
                    </div>
                    <div id="v1-q1" className="collapse card-body">
                      When you buy Dashcore, you get all you see in the demo but
                      the images. We include SASS files for styling, complete JS
                      files with comments, all HTML variations. Besides we
                      include all mobile PSD mockups.
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up">
                  <div className="card shadow-box shadow-hover mb-3">
                    <div className="card-header py-3">
                      <a
                        href="#"
                        className="card-title collapsed"
                        data-toggle="collapse"
                        data-target="#v1-q2"
                      >
                        What is the typical response time for a support
                        question?
                      </a>
                    </div>
                    <div id="v1-q2" className="collapse card-body">
                      Since you report us a support question we try to make our
                      best to find out what is going on, depending on the case
                      it could take more or les time, however a standard time
                      could be minutes or hours.
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up">
                  <div className="card shadow-box shadow-hover mb-3">
                    <div className="card-header py-3">
                      <a
                        href="#"
                        className="card-title collapsed"
                        data-toggle="collapse"
                        data-target="#v1-q3"
                      >
                        What do I need to know to customize this template?
                      </a>
                    </div>
                    <div id="v1-q3" className="collapse card-body">
                      Our documentation give you all you need to customize your
                      copy. However you will need some basic web design
                      knowledge (HTML, Javascript and CSS)
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up">
                  <div className="card shadow-box shadow-hover mb-3">
                    <div className="card-header py-3">
                      <a
                        href="#"
                        className="card-title collapsed"
                        data-toggle="collapse"
                        data-target="#v1-q4"
                      >
                        Can I suggest a new feature?
                      </a>
                    </div>
                    <div id="v1-q4" className="collapse card-body">
                      Definitely <span className="bold">Yes</span>, you can
                      contact us to let us know your needs. If your suggestion
                      represents any value to both we can include it as a part
                      of the theme or you can request a custom build by an extra
                      cost. Please note it could take some time in order for the
                      feature to be implemented.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Start For Free */}
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
                  <h2 className="heading-line bold mt-4">
                    Start your 15 days free trial now!
                  </h2>
                  <p className="lead text-muted">
                    By signing up you will get 15 days free trial. You won't be
                    charged until the trial period ends,{" "}
                    <span className="italic">
                      don't let this offer pass in from of your eyes
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="nav flex-column flex-md-row align-items-center justify-content-center">
              <a
                href="#!"
                className="btn btn-alternate btn-lg py-3 px-4 bold mr-0 mr-md-3 mb-3 mb-md-0"
              >
                Sign up
              </a>{" "}
              <a
                href="mailto:support@5studios.net"
                className="btn btn-outline-dark btn-lg py-3 px-4 bold"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
        {/* Contact Channels */}
        <section className="section">
          <div className="container bring-to-front">
            <div className="row gap-y">
              <div className="col-md-6">
                <div
                  className="rounded media bg-contrast shadow-lg p-4"
                  data-aos="fade-left"
                  data-aos-delay={200}
                >
                  <div className="icon-shape mr-4">
                    <i className="pe pe-7s-cash pe-3x" />
                  </div>
                  <div className="media-body">
                    <h4 className="text-primary">Contact Sales</h4>
                    <a
                      href="mailto:support@5studios.net"
                      className="more-link d-flex align-items-center mt-0"
                    >
                      sales@5studios.net
                    </a>
                    <p className="mt-4">
                      Looking for a custom quote? Need to tell us more about
                      your project? Want a demonstration? Drop us a line
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="rounded media bg-contrast shadow-lg p-4"
                  data-aos="fade-right"
                  data-aos-delay={200}
                >
                  <div className="icon-shape mr-4">
                    <i className="pe pe-7s-help2 pe-3x" />
                  </div>
                  <div className="media-body">
                    <h4 className="text-primary">Technical Support</h4>
                    <a
                      href="mailto:support@5studios.net"
                      className="more-link d-flex align-items-center mt-0"
                    >
                      support@5studios.net
                    </a>
                    <p className="mt-4">
                      Any question about how to integrate your product?. Don't
                      fret, our geek team is ready for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}

      <footer className="site-footer section bg-dark text-contrast edge top-left">
        <div className="container py-3">
          <div className="row gap-y text-center text-md-left">
            <div className="col-md-4 mr-auto">
              {/* <img src={logolight} alt="" className="logo" /> */}
              <h5 className="logo d-none d-md-block text-white">
                <b style={{ fontWeight: "900" }}>RSS</b> Square
              </h5>

              <p>
                Laapp, a carefully crafted and powerful HTML5 template, it's
                perfect to showcase your App or Startup
              </p>
            </div>
            <div className="col-md-2">
              <nav className="nav flex-column">
                <a className="nav-item py-2 text-contrast" href="#">
                  About
                </a>{" "}
                <a className="nav-item py-2 text-contrast" href="#">
                  Services
                </a>{" "}
                <a className="nav-item py-2 text-contrast" href="#">
                  Blog
                </a>
              </nav>
            </div>
            <div className="col-md-2">
              <nav className="nav flex-column">
                <a className="nav-item py-2 text-contrast" href="#">
                  Features
                </a>{" "}
                <a className="nav-item py-2 text-contrast" href="#">
                  API
                </a>{" "}
                <a className="nav-item py-2 text-contrast" href="#">
                  Customers
                </a>
              </nav>
            </div>
            <div className="col-md-2">
              <nav className="nav flex-column">
                <a className="nav-item py-2 text-contrast" href="#">
                  Careers
                </a>{" "}
                <a className="nav-item py-2 text-contrast" href="#">
                  Contact
                </a>{" "}
                <a className="nav-item py-2 text-contrast" href="#">
                  Search
                </a>
              </nav>
            </div>
            <div className="col-md-2">
              <h6 className="py-2 small">Follow us</h6>
              <nav className="nav justify-content-around">
                <a href="#" className="btn btn-circle btn-sm brand-facebook">
                  <i className="fab fa-facebook" />
                </a>{" "}
                <a href="#" className="btn btn-circle btn-sm brand-twitter">
                  <i className="fab fa-twitter" />
                </a>{" "}
                <a href="#" className="btn btn-circle btn-sm brand-instagram">
                  <i className="fab fa-instagram" />
                </a>
              </nav>
            </div>
          </div>
          <hr className="mt-5 op-5" />
          <div className="row small">
            <div className="col-md-4">
              <p className="mt-2 mb-0 text-center text-md-left">
                © 2022<a href="#"> Digitalraiz</a>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
