import { 
  FETCH_EMPTY_ROOMS 
} from "../Actions/types"

const INITIAL_STATE = {
  emptyRooms: []
};

export const roomsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EMPTY_ROOMS:
      return {
        ...state,
        emptyRooms: action.payload
      };
      
    default:
      return state;
  }
}

