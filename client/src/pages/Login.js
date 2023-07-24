import { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast"
import {useDispatch, useSelector} from 'react-redux';
import { loginRedux } from '../redux/userSlice';









const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",

  });


  const userData = useSelector(state => state)
  console.log(userData.user)


  const handleShowPassword = () => {
    setShowPassword(preve => !preve)
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


  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = data
    if (email && password) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/user/signin`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      const resdata = await fetchData.json()
      console.log(resdata)
      toast(resdata.message)


      if (resdata.alert) {
        dispatch(loginRedux(resdata))
        setTimeout(() => {
          navigate("/")

        }, 2000); 
      }

      console.log(userData);

    }
    else {
      alert("Enter required field")
    }

  }








  return (
    <>
      <div className='p-3 md:p-4 '>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
          {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
          <div className='w-24 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
            <img src={'https://cdn.pixabay.com/animation/2022/12/01/17/03/17-03-11-60_512.gif'} className='w-full' alt="" />
          </div>

          <form className='w-full py-4 flex flex-col' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" >Email</label>
              <input type="email" name="email" id="email" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' value={data.email} onChange={handleOnChange} />
            </div>

            <div >
              <label htmlFor="password" >Password</label>
              <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300 ">
                <input type={showPassword ? "text" : "password"} name="password" id="password" className=' w-full bg-slate-200 border-none outline-none' value={data.password} onChange={handleOnChange} />
                <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}> {showPassword ? <BiShow /> : <BiHide />}</span>
              </div>
            </div>



            <div className='m-auto'>
              <button className="w-full min-w-[130px] m-auto bg-blue-400 hover:bg-blue-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4 ">
                Login
              </button>
            </div>

          </form>

          <p className='text-sm mt-2'>Don't have an account ? <Link className='text-blue-400 underline' to={'/signup'}>Signup</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login