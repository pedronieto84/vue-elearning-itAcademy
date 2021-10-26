<template>
  <div id="home">
    <h1>Welcome to the e-Learning platform</h1>
    <img alt="Vue logo" src="./../assets/logo.png" /><br />
    <button class="btn btn-primary m-2" @click="this.$router.push('courses')">Courses</button>
    <button class="btn btn-warning m-2" @click="this.$router.push('competition')">Competition</button>
    <button class="btn btn-danger m-2" @click="this.$router.push('toDelete')">toDelete</button>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {
  },
};
</script>

<style scoped>
#home {
  margin-top: 60px;
}
</style>
