<template>
    <div id="slider" class="carousel slide mt-5" data-ride="carousel" data-interval="false">
        <h1>Competition</h1>
        <div class="carousel-inner border border-dark bg-warning container">
            <div class="carousel-item active"> 
                <h3>Slide 1</h3>
                <SelectCourse :coursesId="courses" @selectedCourse="setCourse($event)" />
            </div>
            <div class="carousel-item">
                <h3>Slide 2 <span v-if="course != ''">{{course}} Challenge</span></h3>
                <SelectOpponent :selectedCourseId="course" :opponents="opponents" @selectedOpponentId="setOpponent($event)" />
            </div>
            <div class="carousel-item">
                <h3>Slide 3 - <span v-if="course != ''">{{course}} Challenge</span></h3>
                <BetPoints :challenger="challenger" :rival="rival" @amount="setPoints($event)" />
            </div>
            <div class="carousel-item">
                <h3>Slide 4 - <span v-if="course != ''">{{course}} Challenge</span></h3>
                <Scoreboard :challengerAnswers="challengerAnswers" :rivalAnswers="rivalAnswers" :challenger="challenger" :rival="rival" />
                <div v-for="challenge in challenges" v-bind:key="challenge">
                    <Challenge :challenge="{index: challenge, challenge: challenges[challenge]}" @answer="answer[challenge] = $event" />
                </div>
            </div>
            <div class="carousel-item">
                <h3>Slide 5 - <span v-if="course != ''">{{course}} Challenge</span></h3>
                <GlobalResult :challengerAnswers="challengerAnswers" :rivalAnswers="rivalAnswers" :challengerId="challenger" :rivalId="rival" />
                <button class="btn btn-primary" @click="nextSlide()">Check</button>
                <button class="btn btn-secondary" @click="exit()">Exit</button>
            </div>
            <div class="carousel-item">
                <h3>Slide 6 - <span v-if="course != ''">{{course}} Challenge</span></h3>
                <CheckResults :challenges="challenges" :challengerAnswers="challengerAnswers" :rivalAnswers="rivalAnswers" :challengerId="challenger" :rivalId="rival" />
                <button class="btn btn-primary" @click="previousSlide()">Back</button>
            </div>
        </div>
        <div class="mt-2">
            <button class="btn btn-secondary" @click="previousSlide()"> &lt; </button>
            <button class="btn btn-primary" @click="nextSlide()"> > </button>
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
            courses: ['JavaScript', 'Vue', 'Angular', 'React'],
            opponents: [
                {username: 'Ferran', img: 'https://randomuser.me/api/portraits/men/1.jpg', level: 10, points: 100},
                {username: 'Irene', img: 'https://randomuser.me/api/portraits/women/1.jpg', level: 15, points: 150},
                {username: 'David', img: 'https://randomuser.me/api/portraits/men/2.jpg', level: 20, points: 200},
                {username: 'Pedro', img: 'https://randomuser.me/api/portraits/men/3.jpg', level: 25, points: 250},],
            course: "",
            challenges: [{}],
            challenger: {username: 'Toni', img: 'https://randomuser.me/api/portraits/men/4.jpg', level: 5, points: 50},
            challengerAnswers: [],
            rival: {username: 'Pedro', img: 'https://randomuser.me/api/portraits/men/3.jpg', level: 25, points: 250},
            rivalAnswers: [],
            points: 0,
        };
    },
    computed: {},
    mounted() {
        $('.carousel').carousel();
    },
    methods:{
        //Slides
        currentSlide() {return $('div.active').index();},
        previousSlide(){$('.carousel').carousel('prev');},
        nextSlide(){$('.carousel').carousel('next');},
        goSlide(num){$('.carousel').carousel(num);}, //Works as an array: first slide is number 0
        exit() {alert("Competition ended");},
        
        //Components
        setCourse(course) {
            this.course = course;
            this.nextSlide();
        },
        setOpponent(rival) {
            this.rival = rival;
            this.nextSlide();
        },
        setPoints(amount) {
            this.points = amount;
            this.nextSlide();
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