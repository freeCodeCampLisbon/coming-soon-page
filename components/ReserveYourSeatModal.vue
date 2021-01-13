<template>
  <ValidationObserver v-slot="{ handleSubmit }" ref="observer" tag="form">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Reserve your seat</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body content mb-0">
        <div class="content has-text-info">
          <p>
            <strong>Thank you for your interest in our event!</strong>
          </p>
          <b-field label="Name">
            <b-input
              v-model="name"
              type="name"
              placeholder="What's your name?"
              required
            >
            </b-input>
          </b-field>
          <b-field label="Email">
            <b-input
              v-model="email"
              type="email"
              placeholder="Your email"
              required
            >
            </b-input>
          </b-field>
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
import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
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
        this.$buefy.notification.open({
          duration: 3000,
          message: `${error.response.data.message} ${emoji}`,
          position: 'is-top',
          type: `is-${error.response.data.type}`,
          closable: true,
        })
      }
    },
  },
}
</script>
