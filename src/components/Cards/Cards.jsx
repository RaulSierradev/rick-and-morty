import Card from './Card/Card.jsx';
import style from './Cards.module.css'

export default function Cards(props) {
   // console.log(props)
   return (
   <div className={style.container}>
      {
        props.characters.map((character) => {
          return (
            <Card
              key={character.id}
              id= {character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              origin = {character.origin.name}
              status ={character.status}
              image={character.image}
              onClose={props.onClose}
            />
          );
        })
      }
   </div>);
}
