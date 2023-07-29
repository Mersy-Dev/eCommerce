import { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import { ImageToBase64 } from '../utility/ImageToBase64';
import { toast } from "react-hot-toast"
import Validation from './Validation';

function SignUp() {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    const [showCpassword, setShowCpassword] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: "",
        image: ""

    })

    console.log(data)

    const handleShowPassword = () => {
        setShowPassword(preve => !preve)
    }

    const handleCpassword = () => {
        setShowCpassword(preve => !preve)
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }


    const [errors, setErrors] = useState({})



    const handleUploadProfileImage = async (e) => {
        // console.log(e.target.files[0])
        const data = await ImageToBase64(e.target.files[0])
        console.log(data)

        setData((preve) => {
            return {
                ...preve,
                image: data
            }
        })
    }
    console.log(process.env.REACT_APP_SERVER_DOMAIN)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const { firstName, lastName, email, password, cpassword } = data

        if (firstName && lastName && email && password && cpassword)
         {
            if (password === cpassword) {
                const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/user/signup`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                    
                })
                setErrors(Validation(data))

                const resdata = await fetchData.json()
                console.log(resdata)
                toast(resdata.message)
                
                if (resdata.alert) {
                    navigate("/")
                } else {
                    return

                }

            }
        }
        
        else {
            toast("Enter required field")
        }

    }



    return (
        <>
            <div className='p-3 md:p-4 '>
                <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
                    {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
                    <div className='w-24 h-24 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative '>
                        <img src={data.image ? data.image : 'https://cdn.pixabay.com/animation/2022/12/01/17/03/17-03-11-60_512.gif'} className='w-full h-full' alt="" />

                        <label htmlFor="profileImage">
                            <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-60  w-full text-center cursor-pointer'>
                                <p className='text-sm p-1 text-white'>Upload</p>
                            </div>

                            <input type={"file"} name="" id="profileImage" accept='image/*' className='hidden' onChange={handleUploadProfileImage} />
                        </label>
                    </div>

                    <form className='w-full py-4 flex flex-col' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName" >First Name</label>
                            <input type="text" name="firstName" id="firstName" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.firstName} onChange={handleOnChange} />
                        </div>

                        <div>
                            <label htmlFor="lastName" >Last Name</label>
                            <input type="text" name="lastName" id="lastName" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.lastName} onChange={handleOnChange} />
                        </div>

                        <div>
                            <label htmlFor="email" >Email</label>
                            <input type="email" name="email" id="email" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email} onChange={handleOnChange} />
                        </div>
                        {errors.email && <p className='text-red-500'>{errors.email} </p>}

                        <div >
                            <label htmlFor="password" >Password</label>
                            <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300 ">
                                <input type={showPassword ? "text" : "password"} name="password" id="password" className=' w-full bg-slate-200 border-none outline-none' value={data.password} onChange={handleOnChange} />
                                <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}> {showPassword ? <BiShow /> : <BiHide />}</span>
                            </div>
                        </div>
                        {errors.password && <p className='text-red-500'>{errors.password} </p>}


                        <div >
                            <label htmlFor="cpassword" >Confirm Password</label>
                            <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300 ">
                                <input type={showCpassword ? "text" : "password"} name="cpassword" id="cpassword" className=' w-full bg-slate-200 border-none outline-none' value={data.cpassword} onChange={handleOnChange} />
                                <span className='flex text-xl cursor-pointer' onClick={handleCpassword}> {showCpassword ? <BiShow /> : <BiHide />}</span>
                            </div>
                        </div>
                        {errors.cpassword && <p className='text-red-500'>{errors.cpassword} </p>}

                        <div className='m-auto'>
                            <button className="w-full min-w-[130px] m-auto bg-blue-400 hover:bg-blue-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4 ">
                                Sign Up
                            </button>
                        </div>

                    </form>

                    <p className='text-sm mt-2'>Already have an account ? <Link className='text-blue-400 underline' to={'/login'}>Login</Link></p>
                </div>
            </div>
        </>
    )
}

export default SignUp