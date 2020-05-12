import { 
  FETCH_AMOUNT_OF_ROOMS, 
  FETCH_AMOUNT_OF_USERS, 
  FETCH_EMPTY_ROOMS 
} from "../Actions/types"

const INITIAL_STATE = {
  emptyRooms: [],
  amountOfUsers: 0,
  amountOfRooms: 0
};

export const roomsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPTY_ROOMS:
      return {
        ...state,
        emptyRooms: action.payload
      };
      
    case FETCH_AMOUNT_OF_ROOMS:
      return {
        ...state,
        amountOfRooms: action.payload
      };

    default:
      return state;
  }
}

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_AMOUNT_OF_USERS: 
      return {
        ...state, 
        amountOfUsers: action.payload
      }
    
    default : 
      return state;
  }
}