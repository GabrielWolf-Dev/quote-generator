<template>
  <div class="loading-container">
    <svg>
      <circle cx="70" cy="70" r="70"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: "LaodingQuotes",
};
</script>

<style scoped>
.loading-container {
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  flex: 1;
}

svg {
  position: relative;
  width: 150px;
  height: 150px;
  animation: rotate 2s linear infinite;
}

svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 10;
  stroke: var(--color-yellow);
  stroke-linecap: round;
  transform: translate(5px, 5px);
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  animation: animate 4s linear infinite;
}

@keyframes animate {
  0%,
  100% {
    stroke-dashoffset: 440;
  }
  50% {
    stroke-dashoffset: 0;
  }
  50.1% {
    stroke-dashoffset: 880;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
