<template>
    <div>
        <div class="d-flex justify-content-center align-items-center">
            <h1 class="mr-3">Scoreboard</h1>
            <p>{{challenger.name}}</p>
            <h2 class="bg-dark text-light">{{challengerAnswers.length}}</h2>
            <h2 class="mx-3">VS</h2>
            <h2 class="bg-dark text-light">{{rivalAnswers.length}}</h2>
            <p>{{rival.name}}</p>
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
    mounted() {
    },
    methods:{
    }
}
</script>