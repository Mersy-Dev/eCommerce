import React, { useEffect, useRef, useState } from 'react'
import HomeCards from '../components/HomeCards'
import { useSelector } from 'react-redux'
import CardFeatures from '../components/CardFeatures';
import { GrPrevious, GrNext } from 'react-icons/gr'
import FilterProduct from '../components/FilterProduct';
import AllProduct from '../components/AllProduct';



function Home() {
  const productData = useSelector((state) => state.product.productList)
  console.log(productData);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVages = productData.filter(el => el.category === "vegetables", [])
  console.log(homeProductCartListVages);



  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(5).fill(null)

  const slideProductRef = useRef()

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200
  }

  const prevProduct = () => {
    slideProductRef.current.scrollLeft -= 200
  }




  return (
    <div className='p-2 md:p-8 '>
      <div className='md:flex gap-4 py-3'>

        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-blue-200 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="" className='h-7' />
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'> Minions Rapid  <span className='text-blue-900 text'> Delivery Food Vendor</span> For You</h2>
          <p className='py-3 text-base'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime vel autem sint modi harum esse, ab nesciunt, voluptas minus inventore, voluptatibus possimus. Perspiciatis, necessitatibus nulla. Minima sapiente nostrum dolore natus!</p>
          <button className="text-bold bg-blue-400 rounded-md p-2 text-slate-200 hover:bg-blue-700">Order Now</button>
        </div>


        <div className='md:w-1/2 flex flex-wrap gap-5 p-8 justify-center' >
          {
            homeProductCartList[0] ? homeProductCartList.map(el => {
              return (
                <HomeCards
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}

                />
              )
            }) :
              loadingArray.map((el, index) => {
                return (
                  <HomeCards
                    key={index}
                    loading={"Loading..."}

                  />
                )
              })
          }

        </div>
      </div>
      <div className=''>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-700 mb-4'>Fresh Vegetables</h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={prevProduct} className='bg-slate-300 hover:bg-slate-500 text-lg p-1 rounded'><GrPrevious /></button>
            <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-500 text-lg p-1 rounded'><GrNext /></button>

          </div>
        </div>
        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
          {homeProductCartListVages[0] ?
            homeProductCartListVages.map(el => {
              return (
                <CardFeatures
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}

                />

              );
            })
            :
            loadingArrayFeature.map((el, index) => (<CardFeatures loading="Loading..." key={index}/>))
          }
        </div>
      </div>

          <AllProduct heading={"All Product"}/>
      
    </div>
  );
};

export default Home