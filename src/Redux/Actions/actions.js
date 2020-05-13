import { 
    FETCH_EMPTY_ROOMS
} from './types'

export const getEmptyRooms = () => dispatch => {
    return fetch('http://localhost:5000/rooms/empty_rooms')
        .then(res => res.json())
        .then(rooms =>
            // console.log(rooms.data)
            dispatch({
              type: FETCH_EMPTY_ROOMS,
              payload: rooms.data
            })
        )
        .catch(error => {
            console.error(error)
        })
}


