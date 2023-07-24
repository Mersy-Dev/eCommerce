import React, { useState } from 'react'
import { BsCloudUpload } from 'react-icons/bs'
import { ImageToBase64 } from '../utility/ImageToBase64'
import { toast } from 'react-hot-toast'


const NewProduct = () => {


  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",

  })


  const handleOnchanged = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const uploadImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0])
    setData((preve) => {
      return {
        ...preve,
        image: data
      }
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data);

    const { name, image, category, price, description, } = data

    if (name && image && category && price && description) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product/uploadproduct`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const fetchRes = await fetchData.json()

      console.log(fetchRes);
      toast(fetchRes.message)

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",

        }
      })
    } else {
      toast("Enter a desired product")
    }

  }




  return (
    <>
      <div className=' p-4'>
        <form className="w-full max-w-md m-auto shadow flex flex-col p-3 bg-white" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type={"text"} name="name" id="" className='bg-slate-200 p-1 my-1' onChange={handleOnchanged} value={data.name} />

          <label htmlFor="category">Category</label>
          <select className='bg-slate-200 p-1 my-1' id="category" name='category' onChange={handleOnchanged} value={data.category}>
            <option value={"others"}>Select Caegory</option>
            <option value={"food"}>Food</option>
            <option value={"fruits"}>Fruits</option>
            <option value={"vegetables"}>Vegetables</option>
            <option value={"beverages"}>Beverages</option>
            <option value={"cereals"}>Cereals</option>
            <option value={"pizza"}>Pizza</option>
            <option value={"icecream"}>Icecream</option>
            <option value={"seafood"}>Sea food</option> 
            <option value={"fastfood"}>Fast food</option>
            <option value={"crunchy"}>Crunchy</option>
            <option value={"salad"}>Salad</option>
            <option value={"fruitsalad"}>Fruit Salad</option>






          </select>

          <label htmlFor="image">Image
            <div className="h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer">
              {
                data.image ? <img src={data.image} alt="" className='h-full' /> : <span className="text-3xl"><BsCloudUpload /></span>
              }
              <input type={"file"} accept='image/*' id='image' onChange={uploadImage} className='hidden' />
            </div>

          </label>


          <label htmlFor="price" className='my-1'>Price</label>
          <input type={"text"} name="price" id="" className='bg-slate-200 p-1 my-1' onChange={handleOnchanged} value={data.price} />



          <label htmlFor="description">Description</label>
          <textarea name="description" id="" className='bg-slate-200 p-1 my-1 rounded resize-none' onChange={handleOnchanged} value={data.description} rows={2}></textarea>


          <button className="bg-slate-400 hover:bg-slate-700 text-white text-lg font-medium drop-shadow my-2">Save</button>
        </form>
      </div>

    </>
  )
}

export default NewProduct