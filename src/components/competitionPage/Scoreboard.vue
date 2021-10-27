<template>
    <div>
        <div class="d-flex justify-content-center align-items-center">
            <h2>{{challenger.username}} <span class="bg-dark text-light px-2">{{challengerAnswers}} - {{rivalAnswers}}</span> {{rival.username}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props: ["challengerAnswers", "rivalAnswers", "challenger", "rival"],
    data() {
        return {
        };
    },
    computed: {
    },
    updated() {
    },
    methods:{
    }
}
</script>