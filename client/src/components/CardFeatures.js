import React from 'react'

const CardFeatures = ({ name, image, category, price }) => {
    return (
        <div className='w-full min-w-[200px] bg-white drop-shadow-lg hover:shadow-lg pt-5 px-4 cursor-pointer flex flex-col '>
            <div className='h-28 flex flex-col justify-center items-center'>
                <img src={image} alt="" className='h-full' />
            </div>
            <h3 className="font-semibold text-slate-700 capitalize text-lg mt-4">{name}</h3>
            <p className=" text-slate-500 font-medium">{category}</p>
            <p className=" font-bold"><span>{price}</span></p>
            <button className='bg-blue-500 py-1 mt-2 rounded'> Add to Cart</button>
            
        </div>
    )
}

export default CardFeatures 