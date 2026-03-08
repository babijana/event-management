import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login: Set role based on email (for testing)
    let role = "customer"; // Default
    if (email.includes("hallowner")) role = "hallowner";
    else if (email.includes("handler")) role = "handler";
    else if (email.includes("admin")) role = "admin";

    // Set in localStorage
    localStorage.setItem("role", role);

    // Navigate to the role's dashboard
    navigate(`/${role}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}