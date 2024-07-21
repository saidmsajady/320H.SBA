import { Link } from "react-router-dom";

// Defining the Nav Bar Component
export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/quiz">Quiz</Link>
    </div>
  );
}
