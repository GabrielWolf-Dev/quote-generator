<template>
  <main class="home">
    <RandomBtn />
    <div v-if="quotes !== null && !isLoading">
      {{ quotes }}
    </div>
    <div v-else>Carregando...</div>
  </main>
</template>

<script>
import { mapState } from "vuex";

import RandomBtn from "@/components/RandomBtn.vue";

export default {
  name: "HomeView",
  components: {
    RandomBtn,
  },
  computed: {
    ...mapState(["quotes", "isLoading"]),
  },
  created() {
    this.$store.dispatch("setQuotes");
  },
};
</script>
