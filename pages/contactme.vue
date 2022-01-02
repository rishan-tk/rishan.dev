<template>
  <div>
    <NavBar />
    <Content />
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