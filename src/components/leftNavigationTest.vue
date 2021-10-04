<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav flex-column">
          <li class="nav-item">
            <a class="nav-link" href="#">Step 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Step 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Step 3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Step 4</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Step 5</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Step 6</a>
          </li>
        </ul>
        <div class="d-none d-lg-block d-xl-block">
          <div class="fixed-bottom">
            <div class="col-2">
              <BottomNavigationTest></BottomNavigationTest>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import BottomNavigationTest from "@/components/bottomNavigationTest.vue";

export default {
  name: "leftNavigationTest",
  components: {
    BottomNavigationTest,
  },
};
</script>