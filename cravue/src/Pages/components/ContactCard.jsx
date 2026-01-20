import { Link } from "react-router-dom";
const ContactCard = () => {
  return (
    <Link to="/contact" className="card">
      <h2>Let CRAVUE do the work so you can scale faster</h2>
      <p>Book a call today</p>
      <button>
        Book a free call <img src="" alt="" />
      </button>
    </Link>
  );
};

export default ContactCard;
