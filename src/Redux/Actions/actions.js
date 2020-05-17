import { 
    FETCH_EMPTY_ROOMS,
    FETCH_ALL_ROOMS,
    FETCH_EMPTY_RANDOM_ROOM,
    RESET_EMPTY_RANDOM_ROOM,
    FETCH_CURRENT_ROOM,
    UPDATE_CURRENT_ROOM
} from './types'

export const getEmptyRooms = () => dispatch => {
    return fetch('http://localhost:5000/rooms/empty_rooms')
        .then(res => res.json())
        .then(rooms =>
            dispatch({
              type: FETCH_EMPTY_ROOMS,
              payload: rooms.data
            })
        )
        .catch(error => {
            console.error(error)
        })
}


export const getAllRooms = () => dispatch => {
    return fetch('http://localhost:5000/rooms')
    .then(res => res.json())
    .then(rooms =>
            dispatch({
                type: FETCH_ALL_ROOMS,
                payload: rooms.data
            })
            )
            .catch(error => {
                console.error(error)
            })
        }
        

export const getRandomRoom = () => dispatch => {
    return fetch('http://localhost:5000/rooms/empty_random_room')
        .then(res => res.json())
        .then(rooms =>
            dispatch({
                type: FETCH_EMPTY_RANDOM_ROOM,
                payload: rooms.data
            })
        )
        .catch(error => {
            console.error(error)
        })
}


export const getCurrentRoom = (roomID) => dispatch => {
    return fetch(`http://localhost:5000/rooms/current_room?id=${roomID}`)
        .then(res => res.json())
        .then(rooms =>
            dispatch({
              type: FETCH_CURRENT_ROOM,
              payload: rooms.data
            })
        )
        .catch(error => {
            console.error(error)
        })
}


export const resetRandomRoom = () => {
    return { type: RESET_EMPTY_RANDOM_ROOM }
}
        
        
        // export const updateCurrentRoom = item => dispatch =>{ 
//     dispatch({
//         type: UPDATE_CURRENT_ROOM,
//         payload: item
//     })
// }

