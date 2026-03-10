import "./styles/TechInterests.css";

const interests = [
  {
    title: "Artificial Intelligence",
    description: "Building intelligent agents and systems that can reason, learn, and act autonomously.",
    icon: "🧠",
  },
  {
    title: "Robotics",
    description: "Designing and programming robots that interact with the physical world through sensors and actuators.",
    icon: "🤖",
  },
  {
    title: "Autonomous Systems",
    description: "Developing self-governing systems that can operate and make decisions without human intervention.",
    icon: "⚙️",
  },
  {
    title: "Machine Learning",
    description: "Training models that learn patterns from data to make predictions and improve over time.",
    icon: "📊",
  },
];

const TechInterests = () => {
  return (
    <div className="interests-section section-container" id="interests">
      <div className="interests-container">
        <h2>
          Technology <span>Interests</span>
        </h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div className="interest-card" key={index}>
              <div className="interest-icon">{interest.icon}</div>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
              <div className="interest-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechInterests;
