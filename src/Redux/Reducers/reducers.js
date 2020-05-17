import { 
  FETCH_EMPTY_ROOMS,
  FETCH_ALL_ROOMS  ,
  FETCH_EMPTY_RANDOM_ROOM,
  RESET_EMPTY_RANDOM_ROOM,
  // UPDATE_CURRENT_ROOM,
  FETCH_CURRENT_ROOM

} from "../Actions/types"

const INITIAL_STATE = {
  allRooms: [],
  emptyRooms: [],
  randomRoom: [],
  currentRoom: []
};

export const roomsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPTY_ROOMS:
      return {
        ...state,
        emptyRooms: action.payload
      };
      

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

    
    // case UPDATE_CURRENT_ROOM:
    //   return {
    //     ...state,
    //     currentRoom: action.payload
    //   };    

    default:
      return state;
  }
}

