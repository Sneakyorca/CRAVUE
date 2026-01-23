import studio from "./../assets/studio.jpg";
import brandlab from "./../assets/brandlab.png";
import growth from "./../assets/growth.png";
const Service = () => {
  return (
    <div className="services">
      <p className="title">Services</p>
      <h1>Solutions That Take Your Business to the Next Level</h1>
      <p>
        We develop and implement automation tools that help you work smarter,
        not harder.
      </p>
      <p className="title">Cravue Studio</p>
      <img src={studio} alt="" width="100%" />
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
      <img src={brandlab} alt="" width="100%" />
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
      <img src={growth} alt="" width="100%" />
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
