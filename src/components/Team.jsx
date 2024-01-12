/* eslint-disable react/no-unescaped-entities */
import './style/team.css'
import ceo from '../assets/img/ceo.jpg'
import gp from '../assets/img/gp.jpg'
import broui from '../assets/img/broui.jpg'
import Working from '../assets/img/Working.gif'

const Team = () => {
  return (
    <>
    <div className="main1">   <div data-aos="zoom-in" className="profile-card me-mobile">
        <div className="img">
          <img src={ceo} alt="David Corner" />
        </div>
        <div className="caption">
          <h3>Emmanuel .E.</h3>
          <p>CEO</p>
          {/* <div className="social-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/message/LEXWLYPH3QM6I1"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div> */}
              
        </div>
      </div></div>
    <div className="main main1">
      <div className="profile-card" data-aos="zoom-in">
        <div className="img">
          <img src={Working} alt="Vin Diesel" />
        </div>
        <div className="caption">
          <h3>Ben .J.</h3>
          <p>SEO specialist</p>
        </div>
      </div>
      <div className="profile-card me" data-aos="zoom-in">
        <div className="img">
          <img src={ceo} alt="David Corner" />
        </div>
        <div className="caption">
        <h3>Emmanuel .E.</h3>
          <p>CEO</p>
          {/* <div className="social-links">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </div> */}
        </div>
      </div>
      <div className="profile-card" data-aos="zoom-in">
        <div className="img">
          <img src={gp} alt="Tom Cruise" />
        </div>
        <div className="caption">
          <h3>God'spower</h3>
          <p>Backend developer</p>
        </div>
      </div>
    </div><div className="main">
        <div className="profile-card" data-aos="zoom-in">
          <div className="img">
            <img src={broui} alt="David Corner" />
          </div>
          <div className="caption">
            <h3>Micheal .E.</h3>
            <p>UI & UX designer</p>
          </div>
        </div>
        <div className="profile-card" data-aos="zoom-in">
          <div className="img">
          <img src={Working} alt="Vin Diesel" />
          </div>
          <div className="caption">
            <h3>Anabel .C.</h3>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div></>

  )
}

export default Team


