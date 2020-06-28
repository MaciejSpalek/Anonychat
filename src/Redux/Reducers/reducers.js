import { 
    SET_ALL_ROOMS,
    SET_EMPTY_ROOMS,
    SET_CURRENT_ROOM,
    SET_ROOM_MESSAGES,
    RESET_CURRENT_ROOM,
    RESET_ROOM_MESSAGES,

    SET_CURRENT_USER_ID,
    SET_ALL_USERS,
    
    SET_CONVERSER_LEFT_STATUS,
    SET_STATS_PANEL_STATUS,
    SET_AMOUNT_OF_LETTERS,
    SET_LOADING_STATUS,
    RESET_AMOUNT_OF_LETTERS,
} from "../Actions/types"




const INITIAL_STATE_FOR_ROOMS = {
  roomMessages: [],
  emptyRooms: [],
  allRooms: [],
  currentRoom: {
    id: null,
    users: []
  }
};


const INITIAL_STATE_FOR_USERS = {
  currentUserID: null,
  allUsers: []
};


const INITIAL_STATE_FOR_STATUS = {
  converserLeftStatus: false,
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
    case SET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload
      }; 

    case SET_CURRENT_USER_ID:
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
    case SET_STATS_PANEL_STATUS:
      return {
        ...state,
        statsPanelStatus: action.payload
      }; 

    case SET_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: action.payload
      };

    case SET_AMOUNT_OF_LETTERS:
      return {
        ...state,
        amountOfLetters: action.payload
      }; 

    case RESET_AMOUNT_OF_LETTERS:
      return {
        ...state,
        amountOfLetters: 0
      }; 

    case SET_CONVERSER_LEFT_STATUS:
      return {
        ...state,
        converserLeftStatus: action.payload
      }; 
  
    default: {
      return state;
    }
  }
}

