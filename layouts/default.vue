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
            <nuxt-link to="/" class="navbar-item pl-0">
              <img
                width="260"
                height="60"
                src="/img/freecodecamp_white_horizontal_orange.svg"
                srcset="
                  /img/freecodecamp_white_horizontal_orange@2x.png 2x,
                  /img/freecodecamp_white_horizontal_orange@3x.png 3x,
                  /img/freecodecamp_white_horizontal_orange@4x.png 4x
                "
                alt="freeCodeCamp Lisbon"
              />
            </nuxt-link>

            <button
              role="button"
              class="navbar-burger has-background-info"
              style="border: 0"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              :class="{ 'is-active': isActive }"
              @click="clickHamburger"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div class="navbar-menu" :class="{ 'is-active': isActive }">
            <div class="navbar-end">
              <nuxt-link
                class="navbar-item has-text-weight-medium is-family-secondary mx-4"
                to="/"
              >
                Home
              </nuxt-link>
              <nuxt-link
                class="navbar-item has-text-weight-medium is-family-secondary mx-4"
                to="/next-meetup"
              >
                Next Meetup
              </nuxt-link>
              <nuxt-link
                class="navbar-item has-text-weight-medium is-family-secondary mx-4"
                to="/faq"
              >
                FAQS
              </nuxt-link>
              <a
                class="navbar-item has-background-link has-text-info is-family-secondary has-text-weight-medium btn-coffee mx-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.buymeacoffee.com/fccLisbon"
              >
                ☕ Buy me a BICA
              </a>
              <nuxt-link
                class="navbar-item has-background-link has-text-info is-family-secondary has-text-weight-medium btn-coffee mx-4"
                to="/submit-idea"
              >
                Meetup Proposal
              </nuxt-link>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <div class="main section">
      <div class="content">
        <nuxt />
      </div>
    </div>

    <footer class="footer has-background-info">
      <div class="block mb-0 has-text-centered">
        <a
          v-for="social in socialLinks"
          :key="social.icon"
          :aria-label="social.icon"
          class="button is-info link icon mr-4 has-text-white is-medium"
          :href="social.link"
          target="_blank"
          rel="noopener"
        >
          <i :class="`icon-${social.icon} is-size-5`"></i>
        </a>
      </div>
      <div class="is-block has-text-centered my-2">
        <nuxt-link class="is-size-6" to="/faq">FAQS</nuxt-link>
        <span class="has-text-white">-</span>
        <nuxt-link class="is-size-6" to="/privacy-policy"
          >Privacy Policy</nuxt-link
        >
      </div>
      <div class="content has-text-centered">
        <p>
          Made with <span class="has-text-danger">❤️</span> by
          <nuxt-link to="/">freeCodeCamp Lisbon</nuxt-link>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    isActive: false,
    socialLinks: [
      {
        icon: 'facebook',
        link: 'https://www.facebook.com/groups/free.code.camp.lisbon/',
      },
      {
        icon: 'twitter',
        link: 'https://twitter.com/fcclisbon',
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/freecodecamplisbon/',
      },
      {
        icon: 'github',
        link: 'https://github.com/organizations/freeCodeCampLisbon',
      },
      {
        icon: 'meetup',
        link: 'https://www.meetup.com/pt-BR/freeCodeCamp-Lisbon/',
      },
      {
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCuLddvNje_Dc2J3sCxYVdoA',
      },
      {
        icon: 'mail',
        link: 'mailto:info@freecodecamplisbon.org',
      },
    ],
  }),
  methods: {
    clickHamburger() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-menu.is-active {
  position: absolute;
  left: 0;
  right: 0;
}
.navbar-item img {
  height: 3.75rem;
  max-height: 3.75rem;
}
</style>
