<template>
  <div class="container">
    <div class="row">
      <div class="col-6" style="margin: auto">
        <h1 class="mb-4">Identification</h1>
        <b-form-group
          id="fieldset-horizontal"
          label-cols-sm="4"
          label-cols-lg="3"
          label="Indiquez votre ID"
          label-for="input-horizontal"
        >
          <b-form-input id="input-horizontal" v-model="userId"></b-form-input>
        </b-form-group>
        <button class="btn btn-primary mt-2" @click="goToNotes" :disabled="!userId">Valider</button>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";

export default {
  name: "SignupUser",
  data() {
    return {
      userId: ""
    };
  },
  methods: {
    goToNotes() {
      console.log(this.userId);
      localStorage.setItem("userId", this.userId);
      this.$router.push({ path: "/notes" });
    }
  }
};
</script>

<style lang="stylus" scoped></style>