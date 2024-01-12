/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PrivacyPolicyPopup = ({ onAccept, onDecline }) => (
  <div className='popup' style={popupStyle}>
    <div style={contentContainerStyle}></div>
    <div className='privacy'>
      {/* Privacy Policy Content */}
    <div className="privacy-hero"><h2>Privacy Policy</h2></div>
      <p>
        Effective Date: January 1, 2024
      </p>
      <p>
        At Netbuiz Agency, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our services, which include web development, search engine optimization, and web maintenance.
      </p>

      {/* List */}
      <ol>
        <li>
          <h4>Information We Collect:</h4>
          <p>
            <strong>Personal Information:</strong> When you engage with our services, we may collect personal information such as your name, contact details, and billing information.
          </p>
          <p>
            <strong>Website Usage Data:</strong> We gather non-personal information, including your IP address, browser type, and pages visited, to improve our website and services.
          </p>
        </li>

        <li>
          <h4>How We Use Your Information:</h4>
          <p>
            <strong>Service Delivery:</strong> We use your personal information to provide and improve our services, ensuring efficient web development, search engine optimization, and web maintenance.
          </p>
          <p>
            <strong>Communication:</strong> We may contact you for service-related updates, announcements, or marketing purposes, with the option to opt-out.
          </p>
        </li>
        
        <li>
          <h4>Data Security:</h4>
          <p>
            We prioritize the security of your information and employ industry-standard measures to protect against unauthorized access, disclosure, alteration, and destruction.
          </p>
        </li>
        
        <li>
          <h4>Information Sharing:</h4>
          <p>
            Your personal information is not sold, rented, or shared with third parties for their marketing purposes.
          </p>
          <p>
            We may disclose your information to trusted partners and service providers involved in delivering our services.
          </p>
        </li>
        
        <li>
          <h4>Your Choices:</h4>
          <p>
            You have the right to update, correct, or delete your personal information by contacting us.
          </p>
          <p>
            You can opt-out of receiving promotional communications from us.
          </p>
        </li>
        
        <li>
          <h4>Cookies:</h4>
          <p>
            We use cookies to enhance your browsing experience. You can control cookie preferences through your browser settings.
          </p>
        </li>
        
        <li>
          <h4>Changes to Privacy Policy:</h4>
          <p>
            We may update this Privacy Policy to reflect changes in our practices. Check our website for the latest version.
          </p>
        </li>
        
        <li>
          <h4>Contact Us:</h4>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at <Link className='pop-contact' to="./contact">Contact&rarr;</Link>.
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

  const handleAccept = () => {
    // Handle the logic when the user accepts the privacy policy
    setShowPopup(false);
  };

  const handleDecline = () => {
    // Handle the logic when the user declines the privacy policy
    setShowPopup(false);
  };

  return (
    <div>
      <button  className='fp' onClick={() => setShowPopup(true)}>Privacy Policy</button>
      {showPopup && (
        <PrivacyPolicyPopup onAccept={handleAccept} onDecline={handleDecline} />
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
  };
  
  const contentContainerStyle = {
    maxHeight: '90vh', // Limit the maximum height to 80% of the viewport height
    overflowY: 'auto', // Add overflow property for vertical scrolling
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  };


export default Privacy;
