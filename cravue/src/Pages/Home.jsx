import ServiceCard from "./components/ServiceCard";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import { Link } from "react-router-dom";
import ContactCard from "./components/ContactCard";
import studio from "./../assets/studio.jpg";
import brandlab from "./../assets/brandlab.png";
import growth from "./../assets/growth.png";
import aboutimg from "./../assets/about.jpg";
const Home = ({ navState }) => {
  return (
    <div className="home">
      <section id="hero">
        <h1>
          Establish brand credibility and clarity for potential clients,
          partners, and investors.
        </h1>
        <p>
          Convert visitors into leads via strategic storytelling, clear service
          offerings, and a strong brand presence.
        </p>
        <div className="nav-links">
          <a
            href="https://tally.so/r/w77g9A"
            target="_blank"
            className="link"
            style={{ opacity: navState && 0 }}
          >
            Sign Up
          </a>
          <Link to="/services" className="link">
            View Services
          </Link>
        </div>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>
          Cravue is a full-service creative strategy company helping startups
          and growth-stage brands scale through storytelling, content creation,
          brand development, UGC, influencer marketing, and high-impact visual
          content. We empower businesses to gain strategic clarity and
          visibility through powerful creative systems, positioning ourselves
          not just as an agency but as a scalable company solving deep-rooted
          marketing and brand positioning problems.
        </p>
        <img
          src={aboutimg}
          alt=""
          width="100%"
          height={200}
          style={{
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: "10px",
          }}
        />
        <Link to="/about" className="link">
          Read more
        </Link>
      </section>
      <section id="services">
        <p>Our Services</p>
        <h2>What we do</h2>
        <p>
          We simplify understanding of our divisions under one unified brand.
        </p>
        <div className="service-cards">
          <Link to="/services" className="link">
            <ServiceCard text="Cravue Studio" image={studio} />
          </Link>
          <Link to="/services" className="link">
            <ServiceCard text="Cravue Brandlab" image={brandlab} />
          </Link>
          <Link to="/services" className="link">
            <ServiceCard text="Cravue Growth" image={growth} />
          </Link>
        </div>
      </section>
      <section id="faqs">
        <p className="title lg">FAQS</p>
        <h1>We’ve Got the Answers You’re Looking For</h1>
        <p>Quick answers to your questions</p>
        <Accordion />
      </section>
      <section id="clients">
        <div className="carousel">
          <Carousel />
        </div>
        <ContactCard />
      </section>
    </div>
  );
};

export default Home;
