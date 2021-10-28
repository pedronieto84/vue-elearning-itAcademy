<template>
    <div id="slider" class="carousel slide" data-ride="carousel" data-interval="false">
        <div class="carousel-inner container-fluid p-3" style="height:100vh">
            <div class="d-flex justify-content-center">
                <button class="btn btn-sm btn-success rounded m-2" @click="this.$router.go(-1)">Back</button>
                <h1 v-if="course!=''">{{course}} Challenge</h1>
                <h1 v-else>Competition</h1>
            </div>
            <div class="carousel-item active"> 
                <SelectCourse :coursesId="courses" @selectedCourse="setCourse($event)" />
            </div>
            <div class="carousel-item">
                <SelectOpponent :selectedCourseId="course" :opponents="opponents" @selectedOpponentId="setOpponent($event)" />
            </div>
            <div class="carousel-item">
                <BetPoints :challenger="challenger" :rival="rival" @amount="setPoints($event)" />
            </div>
            <div class="carousel-item" v-for="(challenge, index) in challenges_cardTest" :key="challenge"> <!-- For 'Challenge' component, iterate over challenges_Challenge-->
                <div class="d-flex justify-content-center m-2">
                    <Scoreboard class="border border-dark bg-warning pt-2 px-2" :challengerAnswers="challengerCorrectAnswers" :rivalAnswers="rivalCorrectAnswers" :challenger="challenger" :rival="rival" />
                </div>
                <!--Challenge :challenge="challenge" :index="index" @answer="newChallengerAnswers(index, $event)" /-->
                <CardTest :testData="challenge" @answer="newChallengerAnswers(index, $event)" />
            </div>
            <div class="carousel-item">
                <div class="d-flex justify-content-center m-2">
                    <Scoreboard class="border border-dark bg-warning pt-2 px-2" :challengerAnswers="challengerCorrectAnswers" :rivalAnswers="rivalCorrectAnswers" :challenger="challenger" :rival="rival" />
                </div>
                <GlobalResult :challengerAnswers="challengerAnswers" :rivalAnswers="rivalAnswers" :challenger="challenger" :rival="rival" />
                <button class="btn btn-primary mx-2" @click="nextSlide()">Check</button>
                <button class="btn btn-secondary mx-2" @click="exit()">Exit</button>
            </div>
            <div class="carousel-item">
                <div class="d-flex justify-content-center m-2">
                    <Scoreboard class="border border-dark bg-warning pt-2 px-2" :challengerAnswers="challengerCorrectAnswers" :rivalAnswers="rivalCorrectAnswers" :challenger="challenger" :rival="rival" />
                </div>
                <CheckResults :challenges="challenges_cardTest" :challengerAnswers="challengerAnswers" :rivalAnswers="rivalAnswers" :challengerId="challenger" :rivalId="rival" />
                <button class="btn btn-primary mt-4" @click="previousSlide()">Back</button>
            </div>
            <div class="mt-2">
                <!--button class="btn btn-secondary" @click="previousSlide()"> &lt; </button>
                <button class="btn btn-primary" @click="nextSlide()"> > </button-->
            </div>
        </div>
        
    </div>
</template>


<script>
import $ from 'jquery'
import BetPoints from '../components/competitionPage/BetPoints.vue'
//import Challenge from '../components/competitionPage/Challenge.vue'
import CheckResults from '../components/competitionPage/CheckResult.vue'
import GlobalResult from '../components/competitionPage/GlobalResult.vue'
import Scoreboard from '../components/competitionPage/Scoreboard.vue'
import SelectCourse from '../components/competitionPage/SelectCourse.vue'
import SelectOpponent from '../components/competitionPage/SelectOpponent.vue'
import CardTest from '../components/modulePage/cards/cardTest.vue'

export default {
    name: "Competition",
    components: {
        BetPoints,
        //Challenge, 
        CheckResults, 
        GlobalResult, 
        Scoreboard,
        SelectCourse,
        SelectOpponent,
        CardTest
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
            challenges_cardTest: [
                {   testId: 1,
                    title: "Challenge 1",
                    subtitle: "Subtitle of challenge 1",
                    question: "Which number is bigger?",
                    items: [{answer: "15", right: false,},
                            {answer: "25", right: false,},
                            {answer: "35", right: true,},
                            {answer: "0", right: false,}],
                },
                {   testId: 2,
                    title: "Challenge 2",
                    subtitle: "Subtitle of challenge 2",
                    question: "Pregunta quants habitants te Barcelona?",
                    items: [{answer: "100 milió", right: false,},
                            {answer: "10 milions", right: false,},
                            {answer: "3 milions", right: true,},
                            {answer: "100 mil", right: false,}],
                },
                {   testId: 3,
                    title: "Challenge 3",
                    subtitle: "Subtitle of challenge 3",
                    question: "Which number is odd?",
                    items: [{answer: "44", right: false,},
                            {answer: "5", right: true,},
                            {answer: "36", right: false,},
                            {answer: "10", right: false,}],
                }
                ],
            challenges_Challenge: [
                {question: "Which number is bigger?", options: [15,2,35,0], correct: 2},
                {question: "Which number is odd?", options: [44,5,36,10], correct: 1},
                {question: "Which number is negative?", options: [-1,5,0,100], correct: 0},
                ],
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
        },
        exit() {
            alert("Competition ended");
            this.$router.push('/')
            },
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