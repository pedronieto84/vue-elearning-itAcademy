<template>
  <div>
    <h2>Take a Quiz</h2>
    <h6>{{ testData.question }}</h6>
    <small>{{ testData.testId }}</small>
    <br />
    <small>{{ testData.title }}</small>
    <br />
    <small>{{ testData.subtitle }}</small>
    <div class="mt-2 col-12" role="tabpanel">
      <!-- List of possible answers -->
      <div class="list-group" id="myList" role="tablist">
        <div v-for="(item, index) in testData.items" :key="item">
          <a
            @click="addResults(index)"
            class="
              list-group-item list-group-item-action
              border border-secondary
              rounded-lg
            "
            :class="
              this.showResults && (this.clickedHere === index || item.right)
                ? this.checkWhichOneIsRight() === index
                  ? 'bg-success text-white'
                  : 'bg-danger text-white'
                : ''
            "
            data-toggle="list"
            href="#answer"
            role="tab"
            >{{ testData.items[index].answer }}</a
          >
          <br />
        </div>
      </div>

      <!-- Status of the answer -->
      <div class="tab-content mt-2">
        <div class="tab-pane active" id="" role="tabpanel">
          <div id="respostaMissatge">Resposta</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardTest",
  props: ['testData'],
  data() {
    return {
     
      classList:
        "list-group-item list-group-item-action border border-secondary rounded-lg ",
      showResults: false,
      clickedHere: null,
      
  //    answersAnswered: [],
    };
  },
  methods: {
    addResults(index) {
      this.showResults = true;
      this.clickedHere = index;
    //  this.answersAnswered.push(this.clickedHere);
      this.showResposta(index);
      this.emitOption();
    },
    checkWhichOneIsRight() {
      return this.testData.items.findIndex((item) => {
        return item.right;
      });
    },
    showResposta(index) {
      if (this.testData.items[index].right == true) {
        document.getElementById("respostaMissatge").innerHTML =
          "Resposta correcta";
      } else if (this.testData.items[index].right == false) {
        document.getElementById("respostaMissatge").innerHTML =
          "Resposta incorrecta";
      }
    },
    emitOption(){
      let correct=false;
      if (this.clickedHere==this.checkWhichOneIsRight()) {
        correct=true
      }
      console.log(this.clickedHere, correct);
      setTimeout(this.$emit('answer', {answer: this.clickedHere, correct: correct}), 10000);
    }
  },
};
</script>

<style>
.tdn {
  text-decoration: none;
  color: black;
}

.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  z-index: 2;
  color: #495057;
  background-color: transparent;
}
</style>