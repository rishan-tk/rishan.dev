<template>
  <div class="root-div"> <!-- root element-->
    <UtilsNavBar />
    <div class="container content">
        <ContentsContactMeContent />
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