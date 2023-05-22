import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  let [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  async function onSearch(id) {
    try {
      const url = 'http://localhost:3001/rickandmorty/character/'+id;
      const { data } = await axios(url);
      console.log("Esta es la data del front", data);
      console.log('Este es el origin: ', data.origin)
      const char = characters?.find((e) => e.id === Number(data.id));
      console.log("Este es el personaje del front", char);
      if (char) {
        alert("Already in the list");
      } else if (data.id !== undefined) {
        setCharacters((characters) => [...characters, data]);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const query = `?email=${email}&password=${password}`;
      const { data } = await axios(URL + query);
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      return { error: error.message };
    }
  }

  // App.js
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
