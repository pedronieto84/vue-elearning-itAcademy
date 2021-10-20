<template>
    <div class="moduleCard">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Lesson {{moduleId}}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <h4><span class="badge badge-secondary">New</span></h4>
                <router-link :to="{name: 'Module', params: {courseId: courseId, moduleId: moduleId} }" class="btn btn-primary">Start</router-link>
                <!--button class="btn btn-primary">Start</button-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['courseId', 'moduleId']
}

</script>