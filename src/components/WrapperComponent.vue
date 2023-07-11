<template>
  <main class="container-phrase" v-if="quotes !== null && !isLoading">
    <div>
      <PhraseComponent :phrase="phrase" />

      <slot :authorURL="authorURL"></slot>
    </div>
  </main>

  <LoadingQuotes v-else />
</template>

<script>
import { mapState } from "vuex";

import PhraseComponent from "@/components/PhraseComponent.vue";

export default {
  name: "WrapperComponent",
  components: {
    PhraseComponent,
  },
  computed: {
    ...mapState(["quotes", "isLoading"]),
    phrase() {
      return `“${this.quotes.data[0].quoteText}”`;
    },
    authorURL() {
      return this.quotes.data[0].quoteAuthor.replace(" ", "%20");
    },
  },
};
</script>
