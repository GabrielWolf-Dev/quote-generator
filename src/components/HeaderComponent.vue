<template>
  <header class="header">
    <BackRouter />

    <router-link to="/" class="home-link">
      <abbr title="Home Page"
        ><img src="/assets/svg/home.svg" alt="Home icon"
      /></abbr>
    </router-link>

    <nav class="nav">
      <router-link to="/search">
        <abbr title="Search Quotes Page">
          <img
            class="search-icon"
            src="/assets/svg/search.svg"
            alt="Search icon"
        /></abbr>
      </router-link>

      <RandomBtn />
    </nav>
  </header>
</template>

<script>
import BackRouter from "@/components/BackRouter.vue";
import RandomBtn from "@/components/RandomBtn.vue";

export default {
  name: "HeaderComponent",
  components: {
    BackRouter,
    RandomBtn,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 2% 24px 2%;
  position: relative;
}

.nav {
  display: flex;
  gap: 24px;
  align-items: center;
}

.search-icon {
  position: relative;
  top: 0;
}

.home-link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
  .header {
    width: 100%;
    background-color: var(--color-white);
    margin: initial;
    gap: 24px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    padding: 14px 2% 14px 2%;
    z-index: 1;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
