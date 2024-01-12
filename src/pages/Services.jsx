import './style/service.css'
import service from '../assets/img/service.jpg'
import { Icon } from '@iconify/react';
import './media css/service.css'
import Team from '../components/Team.jsx'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='port'>
      <div className="section-hero">
        <img className='service-img' src={service} alt="" />
        <div className="grey"></div>
        <h1 className='tracking-in-contract'>services</h1>
      </div>

      <div className="s-box">
        <div className="offers" data-aos="zoom-in">
          <div className="circle"></div>
          <div className="iconservice"><Icon icon="icon-park-solid:add-web"  width="25" height="25"/></div>
          <h3>Website Maintenance and Support</h3>
        </div>

        <div className="offers blue-offer" data-aos="zoom-in">
          <div className="circle"></div>
          <div className="iconservice"><Icon className='offer-icon' icon="gridicons:layout" color="royalblue" /></div>
          <h3>Web Design and Development</h3>
        </div>

        <div className="offers" data-aos="zoom-in">
          <div className="circle"></div>
          <div className="iconservice"><Icon icon="mdi:web-check" width="25" height="25" /></div>
          <h3>Digital Marketing</h3>
        </div>
      </div>

      <div className="tools">
        <h1 data-aos="zoom-in">Our Essential Toolkit</h1>
        <p data-aos="zoom-in"> From project management to creative design, our toolkit ensures a smooth and streamlined experience, empowering our team to deliver top-notch results.</p>
        <div className="tool-boxes">
          <div className="tool" data-aos="zoom-in">
          <Icon icon="skill-icons:react-dark" width="35" height="35" classNamme='tool-icon'/>
            <h3>react.js</h3>
            <a href="https://legacy.reactjs.org/" target="_blank" rel="noopener noreferrer">about</a>


          </div>

          <div className="tool" data-aos="zoom-in">
          <Icon icon="cib:next-js" color="white" width="35" height="35" />
            <h3>next.js</h3>
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">about</a>

          </div>

          <div className="tool" data-aos="zoom-in">
          <Icon icon="skill-icons:threejs-dark" color="white" width="35" height="35" />
            <h3>three.js</h3>
            <a href="https://stackoverflow.com/questions/tagged/three.js" target="_blank" rel="noopener noreferrer">about</a>

          </div>

          <div className="tool" data-aos="zoom-in">
          <Icon icon="skill-icons:css" color="white" width="35" height="35" />
            <h3>css</h3>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">about</a>

          </div>

          <div className="tool" data-aos="zoom-in">
          <Icon icon="skill-icons:tailwindcss-dark" color="white" width="35" height="35" />
            <h3>tailwind</h3>
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">about</a>

          </div>



          <div className="tool" data-aos="zoom-in">
          <Icon icon="skill-icons:html" color="white" width="35" height="35" />
            <h3>html</h3>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">about</a>

          </div>

          <div className="tool" data-aos="zoom-in">
          <Icon icon="skill-icons:javascript" color="white" width="35" height="35" />
            <h3>js</h3>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">about</a>

          </div>


          <div className="tool" data-aos="zoom-in">
          <Icon icon="simple-icons:rive" color="white" width="35" height="35" />
            <h3>rive</h3>
            <a href="https://www.f6s.com/company/rive-inc" target="_blank" rel="noopener noreferrer">about</a>

          </div>
        </div>

      </div>

      <div className="s-white">

        <div className="middle">
          <div className="m-left">
            <div className="call-icon"><Icon icon="ph:phone" color="white" width="32" height="32" /></div>

            <div className="call-txt">
              <p>Make Futher inquiries</p>
              <h3>
                +234 9123 320 789
              </h3>
            </div>
          </div>

          <p className='m-txt'>
          Have questions or need assistance? Feel free to reach out! Our team is here to help. Contact us for any inquiries or information you may need. We look forward to hearing from you.
          </p>

          <Link to="/contact" > <button>Make Appointment</button> </Link>
        </div>
        <div className="process">
           <h1>our team</h1>
          <p className='pp'>Meet our stellar team - a blend of talent and passion driving success.</p>
            
       <Team />


        </div>
        </div>
      </div>
    

  )
}

export default Services