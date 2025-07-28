import { useState } from "react";
import axios from "axios";
import "./Signin.css";

function Sign() {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    userId: "",
    password: "",
    profilePic: "",
  });

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({
      username: "",
      email: "",
      userId: "",
      password: "",
      profilePic: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup ? "/api/users" : "/api/login";

    try {
      const response = await axios.post(url, formData);
      alert(response.data.message || "Success!");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="container">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              value={formData.userId}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="profilePic"
              placeholder="Profile Pic URL (optional)"
              value={formData.profilePic}
              onChange={handleChange}
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isSignup ? "Create Account" : "Login"}</button>
      </form>
      <div className="toggle-link">
        {isSignup ? (
          <>
            Already have an account? <span onClick={toggleForm}>Login</span>
          </>
        ) : (
          <>
            Don't have an account? <span onClick={toggleForm}>Sign Up</span>
          </>
        )}
      </div>
    </div>
  );
}

export default Sign;
