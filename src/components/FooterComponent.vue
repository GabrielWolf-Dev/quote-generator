<template>
  <footer class="footer">
    <p>
      created by
      <a
        class="link-dev"
        href="https://github.com/GabrielWolf-Dev"
        target="_blank"
        rel="noopener noreferrer"
        >GabrielWolf-Dev</a
      >
      - devChallenges.io
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  position: relative;
  top: 40px;
  text-align: center;
  color: var(--color-gray-03);
  font-size: var(--font-14);
  padding: 60px 2% 24px 2%;
}

.link-dev {
  font-weight: var(--fontw-bold);
  color: var(--color-gray-03);
}

@media (max-width: 768px) {
  .footer {
    position: relative;
    top: 0;
    padding: 40px 2% 24px 2%;
    margin-bottom: 80px;
  }
}
</style>
