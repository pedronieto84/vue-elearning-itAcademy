<template>
    <div class="bottomNavigation bg-secondary">
      <div class="progress">
        <div v-for="(point, index) in points" :key="index" class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" :style="{width: 100/points.length + '%'}" :class="{'colorBar': index === currentPoint, 'colorBar2': index < currentPoint}"></div>
      </div>
      
      <div class="buttonsBar">
        <button :class="{'buttonFunctions': currentPoint === 0}" class="btn" @click="moveBack()"><i class="fas fa-arrow-circle-left"></i></button>
        <button :class="{'buttonFunctions': currentPoint === points.length -1}" class="btn" @click="moveForward()"><i class="fas fa-arrow-circle-right"></i></button>
      </div>
      
    </div>
</template>


<script>
export default {
  name: 'bottomNavigation',
  props: {
    points:  {
      type: Array,
    }
  },
  data(){
    return{
      currentPoint: 0
    }
  },
  methods: {
    moveForward(){
      this.index = this.currentPoint
      if(this.currentPoint < (this.points.length - 1)){
        this.currentPoint++;
      }
      this.$emit('currentPointEmit', this.currentPoint)
    },
    moveBack(){
      this.index = this.currentPoint
      if(this.currentPoint > 0){
        this.currentPoint--;
      }
      this.$emit('currentPointEmit', this.currentPoint)
    }
  }
}
</script>

<style scoped>
.bottomNavigation{
  height: 50px;
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

.colorBar{
  background: black
}

.colorBar2{
  background: black
}

</style>