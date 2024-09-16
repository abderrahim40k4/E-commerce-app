import React from 'react'
import { Link } from 'react-router-dom'

const btntxt = "Sign up for Free"
const title = "Shop Anytime, Anywhere"
const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus corrupti iure ducimus repellendus dolores, mollitia voluptas nostrum ipsum, ipsam, provident amet sequi magnam maxime nulla ipsa delectus. Fugit, at quas."
const OurApp = () => {
  return (
    <div className="app-section padding-tb">
        <div className="container">
            <div className="section-header text-center">
                <Link to={"/sign-up"} className='lab-btn mb-4'>{btntxt}</Link>
                <h2 className='title'>{title}</h2>
                <p>{desc}</p>
            </div>

            <div className="section-wrapper">
                <ul className="lab-ul">
                    <li><a href="#"><img src="src/assets/images/app/01.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="src/assets/images/app/02.jpg" alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default OurApp