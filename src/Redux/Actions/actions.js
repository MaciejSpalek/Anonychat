import { 
    SET_ALL_ROOMS,
    SET_EMPTY_ROOMS,
    SET_CURRENT_ROOM,
    SET_ROOM_MESSAGES,
    RESET_CURRENT_ROOM,
    RESET_ROOM_MESSAGES,

    SET_ALL_USERS,
    SET_CURRENT_USER_ID,
    
    SET_STATS_PANEL_STATUS,
    SET_LOADING_STATUS,
    SET_AMOUNT_OF_LETTERS,
    SET_CONVERSER_LEFT_STATUS,
    RESET_AMOUNT_OF_LETTERS,
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
        type: SET_ALL_USERS,
        payload: users
    })
}
        
export const getCurrentUserID = user => dispatch => {
    dispatch({
        type: SET_CURRENT_USER_ID,
        payload: user
    })
}










// STATUSES' ACTIONS
export const changeStatsPanelStatus = status => dispatch => {
    dispatch({
        type: SET_STATS_PANEL_STATUS,
        payload: status
    })
}

export const setLoadingStatus = status => dispatch => {
    dispatch({
        type: SET_LOADING_STATUS,
        payload: status
    })
}

export const updateAmountOfLetters = amountOfletters => dispatch => {
    dispatch({
        type: SET_AMOUNT_OF_LETTERS,
        payload: amountOfletters
    })
}

export const resetAmountOfLetters = () => dispatch => {
    dispatch({
        type: RESET_AMOUNT_OF_LETTERS,
        payload: 0
    })
}

export const setConverserLeftStatus = status => dispatch => {
    dispatch({
        type: SET_CONVERSER_LEFT_STATUS,
        payload: status
    })
}
