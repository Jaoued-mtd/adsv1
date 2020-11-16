<template>
  <div class="container shadow p-5">
    <p v-if="!formIsValid" class="text-center text-danger font-weight-bold">
      Merci de verifier les informations
    </p>
    <form class="m-5" @submit.prevent="submitForm">
      <div class="form-group" :class="{ invalid: !titleUpdated.isValid }">
        <label for="title">Titre</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Canne Mitchell à vendre.."
          :value="title"
          @input="titleUpdated.val = $event.target.value"
          @blur="clearValidity('titleUpdated')"
        />

        <p v-if="!titleUpdated.isValid" class="invalid">
          Merci de verifier le champ titre.
        </p>
      </div>
      <div class="form-group" :class="{ invalid: !descriptionUpdated.isValid }">
        <label for="description">Description</label>
        <textarea
          rows="3"
          class="form-control"
          id="description"
          :value="description"
          @input="descriptionUpdated.val = $event.target.value"
          placeholder="Entrez votre description"
          @blur="clearValidity('descriptionUpdated')"
        >
         <p v-if="!descriptionUpdated.isValid" class="invalid">
          Merci de verifier le champ description.
        </p>
        </textarea>
      </div>

      <div class="form-group" :class="{ invalid: !categorieUpdated.isValid }">
        <label for="categorie">Catégories</label>
        <select
          class="form-control"
          id="categorie"
          :value="categorie"
          @input="categorieUpdated.val = $event.target.value"
          @blur="clearValidity('categorieUpdated')"
        >
          <option value="cannes">Cannes</option>
          <option value="leurres">Leurres</option>
          <option value="moulinets">Moulinets</option>
          <option value="navigations">Navigations</option>
          <option value="bagageries">Bagageries</option>
          <option value="fils">Fils</option>
          <option value="vetements">Vetements</option>
          <option value="montages">Montage Ligne</option>
        </select>
        <p v-if="!categorieUpdated.isValid" class="invalid">
          Merci de selectionner une categorie.
        </p>
      </div>
      <div class="form-group" :class="{ invalid: !priceUpdated.isValid }">
        <label for="price">Prix</label>
        <input
          type="number"
          class="form-control"
          id="price"
          placeholder="20"
          :value="price"
          @input="priceUpdated.val = $event.target.value"
          @blur="clearValidity('priceUpdated')"
        />
      </div>
      <p v-if="!priceUpdated.isValid" class="invalid">
        Merci de verifier le champ prix.
      </p>
      <div class="form-group">
        <label for="image">Ajouter une Image:</label>
        <input type="file" class="m-1" id="image" @change="onFileChanged" />
        <p
          v-if="!imageValid"
          class="invalid"
          style="color: red; font-size: 0.8rem"
        >
          Merci de selectionner une image au format jpg.
        </p>
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
      titleUpdated: {
        val: this.title,
        isValid: true,
      },
      descriptionUpdated: {
        val: this.description,
        isValid: true,
      },
      categorieUpdated: {
        val: this.categorieUpdated,
        isValid: true,
      },
      priceUpdated: {
        val: this.price,
        isValid: true,
      },

      selectedFile: null,
      formIsValid: true,
      imageValid: true,
    };
  },
  computed: {
    userMe() {
      return this.$store.getters["users/users"];
    },
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      this.formIsValid = true;

      if (this.titleUpdated.val === "") {
        this.titleUpdated.isValid = false;
        this.formIsValid = false;
      }
      if (this.priceUpdated.val === "") {
        this.priceUpdated.isValid = false;
        this.formIsValid = false;
      }
      if (this.categorieUpdated.val === "") {
        this.categorieUpdated.isValid = false;
        this.formIsValid = false;
      }
      if (this.descriptionUpdated.val === "") {
        this.descriptionUpdated.isValid = false;
        this.formIsValid = false;
      }
      if (this.selectedFile !== null) {
        if (!validImageTypes.includes(this.selectedFile.type)) {
          this.imageValid = false;
          this.formIsValid = false;
        }
      }
    },
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },

    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        title: this.titleUpdated.val,
        description: this.descriptionUpdated.val,
        categorie: this.categorieUpdated.val,
        price: this.priceUpdated.val,
        id: this.id,
        userId: this.userId,
        image: this.selectedFile,
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