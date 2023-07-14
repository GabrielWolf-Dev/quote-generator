<template>
  <div v-for="phrase in phrases" :key="phrase._id">
    <p class="phrase" :style="customStyle">“{{ phrase.quoteText }}”</p>
    <slot
      :authorURL="phrase.quoteAuthor.replace(' ', '%20')"
      :quoteAuthor="phrase.quoteAuthor"
      :quoteGenre="phrase.quoteGenre"
    ></slot>
  </div>
</template>

<script>
export default {
  name: "PhraseComponent",
  props: {
    phrases: Array,
    customStyle: {
      type: Object,
      required: false,
      default: () => {
        return {
          fontSize: "var(--font-36)",
          marginBottom: "160px",
        };
      },
    },
  },
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
    font-size: var(--font-18);
    padding: 0 2%;
    border-left: 0;
    text-align: center;
  }
}
</style>
