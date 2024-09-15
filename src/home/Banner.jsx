import React, { useState } from 'react'
import ProdactDtat from "../products.json"
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';
const title = (<h1> Fined your destinations from <span>Thousand</span> of prodacts</h1>)
const desc = "We have all you have in maind"
const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
];

const Banner = () => {
    const [inputValue, setInputValue] = useState("")
    const [prodactsFileter, setProdactFilter] = useState(ProdactDtat)

const handleSearch = e =>{
    const searchTerm = e.target.value;
    setInputValue(e.target.value);

    const filterd = ProdactDtat.filter((prodact) => prodact.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
    setProdactFilter(filterd)

}
    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    {title}

                    <form>
                        <SelectedCategory selected={"All"}/>
                        <input type="text" name="search" id="search" placeholder='Find your Prodact' onChange={handleSearch} value={inputValue}/>
                        <button type="submit"><i className="icofont-search-2"></i></button>
                    </form>
                    <p>{desc}</p>

                    <ul className='lab-ul'> 
                        {
                            inputValue && prodactsFileter.map((prodact, id) =>
                                <li key={id}><Link to={`/shop/${prodact.id}`}>{prodact.name}</Link></li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner