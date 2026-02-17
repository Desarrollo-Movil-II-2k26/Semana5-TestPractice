// src/components/reducers/PlacesReducer.ts
import {
  GET_PLACES_REQUEST,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAILURE,
  SELECT_PLACE,
  GET_PLACE_DETAIL_REQUEST,
  GET_PLACE_DETAIL_SUCCESS,
  GET_PLACE_DETAIL_FAILURE,
} from '../actions/PlacesActionsTypes';

const INITIAL_STATE = {
  items: [] as any[],
  loading: false,
  error: null as string | null,

  selected: null as any,

  detail: null as any,
  detailLoading: false,
  detailError: null as string | null,
};

export default function PlacesReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case GET_PLACES_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_PLACES_SUCCESS:
      return { ...state, loading: false, items: action.payload };

    case GET_PLACES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SELECT_PLACE:
      return { ...state, selected: action.payload };

    case GET_PLACE_DETAIL_REQUEST:
      return { ...state, detailLoading: true, detailError: null };

    case GET_PLACE_DETAIL_SUCCESS:
      return { ...state, detailLoading: false, detail: action.payload };

    case GET_PLACE_DETAIL_FAILURE:
      return { ...state, detailLoading: false, detailError: action.payload };

    default:
      return state;
  }
}
