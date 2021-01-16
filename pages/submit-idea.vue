<template>
  <div class="container is-max-desktop">
    <h1 class="title is-size-2 has-text-white">
      We love new ideias, submit yours now
    </h1>
    <h2 class="subtitle is-size-5 has-text-white">
      If you have an idea you want to expose to the world via a meetup please
      submit your idea below. Anyhting code-related goes, don't be afraid, we
      love to learn new things and so do our campers
    </h2>

    <ValidationObserver ref="observer" v-slot="{ handleSubmit }" slim>
      <form
        class="form mt-6 columns is-justify-content-center is-flex-wrap-wrap"
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <div class="column is-6">
          <input-with-validation
            v-model="form.name"
            vid="name"
            label="Your name"
            rules="required"
            placeholder="What should we call you"
          />
        </div>
        <div class="column is-6">
          <input-with-validation
            v-model="form.email"
            vid="email"
            label="Your email"
            rules="required|email"
            placeholder="Whats your email"
          />
        </div>
        <div class="column is-12">
          <input-with-validation
            v-model="form.message"
            type="textarea"
            vid="message"
            label="Your idea"
            rules="required"
            placeholder="Describe your idea"
          />
        </div>
        <div class="column is-7">
          <b-button
            type="submit"
            class="is-fullwidth has-text-info mt-4"
            :class="{ 'is-loading': loading }"
            :disabled="loading"
            @click="handleSubmit(onSubmit)"
            >Submit</b-button
          >
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
export default {
  components: {
    ValidationObserver,
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      message: '',
    },
    loading: false,
  }),
  methods: {
    async onSubmit() {
      try {
        this.loading = true
        const result = await this.$axios.$post('idea', this.form)
        this.$buefy.notification.open({
          duration: 5000,
          message: result.message,
          position: 'is-top',
          type: 'is-success',
          closable: false,
        })
        this.form.name = ''
        this.form.email = ''
        this.form.message = ''
        this.$refs.observer.reset()
      } catch (error) {
        if (error.response.status === 400 && error.response.data.details) {
          this.$refs.observer.setErrors(error.response.data.details[0])
        } else
          this.$buefy.notification.open({
            duration: 5000,
            message: error.response.data.message,
            position: 'is-top',
            type: 'is-danger',
            closable: false,
          })
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
