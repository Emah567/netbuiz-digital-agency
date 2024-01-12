import './style/footer.css'
import Privacy from './privacy.jsx'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container row">
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li><Link className='flinks' to="about">about us</Link></li>
          <li><Link className='flinks' to="services">our services</Link></li>
          <li className='flinks'><Privacy/></li>
          <li><Link className='flinks' to="contact">contact us</Link></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>get help</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">shipping</a></li>
          <li><a href="#">returns</a></li>
          <li><a href="#">order status</a></li>
          <li><a href="#">payment options</a></li>
        </ul>
      </div>
      {/* <div className="footer-col">
        <h4>online shop</h4>
        <ul>
          <li><a href="#">download</a></li>
          <li><a href="#">changelog</a></li>
          <li><a href="#">github</a></li>
          <li><a href="#">all version</a></li>
        </ul>
      </div> */}
      <div className="footer-col">
        <h4>Socials</h4>
        <div className="social-links">
        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/message/Q52JY2B5OUPQP1"><i className="fa-brands fa-whatsapp"></i></a>
<a target="_blank" rel="noopener noreferrer" href="https://www.upwork.com/freelancers/~01de99e8bb1d7338c9"><i className="fa-brands fa-upwork"></i></a>
<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/netbuiz"><i className="fa-brands fa-x-twitter"></i></a>
<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/netbuizdigital/"><i className="fa-brands fa-instagram"></i></a>
<a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/netbuiz-agency-48815b2a9"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer