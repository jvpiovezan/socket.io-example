const userList = []

function userJoin(id) {
  userList.push(id)
  return userList
}

function userLeave(id) {
  const index = userList.indexOf(id)
  if (index > -1) {
    userList.splice(index, 1)
  }
  return userList
}

module.exports = {
  userJoin,
  userLeave
}