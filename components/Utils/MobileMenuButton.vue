<template>
    <div id="mobile-menu-button">
        <button @click="toggleNavbar"><i class="fa-solid fa-bars"></i></button>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'MobileMenuButton',
        methods: {
            toggleNavbar(){
                // Get the navbar by ID
                const navbar = document.getElementById('navbar');
                const computedStyle = window.getComputedStyle(navbar);

                console.log(computedStyle)

                // Change the display property based on the condition
                if (computedStyle.getPropertyValue('display') === 'flex') {
                    navbar.style.display = 'none'; 
                } else if (computedStyle.getPropertyValue('display') === 'none'){
                    navbar.style.display = 'flex'; 
                }
            }
        }
    });
</script>