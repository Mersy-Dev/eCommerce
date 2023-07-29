import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../components/CartProduct';
import emptyCartImage from '../gall/emptycrt.gif'

const Cart = () => {
    const productCartItem = useSelector((state) => state.product.cartItems)
    console.log(productCartItem);

    const totalPrice = productCartItem.reduce((acc, curr) => acc + parseInt(curr.total), 0)
    const totalItems = productCartItem.reduce((acc, curr) => acc + parseInt(curr.quantit), 0)

    return (
        <>
            <div className='p-2 md:p-4'>
                <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart Items</h2>
                {productCartItem[0] ?

                    <div className="my-4 md:flex gap-3">
                        {/* display cart items */}

                        <div className="w-full max-w-3xl">
                            {
                                productCartItem.map(el => {
                                    return (
                                        <CartProduct
                                            key={el._id}
                                            id={el._id}
                                            name={el.name}
                                            image={el.image}
                                            category={el.category}
                                            price={el.price}
                                            quantit={el.quantit}
                                            total={el.total}

                                        />
                                    )
                                })
                            }
                        </div>

                        {/* total cart items */}
                        <div className="w-full md:max-w-md ml-auto mt-12">
                            <h2 className='text-white bg-blue-400 text-lg p-2'>Summary</h2>
                            <div className="flex w-full py-2 text-lg border-b-slate-700">
                                <p className="">Total Items :</p>
                                <p className='ml-auto w-32 font-bold'>{totalItems}</p>
                            </div>

                            <div className=' flex w-full py-2 text-lg border-b-slate-700'>
                                <p className="w">Total Price</p>
                                <p className='ml-auto w-32 font-bold'><span className="text-red-500">$</span>{totalPrice}</p>
                            </div>

                            <button className="w-full bg-blue-600 font-bold text-lg text-white py-2">Payment</button>
                        </div>
                    </div>

                    :

                    <>
                        <div className="flex w-full justify-center items-center flex-col">
                            <img src={emptyCartImage} alt="" className='w-full max-w-sm' />
                            <p className='text-slate-400 text-3xl font-bold'>Empty Cart</p>
                        </div>
                    </>
                }

            </div>
        </>
    )
}

export default Cart