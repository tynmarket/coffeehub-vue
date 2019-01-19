<template>
  <aside class="sidebar">
    <section class="sidebar-content">
      <h3 class="section-roast-title">ロースト度合いから選ぶ</h3>
      <ul>
        <li class="sidebar-item">
          <router-link :to="path.cinnamonRoast" class="roast-cinnamon">
            シナモンロースト
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link :to="path.mediumRoast" class="roast-medium">
            ミディアムロースト
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link :to="path.highRoast" class="roast-high">
            ハイロースト
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link :to="path.cityRoast" class="roast-city">
            シティロースト
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link :to="path.fullcityRoast" class="roast-fullcity">
            フルシティロースト
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link :to="path.frenchRoast" class="roast-french">
            フレンチロースト
          </router-link>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import coffeePath from "./mixin/coffeePath";

export default {
  mixins: [coffeePath]
};
</script>

<style lang="scss">
.section-roast-title {
  background-color: $color-border;
  padding: 2rem 0;
  padding-left: 1rem;
}

.sidebar {
  width: 300px;

  @media screen and (max-width: $tablet) {
    display: none;
  }

  .sidebar-content {
    margin-right: 1rem;
  }
}

.sidebar-item {
  margin-right: 1rem;
  border-bottom: 1px solid $color-border;

  &:hover {
    background-color: $color-gray-transparent;
  }

  & > a {
    display: block;
    padding: 2rem 0;
    padding-left: 2rem;

    &:hover {
      font-weight: bold;
    }

    &.roast-cinnamon:hover {
      color: $color-cinnamon-roast;
    }

    &.roast-medium:hover {
      color: $color-medium-roast;
    }

    &.roast-high:hover {
      color: $color-high-roast;
    }

    &.roast-city:hover {
      color: $color-city-roast;
    }

    &.roast-fullcity:hover {
      color: $color-fullcity-roast;
    }

    &.roast-french:hover {
      color: $color-french-roast;
    }
  }
}
</style>
