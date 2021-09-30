<template>
    <div>
        <p>Prova</p>
        <div v-for="(topic, index) in topics" :key="index">
            <div :class="status()" @click="switchStatus">{{index}}. {{topic.title}}</div>
        </div>
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
            this.$emit('show', this.actual);
        }
    },
    /*computed:{
        computed1(){
            return
        }
    },*/
    mounted() {
        this.switchStatus(0);
    }
}
</script>
