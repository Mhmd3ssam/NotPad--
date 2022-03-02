import { combineReducers } from 'redux';
import { imageReducer } from './imagesReducer';
import { textReducer} from './textReducer';
import { localizationReducer} from './localizationReducer';

export  const reducer = combineReducers({
    Images:imageReducer,
    Text:textReducer,
    Localization:localizationReducer
});