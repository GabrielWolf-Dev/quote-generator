<template>
  <main class="container-phrase" v-if="quotes !== null && !isLoading">
    <div>
      <slot name="title"></slot>

      <PhraseComponent :phrases="this.quotes.data" />

      <slot :authorURL="authorURL"></slot>
    </div>
  </main>

  <LoadingQuotes v-else />
</template>

<script>
import { mapState } from "vuex";

import PhraseComponent from "@/components/PhraseComponent.vue";

export default {
  name: "WrapperPhraseComponent",
  components: {
    PhraseComponent,
  },
  computed: {
    ...mapState(["quotes", "isLoading"]),
    authorURL() {
      return this.quotes.data[0].quoteAuthor.replace(" ", "%20");
    },
  },
};
</script>
