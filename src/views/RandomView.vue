<template>
  <div class="container">
    <HeaderComponent />
    <WrapperPhraseComponent>
      <template v-slot:default="{ authorURL }">
        <AuthorPhrase
          :authorURL="authorURL"
          :quoteAuthor="quotes.data[0].quoteAuthor"
          :quoteGenre="quotes.data[0].quoteGenre"
        />
      </template>
    </WrapperPhraseComponent>
    <FooterComponent />
  </div>
</template>

<script>
import { mapState } from "vuex";

import HeaderComponent from "@/components/HeaderComponent.vue";
import WrapperPhraseComponent from "@/components/WrapperPhraseComponent.vue";
import AuthorPhrase from "@/components/AuthorPhrase.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    WrapperPhraseComponent,
    AuthorPhrase,
    FooterComponent,
  },
  computed: {
    ...mapState(["quotes", "isLoading"]),
  },
  created() {
    document.title = "Quote Generator | Random Quotes";

    this.$store.dispatch("setQuotes", "/random");
  },
};
</script>
