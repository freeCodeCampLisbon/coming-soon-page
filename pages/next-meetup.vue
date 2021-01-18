<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <div v-if="document" class="content is-small">
          <h1 class="is-size-1 is-family-secondary has-text-white">
            Next Meetup 🤓
          </h1>
          <div class="first-event">
            <div class="columns">
              <div class="column is-12 is-8-desktop is-offset-2-desktop">
                <figure class="is-16by9">
                  <prismic-image :field="document.data.event_image" />
                </figure>
              </div>
            </div>
            <section class="section">
              <div class="columns">
                <div class="column is-8-desktop is-offset-2-desktop">
                  <div class="content is-medium">
                    <div v-if="document.data.tech" class="tags">
                      <span
                        v-for="(category, idx) in document.data.tech.split(',')"
                        :key="idx"
                        class="tag is-link"
                      >
                        #{{ category }}
                      </span>
                    </div>
                    <p class="is-block subtitle">
                      <span class="mr-2">📅</span>{{ parsedDate.date
                      }}<span class="ml-5 mr-2">⏰</span>{{ parsedDate.time }}
                      <a
                        class="ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        :href="$prismic.asLink(document.data.location)"
                      >
                        <span class="mr-2">📍</span
                        >{{ document.data.location_name }}
                      </a>
                    </p>
                    <h1
                      class="is-block title mt-6 is-family-secondary has-text-link is-spaced"
                    >
                      {{ $prismic.asText(document.data.title) }}
                    </h1>
                    <p class="subtitle has-text-link">
                      By
                      <prismic-link
                        class="has-text-weight-bold link"
                        target="_blank"
                        rel="noopener"
                        :field="document.data.speaker_url"
                        >{{
                          $prismic.asText(document.data.speaker)
                        }}</prismic-link
                      >
                    </p>
                    <p>
                      {{ $prismic.asText(document.data.description) }}
                    </p>
                    <div class="my-6">
                      <h3 class="is-3 has-text-link">
                        <span class="mr-2">💭</span>Some important things to
                        keep in mind
                      </h3>
                      <div
                        v-if="$prismic.asText(document.data.requirements)"
                        class="content"
                        v-html="$prismic.asHtml(document.data.requirements)"
                      />
                      <p v-else>
                        Nothing important to remember, enjoy the meetup
                      </p>
                    </div>
                    <div class="my-6">
                      <h2 class="is-3 has-text-link">
                        <span class="mr-2">🔗</span>Some links you may find
                        useful
                      </h2>
                      <div
                        v-html="$prismic.asHtml(document.data.useful_links)"
                      />
                    </div>
                  </div>
                  <div class="is-flex is-justify-content-center mt-6">
                    <button
                      class="button has-background-link p-5 is-family-secondary has-text-weight-medium has-text-white button-link btn-coffee"
                      target="_blank"
                      rel="noopener noreferrer"
                      @click="subscribeToEvent(document)"
                    >
                      Reserve your seat now
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div v-else class="container px-5 has-text-centered">
          <h1 class="title has-text-white">
            There's currently no meetups in the pipeline 💻
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReserveYourSeatModalVue from '~/components/ReserveYourSeatModal.vue'
import getMeta from '~/utils/meta'
export default {
  async asyncData({ $prismic, error }) {
    try {
      const document = await $prismic.api.getSingle('meetups', {
        orderings: '[my.meetups.date_time desc]',
      })

      return { document: document && document.data ? document : null }
    } catch (error) {
      console.log('error: ', error)
    }
  },
  data: () => ({
    isModalActive: false,
  }),
  computed: {
    parsedDate() {
      if (!this.document)
        return {
          date: '',
          time: '',
        }
      const date = new Date(this.$prismic.asDate(this.document.data.date_time))
      return {
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(['en-US', 'pt-PT'], {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
        }),
      }
    },
  },
  methods: {
    subscribeToEvent(document) {
      this.isModalActive = !this.isModalActive
      this.$buefy.modal.open({
        parent: this,
        component: ReserveYourSeatModalVue,
        hasModalCard: true,
        trapFocus: true,
        props: {
          uid: document.uid,
          date: document.data.date_time,
          isActive: this.isModalActive,
        },
      })
    },
  },
  head() {
    const meta = {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.CLIENT_URL}/next-meetup`,
        },
      ],
    }
    if (this.document) {
      meta.title = `freeCodeCamp Lisbon - ${this.$prismic.asText(
        this.document.data.title
      )}`
      meta.meta = getMeta({
        url: `${process.env.CLIENT_URL}/next-meetup`,
        description: this.$prismic.asText(this.document.data.description),
        img: this.document.data.event_image.url,
      })
    } else {
      meta.title =
        "freeCodeCamp Lisbon - There's currently no meetups in the pipeline 💻"
      meta.meta = getMeta({
        description:
          "freeCodeCamp Lisbon - There's currently no meetups in the pipeline 💻",
      })
    }
    return meta
  },
}
</script>
