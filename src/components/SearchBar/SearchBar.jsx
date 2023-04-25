import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={style.searchBar}>
      <h1>Rick and Morty</h1>
      <div className={style.searchSpace}>
        <input type="search" />
        <button onClick={props.onSearch}>Agregar</button>
      </div>
    </div>
  );
}
