import contact from '../assets/img/contact.jpg'
import './style/contact.css'
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './media css/contact.css'
import EmailForm from '../components/Form.jsx'


const Contact = () => {
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
    <div className='contact-page'> 
      <div className="contact-hero"><img src={contact} alt="" /><div className="grey"></div> <h1 className='tracking-in-contract'>contact us</h1></div>
      <div className="mobile-form" data-aos="zoom-in">< EmailForm /></div>
      <div className="contact-list">
      {/* <h3>we are available anywhere anytime</h3> */}
<div className="list-flex">      
  <div className="list-left">         
<h5>phone:</h5>
<h4>+234 912 332 0789</h4>
<h5>email:</h5>
<p>netbuizagency@gmail.com</p>

</div>


<div className="footer-col list-right">
<h4>Socials</h4>
<div className="social-link">
<a target="_blank" rel="noopener noreferrer" href="https://wa.me/message/Q52JY2B5OUPQP1"><i className="fa-brands fa-whatsapp"></i></a>
<a target="_blank" rel="noopener noreferrer" href="https://www.upwork.com/freelancers/~01de99e8bb1d7338c9"><i className="fa-brands fa-upwork"></i></a>
<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/netbuiz"><i className="fa-brands fa-x-twitter"></i></a>
<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/netbuizdigital/"><i className="fa-brands fa-instagram"></i></a>
<a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/netbuiz-agency-48815b2a9"><i className="fa-brands fa-linkedin-in"></i></a>
</div>
</div></div>
      </div>

      <div className='email-formc'>  <form onSubmit={handleSubmit}>
  <div className="fieldc">
   
    <input placeholder='Name' type="text" name="to_name" id="to_name" />
  </div>
  <div className="fieldc">
    
    <input placeholder='Email' type="text" name="from_name" id="from_name" />
  </div>

  <div className="fieldc">
    
    <input placeholder='Phone' type="text" name="reply_to" id="reply_to" />
  </div>
  <div className="fieldc message">
   
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
</form></div>
    </div>
  )
}

export default Contact