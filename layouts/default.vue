<template>
  <div>
    <header class="section">
      <div class="container">
        <nav
          class="navbar is-transparent is-spaced"
          role="navigation"
          aria-label="main navigation"
        >
          <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item">
              <img
                src="~/assets/img/freecodecamp_white_horizontal_orange.svg"
                srcset="
                  ~/assets/img/freecodecamp_dark_horizontal_orange@2x.png 2x,
                  ~/assets/img/freecodecamp_dark_horizontal_orange@3x.png 3x,
                  ~/assets/img/freecodecamp_dark_horizontal_orange@4x.png 4x
                "
                alt="freeCodeCamp Lisbon"
              />
            </nuxt-link>
          </div>
        </nav>
      </div>
    </header>

    <div class="main section pt-1">
      <div class="content">
        <nuxt />
      </div>
    </div>

    <footer class="footer has-background-info">
      <div class="content has-text-centered">
        <p>
          made with ❤️ by
          <a href="http://freecodecamplisbon.org">freeCodeCamp Lisbon</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.navbar-item img {
  height: 3.75rem;
  max-height: 3.75rem;
}
</style>
