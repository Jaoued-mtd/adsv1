<template>
  <div class="container shadow p-5">
    <p v-if="!formIsValid" class="text-center text-danger font-weight-bold">
      Merci de verifier les informations
    </p>
    <form
      class="m-5"
      @submit.prevent="submitForm"
      enctype="multipart/form-data"
    >
      <div class="form-group" :class="{ invalid: !title.isValid }">
        <label for="title">Titre</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Canne Mitchell à vendre.."
          v-model.trim="title.val"
          @blur="clearValidity('title')"
        />
        <p v-if="!title.isValid" class="invalid">
          Merci de remplir le champ titre.
        </p>
      </div>
      <div class="form-group" :class="{ invalid: !description.isValid }">
        <label for="description">Description</label>
        <textarea
          rows="3"
          class="form-control"
          id="description"
          v-model.trim="description.val"
          placeholder="Entrez votre description"
          @blur="clearValidity('description')"
        >
        </textarea>
        <p v-if="!description.isValid" class="invalid">
          Merci de remplir le champ description.
        </p>
      </div>

      <div class="form-group" :class="{ invalid: !categorie.isValid }">
        <label for="categorie">Catégorie</label>
        <select
          class="form-control"
          id="categorie"
          v-model.trim="categorie.val"
          @blur="clearValidity('categorie')"
        >
          <option value="cannes">cannes</option>
          <option value="leurres">leurres</option>
          <option value="moulinets">moulinets</option>
        </select>
        <p v-if="!categorie.isValid" class="invalid">
          Merci de remplir le champ categorie.
        </p>
      </div>
      <div class="form-group" :class="{ invalid: !price.isValid }">
        <label for="price">Prix</label>
        <input
          type="number"
          class="form-control"
          id="price"
          placeholder="20"
          v-model.number="price.val"
          @blur="clearValidity('price')"
        />
        <p v-if="!price.isValid" class="invalid">
          Merci de remplir le champ prix.
        </p>
      </div>
      <div class="form-group ">
        <label for="image">Ajouter une Image:</label>
        <input type="file" class="m-1" id="image" @change="onFileChanged" />
        <!-- <p v-if="!price.isValid" class="invalid">
          Merci de remplir le champ prix.
        </p> -->
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
      title: {
        val: "",
        isValid: true,
      },
      description: {
        val: "",
        isValid: true,
      },
      price: {
        val: "",
        isValid: true,
      },
      categorie: {
        val: "",
        isValid: true,
      },
      selectedFile: null,
      formIsValid: true,
    };
  },
  computed: {
    userMe() {
      return this.$store.getters["users/users"];
    },
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      if (this.title.val === "") {
        this.title.isValid = false;
        this.formIsValid = false;
      }
      if (this.price.val === "") {
        this.price.isValid = false;
        this.formIsValid = false;
      }
      if (this.categorie.val === "") {
        this.categorie.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }
      const formData = {
        title: this.title.val,
        description: this.description.val,
        categorie: this.categorie.val,
        price: this.price.val,
        userId: this.userMe.id,
        image: this.selectedFile,
      };

      console.log(this.selectedFile);

      this.$emit("save-data", formData);
    },
  },
};
</script>