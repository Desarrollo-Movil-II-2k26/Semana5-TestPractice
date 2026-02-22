import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import {
  FETCH_PLACES_REQUEST, FETCH_PLACES_SUCCESS, FETCH_PLACES_FAILURE,
  ADD_FAVORITE, REMOVE_FAVORITE, CLEAR_FAVORITES, LOAD_FAVORITES,
  SET_SELECTED_PLACE, SET_SEARCH_QUERY,
} from './PlacesActionsTypes';

//API base URL para obtener lugares turísticos
const BASE_URL = 'http://wafi.iit.cnr.it/openervm/api';

export const fetchPlaces = (location = 'Barcelona', category = 'attraction', keyword = '') => {
  return async (dispatch: any) => {
    dispatch({ type: FETCH_PLACES_REQUEST });
    try {
      const url = `${BASE_URL}/getPlaces?location=${location}&category=${category}${keyword ? `&keyword=${encodeURIComponent(keyword)}` : ''}`;
      const response = await axios.get(url, { timeout: 15000 });
      dispatch({ type: FETCH_PLACES_SUCCESS, payload: response.data });
    } catch (error: any) {
      dispatch({ type: FETCH_PLACES_FAILURE, payload: error.message || 'Error al obtener los lugares' });
    }
  };
};

export const setSelectedPlace = (place: any) => ({ type: SET_SELECTED_PLACE, payload: place });
export const setSearchQuery = (query: string) => ({ type: SET_SEARCH_QUERY, payload: query });

export const addFavorite = (place: any) => {
  return async (dispatch: any, getState: any) => {
    const { favorites } = getState().places;
    if (favorites.find((f: any) => f.id === place.id)) return;
    if (favorites.length >= 5) {
      Alert.alert('Límite alcanzado', 'Ya tienes 5 favoritos. Elimina uno para agregar otro.');
      return;
    }
    const newFavorites = [...favorites, place];
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
    dispatch({ type: ADD_FAVORITE, payload: place });
  };
};

export const removeFavorite = (placeId: string) => {
  return async (dispatch: any, getState: any) => {
    const { favorites } = getState().places;
    const newFavorites = favorites.filter((f: any) => f.id !== placeId);
    await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
    dispatch({ type: REMOVE_FAVORITE, payload: placeId });
  };
};

export const clearFavorites = () => async (dispatch: any) => {
  await AsyncStorage.removeItem('favorites');
  dispatch({ type: CLEAR_FAVORITES });
};

export const loadFavorites = () => async (dispatch: any) => {
  try {
    const stored = await AsyncStorage.getItem('favorites');
    dispatch({ type: LOAD_FAVORITES, payload: stored ? JSON.parse(stored) : [] });
  } catch {
    dispatch({ type: LOAD_FAVORITES, payload: [] });
  }
};