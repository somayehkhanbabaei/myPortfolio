import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

export default function Footer() {
  return (
    <>
      <footer id='contact'>
        <h2>Contact Me</h2> 
        <div className="socials">
          <a href="https://github.com/somayehkhanbabaei" target='_blank'>
          <FontAwesomeIcon icon={faGithub} className='socials-link'/>
          </a>
          <a href="https://www.linkedin.com/in/somayeh-khanbabaei-7a04b3173/" target='_blank'>
          <FontAwesomeIcon icon={faLinkedin} className='socials-link'/>
          </a>
          <a href="mailto:somayehkhanbabaei.nl@gmail.com" >
          <FontAwesomeIcon icon={faEnvelope} className='socials-link'/>
          </a>
          <a href="#" title='+31616692822'>
          <FontAwesomeIcon icon={faPhone} className='socials-link'/>
          </a>
        </div>
    </footer>
    </>
  )
}
