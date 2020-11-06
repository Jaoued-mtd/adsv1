<template>
  <form @submit.prevent="submitForm">
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
      >
        Entrez votre description</textarea
      >
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
        type="text"
        class="form-control"
        id="price"
        placeholder="Canne Mitchell à vendre.."
        v-model.number="price"
      />
    </div>
    <button type="submit" class="btn btn-success">Creer</button>
  </form>
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
  methods: {
    submitForm() {
      const formData = {
        title: this.title,
        description: this.description,
        categorie: this.categorie,
        price: this.price,
        userId: this.$store.state.userId,
      };
      this.$emit("save-data", formData);
    },
  },
};
</script>