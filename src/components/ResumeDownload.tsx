import "./styles/ResumeDownload.css";
import { MdDownload } from "react-icons/md";

const ResumeDownload = () => {
  return (
    <div className="resume-section section-container" id="resume">
      <div className="resume-container">
        <h2>
          Download My <span>Resume</span>
        </h2>
        <p className="resume-description">
          Get a detailed overview of my skills, education, projects, and
          experience in AI, Machine Learning, and Computer Science.
        </p>
        <a
          href="/resume.pdf"
          download
          className="resume-download-btn"
          data-cursor="disable"
        >
          <MdDownload />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default ResumeDownload;
