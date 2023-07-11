<template>
  <header>
    <RandomBtn />
  </header>
</template>

<script>
import RandomBtn from "@/components/RandomBtn.vue";

export default {
  name: "HeaderComponent",
  components: {
    RandomBtn,
  },
};
</script>

<style scoped>
header {
  margin-left: auto;
  padding: 24px 2% 60px 2%;
}

@media (max-width: 768px) {
  header {
    margin: 0 auto;
  }
}
</style>
