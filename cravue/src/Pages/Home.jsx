import ServiceCard from "./components/ServiceCard";
import Accordion from "./components/Accordion";
import Carousel from "./components/Carousel";
import { Link } from "react-router-dom";
import ContactCard from "./components/ContactCard";
import { Helmet } from "react-helmet-async";
import studio from "./../assets/studio.jpg";
import brandlab from "./../assets/brandlab.png";
import growth from "./../assets/growth.png";
import aboutimg from "./../assets/about.jpg";

const Home = ({ navState }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cravue",
    description:
      "Full-service creative strategy company helping startups and growth-stage brands scale through storytelling, content creation, and brand development.",
    url: "https://cravue.com",
    logo: "https://cravue.com/src/assets/logo.png",
    areaServed: "Worldwide",
    knowsAbout: [
      "Creative Strategy",
      "Brand Development",
      "Content Creation",
      "Storytelling",
      "UGC",
      "Influencer Marketing",
    ],
    service: [
      {
        "@type": "Service",
        name: "Cravue Studio",
      },
      {
        "@type": "Service",
        name: "Cravue Brandlab",
      },
      {
        "@type": "Service",
        name: "Cravue Growth",
      },
    ],
  };
  return (
    <div className="home">
      <Helmet>
        <title>CRAVUE - Creative Strategy & Brand Development Agency</title>
        <meta
          name="description"
          content="Cravue: Full-service creative strategy company for startups & growth-stage brands. Storytelling, brand development, content creation, UGC & influencer marketing."
        />
        <meta
          name="keywords"
          content="creative agency, brand development, storytelling, content creation, UGC, influencer marketing, branding"
        />
        <meta
          property="og:title"
          content="CRAVUE - Creative Strategy & Brand Development"
        />
        <meta
          property="og:description"
          content="Transform your brand with strategic storytelling and high-impact creative systems."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cravue.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CRAVUE - Creative Strategy & Brand Development"
        />
        <meta
          name="twitter:description"
          content="Transform your brand with strategic storytelling and high-impact creative systems."
        />
        <link rel="canonical" href="https://cravue.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <section id="hero">
        {/* <video autoPlay loop muted>
          <source src={heroAnimation} type="video/mp4" />
        </video> */}
        <p className="display-info">
          <span>Preview</span> Content will appear here
        </p>
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
          alt="Cravue Creative Team and Studio"
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
        <p>Clients</p>
        <div className="carousel">
          <Carousel />
        </div>
        <ContactCard darker={navState && "gray"} />
      </section>
    </div>
  );
};

export default Home;
