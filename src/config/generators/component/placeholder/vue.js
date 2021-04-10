module.exports = (name) => `<template>
  <div class="${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}">
    ${name} component
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '${name}',
  components: {
  },
  props: {
  },
  setup() {

    return {
    }
  },
})
</script>

<style lang="scss">
.${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()} {
}
</style>
`
