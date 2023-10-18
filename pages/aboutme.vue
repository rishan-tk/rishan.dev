<template>
  <div class="root-div"> <!-- root element-->
    <UtilsNavBar />
    <div class="container content">
        <ContentsAboutMeContent />
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