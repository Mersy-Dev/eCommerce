import React from 'react'
import { TbMinus, TbPlus } from 'react-icons/tb'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { decreaseQty, deleteCartItems, increaseQty } from '../redux/productSlice'



const CartProduct = ({ id, name, image, price, quantit, total, category }) => {
    const dispatch = useDispatch()

    return (
        <div className='bg-slate-500 p-2 flex gap-3 rounded border border-slate-400'>
            <div className="bg-white p-3 rounded overflow-hidden">
                <img src={image} alt="" className='h-28 w-40 object-cover' />
            </div>

            <div className="flex flex-col gap-1 w-full">
                <div className='flex justify-between'>

                    <h3 className="font-semibold text-slate-900 capitalize text-lg md:text-xl">{name}</h3>
                    <div className='cursor-pointer text-slate-900 hover:text-red-600' onClick={()=>dispatch(deleteCartItems(id))}>
                        <AiFillDelete/>
                    </div>
                </div>

                <p className=" text-slate-800 font-medium ">{category}</p>
                <p className=" font-bold text-base"><span>{price}</span></p>

                <div className='flex justify-between'>
                    <div className='flex gap-3 items-center'>
                        <button className='bg-blue-400 py-1 mt-2 rounded hover:bg-blue-700 hover:text-white p-1' onClick={()=>dispatch(increaseQty(id))}><TbPlus /></button>
                        <p className='font-semibold'>{quantit}</p>
                        <button  className='bg-blue-400 py-1 mt-2 rounded hover:bg-blue-700 hover:text-white p-1' onClick={()=>dispatch(decreaseQty(id))} ><TbMinus /></button>
                    </div>

                    <div className='flex items-center gap-2 font-bold text-slate-700'>
                        <p>Total : </p>
                        <p><span className="text-red-500">$</span>{total}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CartProduct



// import React from 'react'

// const CartProduct = ({id, name, category, image, price, quantit, total}) => {
//   return (
//     <div className='bg-slate-200 p-2 flex'>
//         <div className="bg-white p-3 rounded overflow-hidden">
//             <img src={image} alt="" className='h-28 w-36 object-cover'/>
//         </div>

//         <div className="flex flex-col gap-1 p-2">
//           <h3 className="font-semibold text-slate-700 capitalize text-lg md:text-xl">{name}</h3>
//           <p className=" text-slate-500 font-medium ">{category}</p>
//           <p className=" font-bold text-base"><span>{price}</span></p>
//           <div className='flex gap-3'>
//             <button className='bg-blue-400 py-1 mt-2 rounded hover:bg-blue-700 hover:text-white min-w-[100px] text-xl'>+</button>
//             <button onClick={""} className='bg-blue-400 py-1 mt-2 rounded hover:bg-blue-700 hover:text-white min-w-[100px] text-xl' >-</button>
//           </div>
          
//         </div>
//     </div>
//   )
// }

// export default CartProduct