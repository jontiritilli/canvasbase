import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import search from './search_reducer';

export default combineReducers({form, search})