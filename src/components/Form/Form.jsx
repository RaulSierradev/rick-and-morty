import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            name="email"
            placeholder="Enter your email"
            type="text"
            value={userData.email}
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            placeholder="••••••••••"
            type="password"
            value={userData.password}
            onChange={handleChange}
          />
          <p>{errors.password}</p>

          <p>mail@mail.com</p>
          <p>Pass1234@</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
