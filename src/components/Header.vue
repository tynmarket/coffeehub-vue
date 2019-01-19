<template>
  <header class="header">
    <a class="header-logo" href="/">
      <img src="../assets/icon.svg" />
      <span class="header-title"> Coffee Hub </span>
    </a>
  </header>
</template>

<style lang="scss">
.header {
  height: 48px;
  border-bottom: 1px solid $color-border;

  @media screen and (min-width: $tablet) {
    height: 64px;
    margin-left: auto;
    margin-right: auto;
    max-width: $container-width;
  }

  .header-logo {
    height: 100%;
    margin-left: 1rem;
    display: inline-flex;
    align-items: center;
  }

  .header-title {
    margin-left: 0.5rem;
    font-size: 2rem;
  }
}
</style>
