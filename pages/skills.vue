<template>
  <div class="root-div"> <!-- root element-->
    <UtilsNavBar />
    <div class="container content">
        <ContentsSContent />
    </div>
    <UtilsFooter />
  </div> <!-- root element-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Skills',
  head: {
    title: 'Skills',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Skills, C++, Python, Java, HTML, CSS'
      }
    ]
  }
})
</script>