import { Link } from "react-router-dom";

// Defining the Nav Bar Component
export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/quiz">
        <div>Quiz</div>
      </Link>
    </div>
  );
}