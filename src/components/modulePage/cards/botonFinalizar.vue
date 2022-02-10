<template>
    <div>
        <div>
            <button @click="goBack()" class="btn btn-primary">Finalizado</button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        goBack(){ 
            this.$router.go(-1)  
        }
    }
}
</script>asdfasdfasasdfasdfasdfasdfasdf