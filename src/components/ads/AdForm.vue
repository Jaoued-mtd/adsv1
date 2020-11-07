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
          v-model.trim="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          rows="3"
          class="form-control"
          id="description"
          v-model.trim="description"
          placeholder="Entrez votre description"
        >
        </textarea>
      </div>

      <div class="form-group">
        <label for="categorie">Catégories</label>
        <select class="form-control" id="categorie" v-model.trim="categorie">
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
          v-model.number="price"
        />
      </div>
      <button type="submit" class="btn blue-bg text-light btn-block">
        Creer votre annonce
      </button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      title: "",
      description: "",
      categorie: "",
      price: null,
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
        title: this.title,
        description: this.description,
        categorie: this.categorie,
        price: this.price,
        userId: this.userMe.id,
      };
      this.$emit("save-data", formData);
    },
  },
};
</script>