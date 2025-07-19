import React from 'react';

const Projects = () => (
  <section className="ftco-section ftco-project" id="projects-section">
    <div className="container">
      <div className="row justify-content-center pb-5">
        <div className="col-md-12 heading-section text-center" data-aos="fade-up">
          <h1 className="big big-2">Projects</h1>
          <h2 className="mb-4">My Projects</h2>
          <p>Here are some of the projects I've worked on, showcasing my skills in web development and design</p>
        </div>
      </div>
      <div className="row">
        {/* Project 1: SeiFun */}
        <div className="col-md-4" data-aos="fade-up">
          <a href="https://www.seifun.xyz/" target="_blank" style={{ textDecoration: 'none', display: 'block' }} rel="noopener noreferrer">
            <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)' }}>
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>SeiFun</h3>
                <span>A simple decentralized application (dApp) to launch your cryptocurrency on the Sei blockchain in just a few clicks. With real time, AI integrated token creation and launch</span>
              </div>
            </div>
          </a>
        </div>
        {/* Project 2: Ecommerce Website */}
        <div className="col-md-8" data-aos="fade-up">
          <a href="https://chic-piroshki-1eb510.netlify.app/" target="_blank" style={{ textDecoration: 'none', display: 'block' }} rel="noopener noreferrer">
            <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)' }}>
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>Ecommerce Website</h3>
                <span>A full stack e-commerce site with real-time admin monitoring, dashboard and teams management</span>
              </div>
            </div>
          </a>
        </div>
        {/* Project 3: Blog Application */}
        <div className="col-md-8" data-aos="fade-up">
          <a href="https://charming-hamster-798db1.netlify.app/" target="_blank" style={{ textDecoration: 'none', display: 'block' }} rel="noopener noreferrer">
            <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)' }}>
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>Blog Application</h3>
                <span>A full-featured blog application with CRUD functionality. Users can create, read, update, and delete blog posts with modern UI.</span>
              </div>
            </div>
          </a>
        </div>
        {/* Project 4: Fundflow */}
        <div className="col-md-8" data-aos="fade-up">
          <a href="https://crowdfunding-fundflow.vercel.app/" target="_blank" style={{ textDecoration: 'none', display: 'block' }} rel="noopener noreferrer">
            <div className="project img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(/assets/images/fundflow.png)' }}>
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>Fundflow</h3>
                <span>A decentralized crowdfunding platform built using solidity and react</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects; 