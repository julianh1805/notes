<template>
  <div class="container">
    <div class="row">
      <div class="col-6" style="margin: auto">
        <h1 class="mb-4">Ajouter une note</h1>
        <b-form-group id="fieldset-1" label="Choissisez un titre" label-for="input-1">
          <b-form-input id="input-1" v-model="title" trim></b-form-input>
        </b-form-group>
        <b-form-group id="fieldset-2" label="Choissisez une description" label-for="input-2">
          <b-form-input id="input-2" v-model="description" trim></b-form-input>
        </b-form-group>
        <button
          class="btn btn-primary mt-2"
          @click="addPost"
          :disabled="!description || !title"
        >Ajouter</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AddNote",
  data() {
    return {
      userId: "",
      title: "",
      description: ""
    };
  },
  methods: {
    addPost() {
      let id = this.userId;
      let post = {
        title: this.title,
        description: this.description
      };
      console.log(post);
      axios
        .put(`http://localhost:3000/notes/add/${id}`, post, {
          useCredentails: true
        })
        .then(() => {
          this.$router.push({ path: "/notes" });
        });
    }
  },
  beforeMount() {
    this.userId = localStorage.getItem("userId");
    if (!this.userId) {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="stylus" scoped></style>