import Card from './Card/Card.jsx';
import style from './Cards.module.css'

export default function Cards(props) {
   // console.log(props)
   return (
   <div className={style.container}>
      <Card characters={props.characters} />
   </div>);
}
