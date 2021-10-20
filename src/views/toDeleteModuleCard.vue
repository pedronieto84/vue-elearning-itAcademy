<template>
    <div >
        <moduleCard :modulesChild = "modulesFather"></moduleCard>
    </div>
</template>
<script>
import moduleCard from "../components/moduleCard.vue"
export default {
    components: {
        moduleCard
    },
    data(){
        return{
            modulesFather: [{
                moduleId: 1,
                description: "Introduction"
            },
            {
                moduleId: 2,
                description: "Introduction 2"
            }

            ]
                
                
            
        }
    }

}

</script>