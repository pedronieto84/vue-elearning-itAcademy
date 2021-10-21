<template>
  <div id="alignCard">
    <div v-if="isDesktop2()">
      <div class="card text-start mb-3">
        <div class="row">
          <div class="col-3">
            <div class="card-body pt-3 pl-3 pb-3 pr-0">
              <h5 class="card-title">
                <img
                  :src="courseId.logo"
                  :alt="courseId.altImg"
                  style="max-width: 80px; max-height: 80px"
                />
              </h5>
              <div class="card-text mt-4">
                <div v-for="index in courseId.tags" :key="index">
                  <router-link
                    :to="{
                      name: 'Modules',
                      params: { courseId: courseId.name },
                    }"
                    class="btn btn-sm mt-1"
                    :class="index.col"
                  >
                    <div v-if="index.name.length <= 11">
                      <small>
                        {{ index.name }}
                      </small>
                    </div>
                    <div v-else>
                      <small>
                        {{ index.name.substring(0, 11) + "..." }}
                      </small>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-9">
            <div class="card-body pt-3 pr-3 pb-3">
              <h5 class="card-title">{{ courseId.name }}</h5>
              <p class="card-text" v-snip="snipNumber">
                {{ courseId.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="card-footer bg-white border-top-0">
          <div class="row">
            <div class="col-9">
              <small>{{ courseId.learners }}</small>
            </div>
            <div class="col-3">
              <router-link
                :to="{ name: 'Modules', params: { courseId: courseId.name } }"
                class="btn btn-primary"
                >Start</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="!isDesktop2()">
      <div class="card text-start mb-3" style="max-width: 500px">
        <div class="row">
          <div class="card-body pt-3 ml-3 pb-3 mr-3">
            <h5 class="card-title text-center">
              <img
                :src="courseId.logo"
                :alt="courseId.altImg"
                style="max-width: 80px"
              />
            </h5>
            <h5 class="card-title text-center">{{ courseId.name }}</h5>
            <p class="card-text">
              <small>
                {{ courseId.description }}
              </small>
            </p>
            <div class="card-text mt-3 ml-2 mr-3 mb-3">
              <div class="row">
                <div v-for="index in courseId.tags" :key="index">
                  <router-link
                    :to="{
                      name: 'Modules',
                      params: { courseId: courseId.name },
                    }"
                    class="btn btn-sm ml-1"
                    :class="index.col"
                  >
                    {{ index.name }}
                  </router-link>
                </div>
              </div>
            </div>
            <p class="card-text text-center">
              <small>{{ courseId.learners }}</small>
            </p>
            <p class="card-text text-center">
              <router-link
                :to="{ name: 'Modules', params: { courseId: courseId.name } }"
                class="btn btn-primary"
              >
                Start
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["courseId", "snipNumber"],
  methods: {
    isDesktop2: function () {
      return this.$store.getters.isDesktop;
    },
  },
};
</script>

<style>
#alignCard {
  text-align: start;
}
</style>