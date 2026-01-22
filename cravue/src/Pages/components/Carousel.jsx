import slider1 from "./../../assets/slider1.png";
import slider2 from "./../../assets/slider2.png";
import slider3 from "./../../assets/slider3.png";
const Carousel = () => {
  return (
    <div className="carousel">
      <img src={slider1} width={200} alt="" />
      <img src={slider2} width={200} alt="" />
      <img src={slider3} width={200} alt="" />
    </div>
  );
};

export default Carousel;
