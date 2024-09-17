import { Rating } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../components/Ratting'

const ProductsCard = ({gridList, products}) => {
  return (
    <div className={`shop-product-wrap row justify-content-center ${gridList ? "grid" : "list"}`}>
        {
            products.map((product, key)=>(
                <div key={key} className="col-lg-4 col-md-6 col-22">
                    <div className="product-item">
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="product-action-link">
                                <Link to={`/shop/${product.id}`}><i className="icofont-eye"></i></Link>
                                <a href="#"><i className="icofont-heart"></i></a>
                                <Link to={`/shop-cart`}><i className="icofont-cart"></i></Link>
                            </div>
                        </div>

                        <div className="product-content">
                            <h5>
                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </h5>

                            <p className='productRating'>
                                <Rating/>
                            </p>
                            <h6>${product.price}</h6>
                        </div>
                    </div>
                    
                    <div className="product-list-item">
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={product.img} alt="" />
                            </div>
                            <div className="product-action-link">
                                <Link to={`/shop/${product.id}`}><i className="icofont-eye"></i></Link>
                                <a href="#"><i className="icofont-heart"></i></a>
                                <Link to={`/shop-cart`}><i className="icofont-cart"></i></Link>
                            </div>
                        </div>

                        <div className="product-content">
                            <h5>
                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </h5>

                            <p className='productRating'>
                                <Rating/>
                            </p>
                            <h6>${product.price}</h6>
                        </div>
                    </div>

                    
                </div>
            ))
        }
    </div>
  )
}

export default ProductsCard