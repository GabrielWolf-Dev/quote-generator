<template>
  <router-link @click="updateRandomQuote" to="/" class="button"
    >random <img src="/assets/svg/random-icon.svg" alt="Random icon"
  /></router-link>
</template>

<script>
export default {
  name: "RandomBtn",
  methods: {
    updateRandomQuote() {
      this.$store.dispatch("setQuotes", "/random");
    },
  },
};
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--color-gray-01);
  font-size: var(--font-18);
  font-weight: var(--fontw-default);
  text-decoration: none;
}
</style>
