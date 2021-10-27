<template>
    <div>
        <h2>Select an Opponent</h2>
        <div class="form-check" v-for="opponent of opponents" :key="opponent.id">
            <input  class="form-check-input" type="radio" name="flexRadioDefault" :value="opponent" id="opponents" v-model="selectedOpponent" @change="SelectOpponent">
            <label class="form-check-label" for="opponents" >
                {{opponent}}
            </label>
        </div>
    </div>
</template>

<script>
export default {
    props: ['selectedCourseId', 'opponents'],
    data() {
        return {
            selectedOpponent: "",
        }
    },
    methods:{
        SelectOpponent(){
            console.log(this.selectedOpponent)
            this.$emit('selectedOpponentId', this.selectedOpponent);
        }
    }
}
</script>

<style>
</style>