import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavItems = () => {
    const [menuToggele, setMenuToggale] = useState(false)
    const [socailToggele, setSocailToggale] = useState(false)
    const [headerFixed, setHeaderFixed] = useState(false)

    window.addEventListener("scroll", () =>{
        if (window.scrollY > 200) {
            setHeaderFixed(true)
        }else{
            setHeaderFixed(false)
        }
    })
  return (
    <header className={`header-secton style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        { }
        <div className={`header-top .d-md-none .d-lg-block ${socailToggele ? "open" : "" }`}>
            <div className="container">
                <div className="header-top-area">
                    <Link to="/signup" className='lab-btn me-3'>Creat account</Link>
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>

        <div className="header-bottom">
            <div className="container">

            </div>
        </div>
    </header>
  )
}

export default NavItems