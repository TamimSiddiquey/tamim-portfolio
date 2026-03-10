import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="journey">
      <div className="career-container">
        <h2>
          AI Learning <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CS Foundations</h4>
                <h5>BAUST, Khulna — Bangladesh Army University of Science and Technology</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started my journey in Computer Science and Engineering, building
              strong foundations in C, C++, data structures, and core computing
              concepts. Developed algorithmic thinking and problem-solving skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & ML Exploration</h4>
                <h5>Self-directed study & projects</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Began deep-diving into Artificial Intelligence and Machine Learning
              using "AI: A Modern Approach" as a guide. Implementing search
              algorithms, machine learning models, and exploring computer vision
              with Python.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Robotics & Hardware</h4>
                <h5>Building real-world intelligent systems</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and building robotics projects, integrating sensors
              with control algorithms using Arduino. Combining AI software
              with embedded hardware to create autonomous systems. Working
              towards becoming an expert in AI and Machine Learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
