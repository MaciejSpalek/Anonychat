import { 
  // FETCH_ALL_ROOMS  ,
  // FETCH_EMPTY_RANDOM_ROOM,
  // RESET_EMPTY_RANDOM_ROOM,
  // FETCH_CURRENT_ROOM,
  // RESET_CURRENT_ROOM,

  GET_ROOMS,
  FETCH_ALL_USERS,
  GET_CURRENT_USER_ID

} from "../Actions/types"

const INITIAL_STATE_FOR_ROOMS = {
  allRooms: [],
  emptyRooms: [],
  randomRoom: [],
  currentRoom: []
};


const INITIAL_STATE_FOR_USERS = {
  allUsers: [],
  currentUserID: null
};

export const roomsReducer = (state = INITIAL_STATE_FOR_ROOMS, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return {
        ...state,
        allRooms: action.payload
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

