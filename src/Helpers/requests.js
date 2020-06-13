/////////////////////        users          ///////////////////////

export const getUsers = async () => {
  return await fetch('http://localhost:5000/users')
    .then(response => response.json())
    .catch(error => {
      console.error(error)
    })
}

export const addUser = async () => {
  return await fetch(`http://localhost:5000/users/add`)
    .then(response => response.json())
    .catch(error => {
        console.error(error)
    })
}

export const getGivenUser = async (id) => {
  return await fetch(`http://localhost:5000/users/given_user?id=${id}`)
    .then(response => response.json())
    .catch(error => {
      console.error(error)
    })
}






/////////////////////        rooms          ///////////////////////

export const createRoom = (firstID) => {
  return fetch(`http://localhost:5000/rooms/add?firstID=${firstID}`)
    .then(response => response.json())
    .catch(error => {
        console.error(error)
    })
}

export const getRooms = async () => {
  return await fetch('http://localhost:5000/rooms')
    .then(response => response.json())
    .catch(error => {
      console.error(error)
    })
}

export const joinTheRoom = (roomID, secondID) => {
  fetch(`http://localhost:5000/rooms/join_the_room?roomID=${roomID}&secondID=${secondID}`)
    .catch(error => {
      console.error(error)
    })
}


export const getGivenRoom = (roomID) =>  {
  return fetch(`http://localhost:5000/rooms/given_room?id=${roomID}`)
      .then(response => response.json())
      .catch(error => {
          console.error(error)
      })
}