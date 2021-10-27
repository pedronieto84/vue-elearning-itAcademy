<template> 
    <div>
        <h3>Round {{index+1}}</h3>
        <h3>{{challenge.question}}</h3>
        <div class="form-check" v-for="option in challenge.options" :key="option">
            <input  class="form-check-input" type="radio" name="flexRadioDefault" :value="option" id="course" v-model="selectedOption" @change="selectOption">
            <label class="form-check-label" for="option" >
                {{option}}
            </label>
        </div>
        <h3 v-if="answered && correct" class="text-success">Correct</h3>
        <h3 v-else-if="answered" class="text-danger">Wrong</h3>
    </div>
</template>

<script>
export default {
    props: ['challenge', 'index'],
    data() {
        return {
            selectedOption: [],
            answered: false,
            correct: false
        };
    },
    computed: {
    },
    mounted() {
    },
    methods:{
        selectOption(){
            let index = this.challenge.options.indexOf(this.selectedOption);
            this.answered=true;
            if (index==this.challenge.correct) {
                this.correct=true
            }
            setTimeout(this.$emit('answer', {answer: index, correct:this.correct}), 10000);
        }
    }
}
</script>