import React from 'react'


const subtitle = "save The Day"
const title = (<h2>Join on Day Long Free Workshope for <b>Advanced <span>Mastering</span></b> sales </h2>)
const desc = "Limited Time Offer Hurry Up"
const Register = () => {
    return (
        <section className="register-section padding-tb pb-0">
            <div className="container">
                <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
                    <div className="col">
                        <div className="section-header">
                            <span className="subtitle">{subtitle}</span>
                            {title}
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="section-wrapper">
                            <h4 className="">Register Now</h4>
                            <form action="" className="register-form">
                                <input type="text" className="reg-input" placeholder='User Name'/>
                                <input type="email" className="reg-input" placeholder='User Email'/>
                                <input type="password" className="reg-input" placeholder='User Password'/>
                                <button type="submit" className='lab-btn'>
                                    Register Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register