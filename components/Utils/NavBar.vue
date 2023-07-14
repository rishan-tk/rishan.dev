<template>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div id="NavBar" :class="{'responsive': isNavbarOpen}" class ="w-full bg-dark-nav flex items-center justify-between flex-wrap">
        <div id="logo" class="flex"></div>
        <div id="linksContainer" class="flex">
            <div class="linksPadding1"></div>
            <div id="navLinks">
                <ul class="flex-grow flex text-gray-200">
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
            <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
            <a href="javascript:void(0);" class="icon" @click="toggleNavbar">
                <i class="fa fa-bars"></i>
            </a>
            <div class="linksPadding2"></div>
        </div>
    </div>
</template>


<script>



export default {
  name: 'NavBar',
  data() {
    return {
      isNavbarOpen: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  }
};
</script>
