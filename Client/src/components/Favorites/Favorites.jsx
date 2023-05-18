import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";

function Favorites({ myFavorites }) {
  let ver = false;
  return (
    <div className={style.favorites}>
      {myFavorites?.map((character) => {
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
            ver={ver}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
