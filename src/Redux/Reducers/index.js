import { combineReducers } from 'redux'
import { roomsReducer } from '../Reducers/reducers';

const rootReducer = combineReducers({
    rooms: roomsReducer
})

export default rootReducer

