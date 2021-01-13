<template>
  <ValidationObserver v-slot="{ handleSubmit }" ref="observer" tag="form">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Reserve your seat</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <div class="content has-text-info">
          <p>
            <strong>Thank you for your interest in our event!</strong>
          </p>
          <ValidationProvider
            v-slot="{ errors, valid }"
            rules="required"
            name="name"
            vid="name"
            slim
          >
            <b-field
              label="Name"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input
                v-model="name"
                type="name"
                placeholder="What's your name?"
              >
              </b-input>
            </b-field>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors, valid }"
            rules="required|email"
            name="email"
            vid="email"
            slim
          >
            <b-field
              label="Email"
              :type="{ 'is-danger': errors[0], 'is-success': valid }"
              :message="errors"
            >
              <b-input v-model="email" type="email" placeholder="Your email">
              </b-input>
            </b-field>
          </ValidationProvider>
          <b-field>
            <b-checkbox v-model="checkNewsletter" type="is-success">
              Also subscribe to our newsletter
            </b-checkbox>
          </b-field>
          <p>Share the meetup with your friends!</p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <b-button
          label="Submit"
          type="is-link"
          :class="{ 'is-loading': loading }"
          :disabled="loading"
          @click="handleSubmit(submit)"
        />
        <b-button label="Close" type="is-danger" @click="$emit('close')" />
      </footer>
    </div>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
      require: false,
    },
    uid: {
      type: String,
      default: '',
      required: true,
    },
    date: {
      type: String,
      default: '',
      required: true,
    },
  },
  data: () => ({
    email: '',
    name: '',
    loading: false,
    checkNewsletter: false,
  }),
  methods: {
    async submit() {
      try {
        this.loading = true
        const reserve = await this.$axios.$post('reserve-seat', {
          name: this.name,
          email: this.email,
          sub_newsletter: this.checkNewsletter,
          date: this.date,
          uid: this.uid,
        })

        if (reserve) {
          const notif = this.$buefy.notification.open({
            duration: 3000,
            message: `${reserve.message} ✔️`,
            position: 'is-top',
            type: 'is-success',
            closable: true,
          })

          notif.$on('close', () => {
            this.$emit('close')
          })
        }
      } catch (error) {
        this.loading = false
        const emoji = error.response.data.type === 'warning' ? '⚠️' : '☠️'

        this.$refs.observer.setErrors(...error.response.data.details)

        this.$buefy.notification.open({
          duration: 3000,
          message: `${error.response.data.message} ${emoji}`,
          position: 'is-top',
          type: `is-${
            error.response.status === 400 &&
            error.response.data.type === undefined
              ? 'danger'
              : error.response.data.type
          }`,
          closable: true,
        })
      }
    },
  },
}
</script>
