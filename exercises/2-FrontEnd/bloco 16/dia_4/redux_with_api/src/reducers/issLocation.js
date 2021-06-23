import {
  GET_ISS_LOCATION,
  GET_ISS_LOCATION_SUCESS,
  GET_ISS_LOCATION_ERROR,
  
} from '../actions';

const INITIAL_ISS_LOCATION_STATE = {
  latitude: -20.950199,
  longitude: -48.478931,
  error: null,
  isLoading: false, 
}

function issLocation(state = INITIAL_ISS_LOCATION_STATE, action) {
  switch(action.type) {
    case GET_ISS_LOCATION:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ISS_LOCATION_SUCESS:
      return {
        ...state,
        isLoading: false,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    case GET_ISS_LOCATION_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      }
    default:
      return state;
  }
}

export default issLocation;