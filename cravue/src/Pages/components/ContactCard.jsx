import { Link } from "react-router-dom";
import arrowoutline from "./../../assets/arrow_outline.svg";
const ContactCard = ({ darker }) => {
  return (
    <Link to="/contact" className="card">
      <h2>Let CRAVUE do the work so you can scale faster</h2>
      <p>Book a call today and start automating</p>
      <button className={darker}>
        Book a free call <img src={arrowoutline} alt="Arrow Outline" />
      </button>
    </Link>
  );
};

export default ContactCard;
