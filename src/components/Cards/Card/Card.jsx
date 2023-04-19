import style from "./Card.module.css";

export default function Card(props) {
  const { characters } = props;
  return characters.map((char) => {
    return (
      <div key={char.id} className={style.card}>
        {/* <button onClick={() => window.alert('Emulamos que se cierra la card')}>X</button> */}
        <img
          src={char.image}
          alt={char.name}
          className={style.imagenPersonaje}
        />
        <h2 className={style.cardName}>{char.name}</h2>
        <h2 className={style.cardDescription}>Status: {char.status}</h2>
        <h2 className={style.cardDescription}>Specie: {char.species}</h2>
        <h2 className={style.cardDescription}>Gender: {char.gender}</h2>
        <h2 className={style.cardDescription}>Origin: {char.origin.name}</h2>
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