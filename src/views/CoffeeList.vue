<template>
  <section class="main-content">
    <div class="section-title-and-roast-select">
      <h1 :class="`section-title coffee-color-${roast || 'high'}`">
        新着コーヒー豆一覧
        <span v-if="roastText" class="hide-for-mobile"
          >（{{ roastText }}ロースト）</span
        >
      </h1>
      <!-- for mobile
      <span className="roast-select-button" onClick={this.openRoastList}>
        絞り込み
      </span>
      <RoastList open={this.state.openRoastList} />
      <div
        className={`roast-select-overlay ${this.state.openRoastList ? "show" : ""}`}
        onClick={this.closeRoastList}
      />
      -->
      <div />
    </div>
    <div :class="showSpinner ? 'spinner show' : ''" />
    <div>
      <coffee-item
        v-for="(coffee, index) in coffees"
        v-bind="coffee"
        v-bind:index="index"
        v-bind:key="coffee.country + coffee.area + coffee.roast"
      ></coffee-item>
    </div>
    <!--
    <Pagination prev={prev} next={next} roast={roast} />
    -->
  </section>
</template>

<script>
import axios from "axios";
import CoffeeItem from "@/components/CoffeeItem.vue";

export default {
  components: {
    CoffeeItem
  },
  data() {
    return {
      showSpinner: false,
      roast: null,
      coffees: []
    };
  },
  created() {
    //this.coffees = [{"shop":"ROKUMEI COFFEE CO.","country":"グアテマラ","taste":"ブルーベリーやピーチ、ミルクチョコレートのようなフレーバー。キャンディのような甘さが特徴的。口に含んだ時の質感や触感もなめらかで、丁寧な飲み口です。","roast_text":"シナモン","roast":"cinnamon","arrival_date":"6月27日","arrival_month":6,"url":"https://www.rococo-coffee.co.jp/SHOP/rcso-gt-003.html","area":"エル・インフェルト ウノ農園 トラディショナル ナチュラル","new":false}]
    this.fetchCoffees();
  },
  watch: {
    $route: "fetchCoffees"
  },
  computed: {
    roastText() {
      return this.roastToText(this.roast);
    }
  },
  methods: {
    fetchCoffees() {
      this.roast = this.$route.params.roast;
      console.log("Roast is: " + this.roast);

      this.showSpinner = true;
      window.scrollTo(0, 0);
      this.coffees = [];

      this.getCoffees(this.roast).then(coffees => {
        this.coffees = coffees;
        this.showSpinner = false;
      });
    },
    getCoffees: async function(roast, query) {
      try {
        const response = await axios.get(this.endpoint(roast, query));
        return response.data;
      } catch (error) {
        // TODO: error report
      }
    },
    endpoint(roast, query) {
      const ENDPOINT_COFEES = "http://coffeehub.tokyo/api/coffees";
      if (roast != null) {
        return `${ENDPOINT_COFEES}/roast/${roast}${query || ""}`;
      } else {
        return `${ENDPOINT_COFEES}${query || ""}`;
      }
    },
    roastToText(roast) {
      return {
        cinnamon: "シナモン",
        city: "シティ",
        french: "フレンチ",
        fullcity: "フルシティ",
        high: "ハイ",
        medium: "ミディアム"
      }[roast];
    }
  }
};
</script>

<style lang="scss">
.section-title-and-roast-select {
  position: relative;

  .section-title {
    font-weight: bold;
    font-size: $font-size-l;
    margin-bottom: 1.5rem;

    @media screen and (max-width: $mobile) {
      text-align: center;
    }
  }
}

.section-arrival {
  position: relative;
  color: $color-primary;
  font-weight: bold;
  font-size: $font-size-l;
  text-align: center;
  margin: 2rem 0;

  .section-arrival-title {
    position: relative;
    background-color: $color-white;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.coffee-list {
  opacity: 0;
  transition: opacity 0.1s ease-in;

  &.show {
    opacity: 1;
    transition: opacity 0.1s ease-in;
  }
}

.spinner.show {
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 4rem auto;
  border-top: 0.5rem solid $color-accent-transparent;
  border-right: 0.5rem solid $color-accent-transparent;
  border-bottom: 0.5rem solid $color-accent-transparent;
  border-left: 0.5rem solid $color-accent;
  transform: translateZ(0);
  animation: spinner 1s infinite linear;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
