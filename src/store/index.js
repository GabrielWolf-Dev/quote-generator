import { createStore } from "vuex";

export default createStore({
  state: {
    quotes: null,
    isLoading: false,
    urlApi: "https://quote-garden.onrender.com/api/v3/quotes",
  },
  mutations: {
    SET_QUOTES(state, payload) {
      state.quotes = payload;
    },
    HANDLE_LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async setQuotes(context, payload = "") {
      try {
        context.commit("HANDLE_LOADING", true);
        const response = await fetch(`${context.state.urlApi}${payload}`);
        const data = await response.json();

        context.commit("SET_QUOTES", data);
      } catch (error) {
        console.error(error.message);
      } finally {
        context.commit("HANDLE_LOADING", false);
      }
    },
  },
});
