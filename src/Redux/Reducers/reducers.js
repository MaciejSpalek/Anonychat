import { 
  FETCH_ALL_ROOMS  ,
  FETCH_EMPTY_RANDOM_ROOM,
  RESET_EMPTY_RANDOM_ROOM,
  FETCH_CURRENT_ROOM,
  RESET_CURRENT_ROOM,

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
    case FETCH_ALL_ROOMS:
      return {
        ...state,
        allRooms: action.payload
      }; 


    case FETCH_EMPTY_RANDOM_ROOM:
      return {
        ...state,
        randomRoom: action.payload
      }; 
    
    case RESET_EMPTY_RANDOM_ROOM:
      return {
        ...state,
        randomRoom: []
      };    

    case FETCH_CURRENT_ROOM:
      return {
        ...state,
        currentRoom: action.payload
      };      

    case RESET_CURRENT_ROOM:
      return {
        ...state,
        currentRoom: []
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

