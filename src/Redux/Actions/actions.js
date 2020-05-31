import { 
    SET_ALL_ROOMS,
    SET_EMPTY_ROOMS,
    FETCH_ALL_USERS,
    GET_CURRENT_USER_ID
} from './types'


export const setAllRooms = rooms => dispatch => {
    dispatch({
        type: SET_ALL_ROOMS,
        payload: rooms
    })
}

export const setEmptyRooms = rooms => dispatch => {
    dispatch({
        type: SET_EMPTY_ROOMS,
        payload: rooms
    })
}






// USERS' ACTIONS
export const getAllUsers = users => dispatch => {
    dispatch({
        type: FETCH_ALL_USERS,
        payload: users
    })
}
        
export const getCurrentUserID = user => dispatch => {
    dispatch({
        type: GET_CURRENT_USER_ID,
        payload: user
    })
}
