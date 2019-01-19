<template>
  <article>
    <a class="card-item" :href="url" target="_blank">
      <div class="card-item-left">
        <div class="card-item-cup-and-shop">
          <span class="card-item-cup-wrapper">
            <svg class="card-item-cup" viewBox="0 0 24 24">
              <path
                d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z"
              />
            </svg>
          </span>
          <span class="card-item-shop"> {{ shop }} </span>
        </div>
        <div class="card-item-coffee-bean-and-roast">
          <span class="card-item-coffee-bean-wrapper">
            <svg :class="`card-item-coffee-bean coffee-bean-${roast}`" viewBox="0 0 326.05 326.05">
              <path
                d="M14.257,275.602C-17.052,220.391,4.253,133.798,69.023,69.01c73.553-73.543,175.256-91.076,227.182-39.16   c0.061,0.068,0.112,0.145,0.195,0.214c-10.392,30.235-43.486,94.567-142.686,129.348C62.842,191.29,27.788,241.972,14.257,275.602z    M310.81,48.75c-7.871,18.361-21.57,42.356-45.173,65.957c-23.725,23.735-57.445,47.046-105.208,63.8   C63.49,212.5,36.405,268.149,28.848,295.116c0.357,0.36,0.664,0.733,1.011,1.083c51.921,51.918,153.628,34.386,227.176-39.169   C322.479,191.585,343.526,103.869,310.81,48.75z"
              />
            </svg>
          </span>
          <span class="card-item-roast"> {{ roast_text }} </span>
          <span class="card-item-roast-sufix hide-for-mobile"> ロースト </span>
        </div>
        <div class="card-item-arrival-date hide-for-mobile">{{ arrival_date }}</div>
      </div>
      <div class="card-item-right">
        <h2 class="card-item-title">
          <span class="card-item-country"> {{ country }} </span>
          <span class="card-item-area"> {{ area }} </span>
        </h2>
        <div class="card-item-taste">{{ taste }}</div>
      </div>
      <!-- {coffee.new ? ribbon() : null} -->
      <div v-if="index == 0" class="ribbon_area"><span class="ribbon"> NEW </span></div>
    </a>
  </article>
</template>

<script>
export default {
  props: {
    index: Number,
    shop: String,
    country: String,
    taste: String,
    roast_text: String,
    roast: String,
    arrival_date: String,
    arrival_month: Number,
    url: String,
    area: String,
    new: Boolean
  }
};
</script>

<style lang="scss">
$card-item-line-height: 2rem;
$card-item-cup-size: 3rem;
$card-item-coffee-bean-size: 2rem;
$card-item-coffee-bean-padding: ($card-item-cup-size - $card-item-coffee-bean-size) / 2;

.card-item {
  @include border-hover();

  position: relative;
  margin-bottom: 1.5rem;
  padding: 0.8rem;
  border: 1px solid $color-border;
  border-radius: $border-radius-size;
  box-shadow: 0 2px 5px $color-gray;
  display: flex;
  line-height: $card-item-line-height;
  height: 10.5rem;
  opacity: 1;
  transition: opacity 1s linear;

  .card-item-left {
    flex: 1;
    padding-right: 0.25rem;
    word-break: break-word;
  }

  .card-item-right {
    flex: 2;
    padding-left: 0.25rem;
  }
}

.card-item-cup-and-shop,
.card-item-coffee-bean-and-roast {
  display: flex;
  align-items: center;
}

.card-item-cup-and-shop {
  margin-bottom: 0.75rem;
}

.card-item-shop,
.card-item-roast {
  padding-left: 0.5rem;
}

.card-item-shop {
  max-height: $card-item-line-height * 3;
  overflow: hidden;
}

.card-item-cup-wrapper {
  .card-item-cup {
    width: $card-item-cup-size;
    height: $card-item-cup-size;
    margin-bottom: -0.5rem;
    fill: $color-black;
  }
}

.card-item-coffee-bean-wrapper {
  display: inline-block;
  padding-right: $card-item-coffee-bean-padding;
  padding-left: $card-item-coffee-bean-padding;

  .card-item-coffee-bean {
    width: $card-item-coffee-bean-size;
    height: $card-item-coffee-bean-size;
    margin-bottom: -0.25rem;
  }
}

.card-item-roast,
.card-item-roast-sufix {
  color: $color-accent;
}

.card-item-arrival-date {
  margin-top: 0.75rem;
  margin-left: $card-item-cup-size + $card-item-coffee-bean-padding + 0.25rem;
  font-size: $font-size-s;
}

.card-item-title {
  margin-bottom: 0.4rem;
  color: $color-primary-dark;
  font-weight: bold;
  max-height: $card-item-line-height * 2;
  overflow: hidden;

  @media screen and (min-width: $tablet) {
    max-height: $card-item-line-height * 1;
  }
}

.card-item-area {
  margin-left: 1rem;
}

.card-item-taste {
  max-height: $card-item-line-height * 3;
  overflow: hidden;

  @media screen and (min-width: $tablet) {
    max-height: $card-item-line-height * 4;
  }
}

.coffee-bean-cinnamon {
  fill: $color-cinnamon-roast;
}

.coffee-bean-medium {
  fill: $color-medium-roast;
}

.coffee-bean-high {
  fill: $color-high-roast;
}

.coffee-bean-city {
  fill: $color-city-roast;
}

.coffee-bean-fullcity {
  fill: $color-fullcity-roast;
}

.coffee-bean-french {
  fill: $color-french-roast;
}

.ribbon_area {
  width: 80px;
  height: 80px;
  overflow: hidden;
  position: absolute;
  bottom: -8px;
  right: -8px;

  &::before,
  &::after {
    position: absolute;
    content: "";
    display: block;
    border: 3px solid $color-ribbon-dark;
  }

  &::before {
    bottom: 0;
    left: 0;
  }

  &::after {
    top: 0;
    right: 0;
  }

  .ribbon {
    position: absolute;
    display: block;
    width: 120px;
    padding: 2px 0;
    background-color: $color-ribbon;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    color: $color-white;
    text-align: center;
    left: -10px;
    bottom: 21px;
    transform: rotate(-45deg);
  }
}
</style>
