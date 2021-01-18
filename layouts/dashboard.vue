<template>
  <div class="is-flex" style="min-height: 100vh">
    <b-sidebar fullheight open position="static">
      <div class="p-4">
        <img
          src="/img/freecodecamp_white_horizontal_orange.svg"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <b-menu>
          <b-menu-list label="Meetups">
            <b-menu-item
              icon="information-outline"
              label="Latest Meetup"
              tag="nuxt-link"
              to="/dashboard/latest-meetup"
            ></b-menu-item>

            <b-menu-item icon="account" label="Suggestions" />
          </b-menu-list>
          <b-menu-list label="Actions">
            <b-menu-item label="Logout"></b-menu-item>
            <b-menu-item label="Back to main site"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
    <main class="is-flex-grow-1">
      <section class="section">
        <div class="container">
          <nuxt />
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  data: () => ({
    expandOnHover: false,
    mobile: 'reduce',
    reduce: false,
  }),
}
</script>
<style lang="scss">
.sidebar-content {
  background: #f59a31 !important;
}
// .sidebar-page {
//   display: flex;
//   flex-direction: column;
//   min-height: 100%;
//   // min-height: 100vh;
//   .sidebar-layout {
//     display: flex;
//     flex-direction: row;
//     min-height: 100%;
//     // min-height: 100vh;
//   }
// }
</style>
