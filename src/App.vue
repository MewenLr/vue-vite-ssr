<template>
  <div class="container mx-auto flex-center flex-col">
    <img
      src="@/assets/logo.png"
      alt="logo"
    >
    <nav>
      <router-link to="/">
        Home
      </router-link>
      |
      <router-link to="/about">
        About
      </router-link>
    </nav>

    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from '@/pages/Home/Home.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home,
  },
})
</script>

<style lang="sass">
@import './_main'

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $blue-grey
  margin-top: 60px
</style>
