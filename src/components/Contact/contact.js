import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

import ImgEmail from '../../assets/email.png';
import ImgPhone from '../../assets/phone-call.png';
import ImgMark from '../../assets/location.png';

export const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_70amp26', 'template_z2r4dhr', form.current, 'pyLwsw5eVktP-y68B')
      .then((result) => {
        console.log(result.text);
        setIsSent(true); // Set the state to indicate that the email was sent
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section className='contact'>
      <div className='contact-divider'>
        <h2 className="contact-title">/ contact</h2>
        <h2 className='contact-h2'>let's get in <span className='touch'>Touch.</span></h2>
      </div>
      <div className='contact-container'>
        <div className='my-socials'>
          <div className='social-item'>
            <img src={ImgEmail} alt="Email" />
            <span>quangtbusiness@gmail.com</span>
          </div>
          <div className='social-item'>
            <img src={ImgPhone} alt="Phone" />
            <span>(781) 308-9331</span>
          </div>
          <div className='social-item'>
            <img src={ImgMark} alt="Location" />
            <span>Boston, MA</span>
          </div>
          <div className='quote'>
            "It only takes one person to believe in you to change your life <span className='forever'>forever.</span>"
          </div>
        </div>
        <div className='contact-form'>
          {isSent ? (
            <div className="sent-message">
              Sent! Thank you.
            </div>
          ) : (
            <form ref={form} onSubmit={sendEmail} className='form-container'>
              <label htmlFor='user_name'>Full Name</label>
              <input type='text' placeholder='John Doe' id='user_name' name='user_name' />

              <label htmlFor='user_email'>E-Mail</label>
              <input type='email' placeholder='john.doe@example.com' id='user_email' name='user_email' />

              <label htmlFor='user_subject'>Subject</label>
              <input type='text' placeholder='Your Subject' id='user_subject' name='user_subject' />

              <label htmlFor='message'>Message</label>
              <textarea id='message' name='message' placeholder='Your message...'></textarea>

              <button className='submit'>Send</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
