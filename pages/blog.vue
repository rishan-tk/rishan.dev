<template>
  <div> <!-- root element-->
    <UtilsNavBar />
    <div class="container
        flex flex-col flex-wrap
        px-4
        py-16
        mx-auto">
        <ContentsBContent />
    </div>
    <UtilsFooter />
  </div> <!-- root element-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Blog',
  head: {
    title: 'Blog',
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