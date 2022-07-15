import { BsFillCartFill } from "../../assets/icons"
import "./Navbar.css"

function Navbar()
{
    return (
        <div className="navbar">
            <div className="logo-container">
                <img 
                    className="flipkart-logo"
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                    alt="flipkart"
                />
            </div>
            <div className="searchbar-container">
                <input
                    className="searchbar"
                    type="text"
                    placeholder="Search for products, brands and more"
                />
            </div>
            <button className="btn-login">Login</button>
            <div className="btn-cart">
                <BsFillCartFill/>
                Cart
            </div>
        </div>
    )
}

export { Navbar }