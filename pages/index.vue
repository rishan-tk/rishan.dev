<template>
  <div>
    <NavBar />
    <div class="container
        flex flex-col flex-wrap
        px-4
        py-52
        mx-auto">
        <Home />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head: {
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  }
})
</script>
