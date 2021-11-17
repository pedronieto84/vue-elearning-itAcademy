<template>
    <div class="container-fluid">
    <h1>Hola soy el Login</h1>
    <div class="card text-center col-4">
        <div class="card-header">
            Formulario login
        </div>
        <div class="card-body">
            <form
                id="app"
                @submit="loginForm"
                action="#"
                method="post"
            >
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="loginEmail" name="loginEmail" v-model="email" placeholder="Enter an email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="text" class="form-control" id="loginPassword" name="loginPassword" v-model="password"  placeholder="Enter an password">
                </div>
                <button type="submit" class="btn btn-primary" :disabled="actived">Entrar</button>
            </form>
            <p v-if="errors.length">
                <b>Error</b>
                <ul class="list-group">
                        <li  class="list-group-item text-danger" v-for="error in errors"  v-bind:key="error" ><p class="alert alert-danger" role="alert" >{{ error }}</p></li>
                </ul>
            </p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'App',
  data: function(){
    return{
        errors:[],
        email:null,
        password:null,
        //actived:true
        };
    },
    methods:{
        loginForm: function (e){
            
            if(!this.email){
                this.errors.push("write an email address, please");
            }else if (!this.validEmail(this.email)){
                this.errors.push("invalid email address");
            }
            if(!this.password){
                this.errors.push("write a correct password, please");
            }
            if(this.password.length < 5 || this.password.length > 9){
                this.errors.push("write password between 5 and 10 characters, please");
            }
           
            if (!this.errors.length){
                return true;
            }
            //if (this.validEmail(this.email)) 
            e.preventDefault();
        },
        validEmail: function (email) {
            //return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
            return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,4})+$/.test(email);
        },
        validPassword: function (password) {
            //return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
            return /^[a-z0-9]+$/i.test(password);
        }
        
    },
    computed:{
      checkVal: function(){
          
        return this.validEmail(this.email) && (this.password.length >=5 && this.password.length <=10) && this.validPassword(this.password) ? false : true;
    }
    }
    

}
/*
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
*/
</script>
