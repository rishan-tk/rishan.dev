<template>
    <div id="NavBar" class ="container w-full bg-dark-nav flex items-center justify-between flex-wrap p-5">
        <div id="logo" class="flex w-1/5"><img src="~/assets/img/logo-ts.png"/></div>
        <div id="links" class="flex w-4/5">
            <div class="w-full w-1/3"></div>
            <div class="w-full w-1/3">
                <ul class="flex-grow flex items-center w-auto text-gray-200 hover:text-sky-400">
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
            <div class="w-full w-1/3"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>