<template>
    <div>
        <h1>GlobalResult</h1>
        <UserCard class="m-2 bg-dark text-light" />
        <UserCard class="m-2 bg-dark text-light" />
    </div>
</template>

<script>
import UserCard from '../competitionPage/UserCard.vue'

export default {
    components: {
        UserCard
    },
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