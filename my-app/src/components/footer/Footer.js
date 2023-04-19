import "./Footer.css";
import{FontawesomeIcon } from "@fortawesome/react-fontawesome";
function Footer(){
  return(
    <>
    <div>
        <span>Author: Esraa Obeido</span>
        <div className="SocialMediaIcon">
            <a href = "https://www.youtube.com" className = "Youtube">
            <FontawesomeIcon icon={Fayoutube} size="2x"/>
            </a>
            <a href = "https://www.facebook.com" className = "Facebook">
            <FontawesomeIcon icon={FaFacebook} size="2x"/>
            </a>
            <a href = "https://www.instagram.com" className = "Instagram">
            <FontawesomeIcon icon={FaInstagram} size="2x"/>
            </a>
        </div>
    </div>
    </>
  )
}
export default Footer;


