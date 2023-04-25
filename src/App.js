import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";

function App() {
  let [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        const char = characters?.find((e) => e.id === data.id);
        if (char) {
          alert("Already in the list");
        } else if (data.id !== undefined) {
          setCharacters((characters) => [...characters, data]);
        } else {
          alert("Character not found");
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
