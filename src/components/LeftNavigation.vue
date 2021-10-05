<template>
    <div v-for="(topic, index) in topics" :key="index" class="text-light">
        <div :class="status(index)" @click="switchStatus(index)">{{topic.topicId}}. {{topic.title}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            visit: [],
        }
    },
    computed: {
        topics: function() {
            return this.$store.getters.getTopics;
        },
        actual: function() {
            return this.$store.getters.getActual;
        }
    },
    watch: {
        actual: function (val) {
            this.visit[val]='visited';
        }
    },
    methods:{
        status(index) {
            let status;
            if(this.actual==index) {status='bg-success border border-light rounded m-1'}
            else if (this.visit[index]=='visited') {status = 'bg-primary border border-light rounded m-1'}
            else {status="bg-secondary border border-light rounded m-1"}
            return status;
        },
        switchStatus(index) {
            this.visit[index]='visited';
            this.$store.dispatch('updateActual', index);
        }
    },
    mounted() {
        this.switchStatus(0);
    }
}
</script>