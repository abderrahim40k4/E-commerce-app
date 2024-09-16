import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
{
iconName: 'icofont-users-alt-4',
count: '12600',
text: 'Marchant Enrolled',
},
{
iconName: 'icofont-graduate-alt',
count: '30',
text: 'Certified Courses',
},
{
iconName: 'icofont-notification',
count: '100',
text: 'Rewards and GitCards',
},
]
const AboutUs = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
        <div className="container">
            <div className="section-wrapper">
                <div className="row g-4 justify-content-center align-items-center row-cols-lg-3 row-cols-1 row-cols-md-2">
                    <div className="col">
                        {
                            countList.map((item,key)=>(
                            <div className='count-item' key={key}>
                                <div className="count-inner">
                                    <div className="count-icon">
                                        <i className={item.iconName}></i>
                                    </div>

                                    <div className="count-content">
                                        <h2><span className='count'>
                                            <CountUp end={item.count}/>
                                            </span>
                                            <span>+</span></h2>
                                            <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>))
                        }
                    </div>

                    <div className="col">
                        <div className="instructor-content">
                            <span className='subtitle'>{subTitle}</span>
                            <h2 className='title'>{title}</h2>
                            <p>{desc}</p>
                            <Link className='lab-btn' to={"/sign-up"}>{btnText}</Link>
                        </div>
                    </div>

                    <div className="col">
                        <div className="instructor-thumb">
                            <img src="src/assets/images/instructor/01.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs