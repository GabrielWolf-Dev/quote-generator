<template>
  <div class="home">Hello World!{{ quotes }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeView",
  computed: {
    ...mapState(["quotes"]),
  },
  created() {
    this.$store.dispatch("setQuotes");
  },
};
</script>
