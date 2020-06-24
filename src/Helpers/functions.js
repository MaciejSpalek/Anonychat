import { 
    resetAmountOfLetters, 
    resetCurrentRoom,
    setLoadingStatus,
    setConverserLeftStatus
} from "../Redux/Actions/actions";

export const leaveTheRoom = (currentRoom, socket, dispatch) => {
    if(currentRoom.id) {
        socket.emit('leave', currentRoom)
        dispatch(resetCurrentRoom())
    }
    dispatch(resetAmountOfLetters())
    dispatch(setLoadingStatus(false))
    dispatch(setConverserLeftStatus(false))

}

export const getRandomIndex = (min, max) =>  Math.round(Math.random()*(max-min)) + min;