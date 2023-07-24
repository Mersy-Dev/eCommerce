import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { logoutRedux } from '../redux/userSlice'
import { toast } from 'react-hot-toast'


function Headers() {

    const userData = useSelector((state) => state.user)

    console.log(userData.email);
    const dispatch = useDispatch()



    const [showMenu, setShowMenu] = useState(false)
    const handleShowMenu = () => {
        setShowMenu(preve => !preve)
    }

    const handleLogout = () => { 
        dispatch(logoutRedux())
        toast("Logout Successfully")

    }

    console.log(process.env.REACT_APP_ADMIN_EMAIL);


    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
            {/* desktop */}
            <div className='flex item-center h-full justify-between'>
                <Link to={""}>
                    <div className='h-16'>
                        <img src='https://i.pinimg.com/236x/f0/d2/79/f0d279d86339c6e0dc320cc716b687a8.jpg' alt="" className='h-full' />
                    </div>
                </Link>

                <div className='flex items-center gap-4 md:gap-7'>
                    <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                        <Link to={""}>Home</Link>
                        <Link to={"menu"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>


                    </nav>

                    <div className='text-2xl text-slate-600 relative'>
                        <FaShoppingCart />
                        <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 -pt-3 text-sm text-center '>
                            0
                        </div>
                    </div>


                    <div className=' text-slate-600 ' onClick={handleShowMenu}>
                        <div className='text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md'>
                        {userData.image ? <img src={userData.image} className='w-full h-full'/> : <HiOutlineUserCircle />}
                        </div>
                        {showMenu &&
                            (
                                <div className='absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col'>
                                    {
                                        userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={"newproduct"} className='whitespace-nowrap cursor-pointer px-2 '>New Product</Link> 
                                    
                                    }
                                    {
                                        userData.image ? <p className='cursor-pointer text-white px-2  bg-red-600 ' onClick={handleLogout}>Logout {userData.firstName}</p> : <Link to={"login"} className='whitespace-nowrap cursor-pointer px-2'>Login</Link>

                                    }
                                    

                                </div>
                            )
                        }


                    </div>

                </div>



            </div>




            {/* mobile */}

        </header>
    )
}

export default Headers