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
      <div class="block py-6 mb-0">
        <a
          class="link icon is-medium mr-4"
          href="https://www.facebook.com/groups/free.code.camp.lisbon/"
          target="_blank"
          rel="noopener"
        >
          <i class="icon-facebook is-size-4"></i>
        </a>
        <a
          class="link icon is-medium mr-4"
          href="https://twitter.com/fcclisbon"
          target="_blank"
          rel="noopener"
        >
          <i class="icon-twitter is-size-4"></i>
        </a>
        <a
          class="link icon is-medium mr-4"
          href="https://www.linkedin.com/company/freecodecamplisbon/"
          target="_blank"
          rel="noopener"
        >
          <i class="icon-linkedin is-size-4"></i>
        </a>
        <a
          class="link icon is-medium mr-4"
          href="https://github.com/organizations/freeCodeCampLisbon"
          target="_blank"
          rel="noopener"
        >
          <i class="icon-github is-size-4"></i>
        </a>
        <a
          class="link icon is-medium mr-4"
          href="https://www.meetup.com/pt-BR/freeCodeCamp-Lisbon/"
          target="_blank"
          rel="noopener"
        >
          <i class="icon-meetup is-size-4"></i>
        </a>
        <a
          class="link icon is-medium"
          href="mailto:info@freecodecamplisbon.org"
          target="_blank"
          rel="noopener"
        >
          <i class="icon-mail is-size-4"></i>
        </a>
      </div>
      <ValidationObserver
        ref="observer"
        v-slot="{ handleSubmit }"
        class="field is-grouped"
      >
        <input-with-validation
          v-model="name"
          rules="required"
          placeholder="Name"
          class="mr-5"
        />
        <input-with-validation
          v-model="email"
          rules="required|email"
          placeholder="Email"
          class="mr-5"
        />
        <p class="control">
          <b-button type="is-link" @click="handleSubmit(submit)"
            >Search</b-button
          >
        </p>
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
  }),
  methods: {
    submit() {
      console.log('Form submitted :D')
    },
  },
}
</script>
