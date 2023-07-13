import { createStore } from "vuex";

export default createStore({
  state: {
    quotes: null,
    genres: null,
    authors: null,
    urlApi: "https://quote-garden.onrender.com/api/v3/",
    isLoading: false,
  },
  mutations: {
    SET_QUOTES(state, payload) {
      state.quotes = payload;
    },
    SET_GENRES(state, payload) {
      state.genres = payload;
    },
    SET_AUTHORS(state, payload) {
      state.authors = payload;
    },
    HANDLE_LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async setQuotes(context, payload = "") {
      const pathQuotes = "quotes";

      try {
        context.commit("HANDLE_LOADING", true);
        const response = await fetch(
          `${context.state.urlApi}${pathQuotes}${payload}`
        );
        const data = await response.json();

        context.commit("SET_QUOTES", data);
      } catch (error) {
        console.error(error.message);
      } finally {
        context.commit("HANDLE_LOADING", false);
      }
    },
    async setGenres(context, payload = "") {
      const pathGenres = "genres";

      try {
        const response = await fetch(
          `${context.state.urlApi}${pathGenres}${payload}`
        );
        const { data } = await response.json();

        context.commit("SET_GENRES", data);
      } catch (error) {
        console.error(error.message);
      }
    },
    async setAuthors(context, payload = "") {
      const pathAuthors = "authors";

      try {
        const response = await fetch(
          `${context.state.urlApi}${pathAuthors}${payload}`
        );
        const { data } = await response.json();
        const authors = data.filter((author) => author.length !== 0);

        context.commit("SET_AUTHORS", authors);
      } catch (error) {
        console.error(error.message);
      }
    },
  },
});
