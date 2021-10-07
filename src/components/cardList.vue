<template>
    <div>
        <div v-for="(item, index) in lists" :key="index"  class="list-group">
            <!--MOBILE SCREEN-->
            <button v-if="sizeScreen()" type="button" class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#collapseExample">
                {{ item.length > 40 ? item.slice(0,40)+"..." : item }}
            </button>
           
            <!--LAPTOP SCREEN-->
            <button v-show="completeMessage == false" @mouseenter="completeMessage = true && item.length > 150"  v-else type="button" class="list-group-item list-group-item-action">
                {{ item.length > 150 ? item.slice(0,150)+"..." : item }}
            </button>
             <button v-show="completeMessage " type="button" class="list-group-item list-group-item-action">{{item}}</button>
            
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
            lists: ["Fdklsjfadlkfjdjfajdjfl jdhfkashkjfdah jfkdfjhaljknfjkdkfld jkdjfhs jkdhfda iqowqu ioqww` jdkhkf jdhaf qioqw m iwodqoie jdskha laos sadoa iouireor dsaidjld dafjdkahfjahfdafkdah", "kaskjdajsh" , "sjkhasda" , "sjhdka" , "Sajhkdsdka jdskhadhasj hoa que tal ccvfs fsgsg gdsgsf sgsf ro."],
            completeMessage: false,
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

    }, 
    
  
}
</script>

<style scoped>


</style>