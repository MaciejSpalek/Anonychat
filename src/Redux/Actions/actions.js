import { 
    FETCH_EMPTY_ROOMS, 
    FETCH_AMOUNT_OF_ROOMS, 
    FETCH_AMOUNT_OF_USERS
} from './types'



export const getAmountOfUsers = (dispatch) => {
    fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(users =>
            dispatch({
                type: FETCH_AMOUNT_OF_USERS,
                payload: users.length
            })
        )
        .catch(error => {
            console.error(error)
        })
}

export const getAmountOfRooms = (dispatch) => {
    fetch('http://localhost:5000/rooms')
        .then(res => res.json())
        .then(rooms =>
            dispatch({
                type: FETCH_AMOUNT_OF_ROOMS,
                payload: rooms.length
            })
        )
        .catch(error => {
            console.error(error)
        })
}

export const getEmptyRooms = () => dispatch => {
    console.log("jkhkjhjkh")
    return fetch('http://localhost:5000/rooms/empty_rooms')
        .then(res => res.json())
        .then(rooms =>{
            console.log(rooms)
            dispatch({
              type: FETCH_EMPTY_ROOMS,
              payload: rooms
            })
        }
            
        )
        .catch(error => {
            console.error(error)
        })
}


