const ServiceCard = ({ text, image }) => {
  return (
    <div className="border">
      <div className="service-card">
        <img src={image} alt="" width={175} height={116} />
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default ServiceCard;
