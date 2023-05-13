import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";
import imagen from "../../img/R&M-portal.png";

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
      <div>
        <img
          className={style.imagenForm}
          src={imagen}
          alt="Rick and Morty portal"
        />
      </div>
      <form className={style.contenidoForm} onSubmit={handleSubmit}>
        <div>
          <label className={style.labelForm}>Email</label>
          <br></br>
          <input
            className={style.inputForm}
            name="email"
            placeholder="Enter your email"
            type="text"
            value={userData.email}
            onChange={handleChange}
          />
          <p className={style.danger}>{errors.email}</p>
        </div>
        <div>
          <label className={style.labelForm}>Password</label>
          <br></br>
          <input className={style.inputForm}
            name="password"
            placeholder="••••••••••"
            type="password"
            value={userData.password}
            onChange={handleChange}
          />
          <p className={style.danger}>{errors.password}</p>

          <p>mail@mail.com</p>
          <p>Pass1234@</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
