import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AllProduct from '../components/AllProduct'
import { addCartItems } from '../redux/productSlice'

function Menu() {
  const dispatch = useDispatch()
  const { filterby } = useParams()

  const productData = useSelector(state => state.product.productList)
  const productDisplay = productData.filter(el => el._id === filterby)[0];
  console.log(productDisplay);


  const handleAddCartProduct = (e) => {
    dispatch(addCartItems(productDisplay))
  }



  return (
    <div className='p-2 md:p-4'>
      <div className="w-full max-w-4xl m-auto md:flex bg-white ">
        <div className=" md:w-[auto] shadow overflow-hidden h-[400px] me-3 p-2">
          <img src={productDisplay.image} alt="" className='hover:scale-105 transition-all h-full w-full' />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <h3 className="font-semibold text-slate-700 capitalize text-2xl md:text-4xl">{productDisplay.name}</h3>
          <p className=" text-slate-500 font-medium text-2xl">{productDisplay.category}</p>
          <p className=" font-bold md:text-2xl"><span>{productDisplay.price}</span></p>
          <div className='flex gap-3'>
            <button className='bg-blue-400 py-1 mt-2 rounded hover:bg-blue-700 hover:text-white min-w-[100px]'>Buy</button>
            <button onClick={handleAddCartProduct} className='bg-blue-400 py-1 mt-2 rounded hover:bg-blue-700 hover:text-white min-w-[100px]' > Add to Cart</button>
          </div>
          <div className="">
            <p className='text-slate-600 font-medium'>Description : </p>
            <p>{productDisplay.description}</p>
          </div>

        </div>

      </div>

      <AllProduct heading={"Related Product"} />
    </div>
  )
}

export default Menu