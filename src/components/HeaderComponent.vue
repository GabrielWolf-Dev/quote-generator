<template>
  <header>
    <div class="btn-back">
      <BackRouter />
    </div>
    <RandomBtn />
  </header>
</template>

<script>
import RandomBtn from "@/components/RandomBtn.vue";
import BackRouter from "@/components/BackRouter.vue";

export default {
  name: "HeaderComponent",
  components: {
    BackRouter,
    RandomBtn,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 2% 60px 2%;
}

@media (max-width: 768px) {
  header {
    flex-direction: column;
    justify-content: center;
  }

  .btn-back {
    display: none;
  }
}
</style>
