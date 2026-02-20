import {
  FETCH_PLACES_REQUEST, FETCH_PLACES_SUCCESS, FETCH_PLACES_FAILURE,
  ADD_FAVORITE, REMOVE_FAVORITE, CLEAR_FAVORITES, LOAD_FAVORITES,
  SET_SELECTED_PLACE, SET_SEARCH_QUERY,
} from '../actions/PlacesActionsTypes';

const initialState = {
  places: [], loading: false, error: null,
  selectedPlace: null, favorites: [], searchQuery: '',
};

const placesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PLACES_REQUEST: return { ...state, loading: true, error: null };
    case FETCH_PLACES_SUCCESS: return { ...state, loading: false, places: action.payload };
    case FETCH_PLACES_FAILURE: return { ...state, loading: false, error: action.payload };
    case SET_SELECTED_PLACE: return { ...state, selectedPlace: action.payload };
    case SET_SEARCH_QUERY: return { ...state, searchQuery: action.payload };
    case ADD_FAVORITE: return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FAVORITE: return { ...state, favorites: state.favorites.filter((f: any) => f.id !== action.payload) };
    case CLEAR_FAVORITES: return { ...state, favorites: [] };
    case LOAD_FAVORITES: return { ...state, favorites: action.payload };
    default: return state;
  }
};

export default placesReducer;