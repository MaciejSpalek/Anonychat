import { 
  SET_ALL_ROOMS,
  SET_EMPTY_ROOMS,
  SET_CURRENT_ROOM,
  SET_ROOM_MESSAGES,
  RESET_CURRENT_ROOM,
  RESET_ROOM_MESSAGES,

  FETCH_ALL_USERS,
  GET_CURRENT_USER_ID,

  CHANGE_STATS_PANEL_STATUS,
  UPDATE_AMOUNT_OF_LETTERS,
  RESET_AMOUNT_OF_LETTERS,
  SET_LOADING_STATUS

} from "../Actions/types"




const INITIAL_STATE_FOR_ROOMS = {
  allRooms: [],
  emptyRooms: [],
  roomMessages: [],
  currentRoom: {
    id: null,
    users: []
  }
};


const INITIAL_STATE_FOR_USERS = {
  allUsers: [],
  currentUserID: null
};


const INITIAL_STATE_FOR_STATUS = {
  statsPanelStatus: false,
  loadingStatus: false,
  amountOfLetters: 0
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

    case RESET_ROOM_MESSAGES:
      return {
        ...state,
        roomMessages:  []
      };   

    case RESET_CURRENT_ROOM:
      return {
        ...state,
        currentRoom: {
          id: null,
          users: []
        }
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






export const statusesReducer = (state = INITIAL_STATE_FOR_STATUS, action) => {
  switch (action.type) {
    case CHANGE_STATS_PANEL_STATUS:
      return {
        ...state,
        statsPanelStatus: action.payload
      }; 

    case SET_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: action.payload
      };

    case UPDATE_AMOUNT_OF_LETTERS:
      return {
        ...state,
        amountOfLetters: action.payload
      }; 

    case RESET_AMOUNT_OF_LETTERS:
      return {
        ...state,
        amountOfLetters: 0
      }; 

    default: {
      return state;
    }
  }
}

