<template>
    <div>
        <h1>GlobalResult</h1>
        <div class="d-flex justify-content-center align-items-center">
            <UserCard :user="challenger" class="m-2 bg-dark text-light" />
            <p>VS</p>
            <UserCard :user="rival"      class="m-2 bg-dark text-light" />
        </div>
    </div>
</template>

<script>
import UserCard from '../competitionPage/UserCard.vue'

export default {
    components: {
        UserCard
    },
    props: ['challenger','rival',"challengerAnswers","rivalAnswers"],
    data() {
        return {
        };
    },
    computed: {
        ////adfsadfadsf
    },
    mounted() {
    },
    methods:{
        ///fsafasdfasdfds
    }
}
</script>