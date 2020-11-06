export default {
  // creer une annonce
  async createAd(context, payload) {
    const adData = {
      title: payload.title,
      description: payload.description,
      categorie: payload.categorie,
      price: payload.price,
      userId: payload.userId,
      phone: payload.phone,
      username: payload.username,
      email: payload.email,
    };

    const response = await fetch(`https://peche-app.firebaseio.com/ads.json`, {
      method: "POST",
      body: JSON.stringify(adData),
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
    const response = await fetch(`https://peche-app.firebaseio.com/ads.json`);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    const ads = [];

    for (const key in responseData) {
      const ad = {
        id: key,
        title: responseData[key].title,
        description: responseData[key].description,
        categorie: responseData[key].categorie,
        price: responseData[key].price,
        userId: responseData[key].userId,
        phone: responseData[key].phone,
        username: responseData[key].username,
        email: responseData[key].email,
      };
      ads.push(ad);
    }

    context.commit("setAds", ads);
  },
};
