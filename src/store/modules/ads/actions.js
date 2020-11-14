export default {
  // creer une annonce

  async createAd(context, payload) {
    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${context.rootGetters.token}`);

    const myData = new FormData();

    const adData = {
      title: payload.title,
      description: payload.description,
      categorie: payload.categorie,
      price: payload.price,
      users_permissions_user: payload.userId,
    };

    myData.append("data", JSON.stringify(adData));
    myData.append("files.image", payload.image);

    const response = await fetch(`https://peche-api.herokuapp.com/ads`, {
      method: "POST",
      body: myData,
      headers: myHeaders,
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    adData.image = responseData.image;

    context.commit("createAd", adData);
  },
  async loadAds(context) {
    const response = await fetch(`https://peche-api.herokuapp.com/ads`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    context.commit("setAds", responseData);
  },

  async deleteAd(context, id) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${context.rootGetters.token}`);

    const response = await fetch(`https://peche-api.herokuapp.com/ads/${id}`, {
      method: "DELETE",
      headers: myHeaders,
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
  },
  async updateAd(context, payload) {
    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${context.rootGetters.token}`);

    const myData = new FormData();

    const adData = {
      title: payload.title,
      description: payload.description,
      categorie: payload.categorie,
      price: payload.price,
      users_permissions_user: payload.userId,
    };
    myData.append("data", JSON.stringify(adData));

    if (payload.image != null) {
      myData.append("files.image", payload.image);
    }

    const response = await fetch(
      `https://peche-api.herokuapp.com/ads/${payload.id}`,
      {
        method: "PUT",
        body: myData,
        headers: myHeaders,
      }
    );

    const responseData = await response.json();

    adData.image = responseData.image;

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    context.commit("updateAd", adData);
  },
};
