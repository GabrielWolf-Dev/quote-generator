<template>
  <div>
    <HeaderComponent />
    <Transition name="fade-page404" :duration="500" appear mode="out-in">
      <section class="container-page404">
        <h1 class="title-page404">Page Not Found</h1>
        <abbr title="Back to home page">
          <router-link to="/" class="btn-link-page404"
            >Back to home page</router-link
          >
        </abbr>
      </section>
    </Transition>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "NotFoundView",
  components: { HeaderComponent, FooterComponent },
};
</script>

<style scoped>
.container-page404 {
  width: 100%;
  height: 100vh;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 80px;
  padding: 24px 2%;
  text-align: center;
}

.title-page404 {
  font-size: 120px;
  color: #e2e2e2;
}

.btn-link-page404 {
  padding: 16px 24px;
  font-size: var(--font-18);
  background-color: #e2e2e2;
  color: var(--color-gray-02);
  text-decoration: none;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .title-page404 {
    font-size: 80px;
    padding: 0 2%;
  }
}

@media (max-width: 438px) {
  .title-page404 {
    font-size: 60px;
    padding: 0 2%;
  }

  .btn-link-page404 {
    padding: 16px;
  }
}

/* -- Transitions -- */
.fade-page404-enter-active,
.fade-page404-leave-active {
  transition: all 0.5s;
}

.fade-page404-enter-from,
.fade-page404-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>
