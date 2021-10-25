<template>
    <div class="bottomNavigation bg-secondary">
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped bg-primary"
          role="progressbar"
          :aria-valuenow="percent"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{width: percent + '%'}"
        >
        {{percent}}%
        </div>
      </div>
      
      <div class="buttonsBar">
        <button :class="{'buttonFunctions': currentPoint === 0}" class="btn" @click="moveBack()"><i class="fas fa-arrow-circle-left"></i></button>
        <button :class="{'buttonFunctions': currentPoint === points.length -1}" class="btn" @click="moveForward()"><i class="fas fa-arrow-circle-right"></i></button>
        <botonFinalizar class="botonFinalizar" v-if="currentPoint == points.length -1"></botonFinalizar>
      </div>
    </div>
</template>

<script>
import botonFinalizar from './cards/botonFinalizar.vue'

export default {
  name: 'bottomNavigation',
  components: {
    botonFinalizar
  },
  data(){
    return{
    }
  },
  computed: {
    points: function() {
      return this.$store.getters.getTopics;
    },
    currentPoint: function() {
      return this.$store.getters.getActual ;
    },
    percent: function () {
      return (this.currentPoint*100/(this.points.length-1)).toFixed(0);
    }
  },
  methods: {
    moveForward(){
      this.index = this.currentPoint
      if(this.currentPoint < (this.points.length - 1)){
        this.index++;
      }
      this.$store.dispatch('updateActual', this.index);
    },
    moveBack(){
      this.index = this.currentPoint
      if(this.currentPoint > 0){
        this.index--;
      }
      this.$store.dispatch('updateActual', this.index);
    }
  }
}
</script>

<style scoped>
.bottomNavigation{
  height: 100%;
  display: flex;
  flex-direction: column

}

.buttonsBar{
  display: flex;
  justify-content: space-between;
}

.btn{
  margin: 0.25% 0.5%;
  border-radius: 50%
}

.buttonFunctions{
  visibility: hidden
}

.progress-bar{
  background-color: #efefef;
}

.botonFinalizar{
  margin-top: 5px
}

</style>