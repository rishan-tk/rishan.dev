<template>
    <div class="heading">
        <h1>CONTACT ME</h1>
        <MobileMenuButton/>
    </div>
    <div class="main-content">
        <div class="contact-intro">
            <p>Welcome to my portfolio website. Thank you for taking the time 
                to explore my work and expertise but if you havent already feel free 
                to visit my projects via:            
                <NuxtLink to="/projects">
                    <i class="fa-solid fa-rectangle-list px-2"></i>
                    <span>Projects</span>
                </NuxtLink> 
                and related skills via:
                <NuxtLink to="/skills">
                    <i class="fa-solid fa-chart-simple px-2"></i>
                    <span>Skills</span>
                </NuxtLink>.
            </p>
            <p>I value meaningful connections and collaborations within the 
                technology community. Whether you are interested in discussing 
                potential projects, have inquiries about my services, or wish to 
                explore professional opportunities, I encourage you to get in touch.
            </p>
                
            <p>Your inquiries are important to me, and I'll get back to you as 
                soon as possible (No more than a few business days depending on enquiry). Looking forward to hearing from you!
            </p>
        </div>
        <div class="contact-form">
            <p>You can contact me by completing this form and pressing submit</p>
            <ContactForm/>
        </div>

        <div class="socials flex flex-col">
            <div class="caption">
            <p>Alternatively you can also contact me via email or linked in</p>
            </div>
            <div class="links">
            <ul class="flex">
                <li>
                    <p>Email Address:</p> 
                    <p>
                        <a href="mailto:rishan-tk@rishan.dev">rishan-tk@rishan.dev</a>
                    </p>
                </li>
                <li>
                    <p>Linked In</p>
                    <a href="https://www.linkedin.com/in/rishan-thirukumar/" class="">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </li>
            </ul>
            </div>
        </div>
        
    </div>
</template>
  
<script>
    import { defineComponent } from 'vue'
    import ContactForm from './ContactForm.vue'
    import MobileMenuButton from '../../Utils/MobileMenuButton.vue'
    
    export default defineComponent({
        name: 'Content',
        components: {
            ContactForm,
            MobileMenuButton
        }
    })
</script>
  