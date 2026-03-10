import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              TAMIM
              <br />
              <span>SIDDIQUEY</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI & Machine Learning</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Enthusiast</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">CSE Student</div>
              <div className="landing-h2-info-1">at BAUST</div>
            </h2>
          </div>
          <p className="landing-tagline">
            Building intelligent systems, robotics projects, and exploring the future of artificial intelligence.
          </p>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
