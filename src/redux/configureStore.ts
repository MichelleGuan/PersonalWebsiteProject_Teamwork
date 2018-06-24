import { createStore  } from "redux";
import rootReducer  from "../redux/reducerRoot";


export default function configureStore(initState:any){
    return createStore(rootReducer,initState)
}
 