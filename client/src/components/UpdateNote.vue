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
          :disabled="!description || !title"
          @click="updatePost(postId)"
        >Valider</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "UpdateNote",
  data() {
    return {
      userId: "",
      postId: "",
      title: "",
      description: ""
    };
  },
  methods: {
    getPost(id) {
      axios.get(`http://localhost:3000/notes/${id}`).then(response => {
        if (response.data.length === 0) {
          this.$router.push({ path: "/notes" });
        } else {
          this.post = response.data[0];
          this.title = response.data[0].title;
          this.description = response.data[0].description;
        }
      });
    },
    updatePost(id) {
      let post = {
        title: this.title,
        description: this.description
      };
      axios
        .post(`http://localhost:3000/notes/${id}`, post, {
          useCredentails: true
        })
        .then(response => {
          if (response) {
            this.$router.push({ path: "/notes" });
          }
        });
    }
  },
  beforeMount() {
    this.userId = localStorage.getItem("userId");
    if (!this.userId) {
      this.$router.push({ path: "/" });
    } else {
      if (!this.$route.params.id) {
        this.$router.push({ path: "/notes" });
      } else {
        this.postId = this.$route.params.id;
        this.getPost(this.postId);
      }
    }
  }
};
</script>

<style lang="stylus" scoped></style>