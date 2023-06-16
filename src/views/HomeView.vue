<template>
  <main class="home">
    <RandomBtn />
    <div v-if="quotes !== null && !isLoading">
      {{ quotes }}
    </div>
    <LoadingQuotes v-else />
    <FooterComponent />
  </main>
</template>

<script>
import { mapState } from "vuex";

import RandomBtn from "@/components/RandomBtn.vue";
import LoadingQuotes from "@/components/LoadingQuotes.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    RandomBtn,
    LoadingQuotes,
    FooterComponent,
  },
  computed: {
    ...mapState(["quotes", "isLoading"]),
  },
  created() {
    this.$store.dispatch("setQuotes", "/random");
  },
};
</script>
