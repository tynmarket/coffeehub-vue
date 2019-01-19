<template>
  <section class="pickup">
    <a href="http://www.mui-motosumi.co.jp" target="_blank">
      <img class="pickup-image" src="../assets/mui.png" />
      <span class="pickup-note"> ピックアップ </span>
      <div class="pickup-area">
        <h1 class="pickup-shop">Mui</h1>
        <p class="pickup-text">
          最高品質のコーヒー豆と確かな焙煎の技術。元住吉の実店舗では美味しいケーキも。
        </p>
      </div>
    </a>
  </section>
</template>

<style lang="scss">
$pickup-height: 232px;

.pickup {
  position: relative;
  height: $pickup-height;
  margin-bottom: 2.5rem;
  overflow: hidden;

  @media screen and (min-width: $tablet) {
    margin-left: 1rem;
  }

  .pickup-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 100%;

    // 実画像の比率
    @media screen and (min-width: $pickup-height * 2) {
      width: 100%;
      height: auto;
    }
  }

  .pickup-note {
    position: absolute;
    display: inline-block;
    margin-top: 1rem;
    margin-left: 1rem;
    padding-bottom: 0.2rem;
    border-bottom: 2px solid $color-accent;
    font-size: $font-size-s;
  }

  .pickup-area {
    position: absolute;
    bottom: 0;
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    font-weight: bold;
    color: $color-primary-dark;
    background-color: $color-white-transparent;
  }

  .pickup-shop {
    margin-bottom: 0.5rem;
    font-size: $font-size-l;
  }
}
</style>
