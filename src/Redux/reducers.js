import types from "./types"

const INITIAL_STATE = {
    emptyRooms: [],
    amountOfUsers: 0,
    amountOfRooms: 0

}


export const usersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case types.GET_AMOUNT_OF_USERS: 
        return {
        }
      
      default : 
        return state;
    }
  }

  export const roomsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case types.GET_AMOUNT_OF_ROOMS: 
        return {
        }
  
      case types.GET_EMPTY_ROOMS: 
        return {
        } 
      
      default : 
        return state;
    }
  }
  