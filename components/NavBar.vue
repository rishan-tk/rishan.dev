<template>
    <div id="NavBar" class ="bg-dark-nav flex items-center justify-between flex-wrap p-5">
        <ul class="w-full block flex-grow flex items-center w-auto">
            <li class="flex-grow">
                <!-- Logo -->
            </li>
            <li class="flex-grow">
                <a href="/" class="block inline-block">Home</a>
            </li>
            <li class="flex-grow">
                <a href="blog" class="block inline-block">Blog</a>
            </li>
            <li class="flex-grow">
                <a href="projects" class="block inline-block">Projects</a>
            </li>
            <li class="flex-grow">
                <a href="aboutus" class="block inline-block">About Us</a>
            </li>
            <li class="flex-grow">
                <a href="contactus" class="block inline-block">Contact Us</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>