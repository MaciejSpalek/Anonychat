import { 
    SET_ALL_ROOMS,
    SET_EMPTY_ROOMS,
    SET_CURRENT_ROOM,
    SET_ROOM_MESSAGES,
    RESET_CURRENT_ROOM,
    RESET_ROOM_MESSAGES,

    FETCH_ALL_USERS,
    GET_CURRENT_USER_ID,
} from './types'



// ROOMS' ACTIONS
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

export const setCurrentRoom = room => dispatch => {
    dispatch({
        type: SET_CURRENT_ROOM,
        payload: room
    })
}

export const resetCurrentRoom = () => dispatch => {
    dispatch({
        type: RESET_CURRENT_ROOM,
        payload: {
            id: null,
            users: []
          }
    })
}

export const setRoomMessages = messages => dispatch => {
    dispatch({
        type: SET_ROOM_MESSAGES,
        payload: messages
    })
}

export const resetRoomMessages = () => dispatch => {
    dispatch({
        type: RESET_ROOM_MESSAGES,
        payload: []
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
