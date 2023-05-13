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

const email = "mail@mail.com";
const password = "Pass1234@";

function App() {
  let [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
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

  const login = (userData) => {
    if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate("/home");
    }
    else{
      alert('The email or password is incorrect')
    }
  };

  // App.js
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login}/>} />
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
