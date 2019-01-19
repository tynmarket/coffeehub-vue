<template>
  <div class="container">
    <sidebar />
    <main class="content">
      <pickup />
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Pickup from "./Pickup.vue";

export default {
  components: {
    Sidebar,
    Pickup
  }
};
</script>

<style lang="scss">
.container {
  margin-left: auto;
  margin-right: auto;
  max-width: $container-width;
  display: flex;

  @media screen and (min-width: $tablet) {
    margin-top: 2rem;
  }
}

.content {
  flex: 1;

  .main-content {
    padding: 0 1rem;

    @media screen and (min-width: $desktop) {
      padding-right: 0;
    }
  }
}
</style>
