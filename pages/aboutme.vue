<template>
  <div> <!-- root element-->
    <UtilsNavBar />
    <div class="container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto">
        <ContentsAMContent />
    </div>
    <UtilsFooter />
  </div> <!-- root element-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutMe',
  head: {
    title: 'About Me',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ]
  }
})
</script>