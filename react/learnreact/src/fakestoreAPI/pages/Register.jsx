import axios from "axios";
import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",

    gender: "",
  });

  function handleChange(e) {
    // if (e.target.name === "profile") {
    //   setForm((prev) => ({ ...prev, profile: e.target.files[0] }));
    // } else {
    const { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
    // }

    // setForm({ ...form, [name]: value });
  }

  // FormData: when you have input type file in your forms

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(
      "https://ecommerce-api-8ga2.onrender.com/api/user/register",
      { ...form, role: "user" }
    );
    console.log(response);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Firstname"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Lastname"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Gender</label>
        <input
          type="radio"
          value="male"
          name="gender"
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          value="female"
          name="gender"
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          value="other"
          name="gender"
          onChange={handleChange}
        />
        Other
        <br />
        {/* <input type="file" name="profile" onChange={handleChange} /> */}
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
