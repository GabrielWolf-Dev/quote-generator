<template>
  <div class="container">
    <HeaderComponent />
    <WrapperComponent>
      <template v-slot:title>
        <h1 class="title">{{ author }}</h1>
      </template>
    </WrapperComponent>
    <FooterComponent />
  </div>
</template>

<script>
import { mapState } from "vuex";

import HeaderComponent from "@/components/HeaderComponent.vue";
import WrapperComponent from "@/components/WrapperComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

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
  components: {
    HeaderComponent,
    WrapperComponent,
    FooterComponent,
  },
  created() {
    document.title = `Quote Generator | ${this.author.split(" ")[0]} quotes`;

    this.$store.dispatch("setQuotes", `?author=${this.$route.params.author}`);
  },
};
</script>

<style scoped>
.title {
  color: var(--color-gray-01);
  font-size: var(--font-36);
  font-weight: var(--fontw-bold);
  margin-bottom: 140px;
}

@media (max-width: 768px) {
  .title {
    font-size: var(--font-24);
    text-align: center;
    margin-bottom: 80px;
  }
}
</style>
