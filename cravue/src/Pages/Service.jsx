import studio from "./../assets/studio.jpg";
import brandlab from "./../assets/brandlab.png";
import growth from "./../assets/growth.png";
import { Helmet } from "react-helmet-async";

const Service = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CRAVUE Services",
    description:
      "Creative strategy and brand development services including Studio, BrandLab, and GrowthLab.",
    url: "https://cravue.com/services",
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
        <title>Services | CRAVUE - Creative Strategy & Brand Solutions</title>
        <meta
          name="description"
          content="CRAVUE Services: Studio (video & content), BrandLab (strategy & design), GrowthLab (marketing & growth). Solutions for brands to scale with clarity."
        />
        <meta
          name="keywords"
          content="creative services, brand development, video production, brand strategy, marketing strategy, content creation"
        />
        <meta property="og:title" content="Services | CRAVUE" />
        <meta
          property="og:description"
          content="Solutions that take your business to the next level. Studio, BrandLab, and GrowthLab services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cravue.com/services" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="CRAVUE Services" />
        <meta
          name="twitter:description"
          content="Creative strategy solutions for brands: Studio, BrandLab, GrowthLab."
        />
        <link rel="canonical" href="https://cravue.com/services" />
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
      <p className="title">Cravue Studio</p>
      <img
        src={studio}
        alt="Cravue Studio - Video Production and Content Creation"
      />
      <p>
        We tell stories that make brands impossible to ignore. <br />
        Cravue Studio is our creative powerhouse, the home of visuals,
        storytelling, and emotion. <br />
        We help brands craft stunning content that not only looks good but sells
        the feeling. From high-impact video commercials and brand photography to
        social campaigns and digital ads, we turn your brand’s message into
        experiences that move people to act.
      </p>
      <p>
        Outcome:
        <br /> Your brand doesn’t just show up, it performs.
      </p>
      <p className="title">Cravue Studio</p>
      <img
        src={brandlab}
        alt="Cravue BrandLab - Brand Strategy and Identity Design"
      />
      <p>
        We build clarity before creativity. <br />
        Cravue BrandLab is where strategy meets identity. <br />
        We help startups, SMEs, and growing businesses find their voice,
        position themselves clearly in their market, and design a brand system
        that feels cohesive across every touchpoint. <br />
        Whether you’re launching or rebranding, we turn confusion into clarity
        and clarity into a magnetic presence.
      </p>
      <p>
        Outcome:
        <br /> A brand people instantly understand, remember, and trust.
      </p>
      <p className="title">Cravue Studio</p>
      <img src={growth} alt="Cravue GrowthLab - Marketing Strategy and Data-Driven Growth" />
      <p>
        We engineer creative systems that drive results. <br />
        Cravue GrowthLab combines marketing psychology, paid media, and content
        systems to help brands grow sustainably. <br />
        We don’t just run ads, we design full-funnel experiences that convert
        attention into loyal customers. From campaign strategy to data-driven
        optimization, we help you scale with clarity and consistency.
      </p>
      <p>
        Outcome:
        <br /> Predictable growth, measurable ROI, and a brand that scales
        without losing its soul.
      </p>
    </div>
  );
};

export default Service;
