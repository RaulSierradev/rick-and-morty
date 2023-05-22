import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
<<<<<<< HEAD
  allCharacters: []
=======
  allCharacters: [],
>>>>>>> 63184caa624868dc907ae13fdc5819a61015c833
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // REDUCER | ADD_FAV
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    // REDUCER | REMOVE_FAV
    case REMOVE_FAV:
<<<<<<< HEAD
      return { ...state, myFavorites: action.payload };
=======
      return {
        ...state,
        myFavorites: action.payload,
      };
>>>>>>> 63184caa624868dc907ae13fdc5819a61015c833

    default:
      return { ...state };
  }
};

export default rootReducer;
