<template>
    <div class="moduleCard">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Module {{module.moduleId}}</h5>
                <p class="card-text">{{module.title}}</p>
                <div class="cardBottom">
                    <h5><span class="badge badge-secondary">Tag</span></h5>
                    <button @click="onSubmit()" class="btn btn-primary">Start</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //lsfnjlksfnkl
    //sfbsfdjsjsdnf
    props:['courseId', 'module'],
    methods:{
        onSubmit(){ 
            this.$router.push({ path: `/course/${this.courseId}/${this.module.moduleId}` })   
        }
    }
    //alnañodsnaosd
}
</script>
<!-- Codi CSS -->
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