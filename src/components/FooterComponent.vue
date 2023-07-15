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
  text-align: center;
  color: var(--color-gray-03);
  font-size: var(--font-14);
  padding: 24px 2% 24px 2%;
}

.link-dev {
  font-weight: var(--fontw-bold);
  color: var(--color-gray-03);
}

@media (max-width: 768px) {
  .footer {
    padding: 24px 2% 24px 2%;
  }
}
</style>
