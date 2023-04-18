import Card from './Card';

export default function Cards(props) {
   // console.log(props)
   return (
   <div className='tarjetas'>
      <Card characters={props.characters} />
   </div>);
}
