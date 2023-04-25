import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  let [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className={style.searchBar}>
      <div className={style.searchSpace}>
        <input type="search" onChange={handleChange} value={id}/>
        <button onClick={()=>props.onSearch(id)}>Agregar</button>
      </div>
    </div>
  );
}
