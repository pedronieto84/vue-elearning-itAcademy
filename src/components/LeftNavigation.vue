<template>

        <div v-for="(topic, index) in topics" :key="index" class="text-light">
            <div :class="status(index)" @click="switchStatus(index)">{{topic.topicId}}. {{topic.title}}</div>
        </div>

</template>

<script>
export default {
    data(){
        return {
            actual: 0,
            visit: [],
        }
    },
    computed: {
        topics: function() {
            return this.$store.getters.getTopics;
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
            this.actual = index;
            this.visit[index]='visited';
            this.$store.dispatch('updateActual', this.actual);
        }
    },
    mounted() {
        this.switchStatus(0);
    }
}
</script>