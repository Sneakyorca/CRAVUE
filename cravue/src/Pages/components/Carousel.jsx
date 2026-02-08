import slider1 from "./../../assets/slider1.webp";
import slider2 from "./../../assets/slider2.webp";
import slider3 from "./../../assets/slider3.webp";
const Carousel = () => {
  return (
    <div className="carousel-slider">
      <img src={slider1} width={155} alt="" />
      <img src={slider2} width={155} alt="" />
      <img src={slider3} width={155} height={100} alt="" />
      <img src={slider1} width={155} alt="" />
      <img src={slider2} width={155} alt="" />
      <img src={slider3} width={155} height={100} alt="" />
      <img src={slider1} width={155} alt="" />
      <img src={slider2} width={155} alt="" />
      <img src={slider3} width={155} height={100} alt="" />
    </div>
  );
};

export default Carousel;
