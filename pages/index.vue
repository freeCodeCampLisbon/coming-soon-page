<template>
  <div class="container">
    <h1
      class="title is-family-secondary has-text-white is-size-1 has-text-centered mb-6"
    >
      Hello newbie coder, aspiring or even programmer! 👋
    </h1>
    <div class="content px-5">
      <div class="block is-size-5 is-family-primary mb-0">
        <p>
          We are the freeCodeCamp Lisbon, an open-source community that is part
          of the worldwide community:
          <a
            href="https://www.freecodecamp.org"
            class="link"
            target="_blank"
            rel="noopener"
            >freecodecamp.org</a
          >
          We are a group from Lisbon/Portugal where we want you to learn with us
          in a free way!
        </p>
        <p>That's right, you read well, it's completely free!</p>
        <p>
          You start with HTML / CSS / JS, then delve into javascript themes, use
          libraries and then even frameworks! But calm the horses, it isn't easy
          to do it! It takes a lot of resilience, willpower and never giving up!
          And for that, you have the help of the community with many newbies,
          many mentors who can always help you!
        </p>
        <p>
          We've already got a lot of people finding their first job as
          developers!
        </p>
        <p>
          That's right, because we really enjoy learning, and sharing
          experiences / knowledge!
        </p>
        <p>It's never too late to learn, and that's our motto!</p>
        <p class="has-text-weight-bold">Signup below for news.</p>
      </div>
      <ValidationObserver
        v-slot="{ handleSubmit }"
        ref="observer"
        tag="div"
        class="columns mt-6"
      >
        <div class="column is-2">
          <input-with-validation
            v-model="name"
            vid="name"
            rules="required"
            placeholder="Name"
            :readonly="loading"
          />
        </div>
        <div class="column is-2">
          <input-with-validation
            v-model="email"
            vid="email"
            rules="required|email"
            placeholder="Email"
            :readonly="loading"
          />
        </div>
        <div class="column is-2">
          <p class="control">
            <b-button
              type="is-link"
              :class="{ 'is-loading': loading }"
              :disabled="loading"
              @click="handleSubmit(submit)"
              >Submit</b-button
            >
          </p>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<style scoped lang="scss">
p.has-text-weight-bold {
  text-decoration: underline;
}
</style>

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
        await this.$axios.$post(
          '.netlify/functions/newsletter',
          JSON.stringify({
            name: this.name,
            email: this.email,
          })
        )

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
}
</script>
