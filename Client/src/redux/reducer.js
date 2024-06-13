import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
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
      return { ...state, myFavorites: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
