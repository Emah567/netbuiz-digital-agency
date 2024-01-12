/* eslint-disable react/no-unescaped-entities */
import "./style/home.css"
import webhero from "../assets/vid/webhero.mp4"
// import { Icon } from '@iconify/react';
import hero from '../assets/img/hero.png'
import laptop from '../assets/vid/laptop.mp4'
import Three from "../components/Three"
import utree from '../assets/img/utree.png'
import agent from '../assets/img/agent.png'
import chatai from '../assets/vid/chatai.mp4'
import etech from '../assets/vid/etech.mp4'
// import ceo from '../assets/img/ceo.jpg'
import './media css/home.css'
// import service from '../assets/img/service.jpg'
import terms from '../assets/img/terms.gif'
// import boutsec from '../assets/img/boutsec.png'
import bluelogo from '../assets/img/bluelogo.png'
import EmailForm from "../components/Form"
import Team from "../components/Team"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for styles

// Initialize AOS
AOS.init();

const Home = () => {
    useEffect(() => {
    const swiftUpElements = document.querySelectorAll('.swift-up-text');

    swiftUpElements.forEach(elem => {
      const words = elem.textContent.split(' ');
      elem.innerHTML = '';

      words.forEach((el, index) => {
        words[index] = `<span><i>${words[index]}</i></span>`;
      });

      elem.innerHTML = words.join(' ');

      const children = elem.querySelectorAll('span > i');
      children.forEach((node, index) => {
        node.style.animationDelay = `${index * 0.2}s`;
      });
    });
  }, []);
  return (
    <div className="home">

{/* =====================HERO======================== */}

      <div className="hero">
        <div className="grey"></div>
      <video
      className="video"
        autoPlay
        loop
        muted
      >
        <source
          src={webhero}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
       <div className="title">
       <div className="h1"><div className="b-contain"><img src={bluelogo} alt="" /></div><h1 className='tracking-in-contract'>etBuiz</h1></div>
        <p className="herotxt">Elevate Your Business, One Pixel at a Time</p>
       <Link to="/contact"><button className="btn">
    <b>Hire Us!</b>
</button></Link>
       </div>
      </div>

    
     
      {/* =====================SERVICE======================== */}

      <figure className="service">

       <div className="service-left">
       <h1 data-aos="zoom-in">What We Do</h1>
        <p className='craft' data-aos="zoom-in">Crafting Digital Excellence: Unleashing the Power of Web Design, Igniting Success with Digital Marketing, and Ensuring Seamless Website Maintenance and Support.</p>
     <div className="ticks">
      <div className="deg1" data-aos="zoom-in"><p><strong>Web Design and Development:</strong> Creating and building websites to make them look good and work well.</p></div>
      <div className="deg2" data-aos="zoom-in"><p><strong>Digital Marketing:</strong> Using online strategies like SEO, social media, and ads to promote a business.</p></div>
      <div className="deg3" data-aos="zoom-in"><p className='degtxt'><strong>Website Maintenance and Support:</strong> Keeping a website up-to-date, secure, and helping users when needed.</p></div>
 </div>
       </div>

      <div className="s-right">
        <div className="s-btn">
<div className="s-dots"></div>
<Link to="/services" data-aos="zoom-in"><button className="btn">
    <b>Know More</b>
</button></Link>
        </div>
        <div className="seervice-right" data-aos="zoom-in-up">
        <img src={hero} className='laptop' alt="" />
        <video
      className="lvideo"
        muted
        autoPlay
        loop
      >
        <source
          src={laptop}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
       </div>
      </div>
      </figure>
{/* ================about----------------======== */}
<div className="about">
<div className="a-dots"></div>
<div className="a-left">
<img className="one" src={terms} alt="img" data-aos="zoom-in" />
</div>
<div className="a-right">
<h1 data-aos="zoom-in-up">About Us</h1>
<p data-aos="zoom-in-up">Established on January 1, 2024, Your Netbuiz Digital Agency is your dedicated partner in the digital realm. As a collective force, we focus on guiding brands towards digital excellence through web development, search engine optimization, and comprehensive web maintenance.</p>
<Link to="/about" data-aos="zoom-in-up"><button className="btn">
    <b className='a-btn'>know more</b>
</button></Link>
</div>
</div>


{/* ================projects=========== */}
<div className="projects">
  <div className="p-heading">
  <h1 data-aos="zoom-in">what we've done</h1>
  <Link to="/projects" data-aos="zoom-in"><button className="btn">
    <b className='a-btn'>more</b>
</button></Link>
  </div>

<div className="p-grid">

  <div className="p p-tr" data-aos="fade-up">
    <div className="p-dot"> <a href="https://utree-hotel.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;demo&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;demo&nbsp;</span>
      </button ></a></div>
    <img className='p-img' src={utree} alt="" />
    <a href="https://utree-hotel.vercel.app/" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn ">
    <b className='a-btn'>demo</b>
</button></a>
  </div>


  <div className="p  p-tl" data-aos="fade-up">
 <div className="p-img">
 <video
      className="llvideo"
        muted
        autoPlay
        loop
      >
        <source
          src={chatai}
          type="video/mp4"
          className="llvideo"
        />
        Your browser does not support the video tag.
      </video>
      <a href="https://chatai-hsd.vercel.app/" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn">
    <b className='a-btn'>demo</b>
</button></a>
 </div>
 <div className="p-dot"> <a href="https://chatai-hsd.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;demo&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;demo&nbsp;</span>
      </button ></a></div>
  </div>

  <div className="p p-ll" data-aos="fade-up">
    <div className="p-dot"><a href="https://etechpods.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;demo&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;demo&nbsp;</span>
      </button ></a></div>
      <div className="p-img">
  <video
       className="llvideo"
         muted
         autoPlay
         loop
       >
         <source
           src={etech}
           type="video/mp4"
           className="llvideo"
         />
         Your browser does not support the video tag.
       </video>
       <a href="https://etechpods.vercel.app/" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn ">
    <b className='a-btn'>demo</b>
</button></a>
  </div>
 
  </div>

  <div className="p p-right" data-aos="fade-up">
  <img className='p-img' src={agent} alt="" />
    <div className="p-dot"><a href="https://furum-digital.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;demo&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;demo&nbsp;</span>
      </button ></a></div>
      <a href="https://furum-digital.vercel.app/" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn">
    <b className='a-btn'>demo</b>
</button></a>
  </div>
</div>
</div>

{/* ===============team=============== */}

<div className="team">
<h1 data-aos="zoom-in">team</h1>
<Team />
</div>



<div className="contact-section">
  <h1>Hire us</h1>
<div className="c-flex">
<Three  />
<div className="home-form"><EmailForm className='formsec' /></div>
</div>
</div>

    </div>
  )
}

export default Home
