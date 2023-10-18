<template>
    <div class="heading">
        <h1>PROJECTS</h1>
        <MobileMenuButton/>
    </div>
    <div class="main-content">

        Projects that I am working on:

        Discord Music Bot


    </div>
</template>
  
<script>
    import { defineComponent } from 'vue'
    import MobileMenuButton from '../../Utils/MobileMenuButton.vue'

    export default defineComponent({
        name: 'Content',
        components: {
            MobileMenuButton
        }
    })
</script>
  