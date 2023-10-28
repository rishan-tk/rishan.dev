<template>
    <div class="heading">
        <h1>SKILLS</h1>
        <MobileMenuButton/>
    </div>
    <div class="main-content">

        <div class="skills">
            <p class="caption">Languages:</p>
            <ul>
                <li>
                    <NuxtLink to="/projects#projects-4">
                        <div class="logo-img">
                            <NuxtImg src="/img/skills/cpp-logo.png" alt="C Plus Plus Logo"/>
                        </div>
                        <p>C++</p>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/projects#projects-2">
                        <div class="logo-img">
                            <NuxtImg src="https://www.svgrepo.com/show/376344/python.svg" alt="Python Logo"/>
                        </div>
                        <p>Python</p>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/projects#projects-1">
                        <div class="logo-img">
                            <NuxtImg src="/img/skills/html5-logo.png" alt="HTML 5 Logo"/>
                        </div>
                        <p>HTML5</p>
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <div class="skills">
            <p class="caption">Frameworks & Libraries:</p>
            <ul>
                <li>
                    <NuxtLink to="/projects#projects-2">
                        <div class="logo-img">
                            <NuxtImg src="https://discordpy.readthedocs.io/en/stable/_images/snake_dark.svg" alt="Visual Studio Code Logo"/>
                        </div>
                        <p>DiscordBot.py</p>
                    </NuxtLink>
                </li>  
                <li>
                    <NuxtLink to="/projects#projects-3">
                        <div class="logo-img">
                            <NuxtImg src="https://miro.medium.com/v2/resize:fit:1400/1*lpV49uSTaxnGNRCY99wXkQ.png" alt="Visual Studio Code Logo"/>
                        </div>
                        <p>TelegramBot</p>
                    </NuxtLink>
                </li>           
            </ul>
        </div>

        <div class="skills">
            <p class="caption">Tools:</p>
            <ul>
                <li>
                    <div class="logo-img">
                        <NuxtImg src="/img/skills/vscode-logo.png" alt="Visual Studio Code Logo"/>
                    </div>
                    <p>Visual Studio Code</p>
                </li>             
                <li>
                    <div class="logo-img">
                        <NuxtImg src="/img/skills/vs-logo.png" alt="Visual Studio Logo"/>
                    </div>
                    <p>Visual Studio</p>
                </li>
                <li>
                    <div class="logo-img">
                        <NuxtImg src="/img/skills/github-logo.png" alt="Github Logo"/>
                    </div>
                    <p>Github</p>
                </li>
            </ul>
        </div>

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
  