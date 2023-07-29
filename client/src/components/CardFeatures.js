import React from 'react'
import { Link } from 'react-router-dom'
import { addCartItems, deleteCartItems, increaseQty } from '../redux/productSlice'
import { useDispatch } from 'react-redux'


const CardFeatures = ({ name, image, category, price, loading, id }) => {
    const dispatch = useDispatch()
    const handleAddCartProduct = (e) => {
        dispatch(addCartItems({
            _id:id,
            name:name,
            category:category,
            price:price,
            image:image
        }))
    }
    return (

        <div className='w-full min-w-[200px] h-72 min-h-[200px] max-w-[200px]  bg-white drop-shadow-lg hover:shadow-lg py-5 px-4 cursor-pointer flex flex-col'>
            {
                image ?
                    <>
                        <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
                            <div className='h-28 flex flex-col justify-center items-center'>
                                <img src={image} alt="" className='h-full' />
                            </div>
                            <h3 className="font-semibold text-slate-700 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">{name}</h3>
                            <p className=" text-slate-500 font-medium">{category}</p>
                            <p className=" font-bold"><span className="text-red-500">$</span><span>{price}</span></p>
                        </Link>
                        <button className='bg-blue-400 py-1 mt-2 rounded hover:bg-blue-700 hover:text-white w-full ' onClick={handleAddCartProduct}> Add to Cart</button>
                    </>
                    :
                    <div className=' min-h-[200px] flex justify-center items-center'>
                        <p>{loading}</p>

                    </div>

            }


        </div>
    )
}

export default CardFeatures 