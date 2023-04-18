export default function Card(props) {
  const { characters } = props;
  return characters.map((char) => {
    return (
      <div key={char.id}>
        <button onClick={char.onClose}>X</button>
        <h2>{char.name}</h2>
        <h2>{char.status}</h2>
        <h2>{char.species}</h2>
        <h2>{char.gender}</h2>
        <h2>{char.origin.name}</h2>
        <img src={char.image} alt={char.name} />
        <br></br>
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
