import { combineReducers } from "redux";
import cakeReducer from "./Cakes/cakeReducer";
import iceCreamReducer from "./IceCream/iceCreamReducer";
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer