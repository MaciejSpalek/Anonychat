
// getters
export const getUsers = async () => {
    return await fetch('http://localhost:5000/users')
      .then(response => response.json())
      .catch(error => {
        console.error(error)
      })
}

export const getRooms = async () => {
    return await fetch('http://localhost:5000/room')
      .then(response => response.json())
      .catch(error => {
        console.error(error)
      })
}

export const getLastUser = async () => {
    return await fetch('http://localhost:5000/users/last_user')
      .then(response => response.json())
      .catch(error => {
        console.error(error)
      })
}


// adding to database
export const addUser = () => {
    fetch(`http://localhost:5000/users/add`)
        .catch(error => {
            console.error(error)
        })
}

export const addRoom = (firstID, secondID) => {
    fetch(`http://localhost:5000/rooms/add?firstID=${firstID}&secondID=${secondID}`)
        .catch(error => {
            console.error(error)
        })
}