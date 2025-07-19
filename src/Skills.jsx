import React from 'react';

const skillsData = [
  { label: 'HTML', color: 'color-1', percent: 90 },
  { label: 'CSS', color: 'color-2', percent: 85 },
  { label: 'Javascript', color: 'color-3', percent: 90 },
  { label: 'React', color: 'color-4', percent: 80 },
  { label: 'BOOTSTRAP & TAILWIND', color: 'color-5', percent: 70 },
  { label: 'SEO & Optimization', color: 'color-6', percent: 80 },
];

const Skills = () => {
  return (
    <section className="ftco-section" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center" data-aos="fade-up">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
          </div>
        </div>
        <div className="row">
          {skillsData.map((skill) => (
            <div className="col-md-6 animate-box" key={skill.label} data-aos="fade-up">
              <div className="progress-wrap">
                <h3>{skill.label}</h3>
                <div className="progress">
                  <div
                    className={`progress-bar ${skill.color}`}
                    role="progressbar"
                    aria-valuenow={skill.percent}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${skill.percent}%`, transition: 'width 1.2s' }}
                  >
                    <span>{skill.percent}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 