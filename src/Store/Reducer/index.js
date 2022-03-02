import { combineReducers } from 'redux';
import { imageReducer } from './imagesReducer';
import { textReducer} from './textReducer';

export  const reducer = combineReducers({
    Images:imageReducer,
    Text:textReducer
});