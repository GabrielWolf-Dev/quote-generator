import { createStore } from "vuex";

export default createStore({
  state: {
    quotes: null,
    urlApi: "https://quote-garden.onrender.com/api/v3/quotes",
  },
  mutations: {
    SET_QUOTES(state, payload) {
      state.quotes = payload;
    },
  },
  actions: {
    async setQuotes(context, payload = "") {
      const response = await fetch(`${context.state.urlApi}${payload}`);
      const data = await response.json();

      context.commit("SET_QUOTES", data);
    },
  },
});
