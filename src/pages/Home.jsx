import React from "react";

import {
  avatar1,
  avatar2,
  avatar3,
  scenery1,
  scenery4,
  scenery5,
  scenery6,
} from "../assets";
import { Footer, Hero } from "../components";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="clean-block clean-info dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Info</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                className="img-thumbnail"
                src={scenery5}
                alt="img-thumbnail"
              />
            </div>
            <div className="col-md-6">
              <h3>Lorem impsum dolor sit amet</h3>
              <div className="getting-started-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <button className="btn btn-outline-primary btn-lg" type="button">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="clean-block features">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Features</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5 feature-box">
              <i className="icon-star icon"></i>
              <h4>Bootstrap 5</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="col-md-5 feature-box">
              <i className="icon-pencil icon"></i>
              <h4>Customizable</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="col-md-5 feature-box">
              <i className="icon-screen-smartphone icon"></i>
              <h4>Responsive</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="col-md-5 feature-box">
              <i className="icon-refresh icon"></i>
              <h4>All Browser Compatibility</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="clean-block slider dark">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">Slider</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div
            className="carousel slide"
            data-bs-ride="carousel"
            id="carousel-1"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100 d-block" src={scenery1} alt="Slide" />
              </div>
              <div className="carousel-item">
                <img className="w-100 d-block" src={scenery4} alt="Slide" />
              </div>
              <div className="carousel-item">
                <img className="w-100 d-block" src={scenery6} alt="Slide" />
              </div>
            </div>
            <div>
              <a
                className="carousel-control-prev"
                href="#carousel-1"
                role="button"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel-1"
                role="button"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carousel-1"
                data-bs-slide-to="0"
                className="active"
              ></li>
              <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
              <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
      <section className="clean-block about-us">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center clean-card">
                <img
                  className="card-img-top w-100 d-block"
                  src={avatar1}
                  alt="card-img-top"
                />
                <div className="card-body info">
                  <h4 className="card-title">John Smith</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="icons">
                    <a href="#nothing">
                      <i className="icon-social-facebook"></i>
                    </a>
                    <a href="#nothing">
                      <i className="icon-social-instagram"></i>
                    </a>
                    <a href="#nothing">
                      <i className="icon-social-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center clean-card">
                <img
                  className="card-img-top w-100 d-block"
                  src={avatar2}
                  alt="card-img-top"
                />
                <div className="card-body info">
                  <h4 className="card-title">Robert Downturn</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="icons">
                    <a href="#nothing">
                      <i className="icon-social-facebook"></i>
                    </a>
                    <a href="#nothing">
                      <i className="icon-social-instagram"></i>
                    </a>
                    <a href="#nothing">
                      <i className="icon-social-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center clean-card">
                <img
                  className="card-img-top w-100 d-block"
                  src={avatar3}
                  alt="card-img-top"
                />
                <div className="card-body info">
                  <h4 className="card-title">Ally Sanders</h4>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <div className="icons">
                    <a href="#nothing">
                      <i className="icon-social-facebook"></i>
                    </a>
                    <a href="#nothing">
                      <i className="icon-social-instagram"></i>
                    </a>
                    <a href="#nothing">
                      <i className="icon-social-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
