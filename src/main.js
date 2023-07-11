import { createApp } from "vue";
import router from "./router";
import store from "./store";

import App from "./App.vue";
import LoadingQuotes from "./components/LoadingQuotes.vue";

const app = createApp(App);

app.component("LoadingQuotes", LoadingQuotes);
app.use(store).use(router);
app.mount("#app");
