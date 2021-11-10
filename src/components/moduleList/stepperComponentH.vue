<template>
  <div class="container">
    <h1>Stepper Component</h1>
    <!-- COMPONENT -->
    <div>
      <!-- Progress -->
      <div>
        <div
          class="
            stepper
            d-flex
            position-relative
            justify-content-between
            align-items-center
            mb-4
          "
        >
          <!-- Progress bar -->
          <div class="stepper-progress position-absolute bg-secondary">
            <div
              class="stepper-progress-bar position-absolute bg-success"
              :style="'width:' + stepperProgress"
            ></div>
          </div>
          <!-- Div steps -->
          <div
            class="stepper-item d-flex flex-column align-items-center"
            :class="step > item ? 'success' : ''"
            v-for="item in 10"
            :key="item"
          >
            <!-- Inside the circle -->
            <div
              class="
                stepper-item-counter
                rounded-circle
                border border-4 border-secondary
                text-secondary
                position-relative
              "
            >
              <!-- Changes to tick -->
              <img
                class="icon-success position-absolute"
                src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
                alt=""
              />
              <!-- Original number / changes back to number -->
              <span class="number">
                {{ item }}
              </span>
            </div>
            <!-- Out of the circle -->
            <span class="stepper-item-title position-absolute">
              Step {{ item }}
            </span>
          </div>
        </div>
      </div>
      <!-- Message -->
      <div v-for="item in 10" :key="item">
        <div v-if="step == item">Step {{ item }}</div>
      </div>
      <!-- Buttons -->
      <div class="d-flex justify-content-between">
        <button class="btn btn-secondary" @click="step--" :disabled="step == 1">
          Back
        </button>
        <button class="btn btn-primary" @click="step++" :disabled="step == 10">
          Forward
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepperComponentH",
  data: () => ({
    step: 1,
  }),
  computed: {
    stepperProgress() {
      return (100 / 9) * (this.step - 1) + "%";
    },
  },
};
</script>

<style scoped lang="scss">
.stepper-progress {
  height: 2px;
  z-index: -1;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.stepper-progress-bar {
  left: 0;
  height: 100%;
  width: 0%;
  transition: all 500ms ease;
}

.stepper-item {
  transition: all 500ms ease;
}

.stepper-item-counter {
  height: 80px;
  width: 80px;
  display: grid;
  place-items: center;
  background-color: #fff;

  .icon-success {
    opacity: 0;
    transform: scale(0);
    width: 24px;
    transition: all 500ms ease;
  }

  .number {
    font-size: 22px;
    transition: all 500ms ease;
  }
}

.stepper-item-title {
  font-size: 14px;
  bottom: -24px;
}

.stepper-item.success {
  .stepper-item-counter {
    background-color: #c8ebc1;
    color: #fff;
    font-weight: 600;

    .icon-success {
      opacity: 1;
      transform: scale(1);
    }

    .number {
      opacity: 0;
      transform: scale(0);
    }
  }
  .stepper-item-title {
    color: #75cc65; //
  }
}
</style>