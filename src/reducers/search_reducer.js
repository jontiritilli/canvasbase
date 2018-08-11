import { POST_SEARCH, IMAGE_SEARCH } from '../actions/types';

const DEFAULT_STATE = {};

export const search = (state = DEFAULT_STATE, action) => {
    switch(action.type){
      case POST_SEARCH:
        return [...state, action.payload];
      case IMAGE_SEARCH:
        return [...state, action.payload];
      default:
        return state;
    }
}