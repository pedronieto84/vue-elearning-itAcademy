<template>
    <div id="checking">
        <h1>CheckResults</h1>
        <div class="d-flex justify-content-center">
            <div v-for="(challenge, index) in challenges" :key="challenge">
                <button class="btn btn-primary mx-2" data-toggle="collapse" :data-target='"#multiCollapseExample"+index' aria-expanded="false" :aria-controls='"multiCollapseExample"+index'>{{index+1}}</button>
            </div>
            <button class="btn btn-primary mx-2" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">All</button>
        </div>
        <div class="d-flex justify-content-center accordion-group">
            <div v-for="(challenge, index) in challenges" :key="challenge" data-parent="#checking">
                <div class="collapse multi-collapse" :id='"multiCollapseExample"+index'>
                    <div class="card card-body">
                        <h3>{{challenge.testId}} - {{challenge.question}}</h3>
                        <ul v-for="(item, ind) in challenge.items" :key="item">
                            <li>{{item.answer}}
                                <span class="text-success" v-if="item.right">(Correct)</span>
                                <span class="text-danger" v-if="(challengerAnswers[index]) != undefined ? ((challengerAnswers[index].answer) == ind ? true : false) : false">(Yours)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>afsdf
    </div>
</template>

<script>
export default {
    props: ["challenges","challengerAnswers","rivalAnswers","challenger","rival"],
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