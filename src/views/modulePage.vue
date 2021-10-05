<template>
  <div>
    <Top />
    <div class="d-none d-lg-block d-xl-block">
      <div id="main-row" class="row">
        <div class="col-2 bg-dark">
          <Left />
        </div>
        <div class="col-10">
          <Main />
        </div>
      </div>
    </div>
    <Bottom />
    <div class="d-lg-none d-xl-none">
      <div class="col-12">
        
      </div>
    </div>
  </div>
</template>

<script>
import Top from "../components/TopNavigation.vue";
import Left from "../components/LeftNavigation.vue";
import Main from "../components/MainContent.vue";
import Bottom from "../components/BottomNavigation.vue"

export default {
  name: "App",
  components: {
    Top,
    Left,
    Main,
    Bottom
  },
  data(){
    return{
      pointsArray: [1,2,3,4,5],
      currentPointFather: Number,
      topics: [
        {topicId: 0, title: 'Zero'},
        {topicId: 1, title: 'U'},
        {topicId: 2, title: 'Dos'},
        {topicId: 3, title: 'Tres'},
        {topicId: 4, title: 'Quatre'},
        {topicId: 5, title: 'Cinc'},
        {topicId: 6, title: 'Sis'}
      ],
      actual: 0
    }
  },
};
</script>

<style>
/*html,
body {
  height: calc(100vh - 60px);
  width: calc(100vw - 30px);
}*/
#main-row {
  height: 60vh;
}
</style>
