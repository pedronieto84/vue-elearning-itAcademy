<template>
  <div id="alignCard">
    <!-- DESKTOP VIEW FOR THE CARD -->
    <div v-if="innerWidth() >= 1200">
      <!-- v-for col-4 -->
      <div class="card text-start mb-3">
        <!-- All the card is a row. Then it has a footer -->
        <div class="row">
          <!-- Divided into two columns -->
          <div class="col-3">
            <!-- Left column for logo, tags -->
            <div class="card-body pt-3 pl-3 pb-3 pr-0">
              <h5 class="card-title">
                <img :src="course.imagUrl" style="max-width: 80px" />
              </h5>
              <div class="card-text mt-4">
                <div v-for="index in course.tags" :key="index">
                  <div
                    :to="{
                      name: 'Tag',
                      params: { tagId: index.tagId },
                    }"
                    v-on:click="navigateByUrl(index.tagId)"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-9">
            <!-- Right column for description -->
            <div class="card-body pt-3 pr-3 pb-3">
              <h5 class="card-title">{{ course.title }}</h5>
              <p class="card-text" v-snip="7">
                {{ course.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="card-footer bg-white border-top-0">
          <!-- Card footer is for learner number and Start button -->
          <div class="row">
            <div class="col-9">
              <small>{{ course.learners }} learners</small>
            </div>
            <div class="col-3">
              <router-link
                :to="{ name: 'Modules', params: { courseId: course.courseId } }"
                class="btn btn-primary"
                >Start</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- TABLET VIEW FOR THE CARD -->
    <div v-else-if="innerWidth() >= 992 && innerWidth() <= 1199">
      <!-- v-for col-12 -->
      <div class="card text-start mb-3">
        <!-- All the card is a row. Then it has a footer. -->
        <div class="row">
          <!-- Divided into two columns -->
          <div class="col-2">
            <!-- Left column for logo, tags -->
            <div class="card-body pt-3 pl-3 pb-3 pr-0">
              <h5 class="card-title">
                <img :src="course.imagUrl" style="max-width: 80px" />
              </h5>
              <div class="card-text mt-4">
                <div v-for="index in course.tags" :key="index">
                  <div
                    :to="{
                      name: 'Tag',
                      params: { tagId: index.tagId },
                    }"
                    v-on:click="navigateByUrl(index.tagId)"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-10">
            <!-- Right column for description -->
            <div class="card-body pt-3 pr-3 pb-3">
              <h5 class="card-title">{{ course.title }}</h5>
              <p class="card-text" v-snip="7">
                {{ course.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="card-footer bg-white border-top-0">
          <!-- Card footer is for learner number and Start button -->
          <div class="row ml-1 mr-1 d-flex justify-content-between">
            <small>{{ course.learners }} learners</small>
            <router-link
              :to="{ name: 'Modules', params: { courseId: course.courseId } }"
              class="btn btn-primary"
              >Start</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- MOBILE VIEW FOR THE CARD -->
    <div v-else-if="innerWidth() <= 991">
      <!-- v-for col-12 -->
      <div class="card text-start mb-3">
        <div class="row">
          <div class="card-body pt-3 ml-3 pb-3 mr-3">
            <h5 class="card-title text-center">
              <img :src="course.imagUrl" style="max-width: 80px" />
            </h5>
            <h5 class="card-title text-center">{{ course.title }}</h5>
            <p class="card-text">
              <small v-snip="5">
                {{ course.description }}
              </small>
            </p>
            <div class="card-text mt-3 ml-2 mr-3 mb-3">
              <div class="text-center">
                <div v-for="index in course.tags" :key="index">
                  <router-link
                    :to="{
                      name: 'Tag',
                      params: { tagId: index.tagId },
                    }"
                    v-on:click="navigateByUrl(index.tagId)"
                    class="btn btn-sm mb-1"
                    :class="index.col"
                  >
                    <small>
                      {{ index.name }}
                    </small>
                  </router-link>
                </div>
              </div>
            </div>
            <p class="card-text text-center">
              <small>{{ course.learners }} learners</small>
            </p>
            <p class="card-text text-center">
              <router-link
                :to="{ name: 'Modules', params: { courseId: course.courseId } }"
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
  props: ["course"],
  methods: {
    navigateByUrl(id) {
      console.log("id", id);
      //  this.$router.push()
      this.$router.push({ path: `/tag/${id}` }).then(() => {
        this.$router.go();
      });
    },
    innerWidth: function () {
      return this.$store.getters.innerWidth;
    },
  },
};
</script>

<style>
#alignCard {
  text-align: start;
}
</style>