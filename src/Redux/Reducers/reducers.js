import { 
  SET_ALL_ROOMS,
  SET_EMPTY_ROOMS,
  SET_CURRENT_ROOM,
  RESET_CURRENT_ROOM,
  SET_ROOM_MESSAGES,

  FETCH_ALL_USERS,
  GET_CURRENT_USER_ID,

} from "../Actions/types"

const INITIAL_STATE_FOR_ROOMS = {
  allRooms: [],
  emptyRooms: [],
  roomMessages: [],
  currentRoom: null
};


const INITIAL_STATE_FOR_USERS = {
  allUsers: [],
  currentUserID: null
};

export const roomsReducer = (state = INITIAL_STATE_FOR_ROOMS, action) => {
  switch (action.type) {
    case SET_ALL_ROOMS:
      return {
        ...state,
        allRooms: action.payload
      }; 

    case SET_EMPTY_ROOMS:
      return {
        ...state,
        emptyRooms: action.payload
      }; 

    case SET_CURRENT_ROOM:
      return {
        ...state,
        currentRoom: action.payload
      }; 

    case SET_ROOM_MESSAGES:
      return {
        ...state,
        roomMessages:  [...state.roomMessages, action.payload]
      }; 

    case RESET_CURRENT_ROOM:
      return {
        ...state,
        currentRoom: null
      }; 

    default:
      return state;
  }
}








export const usersReducer = (state = INITIAL_STATE_FOR_USERS, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload
      }; 

    case GET_CURRENT_USER_ID:
      return {
        ...state,
        currentUserID: action.payload
      };   
    
    default: {
      return state;
    }
  }
}

