<template>
  <div>
    <h2>Take a Quiz</h2>
    <h6>{{ question }}</h6>
    <small>{{ testId }}</small>
    <br />
    <small>{{ title }}</small>
    <br />
    <small>{{ subtitle }}</small>
    <div class="mt-2 col-12" role="tabpanel">
      <!-- List of possible answers -->
      <div class="list-group" id="myList" role="tablist">
        <div v-for="(item, index) in items.itemsTest" :key="item">
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
            >{{ items.itemsTest[index].text }}</a
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
  data() {
    return {
      testId: "testA1",
      question: "Com puc declarar una variable en JavaScript?",
      title: "titleProva",
      subtitle: "subtitleProva",
      classList:
        "list-group-item list-group-item-action border border-secondary rounded-lg ",
      showResults: false,
      clickedHere: null,
      items: {
        itemsTest: [
          {
            text: "Amb char",
            right: false,
          },
          {
            text: "Amb let",
            right: true,
          },
          {
            text: "Amb text",
            right: false,
          },
          {
            text: "Totes les anteriors són vàlides",
            right: false,
          },
        ],
      },
      answersAnswered: [],
    };
  },
  methods: {
    addResults(index) {
      this.showResults = true;
      this.clickedHere = index;
      this.answersAnswered.push(this.clickedHere);
    },
    checkWhichOneIsRight() {
      return this.items.itemsTest.findIndex((item) => {
        return item.right;
      });
    }, /*
    emitAnswer() {
      this.$emit(`sendAnswer`, this.answersAnswered);
    }, */
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