<template>
    <div class="heading container">SKILLS</div>
    <div class="main-content container">

        <div class="skills">
            <p class="caption">Languages:</p>
            <ul>
                <li>
                    <NuxtImg src="/img/skills/cpp-logo.png" alt="C Plus Plus Logo"/>
                    <p>C++</p>
                </li>
                <li>
                    <NuxtImg src="/img/skills/python-logo.png" alt="Python Logo"/>
                    <p>Python</p>
                </li>
                <li>
                    <NuxtImg src="/img/skills/html5-logo.png" alt="HTML 5 Logo"/>
                    <p>HTML5</p>
                </li>
            </ul>
        </div>

        <div class="skills">
            <p class="caption">Frameworks & Libraries:</p>
            <ul>
                <li>
                    <NuxtImg src="/img/skills/vscode-logo.png" alt="Visual Studio Code Logo"/>
                    <p>DiscordBot.py</p>
                </li>  
                <li>
                    <NuxtImg src="/img/skills/vscode-logo.png" alt="Visual Studio Code Logo"/>
                    <p>TelegramBot</p>
                </li>           
            </ul>
        </div>

        <div class="skills">
            <p class="caption">Tools:</p>
            <ul>
                <li>
                    <NuxtImg src="/img/skills/vscode-logo.png" alt="Visual Studio Code Logo"/>
                    <p>Visual Studio Code</p>
                </li>             
                <li>
                    <NuxtImg src="/img/skills/vs-logo.png" alt="Visual Studio Logo"/>
                    <p>Visual Studio</p>
                </li>
                <li>
                    <NuxtImg src="/img/skills/github-logo.png" alt="Github Logo"/>
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
  