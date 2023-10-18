<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <nav class="">
        <ul id="navbar" class="side-nav text-black">
            <li class="">
                <div class="logo">
                    <NuxtImg src="/img/logo_black.png" alt="Logo"/>
                </div>
                <div class="text-center logo-caption">Rishan Thirukumar</div>
            </li>
            <li class="bold">
                <NuxtLink to="/"><i class="fa-solid fa-house"></i><span>Home</span></NuxtLink>
            </li>
            <li class="bold">
                <NuxtLink to="/projects"><i class="fa-solid fa-rectangle-list"></i><span>Projects</span></NuxtLink>
            </li>
            <li class="bold">
                <NuxtLink to="/skills"><i class="fa-solid fa-chart-simple"></i><span>Skills</span></NuxtLink>
            </li>
            <li class="bold">
                <NuxtLink to="/blog"><i class="fa-solid fa-pen"></i><span>Blog</span></NuxtLink>
            </li>
            <li class="bold">
                <NuxtLink to="/aboutme"><i class="fa-solid fa-user"></i><span>About Me</span></NuxtLink>
            </li>
            <li class="bold">
                <NuxtLink to="/contactme"><i class="fa-solid fa-envelope"></i><span>Contact Me</span></NuxtLink>
            </li>
        </ul>
    </nav>
</template>


<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavBar',

})
</script>
