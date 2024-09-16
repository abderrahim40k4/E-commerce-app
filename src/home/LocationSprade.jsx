import React from 'react'
import { Link } from 'react-router-dom';

const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
]
const LocationSprade = () => {
  return (
    <div className="clients-section padding-tb style-2">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
            </div>

            <div className="section-wrapper">
               <div className="clients">
               {
                    clientsList.map((client, key)=>(
                        <div className="client-list" key={key}>
                            <Link to={"/sign-up"} className='client-content'>
                            <span>{client.text}</span>
                            </Link>

                            <div className="client-thumb">
                                <img src={client.imgUrl} alt={client.imgAlt} />
                            </div>
                        </div>
                    ))
                }
               </div>
            </div>

        </div>
    </div>
  )
}

export default LocationSprade