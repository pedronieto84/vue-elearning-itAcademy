<template>
    <div class="selectCourse">
        <h4>Start a Code Challenge</h4>
        <p>Select one of the courses you are currently enrolled</p>
        <div class="form-check" v-for="course of coursesId" :key="course.id">
            <input  class="form-check-input" type="radio" name="flexRadioDefault" :value="course" id="course" v-model="selectedCourse" @change="selectCourse">
            <label class="form-check-label" for="course" >
                {{course}}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    props: ['coursesId'],
    data(){
        return{
            selectedCourse: "",
        }
    }, 
    methods:{
        selectCourse(){
            this.$emit('selectedCourse', this.selectedCourse);
        }
    }
    

}

</script>

<style>
.selectCourse{
    margin-top: 20px;
}
</style>

