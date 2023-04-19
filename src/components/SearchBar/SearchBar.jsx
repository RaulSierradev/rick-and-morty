import style from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={style.searchBar}>
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
