const userListElement = document.querySelector('#userList')
const socket = io()

function refreshUserListElement(userList) {
  userListElement.innerHTML = ''
  userList.forEach(userId => {
    const userItemElement = document.createElement('li')
    userItemElement.textContent = userId
    userListElement.append(userItemElement)
  })
}

socket.on('currentUsers', userList => {
  refreshUserListElement(userList)
})