<template>
  <div class="root-div"> <!-- root element-->
    <UtilsNavBar />
    <div class="container content">
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