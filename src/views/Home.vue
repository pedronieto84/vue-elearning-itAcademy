<template>
  <div id="home">
    <img alt="Vue logo" src="./../assets/logo.png" /><br />
    <button class="btn btn-warning" style="text-decoration: none">
      <router-link to="/module">MODUL</router-link>
    </button>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      Vue E-Learning With Bootstrap!
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>
<script>
// import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
};
</script>

<style scoped>
#home {
  margin-top: 60px;
}
</style>
