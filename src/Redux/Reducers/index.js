import { combineReducers } from 'redux'
import { roomsReducer, usersReducer, statusesReducer } from '../Reducers/reducers';

const rootReducer = combineReducers({
    rooms: roomsReducer,
    users: usersReducer,
    statuses: statusesReducer
})

export default rootReducer

