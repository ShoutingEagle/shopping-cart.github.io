import React from 'react'
import axios from 'axios'

function ProductData() {
  axios.get('https://dummyjson.com/products')
    .then(respose => console.log(respose.data.products))
    .catch(error => console.log(error))
}


export default ProductData


