import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products.products);
  const renderList = products.products.map((product) => {
    const {id,title,price,thumbnail} = product;
    return (
    <div className='component' key={id}>
      <Link to={`/product/${id}`}>
        <div className='image'>
            <img src={thumbnail} className='image'/>
        </div>
        <div className='details'>
          <div className='title'>{title}</div>
          <div className='price'>$ {price}</div>
        </div>
        </Link>
    </div>
  )
  });

  return (
    <>
    {renderList}
    </>
  )
  
  
}

export default ProductComponent