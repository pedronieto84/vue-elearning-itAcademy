<template>
    <div>
        <h1>BetPoints</h1>
        <div class="d-flex justify-content-center align-items-center">
            <UserCard :user="challenger" class="m-2 bg-dark text-light" />
            <p>VS</p>
            <UserCard :user="rival"      class="m-2 bg-dark text-light" />
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <p>Winner gets:</p>
            <input class="form-input mx-2" type="number" v-model="points" :max="max" min="1">
        </div>
        <div>
            <button class="btn btn-primary" @click="emit()">Start</button>
        </div>
    </div>
</template>

<script>
import UserCard from '../competitionPage/UserCard.vue'

export default {
    components: {
        UserCard
    },
    props: ['challenger', 'rival'],
    data() {
        return {
            points: 1
        };
    },
    computed: {
        max: function() {
            return (this.challenger != undefined) ? ((this.challenger.points < this.rival.points) ? this.challenger.points : this.rival.points) : '' ;
        }
    },
    mounted() {
    },
    methods:{
        emit() {
            this.$emit('amount', this.points);
        }
    }
}
</script>