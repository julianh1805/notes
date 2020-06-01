<template>
  <div id="app">
    <div id="nav">
      <router-link to="/notes">Notes</router-link> |
      <router-link to="/ajouter-une-note">Ajouter</router-link> |
      <p class="routerlink" @click="disconnect">Se déconnecter</p>
    </div>
    <router-view />
  </div>
</template>

<script>
// import axios from "axios";

export default {
  data() {
    return {
      userId: "",
      connected: false
    };
  },
  methods: {
    disconnect() {
      localStorage.removeItem("userId");
      this.connected = false;
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.routerlink {
  font-weight: bold;
  color: #2c3e50;
  display: inline;
}
.routerlink:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
