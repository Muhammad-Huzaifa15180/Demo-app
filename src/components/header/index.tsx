import "./index.css"
import Button from "../../components/button";
function Header() {
  return (
    <nav>
        <div className="container">
            <div className="flex">
            <div className="logo">
                <img src="./images/logo.png" alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <li><a href=""></a>Home</li>
                    <li><a href=""></a>About</li>
                    <li><a href=""></a>Join</li>
                    <li><a href=""></a>Merchandise</li>
                    <li><a href=""></a>Contact Us</li>
                </ul>
            
        </div>
        <Button text="Players" type="primary-button"/>
            <Button text="Scouts"type="primary-button"/>
            <Button text="Coaches"type="primary-button"/>
        </div>
        </div>
    </nav>
  )
}

export default Header