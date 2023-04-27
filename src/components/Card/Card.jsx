import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { id, name, gender, species, image, status, origin, onClose } = props;
  console.log(origin)
  return (
    <div key={id} className={style.card}>
      <button
          className={style.cardBtn}
          onClick={()=> onClose(id)}
        >
          X
        </button>
      <div className="imagen">
        <img className={style.cardImagen} src={image} alt={name} />
      </div>
      
      <div className={style.cardContenido}>
        
        <div className={style.cardTitle}>
          <Link to={`/detail/${id}`}><h2 className={style.cardName}>{name}</h2></Link>
          
          <p className={style.cardSubtitle}>
            {species} - {status}
          </p>
        </div>
        <div className={style.cardDescription}>
          <h2 className={style.description1}>
            Gender: <br />
            <span className={style.description2}>{gender}</span>
          </h2>
          <h2 className={style.description1}>
            Birthplace: <br />
            <span className={style.description2}>{origin}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

// <div>
//  <button onClick={char.onClose}>X</button>
//    <h2>{char.name}</h2>
//    <h2>{char.status}</h2>
//    <h2>{char.species}</h2>
//    <h2>{char.gender}</h2>
//    <h2>{char.origin}</h2>
//    <img src={char.image} alt={char.name} />
// </div>
