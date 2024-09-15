import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo/logo.png"

const NavItems = () => {
    const [menuToggele, setMenuToggale] = useState(false)
    const [socailToggele, setSocailToggale] = useState(false)
    const [headerFixed, setHeaderFixed] = useState(false)

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true)
        } else {
            setHeaderFixed(false)
        }
    })
    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
            { }
            <div className={`header-top d-md-none .d-lg-block ${socailToggele ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <Link to="/signup" className='lab-btn me-3'>Creat account</Link>
                        <Link to="/login">Log in</Link>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo-search-acte">
                            <div className="logo">
                                <Link to={"/"}>
                                    <img src={logo} alt="" /></Link>
                            </div>
                        </div>

                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggele? "active" : ""}`}>
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>Shope</Link>
                                    </li>
                                    <li>
                                        <Link to={"/blog"}>Blog</Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>About</Link>
                                    </li>
                                    <li>
                                        <Link to={"/"}>Contact</Link>
                                    </li>
                                </ul>
                            </div>

                                <Link to={"/sig-up"} className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                                <Link to={"/sig-up"} className='d-none d-md-block'>Log in </Link>


                                {/* toggale menu */}
                                <div onClick={() => {setMenuToggale(!menuToggele)}} className={`header-bar d-lg-none ${menuToggele ? "active":""}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="ellepsis-bar d-md-none" onClick={()=>{setSocailToggale(!socailToggele)}}>
                                <i class="icofont-login"></i>
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default NavItems