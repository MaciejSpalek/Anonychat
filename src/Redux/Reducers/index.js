import { combineReducers } from 'redux'
import { usersReducer, roomsReducer } from '../Reducers/reducers';

const rootReducer = combineReducers({
    users: usersReducer,
    rooms: roomsReducer
})

export default rootReducer

