import ServiceCard from "./components/ServiceCard";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
const Home = ({ navState }) => {
  return (
    <>
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
          <a href="" style={{ opacity: navState && 0 }}>
            Sign up
          </a>
          <a href="">View Services</a>
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
        <img src="" alt="" />
        <a href="">Read more</a>
      </section>
      <section id="services">
        <p>Our Services</p>
        <h2>What we do</h2>
        <p>
          We simplify understanding of our divisions under one unified brand.
        </p>
        <ServiceCard text="Cravue Studio" />
        <ServiceCard text="Cravue Brandlab" />
        <ServiceCard text="Cravue Growth" />
      </section>
      <section id="faqs">
        <p>FAQS</p>
        <h1>We’ve Got the Answers You’re Looking For</h1>
        <p>Quick answers to your questions</p>
        <Accordion />
      </section>
      <section id="clients">
        <Carousel />
        <div className="card">
          <h2>Let CRAVUE do the work so you can scale faster</h2>
          <p>Book a call today</p>
          <button>Book a free call</button>
        </div>
      </section>
    </>
  );
};

export default Home;
