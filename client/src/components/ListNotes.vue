<template>
  <b-container v-if="!isLoading" class="bv-example-row">
    <h1 class="mb-4">ID Utilisateur = {{userId}}</h1>
    <b-row v-if="this.posts.length > 0">
      <b-col cols="4">
        <h2>Mes notes</h2>
        <li
          style="list-style: none;
    text-align: left; cursor: pointer"
          v-for="post of posts"
          :key="post.id"
          v-on:click="getPost(post.id)"
        >{{ post.title }}</li>
      </b-col>
      <b-col style="border-left: 1px solid grey" cols="8">
        <h2 v-if="!post">Choissisez une note</h2>
        <div v-if="post">
          <h2 class="mb-3">{{post.title}}</h2>
          <p class="mb-3">{{post.description}}</p>
          <p class="mb-3">Créée le {{post.created_at | datePipe}}</p>
          <div class="buttons">
            <button v-on:click="deletePost(post.id)" class="btn btn-danger mr-1">Supprimer</button>
            <router-link :to="{ path: '/modifier/' + post.id}" class="btn btn-warning ml-1">Modifier</router-link>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row class="d-block" v-if="this.posts.length === 0">
      <p>Vous n'avez pas de notes</p>
      <button
        class="btn btn-primary"
        style="margin: auto"
        @click="$router.push('/ajouter-une-note')"
      >Ajouter une note</button>
    </b-row>
  </b-container>
</template>
<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "ListNotes",
  data() {
    return {
      posts: [],
      userId: Number,
      post: "",
      isLoading: false
    };
  },
  methods: {
    getPosts() {
      axios.get("http://localhost:3000/notes").then(response => {
        this.posts = response.data;
        console.log(response.data);
        // this.posts = response.data.find(post => post.user_id == this.userId);
        this.isLoading = false;
      });
    },
    getPost(id) {
      axios.get(`http://localhost:3000/notes/${id}`).then(response => {
        this.post = response.data[0];
      });
    },
    deletePost(id) {
      axios.delete(`http://localhost:3000/notes/${id}`).then(() => {
        this.getPosts();
        this.post = "";
      });
    }
  },
  filters: {
    datePipe: function(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.userId = localStorage.getItem("userId");
    if (!this.userId) {
      this.$router.push({ path: "/" });
      this.isLoading = false;
    } else {
      this.getPosts();
    }
  }
};
</script>

<style scoped>
.buttons {
  margin: auto;
  display: flex;
  justify-content: center;
}
</style>