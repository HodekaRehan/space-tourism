import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="error-page">
      <h1>
        <span className="error">404</span> <br /> Page Not Found
      </h1>
      <p>
        Back to <Link to="/">Home</Link> Page
      </p>
    </main>
  );
};

export default NotFound;
