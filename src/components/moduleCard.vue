<template>
    <div class="moduleCard" v-for="moduleChild of modulesChild" :key="moduleChild.moduleId">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Module {{moduleChild.moduleId}}</h5>
                <p class="card-text">{{moduleChild.description}}</p>
                <div class="cardBottom">
                    <h5><span class="badge badge-secondary">Tag</span></h5>
                    <!--<<button @click="onSubmit()" class="btn btn-primary">Start</button>-->
                    <router-link :to="{ name: 'moduleCard', path: '/course/:courseId/:moduleId', params: {courseId: 1, moduleId: moduleChild.moduleId}}">
                        <button  class="btn">Start</button> 
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modulesChild: Array,
        courseIdChild: Number,
    },
    methods:{
        onSubmit(){
            this.$router.push('/course/:courseId/:moduleId');
        }
    }


}

</script>

<style scoped>
.badge{
    padding: 10px
}
.btn{
    padding: 5px 10px !important; 
}
.cardBottom{
    display: flex;
    justify-content: space-around;
    align-items: baseline
}

</style>