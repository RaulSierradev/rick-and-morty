import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  let [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);

  };
  return (
    <div className={style.searchBar}>
      <input className={style.searchInput} type="search" onChange={handleChange} value={id} />
      <button type="reset" className={style.searchButton} onClick={() => props.onSearch(id)}>Agregar</button>
    </div>
  );
}
