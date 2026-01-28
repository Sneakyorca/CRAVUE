import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const items = [
    {
      title: "What exactly does Cravue do?",
      content:
        "Cravue is a creative and strategy company helping startups, SMEs, and growing brands achieve clarity, visibility, and growth through brand strategy, storytelling, and high-impact creative execution.",
    },
    {
      title: "Who is Cravue for?",
      content:
        "Cravue is built for startups, SMEs, and scaling brands that want to move from confusion to clarity.",
    },
    {
      title: "What makes Cravue different from other creative agencies?",
      content:
        "We don’t just design or run ads we build clarity first. Cravue’s approach starts with understanding your brand’s core  then translating that clarity into powerful visuals, stories, and marketing systems that drive real growth.",
    },
    {
      title: "How can I work with Cravue?",
      content:
        "You can start by booking a Discovery Call through our website or reaching out via cravue@gmail.com. During the call, we’ll learn about your brand, your goals, and challenges then recommend a tailored plan or service that fits your current stage",
    },
    {
      title: "Can startups afford Cravue’s services?",
      content:
        "Yes. Cravue is built to help startups and small businesses scale without breaking the bank. we offer flexible packages, phased strategies, and training programs that help founders grow step by step.",
    },
  ];
  const location = useLocation();
  useEffect(() => {
    if (openIndex !== null) {
      setOpenIndex(null);
    }
  }, [location]);
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className="accordion-item "
          onClick={() => {
            handleClick(index);
          }}
        >
          <div className="accordion-title">
            {item.title}{" "}
            <svg
              width={30}
              className={`angle-icon ${openIndex === index ? "selected" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                fill="#ffffff"
                d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z"
              />
            </svg>
          </div>
          <div
            className={`accordion-content ${openIndex === index ? "open" : ""}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
