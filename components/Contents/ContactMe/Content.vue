<template>
    <div class="heading">CONTACT ME</div>
    <div class="main-content">
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
    import ContactForm from './ContactForm.vue';
    
    export default defineComponent({
        name: 'Content',
        components: {
            ContactForm
        }
    })
</script>
  