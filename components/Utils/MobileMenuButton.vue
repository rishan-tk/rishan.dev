<template>
    <div id="mobile-menu-button">
        <button @click="toggleNavbar"><i class="fa-solid fa-bars"></i></button>
        <span><NuxtImg src="/img/logo_black.png" alt="Logo"/>Rishan Thirukumar</span>
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

                // Change the display property based on the condition
                if (computedStyle.getPropertyValue('left') === '0px') {
                    console.log("True")
                    //navbar.style.display = 'none'; 
                    navbar.style.left= "-100%";
                }else{
                    navbar.style.left= '0px';
                }
            },
            handleResize() {
                const windowWidth = window.innerWidth;
                const navbar = document.getElementById('navbar');

                // Check if the window width is greater than a certain value (for example, 768 pixels)
                if (windowWidth > 768) {
                    //navbar.style.display = 'flex';
                    navbar.style.left= "0";
                }
            },
        },

        mounted() {
            // Add an event listener for window resize event
            window.addEventListener('resize', this.handleResize);
        },

        beforeDestroy() {
            // Remove the event listener when the component is destroyed
            window.removeEventListener('resize', this.handleResize);
        }
    });
</script>