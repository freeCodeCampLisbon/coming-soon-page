<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="content is-medium">
          <h1 class="title is-family-secondary has-text-primary">🔴 LIVE</h1>
          <figure
            v-if="article.data.youtube_embedded"
            class="image is-16by9 mx-0"
          >
            <iframe
              class="has-ratio"
              loading="lazy"
              width="640"
              height="360"
              :src="$prismic.asLink(article.data.youtube_embedded)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </figure>
          <div v-else class="notification is-danger is-light">
            Please contact the support
            <a href="mailto:info@freecodecamplisbon.org"
              >info@freecodecamplisbon.org</a
            >
            to check what's the problem. Thanks camper!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getMeta from '~/utils/meta'

export default {
  async asyncData({ $prismic, error }) {
    try {
      const article = await $prismic.api.getSingle('meetups', {
        orderings: '[my.meetups.date_time desc]',
      })

      return { article }
    } catch (e) {
      error({ statusCode: '404' })
    }
  },
  data: () => ({
    article: [],
  }),
  head() {
    const meta = {
      title: `freeCodeCamp Lisbon - 🔴 LIVE - ${this.$prismic.asText(
        this.article.data.title
      )}`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.CLIENT_URL}/live`,
        },
      ],
    }

    if (this.article)
      meta.meta = getMeta({
        url: `${process.env.CLIENT_URL}/live`,
        description: this.$prismic.asText(this.article.data.description),
        img: this.article.data.event_image.url,
      })
    return meta
  },
}
</script>
