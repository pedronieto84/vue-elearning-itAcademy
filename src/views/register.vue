<template>
    <div>Hola soy un registro</div>
    <div class="container text-center">
    <form @submit.prevent="login()" class="form-signin">

      <h1 class="h3 mb-3 font-weight-normal">Please register user</h1>
      <label for="userName" class="sr-only">User Name</label>
      <input type="text" v-model="data.username" id="userName" class="form-control" placeholder="User Name" required="" autofocus="">
      <label for="email" class="sr-only">Email address</label>
      <input type="email" v-model="data.email" id="email" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="password" class="sr-only">Password</label>
      <input type="password" v-model="data.password" id="password" class="form-control" placeholder="Password" required="">
      <p><button class="btn btn-lg btn-primary btn-block" type="submit">Register</button></p>
      <small @click="this.$router.push('login')">Login</small>
    </form>
    </div>
</template>

<script>

export default{
  
  name:"register",

    data() {
        return{
            data:{
              username:"",
              email:"",
              password:""
            }
        }
    },

    methods:{
       
    }
} 
</script>