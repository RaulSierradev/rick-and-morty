import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {
  const {
    id,
    name,
    gender,
    species,
    image,
    status,
    origin,
    onClose,
    ver,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  return (
    <div key={id} className={style.card}>
      {ver && (
        <button className={style.cardBtn} onClick={() => onClose(id)}>
          X
        </button>
      )}
      {isFav ? (
        <button className={style.cardHeart} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={style.cardHeart} onClick={handleFavorite}>🤍</button>
      )}
      <div className="imagen">
        <img className={style.cardImagen} src={image} alt={name} />
      </div>

      <div className={style.cardContenido}>
        <div className={style.cardTitle}>
          <Link to={`/detail/${id}`} className={style.cardName}>
            <h2 className={style.cardName}>{name}</h2>
          </Link>

          <p className={style.cardSubtitle}>
            {species} - {status}
          </p>
        </div>
        <div className={style.cardDescription}>
          <h2 className={style.description1}>
            Gender: <br />
            <span className={style.description2}>{gender}</span>
          </h2>
          <h2 className={style.description1}>
            Origin: <br />
            <span className={style.description2}>{origin}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (char) => {
      dispatch(addFav(char));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
