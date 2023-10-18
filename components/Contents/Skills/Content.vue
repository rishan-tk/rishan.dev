<template>
    <div class="heading container">SKILLS</div>
    <div class="main-content">

        <div class="skills">
            <p class="caption">Languages:</p>
            <ul>
                <li>
                    <div class="logo-img">
                        <NuxtImg src="/img/skills/cpp-logo.png" alt="C Plus Plus Logo"/>
                    </div>
                    <p>C++</p>
                </li>
                <li>
                    <div class="logo-img">
                        <NuxtImg src="/img/skills/python-logo.png" alt="Python Logo"/>
                    </div>
                    <p>Python</p>
                </li>
                <li>
                    <div class="logo-img">
                        <NuxtImg src="/img/skills/html5-logo.png" alt="HTML 5 Logo"/>
                    </div>
                    <p>HTML5</p>
                </li>
            </ul>
        </div>

        <div class="skills">
            <p class="caption">Frameworks & Libraries:</p>
            <ul>
                <li>
                    <div class="logo-img">
                        <NuxtImg src="/img/skills/vscode-logo.png" alt="Visual Studio Code Logo"/>
                    </div>
                    <p>DiscordBot.py</p>
                </li>  
                <li>
                    <div class="logo-img">
                        <NuxtImg src="/img/skills/vscode-logo.png" alt="Visual Studio Code Logo"/>
                    </div>
                    <p>TelegramBot</p>
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
    
    export default defineComponent({
        name: 'SkillsContent'
    })
</script>
  