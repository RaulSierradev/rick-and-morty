import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const {id} = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
  return (
    <div>
      <img src={character.image} alt={character.name}/>
      <h1>{character.name}</h1>
      <h3>status: {character.species}</h3>
      <h3>gender: {character.gender}</h3>
      <h3>origin: {character.origin?.name}</h3>
      <h3>status: {character.status}</h3>
    </div>
  )
}
