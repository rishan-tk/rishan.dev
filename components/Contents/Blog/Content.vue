<template>
    <div class="heading">
        <h1>BLOG</h1>
        <MobileMenuButton/>
    </div>
    <div class="main-content">

        Tech blog about things I'm learning, working on, interested in and updates I follow
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
  