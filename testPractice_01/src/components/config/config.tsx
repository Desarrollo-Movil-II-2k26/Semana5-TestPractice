/* ================================
   CONFIGURACIÓN API TOUR-PEDIA
   ================================ */
export const TOURPEDIA_BASE_URL = 'http://tour-pedia.org/api';

/* ================================
   ENDPOINTS
   ================================ */
// Obtener lugares (requiere al menos location, category o name)
export const GET_PLACES = `${TOURPEDIA_BASE_URL}/getPlaces`;
// Obtener detalles de un lugar por ID
export const GET_PLACE_DETAILS = `${TOURPEDIA_BASE_URL}/getPlaceDetails`;
