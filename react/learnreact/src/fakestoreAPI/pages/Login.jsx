import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);

      console.log(form);
      const response = await axios.post(
        "https://ecommerce-api-8ga2.onrender.com/api/user/login",
        { ...form, role: "user" },
        { withCredentials: true }
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate("/");
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again later.");
    } finally {
      // Reset the form after submission
      setForm({
        email: "",
        password: "",
      });
      setLoading(false);
    }
  }

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className={`w-full max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 my-8 ${
          loading ? `opacity-50 pointer-events-none` : ``
        }`}
      >
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="bold block sm:inline">{error}</span>
          </div>
        )}

        <h2 className="text-3xl font-bold mb-2 text-center">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter a valid email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter a strong password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
        <div className="mb-4 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-800">
              Register here
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
