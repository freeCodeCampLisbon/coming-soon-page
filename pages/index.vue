<template>
  <div class="container">
    <div class="hero">
      <div class="hero-body">
        <h1
          class="title is-family-secondary has-text-white is-size-2 has-text-centered mb-6"
        >
          Welcome to the
          <a
            href="https://www.freecodecamp.org"
            class="link"
            target="_blank"
            rel="noopener"
            >freecodecamp</a
          >
          study group in Lisbon! 👋
        </h1>
        <div class="content">
          <div class="block is-size-5 is-family-primary mb-0">
            <p>
              No matter if you've just started writing your first lines of code
              or if you're an experienced developer. No fear, my dear, all you
              need is the will power to connect with our community! Learn and
              share your knowledge.
            </p>
            <p class="has-text-weight-bold">
              Sharing is caring and it's never too late to learn, that's our
              motto!
            </p>

            <p class="has-text-weight-bold has-underline">
              Sign up for our news and next events
            </p>
          </div>
          <ValidationObserver
            v-slot="{ handleSubmit }"
            ref="observer"
            tag="div"
            class="columns mt-6"
          >
            <div class="column is-4">
              <input-with-validation
                v-model="name"
                vid="name"
                label="Your name"
                rules="required"
                placeholder="Name"
                :readonly="loading"
              />
            </div>
            <div class="column is-4">
              <input-with-validation
                v-model="email"
                vid="email"
                label="Your email"
                rules="required|email"
                placeholder="Email"
                :readonly="loading"
              />
            </div>
            <div class="column is-4 is-2-desktop">
              <b-button
                type="is-link"
                class="is-fullwidth has-text-info"
                :class="{ 'is-loading': loading }"
                :disabled="loading"
                @click="handleSubmit(submit)"
                >Submit</b-button
              >
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
  },
  data: () => ({
    labelPosition: 'inside',
    name: '',
    email: '',
    loading: false,
  }),
  methods: {
    async submit() {
      try {
        this.loading = true
        await this.$axios.$post('newsletter', {
          name: this.name,
          email: this.email,
        })

        const notif = this.$buefy.notification.open({
          duration: 5000,
          message: 'Subscribed ✔️',
          position: 'is-top',
          type: 'is-success',
          closable: false,
        })

        notif.$on('close', () => {
          this.email = ''
          this.name = ''
          this.$refs.observer.reset()
          this.loading = false
        })
      } catch (e) {
        this.loading = false
        if (e.response.data.errors) {
          this.$refs.observer.setErrors(e.response.data.errors)
        }
      }
    },
  },
  head() {
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: process.env.CLIENT_URL,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.has-underline {
  text-decoration: underline;
}
.submit {
  color: hsl(0deg 0% 14%);
}
</style>
