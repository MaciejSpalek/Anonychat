import { 
    FETCH_ALL_ROOMS,
    FETCH_EMPTY_RANDOM_ROOM,
    RESET_EMPTY_RANDOM_ROOM,
    FETCH_CURRENT_ROOM,
    RESET_CURRENT_ROOM,

    FETCH_ALL_USERS,
    GET_CURRENT_USER_ID
} from './types'



export const getAllRooms = () => dispatch => {
    return fetch('http://localhost:5000/rooms')
    .then(res => res.json())
    .then(rooms =>
        dispatch({
            type: FETCH_ALL_ROOMS,
            payload: rooms.data
        }))
        .catch(error => {
            console.error(error)
        })
    }
    
    
export const getRandomRoom = (firstID) => dispatch => {
    return fetch(`http://localhost:5000/rooms/empty_random_room?firstID=${firstID}`)
    .then(res => res.json())
    .then(rooms =>
        dispatch({
            type: FETCH_EMPTY_RANDOM_ROOM,
            payload: rooms.data
        }))
        .catch(error => {
            console.error(error)
        })
    }
        
        
export const getCurrentRoom = (roomID) => dispatch => {
    return fetch(`http://localhost:5000/rooms/given_room?id=${roomID}`)
    .then(res => res.json())
    .then(rooms =>
        dispatch({
            type: FETCH_CURRENT_ROOM,
            payload: rooms.data
        }))
        .catch(error => {
        console.error(error)
    })
}


export const resetRandomRoom = () => {
    return { type: RESET_EMPTY_RANDOM_ROOM }
}


export const resetCurrentRoom = () => {
    return { type: RESET_CURRENT_ROOM }
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
