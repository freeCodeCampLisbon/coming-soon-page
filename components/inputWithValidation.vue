<template>
  <ValidationProvider
    v-slot="{ errors, valid }"
    :vid="vid"
    :name="$attrs.name || $attrs.label"
    :rules="rules"
  >
    <b-field
      v-bind="$attrs"
      :type="{ 'is-danger': errors[0], 'is-success': valid }"
      :message="errors"
    >
      <label :for="vid" class="is-sr-only" v-text="label"></label>
      <b-input :id="vid" v-model="innerValue" v-bind="$attrs"></b-input>
    </b-field>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
  props: {
    vid: {
      type: String,
      default: '',
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    rules: {
      type: [Object, String],
      default: '',
    },
    value: {
      type: null,
      default: '',
    },
  },
  data: () => ({
    innerValue: '',
  }),
  watch: {
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    value(newVal) {
      this.innerValue = newVal
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  },
}
</script>
