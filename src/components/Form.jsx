import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './style/form.css'

const EmailForm = () => {
  const [buttonText, setButtonText] = useState('Send Email');

  useEffect(() => {
    // Initialize Email.js with your user ID
    emailjs.init('WRs2GjTy8Xjrl-tl7'); // Replace 'your_actual_user_id' with your Email.js user ID
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setButtonText('Sending...');

    const serviceID = 'default_service';
    const templateID = 'template_gmdtr5b';

    emailjs.sendForm(serviceID, templateID, event.target)
      .then(() => {
        setButtonText('Send Email');
        alert('Sent!');
      })
      .catch((err) => {
        setButtonText('Send Email');
        alert(JSON.stringify(err));
      });
  };

  return (
  <div className='email-form'>  <form onSubmit={handleSubmit}>
  <div className="field">
   
    <input placeholder='Name' type="text" name="to_name" id="to_name" />
  </div>
  <div className="field">
    
    <input placeholder='Email' type="text" name="from_name" id="from_name" />
  </div>

  <div className="field">
    
    <input placeholder='Phone' type="text" name="reply_to" id="reply_to" />
  </div>
  <div className="field message">
   
    <input placeholder='Message' type="text" name="message" id="message" />
  </div>

  <button className='send-btn'>
  <div className="svg-wrapper-1" value={buttonText}>
    <div className="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>

  {/* <input type="submit" value={buttonText} /> */}
</form></div>
  );
};

export default EmailForm;
