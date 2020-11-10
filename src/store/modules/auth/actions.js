let timer;

export default {
  async register(context, payload) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch("http://localhost:1337/auth/local/register", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        username: payload.username,
        phone: payload.phone,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to authenticate. Check your login data."
      );
      throw error;
    }

    const expiresIn = +responseData.expiresIn * 1000;
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("token", responseData.jwt);
    localStorage.setItem("userId", responseData.user.id);
    localStorage.setItem("tokenExpiration", expirationDate);
    localStorage.setItem("user", responseData);

    timer = setTimeout(function() {
      context.dispatch("autoLogout");
    }, expiresIn);

    context.commit("setUser", {
      token: responseData.jwt,
      userId: responseData.user.id,
    });
  },
  async login(context, payload) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch("http://localhost:1337/auth/local", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        identifier: payload.email,
        password: payload.password,
      }),
    });

    const responseData = await response.json();

    console.log(responseData);

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to authenticate. Check your login data."
      );
      throw error;
    }

    localStorage.setItem("token", responseData.jwt);
    localStorage.setItem("userId", responseData.user.id);
    localStorage.setItem("user", JSON.stringify(responseData));

    context.commit("setUser", {
      token: responseData.jwt,
      userId: responseData.user.id,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const user = localStorage.getItem("user");
    // const tokenExpiration = localStorage.getItem("tokenExpiration");

    // const expiresIn = +tokenExpiration - new Date().getTime();

    // if (expiresIn < 0) {
    //   return;
    // }

    // timer = setTimeout(function() {
    //   context.dispatch("logout");
    // }, expiresIn);

    if (token && userId && user) {
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");
    localStorage.removeItem("user");

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },
};
