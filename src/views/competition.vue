<template>
    <div id="slider" class="carousel slide mt-5" data-ride="carousel" data-interval="false">
        <div class="d-flex justify-content-center">
            <button class="btn btn-sm btn-success rounded m-2" @click="this.$router.go(-1)">Back</button>
            <h1>Competition</h1>
        </div>
        <div class="carousel-inner border border-dark bg-warning container">
            <div class="carousel-item active"> 
                <SelectCourse :coursesId="courses" @selectedCourse="setCourse($event)" />
            </div>
            <div class="carousel-item">
                <h3>{{course}} Challenge</h3>
                <SelectOpponent :selectedCourseId="course" :opponents="opponents" @selectedOpponentId="setOpponent($event)" />
            </div>
            <div class="carousel-item">
                <h3>{{course}} Challenge</h3>
                <BetPoints :challenger="challenger" :rival="rival" @amount="setPoints($event)" />
            </div>
            <div class="carousel-item" v-for="(challenge, index) in challenges" :key="challenge">
                <h3>{{course}} Challenge</h3>
                <Scoreboard :challengerAnswers="challengerCorrectAnswers" :rivalAnswers="rivalCorrectAnswers" :challenger="challenger" :rival="rival" />
                <Challenge :challenge="challenge" :index="index" @answer="newChallengerAnswers(index, $event)" />
            </div>
            <div class="carousel-item">
                <h3>{{course}} Challenge</h3>
                <GlobalResult :challengerAnswers="challengerAnswers" :rivalAnswers="rivalAnswers" :challenger="challenger" :rival="rival" />
                <button class="btn btn-primary" @click="nextSlide()">Check</button>
                <button class="btn btn-secondary" @click="exit()">Exit</button>
            </div>
            <div class="carousel-item">
                <h3>{{course}} Challenge</h3>
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
            challenges: [
                {question: "Which number is bigger?", options: [15,2,35,0], correct: 2},
                {question: "Which number is even?", options: [44,5,36,10], correct: 1},
                {question: "Which number is negative?", options: [-1,5,0,100], correct: 0},],
            challenger: {username: 'Toni', img: 'https://randomuser.me/api/portraits/men/4.jpg', level: 5, points: 50},
            challengerAnswers: [],
            challengerCorrectAnswers: 0,
            rival: {username: 'Pedro', img: 'https://randomuser.me/api/portraits/men/3.jpg', level: 25, points: 250},
            rivalAnswers: [],
            rivalCorrectAnswers: 0,
            points: 1,
        };
    },
    computed: {
    },
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
        },
        newChallengerAnswers(index, answer) {
            this.challengerAnswers[index] = answer;
            if(answer.correct) {this.challengerCorrectAnswers++}
            this.nextSlide()
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