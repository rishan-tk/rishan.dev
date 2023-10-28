// server/api/send-email.js
import nodemailer from 'nodemailer';
import { defineEventHandler} from 'h3';

export default defineEventHandler(async (event) => {

    console.log("Request Body:", event.req.body);
    try {
        const { name, email, subject, message } = await readBody(event);
    
        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
          service: 'gmail', // Replace with your email service
          auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
          },
        });
    
        // Email options
        const mailOptions = {
          from: process.env.EMAIL,
          to: process.env.EMAIL,
          subject: `New Contact Form Submission: ${subject}`,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };
    
        // Send the email
        await transporter.sendMail(mailOptions);
        return { message: 'Email sent successfully!' };
      } catch (error) {
        console.error('Error sending email:', error);
        // Return a 500 error response
        return createError({ statusCode: 500, statusMessage: 'Error sending email.' });
      }
});