<template>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  --color-white: #ffffff;
  --color-black: #000000;
  --color-gray-01: #333333;
  --color-gray-02: #4f4f4f;
  --color-gray-03: #828282;
  --color-yellow: #f7df94;

  font-family: "Raleway", sans-serif;
  --fontw-default: 500;
  --fontw-bold: 700;
  --font-14: 0.875rem;
  --font-18: 1.125rem;
  --font-24: 1.5rem;
  --font-36: 2.25rem;
}

:root {
  font-size: 16px;
}

button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
}

ul {
  list-style: none;
}

fieldset {
  border: 0;
}

.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
}

.container-phrase {
  width: 100%;
  max-width: 800px;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  padding: 60px 2%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .container-phrase {
    max-width: 400px;
    padding: 40px 2%;
  }
}
</style>
