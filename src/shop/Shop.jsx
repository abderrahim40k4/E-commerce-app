import React from 'react'
import PageHeader from '../components/PageHeader'
import { useState } from 'react'
const showResults ="Showing 1-12 of 136 Results"
const Shop = () => {
    const [gridList, setGridList] = useState(true)
    const [boxList, setBoxList] = useState(false)
    return (
      <div>
          <PageHeader title="Our Blog Page" curPage="Blog"/>
  
          <div className="shop-page padding-tb ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-12">
                    <div className="shop-title d-flex flex-wrap justify-content-between"><p>{showResults}</p>
  
                    
                    <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                      <a className="grid" onClick={()=>{setGridList(!gridList), setBoxList(!boxList)}}>
                        <i className="icofont-ghost"></i>
                      </a>
                      <a className="list" onClick={()=>{setBoxList(!boxList), setGridList(!gridList)}}>
                      <i class="icofont-listine-dots"></i>
                      </a>
                    </div>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-12">
                      right
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Shop