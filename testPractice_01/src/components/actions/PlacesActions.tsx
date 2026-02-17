// src/components/actions/placeActions.ts
import {
  GET_PLACES_REQUEST,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAILURE,
  SELECT_PLACE,
  GET_PLACE_DETAIL_REQUEST,
  GET_PLACE_DETAIL_SUCCESS,
  GET_PLACE_DETAIL_FAILURE,
} from './PlacesActionsTypes';

import { getPlaces } from '../../services/tourPediaApi';

// 1) Acción simple: guardar lo que el usuario tocó
export const selectPlace = (place: any) => ({
  type: SELECT_PLACE,
  payload: place,
});

// 2) Acción ASYNC: traer lista (Redux + Axios)
export const fetchPlaces = (
  location?: string,
  category?: string,
  search?: string
) => {
  return async (dispatch: any) => {
    dispatch({ type: GET_PLACES_REQUEST });

    try {
      const data = await getPlaces(location, category, search);

      dispatch({ type: GET_PLACES_SUCCESS, payload: data });
    } catch (e: any) {
      dispatch({
        type: GET_PLACES_FAILURE,
        payload: e?.message || 'Error consultando lugares',
      });
    }
  };
};

