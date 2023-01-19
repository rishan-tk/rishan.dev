<template>
    <div id="NavBar" class ="container w-full bg-dark-nav flex items-center justify-between flex-wrap">
        <div id="logo" class="flex"><img src="~/assets/img/logo-ts.png"/></div>
        <div id="linksContainer" class="flex">
            <div class="linksPadding"></div>
            <div id="navLinks">
                <ul class="flex-grow flex text-gray-200 hover:text-sky-400">
                    <li class="flex-grow w-1/4">
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li class="flex-grow w-1/4">
                        <NuxtLink to="/blog">Blog</NuxtLink>
                    </li>
                    <li class="flex-grow w-1/4">
                        <NuxtLink to="/projects">Projects</NuxtLink>
                    </li>
                    <li class="flex-grow w-1/4">
                        <NuxtLink to="/aboutme">About Me</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="linksPadding"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
