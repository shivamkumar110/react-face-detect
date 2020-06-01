import {
  combineReducers,
  createStore
} from "redux";
import facesReducer from './containers/Face/faceReducer'

const rootReducer = combineReducers({
  facesReducer
})

const store = createStore(rootReducer)

export default store