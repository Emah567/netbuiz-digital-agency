import "./style/home.css"
import "./style/project.css"
import utree from '../assets/img/utree.png'
import agent from '../assets/img/agent.png'
import movie from '../assets/img/movie.png'
import nike from '../assets/img/nike.png'
import cosmetics from '../assets/img/cosmetics.png'
import school from '../assets/img/school.png'
import chatai from '../assets/vid/chatai.mp4'
import etech from '../assets/vid/etech.mp4'
import xplur from '../assets/vid/xplur.mp4'
import './media css/home.css'

const Projects = () => {
  return (
    <div className="project-section">
      <div className="header-txt"><h1  className='ph1 tracking-in-contract'>Featured projects</h1></div>
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
      <img className='p-img' src={agent} alt="" />
      <div className="p-dot"> <a href="https://furum-digital.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;demo&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;demo&nbsp;</span>
      </button ></a></div>
      <a href="https://furum-digital.vercel.app/x" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn ">
    <b className='a-btn'>demo</b>
</button></a>
      </div>
    
      <div className="p p-ll" data-aos="fade-up">
      <div className="p-dot"> <a href="https://xplur-all.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
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
               src={xplur}
               type="video/mp4"
               className="llvideo"
             />     Your browser does not support the video tag.
             </video>
             <a href="https://xplur-all.vercel.app/" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn ">
    <b className='a-btn'>demo</b>
</button></a>
        </div>
       
        </div>
      
        <div className="p p-right" data-aos="fade-up">
        <img className='p-img' src={movie} alt="" />
        <div className="p-dot"> <a href="https://moviequest-all.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;demo&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;demo&nbsp;</span>
      </button ></a></div>
      <a href="https://moviequest-all.vercel.app/" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn ">
    <b className='a-btn'>demo</b>
</button></a>
        </div>


        <div className="p p-tr" data-aos="fade-up">
        <div className="p-dot"> <a href="https://littlerookie-school.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;demo&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;demo&nbsp;</span>
      </button ></a></div>
        <img className='p-img' src={school} alt="" />
        <a href="https://littlerookie-school.vercel.app/" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn ">
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
          <a href="https://chatai-hsd.vercel.app/" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn ">
    <b className='a-btn'>demo</b>
</button></a>
     </div>
     <div className="p-dot"> <a href="https://chatai-hsd.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;demo&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;demo&nbsp;</span>
      </button ></a></div>
      </div>
    
      <div className="p p-ll" data-aos="fade-up">
      <div className="p-dot"> <a href="https://etechpods.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
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
             />     Your browser does not support the video tag.
             </video>
             <a href="https://etechpods.vercel.app/" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn ">
    <b className='a-btn'>demo</b>
</button></a>
        </div>
       
        </div>
      
        <div className="p p-right" data-aos="fade-up">
        <img className='p-img' src={nike} alt="" />
        <div className="p-dot"> <a href="https://nike-lp.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;demo&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;demo&nbsp;</span>
      </button ></a></div>
      <a href="https://nike-lp.vercel.app/" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn ">
    <b className='a-btn'>demo</b>
</button></a>
        </div>

        <div className="p p-tr" data-aos="fade-up">
        <div className="p-dot"> <a href="https://cosmetics-ew.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;demo&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;demo&nbsp;</span>
      </button ></a></div>
        <img className='p-img' src={cosmetics} alt="" />
        <a href="https://cosmetics-ew.vercel.app/" target="_blank" rel="noopener noreferrer" className='demor'><button className="btn ">
    <b className='a-btn'>demo</b>
</button></a>
      </div>
      </div></div>
  )
}

export default Projects