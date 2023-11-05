import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios'
import { setProducts } from '../Redux/actions/productActions';

function ProductListing() {
  const products = useSelector((state) => state); 
  const dispatch = useDispatch();


  const fetchProducts = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    .catch(error => console.log(error))
    dispatch(setProducts(response.data))
  } 


  useEffect(() => {
    fetchProducts();
  },[])
  console.log("Products", products)

  return (
    <div className='product-listing'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing








