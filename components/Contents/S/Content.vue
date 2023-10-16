<template>
    <div class="heading container">SKILLS</div>
    <div class="main-content container">

        <div class="skills">
            <p class="caption">Skills I have acquired</p>
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

        <div class="tools">
            <p class="caption">Tools used</p>

            <ul class="flex px-5">
                <li class="px-5">
                    <NuxtImg src="/img/skills/vscode-logo.png" alt="Visual Studio Code Logo"/>
                    <p>Visual Studio Code</p>
                </li>             
                <li class="px-5">
                    <NuxtImg src="/img/skills/vs-logo.png" alt="Visual Studio Logo"/>
                    <p>Visual Studio</p>
                </li>
                <li class="px-5">
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
  