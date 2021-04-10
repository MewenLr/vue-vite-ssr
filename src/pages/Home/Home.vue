<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const msg = ref<string>('Home')

    return {
      msg,
    }
  },
})
</script>
