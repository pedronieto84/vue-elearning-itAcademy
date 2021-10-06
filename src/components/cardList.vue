<template>
    <div>
        <div v-for="(item, index) in listArray" :key="index"  class="list-group">
            <!--MOBILE SCREEN-->
            <button :class="{'displayCompleteMessage': counter == index }" @click="showMessage(index)" v-if="sizeScreen()" type="button" class="list-group-item list-group-item-action">
                {{ item.length > 40 ? item.slice(0,40)+"..." : item }} {{index}}
            </button>
            
           
            <!--LAPTOP SCREEN-->
            <!--<button :class="{'prueba': counter == index }" v-show="completeMessage == false" @mouseenter="completeMessage = true && item.length > 150" @mouseleave="completeMessage = false" v-else type="button" class="list-group-item list-group-item-action">
                {{ item.length > 150 ? item.slice(0,150)+"..." : item }}
            </button>-->

            <button :class="{'displayCompleteMessage': counter == index }" @mouseenter="showMessage(index)"  v-else type="button" class="list-group-item list-group-item-action">
                {{ item.length > 150 ? item.slice(0,150)+"..." : item }}
            </button>

            <button v-show="counter == index" type="button" class="list-group-item list-group-item-action">{{item}}</button>
            
        </div>
    </div>
</template>

<script>

export default {
    name: 'cardList',
    props: {
        listArray: Array
    },
    
    data() {
        return {
            counter: Number,
        }
    },
    

    methods:{
        sizeScreen(){
            if(window.innerWidth < 720){
                console.log("pantalla pequeña")
                return true  
            }else{
                console.log("pantalla grande")
                return false
            }
        },

        showMessage(value){
            this.counter = value;
        }
    
    }
}
</script>

<style scoped>
.displayCompleteMessage{
    display:none
}

.list-group-item{
    cursor: pointer
}

</style>