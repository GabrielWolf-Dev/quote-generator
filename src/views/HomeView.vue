<template>
  <div class="home">
    <section class="banner">
      <img class="banner-img" src="/assets/img/banner.jpg" alt="Banner Home" />

      <div class="banner-description">
        <h2 class="banner-title">
          {{ title }}
        </h2>
        <p class="banner-paragraph">
          {{ description }}
        </p>
        <p class="banner-paragraph">
          {{ complement }}
        </p>

        <nav class="list-links">
          <router-link class="link" to="/random">
            <abbr title="Random Quote Page"
              ><img
                style="position: relative; top: 2px"
                src="/assets/svg/random-icon.svg"
                alt="Random Icon" /></abbr
          ></router-link>
          <router-link class="link" to="/search">
            <abbr title="Search Quotes Page"
              ><img
                style="position: relative; top: 2px"
                src="/assets/svg/search.svg"
                alt="Search Icon"
            /></abbr>
          </router-link>
        </nav>
      </div>
    </section>

    <img
      class="blob-bg"
      src="/assets/svg/blob.svg"
      alt="Blob illustration background"
    />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      title: "Find the most varied quotes from successful people!",
      description:
        "Get to know great quotes from successful people and have good reflections to help you mainly in your professional career and achieve your goals and goals to be successful 🎯 🏆",
      complement:
        "Have fun with the quote generator and find your favorite quotes!",
    };
  },
  created() {
    document.title = "Quote Generator | Home";
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  padding: 24px 2%;
  overflow-y: hidden;
  background-color: var(--color-white);
  position: relative;
  z-index: 1;
}

.blob-bg {
  width: 1000px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

.banner {
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
}

.banner-img {
  max-width: 600px;
  border-radius: 8px;
}

.banner-title {
  font-size: var(--font-36);
  color: var(--color-gray-01);
  margin-bottom: 24px;
}

.banner-paragraph {
  font-size: var(--font-18);
  color: var(--color-gray-02);
}

.banner-paragraph:nth-of-type(2) {
  margin-top: 8px;
}

.list-links {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
}

.link {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background-color: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1280px) {
  .home {
    height: initial;
    overflow-y: initial;
  }

  .blob-bg {
    display: none;
  }

  .banner-img {
    max-width: 400px;
  }
}

@media (max-width: 868px) {
  .banner {
    flex-direction: column;
    justify-content: center;
  }

  .banner-img {
    max-width: 200px;
  }

  .banner-description {
    text-align: center;
    padding: 0 4%;
  }

  .banner-title {
    font-size: var(--font-24);
    margin-bottom: 16px;
  }

  .list-links {
    margin-top: 16px;
  }

  .banner-paragraph {
    font-size: var(--font-14);
  }

  .list-links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  }
}
</style>
