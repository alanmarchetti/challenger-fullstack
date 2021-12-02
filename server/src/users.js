const users = [];

const addNewUser = ({ id, username, roomId }) => {
  username = username.trim().toLowerCase();
  roomId = roomId.trim().toLowerCase();

  if (!username || !roomId) {
    return {
      error: "usuário e o id da sala são necessários",
    };
  }

  const existsUser = users.find(
    (user) => user.roomId === roomId && user.username === username
  );

  if (existsUser) {
    return {
      error: "username is already taken",
    };
  }

  const user = { id, username, roomId }
  users.push(user);
  return { user };
};

const removeExistsUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== 1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInARoom = (roomId) => {
  roomId = roomId.trim().toLowerCase();
  return users.filter((user) => user.roomId === roomId);
};


module.exports = { addNewUser, removeExistsUser, getUser, getUsersInARoom }