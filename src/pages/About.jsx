/* eslint-disable react/no-unescaped-entities */
import './style/about.css'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <h1 className='about-head tracking-in-contract'>about us</h1>
      <div className="txt-a">
        <p className="f-about" data-aos="fade-up">
          Welcome to [Your Agency Name], where digital transformation is more than a service – it's our passion. Officially launched on January 1, 2024, our goal is simple yet powerful: to help brands flourish in the online world. Through expert web development, search engine optimization, and meticulous web maintenance, we breathe life into your digital presence. Join us on this exciting journey, where your success is not just a destination, but our shared mission.
        </p>

        <h4 data-aos="fade-up">Our Collective Commitment:</h4>
       <p className="collectives" data-aos="fade-up">At [Your Netbuiz Agency], our collective commitment is to transform your digital vision into a tangible reality. Whether you're a startup or an established brand, we provide the expertise needed to elevate your online presence.</p>
        
        <div className="about-flex">
          <div className="about-left">
            <h4 data-aos="fade-up">why netbuiz</h4>
            <p data-aos="fade-up"><b>nnovative Designs, Real Results:<br></br></b>Choose us for websites that not only look stunning but drive real business outcomes. Experience innovation that delivers tangible results.</p>
            <p data-aos="fade-up"><b>SEO Mastery, Your Brand on Top:</b><br></br>Elevate your brand with our SEO expertise. When you choose us, you choose visibility. Be at the top when it matters most.</p>
            <p data-aos="fade-up"><b>Reliable Maintenance, Always On:</b><br></br>Trust us for hassle-free web maintenance. We keep your digital presence smooth and reliable, so you can focus on what you do best – running your business.</p>
          </div>
<br></br>
          <div className="about-right">
            <h4>get started</h4>
            <p>Ready to embark on your digital journey with us? Let's get started together</p>
            <Link to="/contact"> <button className="btn">
    <b>contact us</b>
</button></Link>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default About
