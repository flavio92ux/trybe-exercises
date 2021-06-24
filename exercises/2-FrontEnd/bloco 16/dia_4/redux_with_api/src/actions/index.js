import { getCurrentISSLocation } from '../services/issAPI';

export const GET_ISS_LOCATION = 'GET_ISS_LOCATION';
export const GET_ISS_LOCATION_SUCESS = 'GET_ISS_LOCATION_SUCESS';
export const GET_ISS_LOCATION_ERROR = 'GET_ISS_LOCATION_ERROR';

export const getISSLocation = () => ({
  type: GET_ISS_LOCATION,
});

export const getISSLocationSucess = (payload) => ({
  type: GET_ISS_LOCATION_SUCESS,
  payload,
});

export const getISSLocationError = (payload) => ({
  type: GET_ISS_LOCATION_ERROR,
  payload,
});

export const getISSLocationThunk = () => (dispatch) => {
  dispatch(getISSLocation());

  getCurrentISSLocation()
    .then((res) => {
      const { iss_position: { latitude, longitude } } = res;
      dispatch(getISSLocationSucess({
        latitude: Number(latitude), longitude: Number(longitude),
      }));
    })
    .catch(() => { getISSLocationError(); });
};
