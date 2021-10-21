<template>
    <div class="container mt-5">
      <h1>To Delete: Users competition</h1>
      <table class="table table-hover mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user">
            <th>{{user.id}}</th>
            <th>{{user.value.name}}</th>
            <th>{{user.value.points}}</th>
          </tr>
        </tbody>
      </table>
      <form class="mt-5 border border-dark rounded py-4 bg-dark text-light">

        <label for="Challenger">User </label>
        <select class="form-select  mx-2" v-model="challenger" id="challenger">
          <option v-for="user in challegers" :key="user" :value="user.id">{{user.value.name}}</option>
        </select>

        <label for="Rival">challenges </label>
        <select class="form-select mx-2" v-model="rival" id="rival">
          <option v-for="user in rivals" :key="user" :value="user.id">{{user.value.name}}</option>
        </select>

        <label for="Points">with</label>
        <input class="form-input mx-2" type="number" v-model="points" :max="max" min="1">
        
        <label for="button">points</label>
        <button class="btn btn-sm btn-success ml-2" @click="challenge">Challenge</button>
      </form>
      
    </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  data(){
    return{
      challenger: 1,
      rival: 2,
      points: 1
    }
  },
  computed: {
    users: function() {
      var array = [];
      for(var[key, value] of this.$store.state.users){
          let obj = {id: key, value: value}
          array.push(obj);
      }
      return array;
    },
    challegers: function() {
      var array = [];
      for(var[key, value] of this.$store.state.users){
        if (value.points > 0) {
          let obj = {id: key, value: value}
          array.push(obj);
        }
      }
      return array;
    },
    rivals: function() {
      var array = [];
      for(var[key, value] of this.$store.state.users){
        if (value.points > 0 && key != this.challenger) {
          let obj = {id: key, value: value}
          array.push(obj);
        }
      }
      return array;
    },
    max: function() {
      const challenger = this.users[this.challenger-1];
      const rival = this.users[this.rival-1];
      return (challenger != undefined) ? ((challenger.value.points < rival.value.points) ? challenger.value.points : rival.value.points) : '' ;
    }
  },
  mounted() {
    this.addUsers()
  },
  methods: {
    addUsers: function() {
      this.$store.dispatch('addUsers')
    },
    challenge: function() {
      let challengeId = 'prova';
      this.$store.dispatch('createChallenge', {challengeId: challengeId, challengerId: this.challenger, rivalId: this.rival, betPoints: this.points});
      let winner = Math.floor(Math.random()*2);
      let winnerId;
      if (winner == 1) {console.log('Challenger wins'); (winnerId = this.challenger)} else {console.log('Rival wins'); (winnerId = this.rival)}
      this.$store.dispatch('endChallenge', {challengeId:challengeId, winnerId:winnerId});
      if (event) {
        event.preventDefault()
      }
    }
  }
};
</script>
