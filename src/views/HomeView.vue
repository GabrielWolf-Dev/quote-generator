<template>
  <div class="home">
    <header>
      <RandomBtn />
    </header>
    <main v-if="quotes !== null && !isLoading">
      <div>
        <p class="quote-phrase">{{ phrase }}</p>

        <aside class="quote-desc">
          <h2 class="quote-author">{{ quotes.data[0].quoteAuthor }}</h2>
          <span class="quote-genre">{{ quotes.data[0].quoteGenre }}</span>

          <img
            class="quote-icon"
            src="/assets/svg/arrow-right.svg"
            alt="Arrow right icon"
          />
        </aside>
      </div>
    </main>
    <LoadingQuotes v-else />
    <FooterComponent />
  </div>
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
    phrase() {
      return `“${this.quotes.data[0].quoteText}”`;
    },
  },
  created() {
    this.$store.dispatch("setQuotes", "/random");
  },
};
</script>

<style scoped>
.home {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
}

header {
  margin-left: auto;
  padding: 60px 2%;
}

main {
  width: 100%;
  max-width: 800px;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  padding: 60px 2%;
  margin: 0 auto;
}

.quote-phrase {
  font-weight: var(--fontw-default);
  font-size: var(--font-36);
  color: var(--color-black);
  padding-left: 100px;
  border-left: 8px solid var(--color-yellow);
  margin-bottom: 160px;
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
</style>
