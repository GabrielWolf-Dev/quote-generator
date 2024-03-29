<template>
  <div class="container-search">
    <HeaderComponent />

    <TransitionGroup :duration="500" appear mode="out-in">
      <main v-if="genre !== null && authors !== null">
        <h1 class="title">Search for specific quotes</h1>

        <form class="form" @submit.prevent="setSearchQuotes">
          <fieldset class="select-group">
            <select name="genres" v-model="genreSelected">
              <option disabled selected>Choose a genre</option>
              <option
                v-for="(genre, index) in genres"
                :key="genre + index"
                :value="genre"
              >
                {{ genre }}
              </option>
            </select>

            <select name="authors" v-model="authorSelected">
              <option disabled selected>Choose a author</option>
              <option
                v-for="(author, index) in authors"
                :key="author + index"
                :value="author"
              >
                {{ author }}
              </option>
            </select>
          </fieldset>
          <button class="button-submit" type="submit">Search Quotes</button>
        </form>

        <Transition name="fade-fields" :duration="500" appear mode="out-in">
          <div class="active-select" v-if="isGenreSelected || isAuthorSelected">
            <h2 class="active-select-title">Selected Fields:</h2>

            <ul class="active-select-list">
              <li class="active-select-item" v-if="isAuthorSelected">
                Author:
                <span class="active-select-text">{{ authorSelected }}</span>
              </li>
              <li class="active-select-item" v-if="isGenreSelected">
                Genre:
                <span class="active-select-text">{{ genreSelected }}</span>
              </li>
            </ul>
          </div>
        </Transition>

        <hr class="line" />

        <TransitionGroup :duration="200" appear mode="out-in">
          <div class="container-phrase" v-if="quotes !== null && !isLoading">
            <PhraseComponent :customStyle="phraseStyle" :phrases="quotes.data">
              <template v-slot:default="{ authorURL, quoteAuthor, quoteGenre }">
                <AuthorPhrase
                  :authorURL="authorURL"
                  :quoteAuthor="quoteAuthor"
                  :quoteGenre="quoteGenre"
                  :customStyle="authorStyle"
                />
              </template>
            </PhraseComponent>
          </div>
          <LoadingQuotes v-else />
        </TransitionGroup>
      </main>

      <div class="container-loading" v-else>
        <LoadingQuotes />
      </div>
    </TransitionGroup>

    <FooterComponent />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import HeaderComponent from "@/components/HeaderComponent.vue";
import PhraseComponent from "@/components/PhraseComponent.vue";
import AuthorPhrase from "@/components/AuthorPhrase.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "SearchView",
  data() {
    return {
      genreSelected: "Choose a genre",
      authorSelected: "Choose a author",
      phraseStyle: {
        fontSize: "var(--font-24)",
        marginBottom: "0",
      },
      authorStyle: {
        maxWidth: "500px",
        padding: "30px",
        margin: "60px 0",
      },
    };
  },
  computed: {
    ...mapState(["genres", "authors", "quotes", "isLoading"]),
    isGenreSelected() {
      return (
        this.genreSelected !== null && this.genreSelected !== "Choose a genre"
      );
    },
    isAuthorSelected() {
      return (
        this.authorSelected !== null &&
        this.authorSelected !== "Choose a author"
      );
    },
  },
  methods: {
    ...mapActions(["setGenres", "setAuthors", "setQuotes"]),
    setSearchQuotes() {
      const authorReAPI = this.authorSelected.replace(" ", "%20");

      if (this.isAuthorSelected && !this.isGenreSelected) {
        this.setQuotes(`?author=${authorReAPI}`);
      } else if (this.isGenreSelected && !this.isAuthorSelected) {
        this.setQuotes(`?genres=${this.genreSelected}`);
      } else if (this.isAuthorSelected && this.isGenreSelected) {
        this.setQuotes(`?author=${authorReAPI}&genres=${this.genreSelected}`);
      }
    },
  },
  components: {
    HeaderComponent,
    PhraseComponent,
    AuthorPhrase,
    FooterComponent,
  },
  created() {
    document.title = "Quote Generator | Search Quotes";
    this.$store.commit("SET_QUOTES", null);
    this.setQuotes("/random");

    this.setGenres();
    this.setAuthors();
  },
};
</script>

<style scoped>
.container-search {
  width: 100%;
  background-color: var(--color-white);
}

.title {
  font-size: var(--font-36);
  color: var(--color-gray-01);
  text-align: center;
  margin: 32px 0;
}

.container-loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 2%;
}

main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 2%;
}

select {
  font-size: var(--font-18);
  padding: 8px 16px;
  border-radius: 4px;
  outline-color: var(--color-yellow);
  background-color: var(--color-white);
  color: var(--color-gray-02);
  border: 1px solid var(--color-gray-01);
  cursor: pointer;
}

.form {
  widows: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-direction: column;
  margin-bottom: 40px;
}

.select-group {
  display: flex;
  gap: 24px;
}

.button-submit {
  padding: 16px 24px;
  background-color: var(--color-yellow);
  color: #4e411b;
  font-size: var(--font-14);
  border-radius: 4px;
}

.active-select {
  text-align: center;
  margin: 0 auto;
}

.active-select-title {
  font-size: var(--font-24);
  color: var(--color-gray-02);
  margin-bottom: 24px;
}

.active-select-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.active-select-item {
  width: fit-content;
  height: 42px;
  display: flex;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: var(--color-white);
  color: var(--color-gray-03);
  border: 2px solid var(--color-yellow);
  font-size: var(--font-18);
}

.active-select-text {
  font-weight: var(--fontw-bold);
  margin-left: 4px;
}

.active-select-text::first-letter {
  text-transform: uppercase;
}

.line {
  width: 60%;
  margin: 80px auto;
  border: 1px solid var(--color-yellow);
}

.container-phrase {
  max-width: 1000px;
  padding: 0 2%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  select {
    width: 100%;
    max-width: 300px;
    height: 42px;
    padding: 0 16px;
  }

  .select-group {
    flex-direction: column;
    gap: 24px;
  }

  .active-select-list {
    flex-direction: column;
  }
}

/* -- Transitions -- */
.fade-fields-enter-active,
.fade-fields-leave-active {
  transition: all 0.5s;
}

.fade-fields-enter-from,
.fade-fields-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
