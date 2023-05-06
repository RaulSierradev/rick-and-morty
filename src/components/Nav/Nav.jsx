import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={style.nav}>
      <Link to='/home' className={style.navTitle}><h1 className={style.navTitle}>[Rick and Morty]</h1></Link>
      
      <Link className={style.navLink} to="/about">
        <p className={style.navButton}>About</p>
      </Link>
      <Link className={style.navLink} to="/home">
        <p className={style.navButton}>Home</p>
      </Link>
      <Link className={style.navLink} to="/favorites">
        <p className={style.navButton}>Favorites</p>
      </Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
