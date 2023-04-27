import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
      <span>Author: Esraa Obeido</span>
      <div>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.youtube.com">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Footer;



