<template>
  <div> <!-- root element-->
    <UtilsNavBar />
    <div class="container
        flex flex-col flex-wrap
        px-4
        py-52
        mx-auto">
        <ContentsHHome />
    </div>
    <UtilsFooter />
  </div> <!-- root element-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
