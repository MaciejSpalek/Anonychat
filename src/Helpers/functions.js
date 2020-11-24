import { 
    resetAmountOfLetters, 
    resetCurrentRoom,
    setLoadingStatus,
    setConverserLeftStatus
} from "Redux/Actions/actions";


export const getRandomIndex = (min, max) =>  Math.round(Math.random()*(max-min)) + min;

export const isTheServerConnected = (amountOfUsers) => amountOfUsers > 0;

export const leaveTheRoom = (currentRoom, socket, dispatch) => {
    if(currentRoom.id) {
        socket.emit('leave', currentRoom)
        dispatch(resetCurrentRoom())
    }
    dispatch(resetAmountOfLetters())
    dispatch(setLoadingStatus(false))
    dispatch(setConverserLeftStatus(false))
}