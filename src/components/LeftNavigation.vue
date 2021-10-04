<!-- La sintaxis per incorporar el component a la principal seria tal que:
        <LeftNavigation :topics="topics" @actual="actual = $event" />
    Rebent una llista de topics i emetent el topic que que es mostra actualment
 -->

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
            visit: []
        }
    },
    props:['topics'],
    emits:['actual'],
    methods:{
        status(index) {
            let status;
            if(this.actual==index) {status='bg-success'}
            else if (this.visit[index]=='visited') {status = 'bg-primary'}
            else {status="bg-secondary"}
            return status;
        },
        switchStatus(index) {
            this.actual = index;
            this.visit[index]='visited';
            console.log('Actual: '+this.actual)
            this.$emit('actual', this.actual);
        }
    },
    mounted() {
        this.switchStatus(0);
    },
    update() {
        
    }
}
</script>