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
                for each project soon.
            </p>
        </div>

        <div class="projects">
            <h1>Personal Website</h1>
            <h2>Overview</h2>
            <h3>Project Aims:</h3>
            <p>The primary aim of this project is to develop a personal portfolio website
                that showcases my skills and projects in the field of technology. The 
                website is intended to be a dynamic platform where I can share technical
                blogs, aiming to benefit my peers in the industry. Another key goal is
                to ensure the website evolves over time, mirroring my professional growth.</p>
            <h3>Project Features:</h3>
            <ul>
                <li>
                    Skills Page:
                    <p>A section dedicated to highlighting my technical skills in various areas.</p>
                </li>
                <li>
                    Projects Page:
                    <p>Features descriptions of projects I've worked on, with links to their 
                        respective GitHub repositories for in-depth view.</p>
                </li>
                <li>
                    About Me Page:
                    <p>This section provides insights into my personal interests and 
                        professional journey.</p>
                </li>
                <li>
                    Blog Page:
                    <p>A space for sharing my knowledge and insights on various tech-related
                        topics, aimed at benefiting peers in the industry.</p>
                </li>
            </ul>
            <h3>Demographic</h3>
            <p>The website is primarily targeted towards recruiters, fellow IT professionals, 
                and anyone interested in collaboration or learning more about my professional 
                expertise. It's designed to cater to individuals seeking in-depth knowledge 
                of my skills, projects, and professional journey.</p>
            <h3>Technologies Used</h3>
            <h4>Programming Language/s</h4>
            <ul>
                <li>
                    HTML, CSS, and JavaScript:
                    <p>The core building blocks of the website, providing structure, style,
                        and interactivity respectively.</p>
                </li>
            </ul>
            <h4>Frameworks/Libraries</h4>
            <ul>
                <li>
                    NuxtJS 3:
                    <p>Utilized to enhance the website's performance and user experience,
                        bringing in features and optimizations that are essential for a 
                        modern web application.</p>
                </li>
            </ul>
            <h4>Tools</h4>
            <ul>
                <li>
                    Visual Studio Code:
                    <p>Utilized to enhance the website's performance and user experience,
                        bringing in features and optimizations that are essential for a 
                        modern web application.</p>
                </li>
                <li>
                    GitHub:
                    <p>Used for version control, enabling efficient management and sharing
                        of the project's source code. Linked to cloudflare to enable automatic 
                        deployment upon new push requests</p>
                </li>
                <li>
                    Azure:
                    <p>Employed for project organization and management, using its wikis 
                        and boards features for effective collaboration and tracking.</p>
                </li>
                <li>
                    Cloudflare:
                    <p>Chosen for hosting the website and providing essential security
                        measures like DDoS mitigation.</p>
                </li>
            </ul>
            <h3>Link to repository:</h3>
            <p>For more details and insights into the rishan.dev project, feel free to explore the GitHub 
                repository: 
            </p>
            <NuxtLink to="https://github.com/rishan-tk/rishan.dev">
                <i class="fab fa-github"></i>
                Respository Link
            </NuxtLink>
        </div>

        <div class="projects">
            <h1>Discord Music Bot</h1>
            <h2>Overview</h2>
            <h3>Project Aims:</h3>
            <p>The primary goal of this project is to develop a customized Discord Music
                Bot for personal use. Its core purpose is to improve the music streaming
                experience within a Discord server. The aim is to provide users and their
                friends with a more personalized and enjoyable musical experience, 
                elevating the usual interactions on the platform.
            </p>

            <h3>Project Features:</h3>
            <ul>
                <li>
                    Search and Play:
                    <p>Users can play music in the server by typing a search query, similar
                        to using a YouTube search bar, or by providing a YouTube URL.
                    </p>
                </li>
                <li>
                    Queue Management:
                    <p>Songs can be queued up automatically. Users have the flexibility to type
                        in the next song they want to hear, seamlessly adding it to the queue.
                    </p>
                </li>
                <li>
                    Rearrange Queue:
                    <p>The bot allows for easy rearrangement of the queued songs, giving users
                        complete control over the order of music playback.
                    </p>
                </li>
                <li>
                    Skip Songs:
                    <p>If a song isn't fitting the mood, users have the option to skip it and move 
                        on to the next track in the queue effortlessly.
                    </p>
                </li>
            </ul>
            <h3>Demographic:</h3>
            <p>The Discord Music Bot is primarily designed for individuals or groups who 
                frequently use Discord for social interactions and seek a more enhanced and
                user-friendly music experience. It caters to users who enjoy sharing and 
                listening to music together in a community setting, such as friends, gaming 
                groups, or any Discord server members looking to add a musical element to 
                their digital gatherings.
            </p>
            <h3>Technologies Used</h3>
            <h4>Programming Language/s:</h4>
            <p>Python was the natural choice for this project due to its simplicity,
                readability, and a vast array of libraries and frameworks specifically
                tailored for web applications and automation tasks. Its ease of use
                and straightforward syntax allowed for swift development and quick 
                prototyping. Python's extensive community support, rich documentation,
                and active developer ecosystem meant that troubleshooting and finding
                solutions to challenges were readily accessible. Moreover, Python's 
                asynchronous capabilities, crucial for handling concurrent tasks 
                like managing multiple server requests and streaming music seamlessly,
                made it an ideal language for this Discord Music Bot project.
            </p>
            <h4>Frameworks/Libraries:</h4>
            <ul>
                <li>
                    Discord.py:
                    <p>Discord.py is a Python wrapper for 
                        the Discord API, enabling the bot to interact with 
                        Discord servers and users effectively.
                    </p>
                </li>
                <li>
                    ytdl Library:
                    <p>The ytdl library is used for extracting audio
                        from YouTube videos, enhancing the bot's ability to stream
                        music directly from YouTube sources.
                    </p>
                </li>
                <li>
                    Asyncio:
                    <p>The asyncio library was instrumental in enabling concurrent
                    operations for the Discord Music Bot. By implementing asynchronous 
                    programming techniques, it facilitated non-blocking execution, allowing
                    the bot to handle multiple tasks simultaneously. This approach ensured
                    the bot's responsiveness during various operations, enhancing efficiency
                    and user experience. Through asyncio, the bot managed concurrent user 
                    commands, music playback, and real-time events, delivering a seamless
                    and dynamic interaction environment for both you and your friends.
                </p>
                </li>
            </ul>
            <h4>Tools</h4>
            <ul>
                <li>
                    Visual Studio Code:
                    <p>The primary integrated development environment (IDE) used for developing
                        the project, providing a range of development tools and a user-friendly interface.
                    </p>
                </li>
                <li>
                    AWS EC2:
                    <p>The bot is hosted on Amazon Web Services (AWS) EC2, which ensures its 24/7 availability. 
                        This cloud-based hosting solution guarantees the bot's continuous operation and consistent 
                        performance.
                    </p>
                </li>
            </ul>

            <h3>Link to repository:</h3>
            <p>For more details and insights into the Discord Music Bot project, feel free to explore the GitHub 
                repository: 
            </p>
            <NuxtLink to="https://github.com/rishan-tk/Jaskier-v3">
                <i class="fab fa-github"></i>
                Respository Link
            </NuxtLink>
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
            <p>Languages</p>
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
  