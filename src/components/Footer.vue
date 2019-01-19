<template>
  <footer class="footer">
    <p class="copyright">
      ©
      <a
        class="twitter-name"
        href="https://twitter.com/tynmarket"
        target="_blank"
      >
        tynmarket
      </a>
    </p>
    <div class="github">
      <a href="https://github.com/tynmarket/coffeehub" target="_blank">
        <img src="../assets/github.svg" />
      </a>
    </div>
    <div class="copyright-flaticon">
      Icons made by
      <a href="http://www.freepik.com" title="Freepik" target="_blank">
        &nbsp;Freepik&nbsp;
      </a>
      is licensed by
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
      >
        CC 3.0 BY
      </a>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #e6e6e6;

  .copyright {
    margin-bottom: 2rem;
    text-align: center;

    .twitter-name {
      margin-left: 0.2rem;

      &:hover {
        color: $color-black-dark;
      }
    }
  }

  .github {
    width: 24px;
    margin: 0 auto 2rem auto;
  }

  .copyright-flaticon {
    text-align: center;
    font-size: $font-size-s;
  }
}
</style>
