import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="error-404">
      <p className="title">Page Not Found</p>
      <h1>
        Page Isn't <br />
        Available This Time
      </h1>
      <p>
        This page seems to be missing! Let’s get you back on track. Head back
        home.
      </p>
      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
