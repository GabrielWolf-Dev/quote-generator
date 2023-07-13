<template>
  <button class="button" @click="backRouter">
    <abbr title="Back to Previous Page">
      <img src="/assets/svg/arrow-back.svg" alt="Arrow back icon"
    /></abbr>
  </button>
</template>

<script>
export default {
  name: "BackRouter",
  methods: {
    backRouter() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.button {
  widows: 24px;
  height: 24px;
}
</style>
