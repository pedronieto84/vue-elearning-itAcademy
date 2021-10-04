<template>
  <div>
    <div class="col-12">
      <div class="d-lg-none d-xl-none">
        <BottomNavigationTest></BottomNavigationTest>
      </div>
    </div>
    <div class="progress mt-2">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 25%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        25%
      </div>
    </div>
    <h1 class="mt-2">Content</h1>
    <div>
      <!-- This div is reserved to place a v-if and show the appropiate card     -->
      <CardVideo />
    </div>
  </div>
</template>

<script>
import BottomNavigationTest from "@/components/bottomNavigationTest.vue";
import CardVideo from "@/components/CardVideo.vue";

export default {
  name: "contentTest",
  components: {
    BottomNavigationTest,
    CardVideo,
  },
};
</script>
