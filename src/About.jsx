import React, { useEffect, useState } from 'react';

const About = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 12;
    if (start === end) return;
    let incrementTime = 40;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: 'url(/assets/images/myimg2.jpg)' }}>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section" data-aos="fade-up">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex"><span>Name:</span> <span>Pravesh Dhakal</span></li>
                  <li className="d-flex"><span>Date of birth:</span> <span>April 23, 2004</span></li>
                  <li className="d-flex"><span>Address:</span> <span>India</span></li>
                  <li className="d-flex"><span>Email:</span> <span>pravdhakal111@gmail.com</span></li>
                  <li className="d-flex"><span>Phone: </span> <span>+91 7021470826</span></li>
                </ul>
              </div>
            </div>
            <div className="counter-wrap d-flex mt-md-3" data-aos="fade-up">
              <div className="text">
                <p className="mb-4">
                  <span className="number" data-number="12">{count}</span>
                  <span>Projects complete</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 