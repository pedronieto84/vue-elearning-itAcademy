<template>
    <div id="slider" class="carousel slide mt-5" data-ride="carousel" data-interval="false">
        <h1>Competition</h1>
        <div class="carousel-inner border border-dark bg-warning container">
            <div class="carousel-item active"> 
                <h3>Slide 1</h3>
                <SelectCourse :coursesId="coursesId" @selectedcourseId="selectedcourseId = $event" />
            </div>
            <div class="carousel-item">
                <h3>Slide 2 <span v-if="course != ''">{{course}} Challenge</span></h3>
                <SelectOpponent />
            </div>
            <div class="carousel-item">
                <h3>Slide 3 <span v-if="course != ''">{{course}} Challenge</span></h3>
                <BetPoints />
            </div>
            <div class="carousel-item">
                <h3>Slide 4 <span v-if="course != ''">{{course}} Challenge</span></h3>
                <Scoreboard />
                <Challenge />
            </div>
            <div class="carousel-item">
                <h3>Slide 5 <span v-if="course != ''">{{course}} Challenge</span></h3>
                <GlobalResult />
            </div>
            <div class="carousel-item">
                <h3>Slide 6 <span v-if="course != ''">{{course}} Challenge</span></h3>
                <CheckResults />
            </div>
        </div>
        <div class="mt-2">
            <button class="btn btn-secondary" @click="previousSlide()">Previous</button>
            <button class="btn btn-primary" @click="nextSlide()">Next</button>
        </div>
    </div>
</template>


<script>
import $ from 'jquery'
import BetPoints from '../components/competitionPage/BetPoints.vue'
import Challenge from '../components/competitionPage/Challenge.vue'
import CheckResults from '../components/competitionPage/CheckResult.vue'
import GlobalResult from '../components/competitionPage/GlobalResult.vue'
import Scoreboard from '../components/competitionPage/Scoreboard.vue'
import SelectCourse from '../components/competitionPage/SelectCourse.vue'
import SelectOpponent from '../components/competitionPage/SelectOpponent.vue'

export default {
    name: "Competition",
    components: {
        BetPoints,
        Challenge, 
        CheckResults, 
        GlobalResult, 
        Scoreboard,
        SelectCourse,
        SelectOpponent
    },
    data() {
        return {
            course: "",
            coursesId: ['JavaScript', 'Vue', 'Angular', 'React']
        };
    },
    computed: {

    },
    mounted() {
        $('.carousel').carousel();
    },
    methods:{
        previousSlide(){
            $('.carousel').carousel('prev');
        },
        nextSlide(){
            $('.carousel').carousel('next');
        },
        goSlide(num){ //Works as an array: first slide is number 0
            $('.carousel').carousel(num);
        }
    }
}
</script>

<style scoped>

.carousel-inner {
    padding: 0;
}

.carousel-item {
    min-height: 50vh;
    padding: 0;
    margin: 0;
}
</style>