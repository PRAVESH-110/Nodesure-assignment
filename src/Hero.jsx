import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };
  return (
    <section id="home-section" className="hero" style={{ minHeight: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ParallaxProvider>
        <Slider {...settings} className="home-slider" style={{ minHeight: '100vh' }}>
          <div className="slider-item" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container">
              <div className="row slider-text justify-content-center" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Parallax translateY={[70, 0]}>
                  <div className="one-forth d-flex align-items-center justify-content-center" style={{ width: '100%', flexDirection: 'column', textAlign: 'center' }}>
                    <div className="text">
                      <span className="subheading">Hello!</span>
                      <h1 className="mb-4 mt-3">I'm <span>Pravesh Dhakal</span></h1>
                      <h2 className="mb-4">A Front-end Web Developer</h2>
                    </div>
                  </div>
                </Parallax>
              </div>
            </div>
          </div>
        </Slider>
      </ParallaxProvider>
    </section>
  );
};

export default Hero; 