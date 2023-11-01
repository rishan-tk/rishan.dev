<template>
    <div class="heading">
        <h1>ABOUT ME</h1>
        <MobileMenuButton/>
    </div>
    <div class="main-content about-me">
        <p>Welcome to my portfolio! I'm Rishan, a Computer Science 
            graduate with a strong passion for technology, mathematics, 
            and creative problem-solving. From early childhood, my 
            curiosity has led me through a journey of puzzles, DIY 
            projects, and now, complex technological challenges.
        </p>
        <h1>My Journey</h1>
        <p>My academic pursuit at the University of East Anglia 
            has not only honed my theoretical knowledge but also 
            allowed me to immerse myself in practical applications. 
            I have a particular affinity for programming and have 
            developed a strong proficiency in languages such as 
            C, C++, and Python, with C++ being the first language 
            I mastered. </p>
        <p>During my university years, I undertook 
            several projects that involved using C++ with OpenGL 
            for game development, which included a 2D platformer, 
            a 3D drone simulator, and a final year project on 
            GPU-accelerated rendering of smoke. These experiences 
            deepened my interest in game physics and engine logic, 
            perfectly marrying my love for mathematics with technology.</p>
        <p>I also explored Artificial Intelligence and
            Machine Learning, using Prolog and Java to learn
            about perceptron classifiers and ensembles
        </p>
        <h1>Interests and Achievements</h1>
        <p>Beyond the screen, I am a musician at heart, 
            having achieved Grade 5 in both Piano and Drum Kit. 
            My hobbies include cycling, basketball, and maintaining an 
            active lifestyle. </p>  
        <p>I am also an avid learner, constantly keeping 
            myself updated with the latest in technology and working on personal
            projects to sharpen my skills. Currently, I am delving into Xamarin 
            for app development, Qt for Windows desktop applications, and 
            exploring the capabilities of NuxtJS for web development.
        </p>
        <h1>Educational Highlights</h1>
        <h2>University:</h2>
        <p>University of East Anglia</p>

        <h2>Degree:</h2> 
        <p>BSc Computer Science</p>
        <h2>Notable Projects:</h2>
        <p>For my final year project, I focused on realistic GPU-accelerated 
            rendering of smoke, exploring CUDA and the shader pipeline. This 
            project was a deep dive into the efficiency of GPUs, particle systems, 
            and the varying requirements of game versus movie production in rendering effects.
        </p>
        <h1>A Glimpse into the Future</h1>
        <p>My interests are diverse, ranging from AI and machine learning to 
            graphics/game development. I am particularly fascinated by the 
            potential of Unreal Engine in game development and the intriguing 
            possibilities in quantum computing. With my strong foundation in mathematics, 
            I find the physics aspects of game engines particularly compelling.
        </p>
        <h1>Let's Connect</h1>
        <p>If my journey resonates with you or if you have any opportunities 
            that align with my skills and passions, please don't hesitate to reach out. 
            You can contact me via the form on the Contact Me page or directly at my 
            email </p>
        <p><a href="mailto:rishan-tk@rishan.dev">rishan-tk@rishan.dev</a></p>
        <p>Looking forward to exploring collaborative 
            possibilities and contributing to innovative projects.
        </p>
        <p>Browse through my Skills, Projects, and Contact pages to get a 
            comprehensive understanding of my expertise and experiences. Thank you 
            for visiting my portfolio!</p>
    </div>
</template>
  
<script>
    import { defineComponent } from 'vue'
    import MobileMenuButton from '../../Utils/MobileMenuButton.vue'
    
    export default defineComponent({
        name: 'AboutMeContent',
        components: {
            MobileMenuButton
        }
    })
</script>
  