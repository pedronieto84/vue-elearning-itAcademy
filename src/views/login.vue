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
                    <input type="email" class="form-control" id="loginEmail" name="loginEmail" v-model="email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="loginPassword" name="loginPassword" v-model="password" placeholder="Enter password">
                </div>
                <button type="submit" class="btn btn-primary" disabled>Entrar</button>
            </form>
            <p v-if="errors.length">
                <b>Error</b>
                <ul class="list-group">
                        <li  class="list-group-item" v-for="error in errors"  v-bind:key="error" >{{ error }}</li>
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
        enabledisable: true
        };
    },
    methods:{
        loginForm: function (e){
            
            if(!this.email){
                this.errors.push("write a email address, please");
            }else if (!this.validEmail(this.email)){
                this.errors.push("invalid email address");
            }
            if(!this.password){
                this.errors.push("write password, please");
            }
            if (this.validEmail(this.email) && this.password){}
            if (!this.errors.length){
                return true;
            }
            e.preventDefault();
        },
        validEmail: function (email) {
            //return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
            return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,4})+$/.test(email);
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
