<template>
  <p class="phrase" v-for="phrase in phrases" :key="phrase._id">
    “{{ phrase.quoteText }}”
  </p>
</template>

<script>
export default {
  name: "PhraseComponent",
  props: ["phrases"],
};
</script>

<style scoped>
.phrase {
  font-weight: var(--fontw-default);
  font-size: var(--font-36);
  color: var(--color-black);
  padding-left: 100px;
  border-left: 8px solid var(--color-yellow);
  margin-bottom: 160px;
}

.phrase:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .phrase {
    font-size: var(--font-24);
    color: var(--color-black);
    padding-left: 100px;
    border-left: 8px solid var(--color-yellow);
    margin-bottom: 80px;
  }
}

@media (max-width: 480px) {
  .phrase {
    padding-left: 0;
    border-left: 0;
    text-align: center;
  }
}
</style>
