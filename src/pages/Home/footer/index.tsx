import Button from "../../../components/button"
import "./index.css"


const Footer = ()=> {
  return (
    <footer>
        <section className="foter">

        </section>
        <div className="container">
            <div className="flex">
                <div className="navigation">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href=''>About</a></li>
                        <li><a href=''>Home</a></li>
                        <li><a href=''>Contact Us</a></li>
                        <li><a href=''>Merchandise</a></li>
                        <li><a href=''>Join</a></li>
                    </ul>
                </div>
                <div className="company">
                    <h4>Company</h4>
                    <ul>
                        <li><a href=''>About us</a></li>
                        <li><a href=''>Our mission and vision</a></li>
                        <li><a href=''>Our team</a></li>
                    </ul>
                </div>
                <div className="support">
                    <h4>Support</h4>
                    <ul>
                        <li><a href=''>Contact us</a></li>
                        <li><a href=''>Login</a></li>
                        
                    </ul>
                </div>
                <div className="footer-logo">
                    <img src="./images/Frame 1.png" alt="" />
                </div>
                
            </div>
            <div className="footer-flex">
            <div className="copyright">
            <h4>Copyright 2022. All rights reserved </h4>
            <h4>Created by <span>Particular Agency</span></h4>
            </div>
            <div className="footer-icon">
                <a href=""><img src="./images/ri_instagram-fill.png" alt="" /></a>
                <a href=""><img src="./images/akar-icons_linkedin-v1-fill.png" alt="" /></a>
                <a href=""><img src="./images/fe_facebook.png" alt="" /></a>
                <Button text="Contact Us" type="secondary-button"/>
                
            </div>
            
        </div>
        </div>
    </footer>
  )
}

export default Footer