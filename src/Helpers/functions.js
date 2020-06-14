export const isCurrentRoomFull = (currentRoom) => {
    if(currentRoom) {
        return currentRoom.users.length === 2
    } else {
        return null;
    }
}

export const leaveTheRoom = (currentUserID, currentRoom, socket, dispatch, resetCurrentRoom) => {
    const tempObject = {
        leavingUser: currentUserID,
        room: currentRoom 
    }

    socket.emit('leave', tempObject);
    dispatch(resetCurrentRoom());
    console.log("Leave the room");
}