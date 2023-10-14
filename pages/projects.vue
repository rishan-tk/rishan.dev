<template>
  <div class="root-div"> <!-- root element-->
    <UtilsNavBar />
    <div class="container content">
        <ContentsPContent />
    </div>
    <UtilsFooter />
  </div> <!-- root element-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Projects',
  head: {
    title: 'Projects',
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