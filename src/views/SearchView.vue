<template>
  <div class="container-search">
    <main v-if="genre !== null && authors !== null">
      <form>
        <fieldset>
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
      </form>
      <div v-if="isGenreSelected || isAuthorSelected">
        <h2>Campos selecionados:</h2>

        <ul>
          <li v-if="isAuthorSelected">Autor: {{ authorSelected }}</li>
          <li v-if="isGenreSelected">Gênero: {{ genreSelected }}</li>
        </ul>
      </div>
    </main>
    <div class="container-loading" v-else>
      <LoadingQuotes />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "SearchView",
  data() {
    return {
      genreSelected: "Choose a genre",
      authorSelected: "Choose a author",
    };
  },
  computed: {
    ...mapState(["genres", "authors"]),
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
    ...mapActions(["setGenres", "setAuthors"]),
  },
  created() {
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
</style>
