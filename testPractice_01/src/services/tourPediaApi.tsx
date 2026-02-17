import axios from 'axios';
import {GET_PLACES} from '../components/config/config';

export const getPlaces = async (
  location?: string,
  category?: string,
  name?: string
) => {
  const response = await axios.get(GET_PLACES, {
    params: {
      location,
      category,
      name,
    },
  });

  return response.data;
};