import { FETCH_USER_FAILURE } from "./userTypes"
import { FETCH_USER_SUCCESS } from "./userTypes"
import { FETCH_USER_REQUEST } from "./userTypes"

const initialState = {
    loading: true,
    users: [],
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST: 
        return {
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS: 
        return {
            loading: false,
            users: action.payload,
            error: '',
        }
        case FETCH_USER_FAILURE: 
        return {
            loading: false,
            users: [],
            error: action.payload
        }
        default:
      return state;
    }
}

export default reducer