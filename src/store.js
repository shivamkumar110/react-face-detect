import {
  combineReducers,
  createStore,
  applyMiddleware
} from "redux";
import thunk from 'redux-thunk';
import facesReducer from './containers/Face/faceReducer'

const rootReducer = combineReducers({
  facesReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store