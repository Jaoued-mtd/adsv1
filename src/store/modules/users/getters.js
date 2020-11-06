export default {
  users(state) {
    return state.users;
  },
  hasUsers(state) {
    return state.users && state.users.length > 0;
  },
  userMe(state) {
    return state.users.filter(
      (user) => user.userId === localStorage.getItem("userId")
    );
  },
};
