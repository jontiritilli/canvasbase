import { POST_SEARCH, IMAGE_SEARCH } from './types';
import axios from 'axios';

const BASE_URL = 'https://canvasbase.xyz';

export const searchByTerm = term => {
  return dispatch => {
    //need to read Unsplash docs. How do we submit searches via querystring
    axios.post(``, term)
      .then(data => {
          dispatch(searchByTermSuccess(data));
      })
      .catch(err => {
        throw(err);
      })
  }
}
export const searchByTermSuccess = data => {
  return {
    type: POST_SEARCH,
    payload: {
      data
    }
  }
}
export const searchByImage = id => {
  return dispatch => {
    axios.post(`${BASE_URL}/search`, id)
      .then(data => {
          dispatch(searchByImageSuccess(data));
      })
      .catch(err => {
        throw(err);
      })
  }
}
export const searchByImageSuccess = data => {
  return {
    type: IMAGE_SEARCH,
    payload: {
      data
    }
  }}