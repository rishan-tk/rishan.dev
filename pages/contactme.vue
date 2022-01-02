<template>
  <div>
    <NavBar />
    <div class="container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto">
        <Content />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactMe',
  head: {
    title: 'Contact Me',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Contact me description'
      }
    ],
  }
})
</script>