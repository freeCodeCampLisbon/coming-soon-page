<template>
  <div></div>
</template>

<script>
export default {
  fetchOnServer: false,
  async fetch() {
    try {
      const document = await this.$prismic.api.getSingle('meetups', {
        orderings: '[my.meetups.date_time desc]',
      })
      if (document) this.meetup = document.data
    } catch (error) {
      console.log('error: ', error)
    }
  },
  data: () => ({
    meetup: null,
  }),
}
</script>
