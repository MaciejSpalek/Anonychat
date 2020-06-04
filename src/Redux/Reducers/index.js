import { combineReducers } from 'redux'
import { roomsReducer, usersReducer } from '../Reducers/reducers';

const rootReducer = combineReducers({
    rooms: roomsReducer,
    users: usersReducer
})

export default rootReducer

