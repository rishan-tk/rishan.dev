<template>
    <div class="heading">
        <h1>ABOUT ME</h1>
        <MobileMenuButton/>
    </div>
    <div class="main-content">
        Brief Intro

        What I'm doing
    </div>
</template>
  
<script>
    import { defineComponent } from 'vue'
    import MobileMenuButton from '../../Utils/MobileMenuButton.vue'
    
    export default defineComponent({
        name: 'AboutMeContent',
        components: {
            MobileMenuButton
        }
    })
</script>
  