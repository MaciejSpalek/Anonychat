export const isCurrentRoomFull = (currentRoom) => {
    if(currentRoom) {
        return currentRoom.users.length === 2
    } else {
        return null;
    }
}