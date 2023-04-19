import style from "./Card.module.css";

export default function Card(props) {
  const { characters } = props;
  return characters.map((char) => {
    return (
      <div key={char.id} className={style.card}>
        <div className={style.cardBody}>
          {/* <button onClick={() => window.alert('Emulamos que se cierra la card')}>X</button> */}
          <br></br>
          <img
            src={char.image}
            alt={char.name}
            className={style.imagenPersonaje}
          />

          <h2 className={style.cardName}>{char.name}</h2>
          <h2>{char.status}</h2>
          <h2>{char.species}</h2>
          <h2>{char.gender}</h2>
          <h2>{char.origin.name}</h2>
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
