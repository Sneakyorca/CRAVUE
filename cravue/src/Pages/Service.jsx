import studio from "./../assets/studio.webp";
import brandlab from "./../assets/brandlab.webp";
import growth from "./../assets/growth.webp";
import { Helmet } from "react-helmet-async";

const Service = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CRAVUE Services",
    description:
      "Creative strategy and brand development services including Studio, BrandLab, and GrowthLab.",
    url: "https://crauve.org/services",
    hasOfferingDescription: [
      {
        "@type": "Service",
        name: "Cravue Studio",
        description:
          "Video production, brand photography, social campaigns, and digital advertising",
      },
      {
        "@type": "Service",
        name: "Cravue BrandLab",
        description:
          "Brand strategy, positioning, identity design, and brand system development",
      },
      {
        "@type": "Service",
        name: "Cravue GrowthLab",
        description:
          "Marketing strategy, paid media, content systems, and data-driven optimization",
      },
    ],
  };

  return (
    <div className="services">
      <Helmet>
        <title>Services | Cravue - Brand & Marketing Solutions</title>
        <meta
          name="description"
          content="Cravue Studio, BrandLab, and GrowthLab: Comprehensive brand development, content creation, and marketing systems for modern businesses."
        />
        <meta
          name="keywords"
          content="creative services, brand development, video production, brand strategy, marketing strategy, content creation"
        />
        <meta property="og:title" content="Services | Cravue" />
        <meta
          property="og:description"
          content="Solutions that take your business to the next level. Studio, BrandLab, and GrowthLab services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crauve.org/services" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="CRAVUE Services" />
        <meta
          name="twitter:description"
          content="Creative strategy solutions for brands: Studio, BrandLab, GrowthLab."
        />
        <link rel="canonical" href="https://crauve.org/services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <p className="title">Services</p>
      <h1>Solutions That Take Your Business to the Next Level</h1>
      <p>
        We develop and implement automation tools that help you work smarter,
        not harder.
      </p>
      <div>
        {" "}
        <p className="title">Cravue Studio</p>
        <img
          src={studio}
          alt="Cravue Studio - Video Production and Content Creation"
        />
        <div>
          <p>
            We tell stories that make brands impossible to ignore. <br />
            Cravue Studio is our creative powerhouse, the home of visuals,
            storytelling, and emotion. <br />
            We help brands craft stunning content that not only looks good but
            sells the feeling. From high-impact video commercials and brand
            photography to social campaigns and digital ads, we turn your
            brand’s message into experiences that move people to act.
          </p>
          <p>
            Outcome:
            <br /> Your brand doesn’t just show up, it performs.
          </p>
        </div>
      </div>{" "}
      <div>
        <p className="title">Cravue Studio</p>
        <img
          src={brandlab}
          alt="Cravue BrandLab - Brand Strategy and Identity Design"
        />
        <div>
          <p>
            We build clarity before creativity. <br />
            Cravue BrandLab is where strategy meets identity. <br />
            We help startups, SMEs, and growing businesses find their voice,
            position themselves clearly in their market, and design a brand
            system that feels cohesive across every touchpoint. <br />
            Whether you’re launching or rebranding, we turn confusion into
            clarity and clarity into a magnetic presence.
          </p>
          <p>
            Outcome:
            <br /> A brand people instantly understand, remember, and trust.
          </p>
        </div>
      </div>
      <div>
        <p className="title">Cravue Studio</p>
        <img
          src={growth}
          alt="Cravue GrowthLab - Marketing Strategy and Data-Driven Growth"
        />
        <div>
          {" "}
          <p>
            We engineer creative systems that drive results. <br />
            Cravue GrowthLab combines marketing psychology, paid media, and
            content systems to help brands grow sustainably. <br />
            We don’t just run ads, we design full-funnel experiences that
            convert attention into loyal customers. From campaign strategy to
            data-driven optimization, we help you scale with clarity and
            consistency.
          </p>
          <p>
            Outcome:
            <br /> Predictable growth, measurable ROI, and a brand that scales
            without losing its soul.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
