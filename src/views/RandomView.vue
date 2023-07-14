<template>
  <div class="container">
    <HeaderComponent />
    <WrapperPhraseComponent>
      <template v-slot:default="{ authorURL }">
        <router-link :to="`/author/${authorURL}`">
          <aside class="quote-desc">
            <h2 class="quote-author">{{ quotes.data[0].quoteAuthor }}</h2>
            <span class="quote-genre">{{ quotes.data[0].quoteGenre }}</span>

            <img
              class="quote-icon"
              src="/assets/svg/arrow-right.svg"
              alt="Arrow right icon"
            />
          </aside>
        </router-link>
      </template>
    </WrapperPhraseComponent>
    <FooterComponent />
  </div>
</template>

<script>
import { mapState } from "vuex";

import HeaderComponent from "@/components/HeaderComponent.vue";
import WrapperPhraseComponent from "@/components/WrapperPhraseComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    WrapperPhraseComponent,
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

<style scoped>
a {
  text-decoration: none;
}

.quote-desc {
  width: 100%;
  max-width: 600px;
  padding: 60px 30px;
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
}

.quote-author {
  font-weight: var(--fontw-bold);
  font-size: var(--font-24);
  color: var(--color-gray-02);
}

.quote-genre {
  font-weight: var(--fontw-default);
  font-size: var(--font-14);
  color: var(--color-gray-03);
}

.quote-icon {
  width: 38px;
  height: 38px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: none;
}

.quote-desc:hover {
  background-color: var(--color-gray-01);
}

:is(.quote-desc:hover) .quote-author {
  color: white;
}

:is(.quote-desc:hover) .quote-icon {
  display: block;
}

@media (max-width: 768px) {
  .quote-desc {
    width: 100%;
    padding: 40px 30px;
  }

  .quote-author {
    font-size: var(--font-18);
  }

  .quote-genre {
    font-size: var(--font-14);
  }

  .quote-icon {
    width: 38px;
    height: 38px;
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
}

@media (max-width: 480px) {
  .quote-desc {
    width: 100%;
    max-width: 400px;
    padding: 40px 20px;
    text-align: center;
  }

  .quote-author {
    font-weight: var(--fontw-bold);
    color: var(--color-gray-02);
  }

  .quote-genre {
    font-weight: var(--fontw-default);
    color: var(--color-gray-03);
    display: inline-block;
    margin: 4px 0;
  }

  .quote-icon {
    width: 24px;
    height: 24px;
    position: initial;
    right: 0;
    top: 0;
    transform: initial;
    display: block;
    margin: 0 auto;
  }
}
</style>
