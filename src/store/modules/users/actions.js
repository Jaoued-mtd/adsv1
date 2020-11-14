export default {
  async loadUsers(context) {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );
    const response = await fetch(`https://peche-api.herokuapp.com/users/me`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    context.commit("setUsers", responseData);
  },

  async updateUser(context, payload) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const adData = {
      username: payload.username,
      phone: payload.phone,
      email: payload.email,
    };

    if (payload.password != null) {
      adData.password = payload.password;
    }

    const response = await fetch(
      `https://peche-api.herokuapp.com/users/${payload.id}`,
      {
        method: "PUT",
        body: JSON.stringify(adData),
        headers: myHeaders,
      }
    );

    const responseData = await response.json();
    localStorage.setItem("user", JSON.stringify(responseData));

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    context.commit("updateUser", adData);
  },
};
