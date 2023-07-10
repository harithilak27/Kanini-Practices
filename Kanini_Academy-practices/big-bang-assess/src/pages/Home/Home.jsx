import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import bg from '../../images/bg.jpg';
import footer from '../../images/footer.avif'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Navbar />
    <div className='header'>
    <div className='container'>
      <div className='header'>
        <img src={bg} alt='' className='img' />
      </div>
      <div className='content'>
      The city of Chennai, in the southern part of India, 
      is known for its beautiful beaches, hot sun, and bustling lively crowds. 
      This large, modern city has also been known throughout the country for 
      the high-quality of medical treatment and care available. And now over the years, 
      Chennai has become the leading destination for travelling patients from across the 
      globe for treatment options in Chennai.
      </div>
    </div>
    <div className='container-2'>
        <div>
            <h3>Heart Surgery :</h3>
            <p>
            From bypass surgery to stents, heart valve replacement, 
            and more, Chennai offers travelers a full range of world-class 
            cardiac treatment alternatives. Chennai performed India’s first 
            Heartmate II LVAD surgery. It also shines in Pediatric Cardiology, 
            having done India’s first pediatric heart transplant here on a Russian baby.
            </p>
        </div>
        <div>
            <h3>Transplant Surgeries :</h3>
            <p>Chennai has several world-renowned transplant surgeons 
                and hospitals equipped to perform heart, lung, liver, 
                and kidney transplants.</p>
        </div>
        <div>
            <h3>Orthopedic Procedures :</h3>
            <p>
            Specialty hospitals in the city perform a full range of orthopedic 
            procedures,including arthroscopic repairs and joint replacements. 
            The most common of these, for international travelers, 
            is minimally invasive knee replacement surgeries.
            </p>
        </div>
    </div>
    <div className='ad'>
        <div>
            Register now for you appointments in Aura hospital for a world class treatment and services
        </div>
        <Link to={'/Login'}>
            <button>
                Register Now 
            </button>
        </Link>
    </div>
    </div>
    <div className='footer'>
        <div>
            <img src={footer} alt=''  />
        </div>
        <div className='contact'>
            <h3>CONTACT US</h3>
            <p>→ harithilak0999@gmail.com</p>
            <p>→ 6379489139</p>
            <p>→ www.Aurahospital.com</p>
        </div>
    </div>

    </>
  )
}

export default Home
