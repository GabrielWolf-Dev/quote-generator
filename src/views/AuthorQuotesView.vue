<template>
  <div>
    Author Quotes {{ author }}
    <div v-if="quotes !== null && !isLoading">
      {{ quotes }}
      <div v-if="quotes.totalQuotes == 0">
        Não foi possivel encontrar quotes deste autor
      </div>
    </div>
    <LoadingQuotes v-else />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AuthorQuotesView",
  data() {
    return {
      author: this.$route.params.author,
    };
  },
  computed: {
    ...mapState(["quotes", "isLoading"]),
  },
  created() {
    this.$store.dispatch("setQuotes", `?author=${this.$route.params.author}`);
  },
};
</script>

<style></style>
