import { combineReducers } from 'redux'
import burgerReducer from './burger'


const rootReducer = combineReducers({
    burgerReducer,
})
export default rootReducer;