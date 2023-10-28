<template>
    <div>
        <h2>Contact Form</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="formData.name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="formData.email" required>
            </div>
            <div>
                <label for="subject">Subject:</label>
                <input type="text" id="subject" v-model="formData.subject" required>
            </div>
            <div>
                <label for="message">Message:</label>
                <textarea id="message" v-model="formData.message" required></textarea>
            </div>
            <div class="form-group">
                <label for="privacyPolicy">
                    <input type="checkbox" id="privacyPolicy" v-model="privacyPolicyAccepted" />
                    I accept the <a href="">Privacy Policy</a>
                </label>
            </div>
            <button type="submit">Submit</button>
            <div v-if="showPrivacyPolicyError" class="error-message">
                Please accept the privacy policy before submitting the form.
            </div>
            <div v-if="showEmailError" class="error-message">
                Error sending email. Please try again later.
            </div>
            <div v-if="showSuccessMessage" class="success-message">
                Your message has been sent successfully!
            </div>
        </form>
    </div>
  </template>
  
  <script>
    import { defineComponent, ref } from 'vue';
    
    export default defineComponent({
        name: 'ContactForm',
        setup() {
            // Define reactive data properties for form fields
            const formData = ref({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            const privacyPolicyAccepted = ref(false);
            const showEmailError = ref(false);
            const showPrivacyPolicyError = ref(false);
            const showSuccessMessage = ref(false);

            // Define a function to handle form submission
            const submitForm = async () => {
                if (privacyPolicyAccepted.value) {
                    try {
                        const response = await fetch('/api/send-email', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                name: formData.value.name,
                                email: formData.value.email,
                                subject: formData.value.subject,
                                message: formData.value.message,
                            }),
                        });

                        if (response.ok) {
                            const data = await response.json();
                            console.log('Email sent successfully:', data.message);
                            // Handle success (e.g., show a success message to the user)
                            showSuccessMessage.value = true;
                            // Reset the form and other states
                            formData.value = { name: '', email: '', subject: '', message: '' };
                            privacyPolicyAccepted.value = false;
                            showPrivacyPolicyError.value = false;
                            showEmailError.value = false;
                        } else {
                            console.error('Error sending email:', response.statusText);
                            // Handle error (e.g., show an error message to the user)
                            showEmailError.value = true;
                        }
                    }catch (error) {
                        console.error('Error sending email:', error);
                        // Handle network error (e.g., show an error message to the user)
                        showEmailError.value = true;
                    }
                } else {
                    // The privacy policy checkbox is not checked, show an error message
                    showPrivacyPolicyError.value = true;
                }
            };

            // Return data properties and methods that need to be accessible from the template
            return {
                formData,
                privacyPolicyAccepted,
                showEmailError,
                showPrivacyPolicyError,
                showSuccessMessage,
                submitForm
            };
        },
    });
</script>