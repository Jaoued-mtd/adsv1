export default {
  createUser(state, payload) {
    state.users.push(payload);
  },
  setUsers(state, payload) {
    state.users = payload;
  },
};
