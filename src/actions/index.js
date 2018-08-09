import types from './types';
import axios from 'axios';

const BASE_URL = 'https://canvasbase.xyz';

export function search(term){
  return dispatch => {
    axios.post(`${BASE_URL}/search`, term)
      .then(resp => {
        console.log('search response: ', resp);
      })
      .catch(err=>{
        console.log('search error: ', err.message);
      })
  }
}