<template>
  <div>
    <h2>Take a Quiz</h2>
    <h6>{{ question }}</h6>
    <small>{{ testId }}</small>
    <br />
    <small>{{ title }}</small>
    <br />
    <small>{{ subtitle }}</small>
    <!--
    <div class="mt-2 col-12">
      <a href="">
        <div class="border border-secondary rounded-lg pt-2 pb-2 tdn">Hola</div>
      </a>
    </div> -->
    <div class="mt-2 col-12" role="tabpanel">
      <!-- List of possible answers -->
      <div class="list-group" id="myList" role="tablist">
      <div v-for="(item, index) in items.itemsTest"
      :key="item"
      >
      <a
      @click="addResults(index)"
      class="list-group-item list-group-item-action border border-secondary rounded-lg
"
      :class=" ( this.showResults  && ( this.clickedHere === index || item.right ) ) ? (  this.checkWichOneIsRight() === index ? 'bg-success' : 'bg-danger'  )  : ''  "
      
     
   

 
  data-toggle="list"
  href="#answer1"
  role="tab">{{ items.itemsTest[index].text }}</a>

<br />

      </div>
        <br />
     
    
       
        <br />
      </div>

      <!-- Status of the answer -->
      <div class="tab-content mt-2">
        <div class="tab-pane active" id="" role="tabpanel">Resposta</div>
        <!-- Answer 1 -->
        <div
          class="tab-pane"
          id="answer1"
          role="tabpanel"
          v-for="right in items.itemsTest"
          :key="right"
        >
          <div v-if="items.itemsTest[0].right == true">Resposta correcta</div>
          <div v-else>Resposta incorrecta</div>
        </div>
        <!-- Versió anterior -->
        <!--
        <div class="tab-pane" id="answer1" role="tabpanel" v-if="items.itemsTest[0].right == true">
          Resposta correcta
        </div>
        <div class="tab-pane" id="answer1" role="tabpanel" v-else>
          Resposta incorrecta
        </div> -->
        <!-- Answer 2-->
        <div
          class="tab-pane"
          id="answer2"
          role="tabpanel"
          v-for="right in items.itemsTest"
          :key="right"
        >
          <div v-if="items.itemsTest[1].right == true">Resposta correcta</div>
          <div v-else>Resposta incorrecta</div>
        </div>
        <!--
        <div class="tab-pane" id="answer2" role="tabpanel">
          {{ items.itemsTest[1].right }}
        </div> -->
        <!-- Answer 3 -->
        <div
          class="tab-pane"
          id="answer3"
          role="tabpanel"
          v-for="right in items.itemsTest"
          :key="right"
        >
          <div v-if="items.itemsTest[2].right == true">Resposta correcta</div>
          <div v-else>Resposta incorrecta</div>
        </div>
        <!-- 
        <div class="tab-pane" id="answer3" role="tabpanel">
          {{ items.itemsTest[2].right }}
        </div> -->
        <!-- Answer 4 -->
        <div
          class="tab-pane"
          id="answer4"
          role="tabpanel"
          v-for="right in items.itemsTest"
          :key="right"
        >
          <div v-if="items.itemsTest[3].right == true">Resposta correcta</div>
          <div v-else>Resposta incorrecta</div>
        </div>
        <!--
        <div class="tab-pane" id="answer4" role="tabpanel">
          {{ items.itemsTest[3].right }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardTest",
  data() {
    return {
      fondo: "bg-info",
      color: false,
      testId: "testA1",
      question: "Com puc declarar una variable en JavaScript?",
      title: "titleProva",
      subtitle: "subtitleProva",
      classList:'list-group-item list-group-item-action border border-secondary rounded-lg '
,
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
    };
  },
  methods: {

    addResults(index){
      this.showResults = true;
      this.clickedHere = index;
/*
 const isThisOneTheRightOne = index === this.checkWichOneIsRight()
      let classesToAdd = '';
      

      if(isThisOneTheRightOne){
          classesToAdd = 'bg-success text-white'
      }else{
        classesToAdd = 'bg-danger text-white'
      }
       */
     // this.classList += classesToAdd
     // console.log('class list', this.classList)

    },


    checkWichOneIsRight(){
      return this.items.itemsTest.findIndex((item)=>{
        return item.right
      })

    },

    returnRightClassDependingOnQuestion(){

     
     

    },
    bgColor(num) {
      //alert(this.items.itemsTest[num].right);
      /*
      for (let i = 0; i < this.items.itemsTest.length; i++) {
        //alert(this.items.itemsTest[i].right);
        //alert(this.items.itemsTest[num].right);
      } */
      if (this.items.itemsTest[num].right == true) {
        //alert("Green");
        document.getElementById(`${num}`).className =
          "list-group-item list-group-item-action border border-secondary rounded-lg bg-success text-white";
      } else if (this.items.itemsTest[num].right == false) {
        //alert("Red");
        document.getElementById(`${num}`).className =
          "list-group-item list-group-item-action border border-secondary rounded-lg bg-danger text-white";
      }
    },
    isColorRight() {
      
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
 <!-- 
<style>
.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  z-index: 2;
  color: white;
  background-color: green;
}
</style>
 --> <!--
<style lang="scss" scoped>
$bgResponse: true;
$bgResponse: false;

.list.group-item.active,
.list-group-item.active:hover,
.list.group.item.active:focus {
  @if $bgResponse == true {
    background-color: green;
  } @else if $bgResponse == false {
    background-color: red;
  }
}
</style> -->