<template>
  <div class="container shadow p-5">
    <form class="m-5" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Titre</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Canne Mitchell à vendre.."
          :value="title"
          @input="titleUpdated = $event.target.value"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          rows="3"
          class="form-control"
          id="description"
          :value="description"
          @input="descriptionUpdated = $event.target.value"
          placeholder="Entrez votre description"
        >
        </textarea>
      </div>

      <div class="form-group">
        <label for="categorie">Catégories</label>
        <select
          class="form-control"
          id="categorie"
          :value="categorie"
          @input="categorieUpdated = $event.target.value"
        >
          <option value="cannes">cannes</option>
          <option value="leurres">leurres</option>
          <option value="moulinets">moulinets</option>
        </select>
      </div>
      <div class="form-group">
        <label for="price">Prix</label>
        <input
          type="number"
          class="form-control"
          id="price"
          placeholder="20"
          :value="price"
          @input="priceUpdated = $event.target.value"
        />
      </div>
      <button type="submit" class="btn blue-bg text-light btn-block">
        Modifier votre annonce
      </button>
      <button @click="cancel" class="btn btn-outline-danger btn-block">
        Annuler
      </button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["save-data", "close"],
  props: ["title", "description", "categorie", "price", "id", "userId"],
  data() {
    return {
      titleUpdated: this.title,
      descriptionUpdated: this.description,
      categorieUpdated: this.categorie,
      priceUpdated: this.price,
    };
  },
  computed: {
    userMe() {
      return this.$store.getters["users/users"];
    },
  },
  methods: {
    submitForm() {
      const formData = {
        title: this.titleUpdated,
        description: this.descriptionUpdated,
        categorie: this.categorieUpdated,
        price: this.priceUpdated,
        id: this.id,
        userId: this.userId,
      };
      console.log(formData);

      this.$emit("save-data", formData);
    },
    cancel() {
      this.$emit("close");
    },
  },
};
</script>