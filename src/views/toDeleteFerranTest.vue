<template>
    <div>
        <h1>Hi, this is Ferran testing components</h1>
        <div class="row">
            <div class="col-4"><CourseCard /></div>
            <div class="col-4"><CourseCard /></div>
            <div class="col-4"><CourseCard /></div>
        </div>
    </div>
</template>

<script>
import CourseCard from '../components/courseCard.vue';

export default {
    components: {
        CourseCard
    }
}
</script>