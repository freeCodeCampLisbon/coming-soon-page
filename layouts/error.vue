<template>
  <div class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered has-text-white">
        <h1 v-if="error.statusCode === 404" class="has-text-white">
          Page not found
        </h1>
        <h1 v-else>An error occurred</h1>
        <NuxtLink to="/">Home page</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default', // you can set a custom layout for the error page
}
</script>
