<template>
  <div id="app">
    <header-view />
    <container />
    <footer-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Container from "./components/Container.vue";

export default {
  components: {
    "header-view": Header,
    "footer-view": Footer,
    Container
  }
};
</script>

<style></style>
