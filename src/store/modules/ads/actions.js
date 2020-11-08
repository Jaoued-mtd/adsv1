export default {
  // creer une annonce

  async createAd(context, payload) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${context.rootGetters.token}`);
    const adData = {
      title: payload.title,
      description: payload.description,
      categorie: payload.categorie,
      price: payload.price,
      users_permissions_user: payload.userId,
    };

    const response = await fetch(`http://localhost:1337/ads`, {
      method: "POST",
      body: JSON.stringify(adData),
      headers: myHeaders,
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    context.commit("createAd", adData);
  },
  async loadAds(context) {
    const response = await fetch(`http://localhost:1337/ads`);
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

    const response = await fetch(`http://localhost:1337/ads/${id}`, {
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
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${context.rootGetters.token}`);
    const adData = {
      title: payload.title,
      description: payload.description,
      categorie: payload.categorie,
      price: payload.price,
      users_permissions_user: payload.userId,
    };

    const response = await fetch(`http://localhost:1337/ads/${payload.id}`, {
      method: "PUT",
      body: JSON.stringify(adData),
      headers: myHeaders,
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    context.commit("updateAd", adData);
  },
};
