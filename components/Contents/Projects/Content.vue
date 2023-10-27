<template>
    <div class="heading">
        <h1>PROJECTS</h1>
        <MobileMenuButton/>
    </div>
    <div class="main-content">
        <div class="page-intro">
            <p>Below I will be briefly talking about some of the projects 
                I have worked on during my time. If you would 
                like to read more there will be a link to a seperate page 
                for each project.</p>
        </div>

        <div class="projects">
            <h1>Discord Music Bot</h1>
            <h2>Overview</h2>
            <p>The project focuses on creating a customized Discord Music Bot
                specifically designed for personal use. Its primary purpose is
                to facilitate seamless music streaming within your server, 
                providing you and your friends with an enjoyable and tailored
                musical experience.</p>


            <h3>Technologies Used</h3>
            <p>Python was the natural choice for this project due to its simplicity,
                readability, and a vast array of libraries and frameworks specifically
                tailored for web applications and automation tasks. Its ease of use
                and straightforward syntax allowed for swift development and quick 
                prototyping. Python's extensive community support, rich documentation,
                and active developer ecosystem meant that troubleshooting and finding
                solutions to challenges were readily accessible. Moreover, Python's 
                asynchronous capabilities, crucial for handling concurrent tasks 
                like managing multiple server requests and streaming music seamlessly,
                made it an ideal language for this Discord Music Bot project.</p>
            <h4>Frameworks/Libraries</h4>
            <p>Discord.py: Discord.py is a Python wrapper for 
                the Discord API, enabling the bot to interact with 
                Discord servers and users effectively.</p>
            <p>ytdl Library: The ytdl library is used for extracting audio
                from YouTube videos, enhancing the bot's ability to stream
                music directly from YouTube sources.</p>
            <p>Asyncio: The asyncio library was instrumental in enabling concurrent
                operations for the Discord Music Bot. By implementing asynchronous 
                programming techniques, it facilitated non-blocking execution, allowing
                the bot to handle multiple tasks simultaneously. This approach ensured
                the bot's responsiveness during various operations, enhancing efficiency
                and user experience. Through asyncio, the bot managed concurrent user 
                commands, music playback, and real-time events, delivering a seamless
                and dynamic interaction environment for both you and your friends.</p>
            <h4>Tools</h4>
            <p>Visual Studio Code: Visual Studio Code serves as the 
                integrated development environment (IDE) where the 
                project was developed, providing a user-friendly 
                interface and essential development features.
                AWS EC2: The bot is hosted on Amazon Web Services (AWS) EC2,
                ensuring its availability 24/7. This cloud-based solution 
                guarantees continuous operation, allowing the bot to function
                round the clock and fulfill its purpose effectively.</p>

            <h3>Link to repo</h3>

            <p>read more here</p>
        </div>

        <div class="projects">
            <h1>Telegram Shop Bot</h1>
            <h2>Overview</h2>
            <p>Aim of Project</p>
            <p>Key features</p>
            <p>Demographic</p>

            <h3>Technologies Used</h3>
            <p>Languages</p>
            <h4>Frameworks/Libraries</h4>
            <h4>Tools</h4>

            <h3>Link to repo</h3>

            <p>read more here</p>
        </div>

        <div class="projects">
            <h1>Movie Database</h1>
            <h2>Overview</h2>
            <p>Aim of Project</p>
            <p>Key features</p>
            <p>Demographic</p>

            <h3>Technologies Used</h3>
            <p>Languages</p>
            <h4>Frameworks/Libraries</h4>
            <h4>Tools</h4>

            <h3>Link to repo</h3>

            <p>read more here</p>
        </div>

        <div class="projects">
            <h1>2D Platformer - Graphics 1 Project</h1>
            <h2>Overview</h2>
            <p>Aim of Project</p>
            <p>Key features</p>
            <p>Demographic</p>

            <h3>Technologies Used</h3>
            <p>This project was </p>
            <h4>Frameworks/Libraries</h4>
            <h4>Tools</h4>

            <h3>Link to repo</h3>

            <p>read more here</p>
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
  