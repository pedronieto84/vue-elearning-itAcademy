<template>
  <div id="alignCard">
    <div class="card text-start mb-3" style="max-width: 500px">
      <div class="row">
        <div class="col-3">
          <div class="card-body pt-3 pl-3 pb-3">
            <h5 class="card-title">
              <img
                :src="course.imagUrl"
                alt="The JavaScript logo is a yellow square with the letters JS written on it in black. JS stands for JavaScript"
                style="max-width: 80px"
              />
            </h5>
            <p class="card-text">
              <button type="button" class="btn btn-outline-secondary mt-1">
                ID: {{course.courseId}}
              </button>
            </p>
            <p class="card-text">
              <small>7.9M learners</small>
            </p>
          </div>
        </div>
        <div class="col-9">
          <div class="card-body pt-3 pr-3 pb-3">
            <h5 class="card-title">{{course.title}}</h5>
            <p class="card-text">{{course.description}}</p>   
            <p class="card-text d-flex justify-content-end">
              <router-link :to="{name: 'Modules', params: {courseId: course.courseId} }" class="btn btn-primary">Start</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['course'],
}
</script>

<style>
#alignCard {
  text-align: start;
}
</style>