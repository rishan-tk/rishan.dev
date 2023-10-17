<template>
    <div class="main-content container">
        <div class="homepage-banner">
            <NuxtImg src="/img/rishandev-logos_black.png" alt="Homepage Banner"/>
        </div>
        <p>Purpose for this website</p>
        <p>Brief summary about skills and passions</p>

        <p>You can view the list of skills I have aquired over my time programming.</p>
        <NuxtLink to="/skills"><i class="fa-solid fa-rectangle-list"></i><span>Skills</span></NuxtLink>
            
        <p>You can view some of the projects I have worked on to showcase some of my skills</p>
        <NuxtLink to="/projects"><i class="fa-solid fa-rectangle-list"></i><span>Projects</span></NuxtLink>
            
        <p>The brief from about me section</p>
        <NuxtLink to="/aboutme"><i class="fa-solid fa-rectangle-list"></i><span>About Me</span></NuxtLink>
            
        <p>I will soon be starting my own blog about technologies I am currently interested in and researching.</p>
        <NuxtLink to="/blog"><i class="fa-solid fa-rectangle-list"></i><span>Blog</span></NuxtLink> 
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>
