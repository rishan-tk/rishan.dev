<template>
    <div id="NavBar" class ="bg-dark-nav flex items-center justify-between flex-wrap p-5">
        <ul class="w-full block flex-grow flex items-center w-auto">
            <li class="flex-grow">
                <!-- Logo -->
            </li>
            <li class="flex-grow">
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="flex-grow">
                <NuxtLink to="/blog">Blog</NuxtLink>
            </li>
            <li class="flex-grow">
                <NuxtLink to="/projects">Projects</NuxtLink>
            </li>
            <li class="flex-grow">
                <NuxtLink to="/aboutme">About Me</NuxtLink>
            </li>
            <li class="flex-grow">
                <NuxtLink to="/contactme">Contact Me</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>