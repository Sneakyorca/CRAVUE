import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import ContactCard from "./components/ContactCard";
import cancel from "./../assets/cancel.svg";
import tick from "./../assets/tick.svg";

const About = () => {
  return (
    <div className="about">
      <p className="title">About Us</p>
      <h1>Helping Businesses Grow</h1>
      <p>Cravue helps businesses streamline operations and faster.</p>
      <div className="carousel">
        <Carousel />
      </div>
      <h2>Who We Are</h2>
      <p>
        Cravue is a team of innovators dedicated to making marketing easy and
        effective. We help businesses streamline workflows, boost efficiency,
        and scale with smart solutions.
      </p>
      <div className="gradient-background">
        <h3>150+ Businesses</h3>
        <p>Companies have streamed their workflows with cravue solutions</p>
      </div>
      <div className="gradient-background">
        <h3>1M+ Hours</h3>
        <p>Reducing manual work and boosting productivity through cravue.</p>
      </div>
      <div className="gradient-background">
        <h3>95% Faster</h3>
        <p>
          Clients see improved efficiency within the first three months of
          service.
        </p>
      </div>
      <p className="title lg first">Why Us</p>
      <h2>What makes us stand out in the industry</h2>
      <p>
        Discover how our innovative strategies, data-driven approach and
        commitment to results set us up apart from the competition
      </p>
      <div className="card info">
        <p className="title">Other Agencies</p>
        <p>
          <img src={cancel} alt="Cancel" /> Prone to errors
        </p>
        <p>
          <img src={cancel} alt="Cancel" /> Limited by Work Hours
        </p>
        <p>
          <img src={cancel} alt="Cancel" /> High Labour Cost & Overhead
        </p>
        <p>
          <img src={cancel} alt="Cancel" /> Slow and Time Consuming Tasks
        </p>
        <p>
          <img src={cancel} alt="Cancel" /> Disconnected & Repetitive Work
        </p>
        <p>
          <img src={cancel} alt="Cancel" /> Inconsistent & Dependent On
          Workforce
        </p>
      </div>
      <div className="card two info">
        <p className="title">CRAVUE Works</p>
        <p>
          <img src={tick} alt="Tick" /> Smart Driven Decisions
        </p>
        <p>
          <img src={tick} alt="Tick" /> 24/7 Automated Workflow
        </p>
        <p>
          <img src={tick} alt="Tick" /> Scalable & Cost Effective{" "}
        </p>
        <p>
          <img src={tick} alt="Tick" /> Instant Data Processing
        </p>
        <p>
          <img src={tick} alt="Tick" /> Seamless System Integration
        </p>
        <p>
          <img src={tick} alt="Tick" /> Consistent and Reliable Output
        </p>
      </div>
      <p className="title lg">FAQS</p>
      <h2>We’ve Got the Answers You’re Looking For</h2>
      <p>Quick answers to your questions</p>
      <Accordion />
      <ContactCard />
    </div>
  );
};

export default About;
