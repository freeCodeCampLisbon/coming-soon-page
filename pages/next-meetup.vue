<template>
  <div class="hero is-large">
    <div class="hero-body">
      <div v-if="nextEvent && events.length > 0" class="container px-5">
        <h1 class="is-size-1 is-family-secondary has-text-white">
          Next Meetup 🤓
        </h1>
        <div class="first-event">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <figure class="is-16by9">
                <img src="/img/seo.png" />
              </figure>
            </div>
          </div>
          <section class="section">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <div class="content is-medium">
                  <div class="tags">
                    <span
                      v-for="(category, idx) in nextEvent.category"
                      :key="idx"
                      class="tag is-link"
                    >
                      #{{ category }}
                    </span>
                  </div>
                  <time class="is-block subtitle is-5">{{
                    nextEvent.date
                  }}</time>
                  <p class="subtitle is-5 is-spaced">{{ nextEvent.place }}</p>
                  <p
                    class="is-block title is-1 is-family-secondary has-text-link"
                  >
                    {{ nextEvent.title }}
                  </p>
                  <p class="subtitle is-5 has-text-link">
                    By
                    <a
                      class="has-text-weight-bold link"
                      :href="nextEvent.user.path"
                      target="_blank"
                      rel="noopener"
                      >{{ nextEvent.user.name }}</a
                    >
                  </p>
                  <p>
                    {{ nextEvent.description }}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!--    <hr class="has-background-grey-darker" />
    <div class="content"></div> -->
      </div>
      <div v-else class="container px-5 has-text-centered">
        <h1 class="title has-text-white">
          There's currently no meetups in the pipeline 💻
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    events: [],
    /* events: [
      {
        category: ['javascript', 'html'],
        date: '26/11/2020 : 10:00 AM',
        place: 'Online event',
        title: 'This is an awesome event!',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.',
        user: {
          name: 'João Petinga',
          path: 'https://github.com/MrToxy',
        },
      },
      {
        category: ['javascript', 'html'],
        date: '26/11/2020 : 10:00 AM',
        place: 'Online event',
        title: 'This is an awesome event!',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.',
        user: {
          name: 'João Petinga',
          path: 'https://github.com/MrToxy',
        },
      },
      {
        category: ['javascript', 'html'],
        date: '26/11/2020 : 10:00 AM',
        place: 'Online event',
        title: 'This is an awesome event!',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.',
        user: {
          name: 'João Petinga',
          path: 'https://github.com/MrToxy',
        },
      },
      {
        category: ['javascript', 'html'],
        date: '26/11/2020 : 10:00 AM',
        place: 'Online event',
        title: 'This is an awesome event!',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.',
        user: {
          name: 'João Petinga',
          path: 'https://github.com/MrToxy',
        },
      },
    ], */
  }),
  computed: {
    nextEvent() {
      return this.events[0]
    },
    restOfEvents() {
      return this.events.slice(1)
    },
  },
}
</script>

<style lang="scss">
.box {
  &:hover {
    background-color: #f59a31 !important;

    .tag.is-link {
      background-color: #101021 !important;
    }

    .has-text-link,
    .link {
      color: #101021 !important;
    }

    .link {
      text-decoration: underline;
    }
  }
}

.image.is-512x512 {
  width: 512px;
}
</style>
