import style from "./Card.module.css";

export default function Card(props) {
  const { characters } = props;
  return characters.map((char) => {
    return (
      <div key={char.id} className={style.card}>
        <div className="imagen">
          <img className={style.cardImagen} src={char.image} alt={char.name} />
        </div>
        <div className={style.cardContenido}>
        <button className={style.cardBtn}
            onClick={() => window.alert("Emulamos que se cierra la card")}
          >
            X
        </button>
          <div className={style.cardTitle}>
            <h2 className={style.cardName}>{char.name}</h2>
            <p className={style.cardSubtitle}>
              {char.species} - {char.status}
            </p>
          </div>
          <div className={style.cardDescription}>
            <h2 className={style.description1}>
              Gender: <br />
              <span className={style.description2}>{char.gender}</span>
            </h2>
            <h2 className={style.description1}>
              Birthplace: <br />
              <span className={style.description2}>{char.origin.name}</span>
            </h2>
            
          </div>
        </div>
      </div>
    );
  });
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
