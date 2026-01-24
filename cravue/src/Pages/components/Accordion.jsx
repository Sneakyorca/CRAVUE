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
          className="accordion-item"
          onClick={() => {
            handleClick(index);
          }}
        >
          <div className="accordion-title">{item.title}</div>
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
