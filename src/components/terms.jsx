/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PrivacyPolicyPopup = ({ onAccept, onDecline }) => (
  <div className='popup' style={popupStyle}>
    <div style={contentContainerStyle}></div>
    <div className='privacy'>
      
   
    <div className="privacy-hero terms-hero"></div>
     
    <h2>tERMS AND CONDITIONS</h2>
      <p>
        Effective Date: January 1, 2024
      </p>
      <p>
      Welcome to Netbuiz Digital Agency We're excited to have you on board as we embark on this digital journey together. Please take a moment to review the following terms and conditions:
      </p>

      {/* List */}
      <ol>
        <li>
          <h4>Service Overview:</h4>
          <p>
          Netbuiz Digital Agency, officially started on January 1, 2024, specializes in helping brands go digital through web development, search engine optimization, and web maintenance.
          </p>
        </li>

        <li>
          <h4>Client Responsibilities:</h4>
          <p>
          Clients are responsible for providing accurate and timely information required for project execution.
          </p>
          <p>
          Timely communication is crucial for project progress. Delays in client response may affect timelines.
          </p>
        </li>
        
        <li>
          <h4>Project Delivery:</h4>
          <p>
            We aim to deliver high-quality services promptly. However, timelines may vary based on project complexity.
          </p>
        </li>
        
        <li>
          <h4>Payments:</h4>
          <p>
          Clients agree to the payment terms outlined in the project proposal or agreement.
          </p>
          <p>
          Late payments may result in project delays or additional fees.
          </p>
        </li>
        
        <li>
          <h4> Intellectual Property:</h4>
          <p>
          Clients retain ownership of their provided content. Netbuiz Digital Agency retains ownership of developed code and design elements.
          </p>
        </li>
        
        <li>
          <h4>Confidentiality:</h4>
          <p>
          Both parties agree to treat all project-related information as confidential and not disclose it to third parties.
          </p>
        </li>
        
        <li>
          <h4>Changes and Revisions:</h4>
          <p>
          Changes to project scope or requirements may incur additional fees. All changes must be agreed upon in writing.
          </p>
        </li>
        
        <li>
          <h4>Project Completion:</h4>
          <p>
          Upon project completion, Netbuiz Digital Agency will provide necessary credentials and documentation to clients.
          </p>
        </li>

        <li>
          <h4>Support and Maintenance:</h4>
          <p>
         We offer post-launch support and maintenance services. Details are outlined in separate agreements.
          </p>
        </li>

        <li>
          <h4>Termination:</h4>
          <p>
          Either party may terminate the project with a written notice. Termination fees may apply.
          </p>
        </li>


        <li>
          <h4>Project Completion:</h4>
          <p>
          Thank you for choosing Netbuiz Digital Agency. We look forward to assisting you in your digital endeavors! If you have any questions, feel free to contact us  <Link className='pop-contact' to="./contact">Contact&rarr;</Link>.
          </p>
        </li>
      </ol>

      <p>By using our services, you agree to the terms outlined in this Privacy Policy. Thank you for choosing Netbuiz Agency.</p>

      {/* Buttons */}
      <div style={buttonContainerStyle}>
        <button onClick={onDecline}><div data-tooltip="bro why??" className="buttond black">
<div className="button-wrapper">
  <div className="text">Decline</div>
    <span className="icon">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 9.05v-.1m8 .1v-.1"/><path stroke-linejoin="round" d="M16 16c-.5-1.5-1.79-3-4-3s-3.5 1.5-4 3"/></g></svg>
    </span>
  </div>
</div></button>
        <button onClick={onAccept}><div data-tooltip="lets proceed" className="buttond">
<div className="button-wrapper">
  <div className="text">Accept</div>
    <span className="icon">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592"/><path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4m0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8"/></svg>
    </span>
  </div>
</div>
</button>
      </div>
    </div>
  </div>
);

PrivacyPolicyPopup.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
};

const Privacy = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log("Privacy component mounted");

    // Set a timeout to show the popup after 12 seconds (12000 milliseconds)
    const timeoutId = setTimeout(() => {
      console.log("Timeout reached. Showing popup.");
      setShowPopup(true);
    }, 25000); // 12 seconds

    // Clear the timeout to avoid showing the popup if the component unmounts
    return () => {
      console.log("Privacy component unmounted");
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

  const handleAccept = () => {
    // Handle the logic when the user accepts the privacy policy
    console.log("User accepted. Closing popup.");
    setShowPopup(false);
  };

  const handleDecline = () => {
    // Handle the logic when the user declines the privacy policy
    console.log("User declined. Closing popup.");
    setShowPopup(false);
  };

  console.log("Rendering Privacy component");

  return (
    <div >
      {showPopup && (
        <PrivacyPolicyPopup  onAccept={handleAccept} onDecline={handleDecline} />
      )}
    </div>
  );
};


// Styles
const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    zIndex: 2555,
    overflowY: 'auto',
    maxHeight: '90vh',
    borderRadius: '12px',
  };
  
  const contentContainerStyle = {
    maxHeight: '90vh', // Limit the maximum height to 80% of the viewport height
    overflowY: 'auto', // Add overflow property for vertical scrolling
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
    // postion: 'absolute',
    // top:'1px',
  };


export default Privacy;
