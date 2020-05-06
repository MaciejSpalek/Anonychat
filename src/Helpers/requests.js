
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

export const addRoom = (firstID, secondID) => {
  fetch(`http://localhost:5000/rooms/add?firstID=${firstID}&secondID=${secondID}`)
      .catch(error => {
          console.error(error)
      })
}
export const getEmptyRooms = async () => {
  return await fetch('http://localhost:5000/rooms/empty_rooms')
    .then(response => response.json())
    .catch(error => {
      console.error(error)
    })
}