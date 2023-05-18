import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  // console.log(props)
  const ver = true;
  return (
    <div className={style.container}>
      {props.characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            status={character.status}
            image={character.image}
            onClose={props.onClose}
            ver={ver}
          />
        );
      })}
    </div>
  );
}
