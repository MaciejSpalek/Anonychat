import { 
  FETCH_EMPTY_ROOMS,
  FETCH_ALL_ROOMS  ,
  FETCH_EMPTY_RANDOM_ROOM
} from "../Actions/types"

const INITIAL_STATE = {
  allRooms: [],
  emptyRooms: [],
  randomRoom: null
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

    default:
      return state;
  }
}

