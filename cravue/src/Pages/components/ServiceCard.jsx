const ServiceCard = ({ text, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt="" />
      <h2>{text}</h2>
    </div>
  );
};

export default ServiceCard;
