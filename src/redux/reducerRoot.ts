import { combineReducers } from "redux";
import { homeReducer } from './homeRedux'


const rootReducer = combineReducers({
    home: homeReducer
})


export default rootReducer;





