<template>
  <div> <!-- root element-->
    <UtilsNavBar />
    <div class="container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto">
        <ContentsCMContent />
    </div>
    <UtilsFooter />
  </div> <!-- root element-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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