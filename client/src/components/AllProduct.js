import React, { useEffect, useState } from 'react'
import FilterProduct from './FilterProduct'
import CardFeatures from './CardFeatures'
import { useSelector } from 'react-redux'

const AllProduct = ({ heading }) => {
    const productData = useSelector((state) => state.product.productList)

    const categoryList = [...new Set(productData.map(el => el.category))]

    //filtering product base on categories
    const [filterby, setFilterBy] = useState("");
    const [dataFilter, setDataFilter] = useState([]);

    useEffect(() => {
        setDataFilter(productData)
    }, [productData])


    const handleFilterProduct = (category) => {
        setFilterBy(category)
        const filter = productData.filter(el => el.category.toLowerCase() === category.toLowerCase())
        setDataFilter(() => {
            return [
                ...filter
            ]
        })

    }
  const loadingArrayFeature = new Array(5).fill(null)


    return (
        <div>
            <div className="my-5">
                <h2 className='font-bold text-2xl text-slate-800 mb-4'>{heading}</h2>
                <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
                    {
                        categoryList[0] ? 
                        (
                        categoryList.map(el => {
                            return (
                                <FilterProduct
                                category={el} 
                                key={el} 
                                isActive={el === filterby}
                                onClick={() => handleFilterProduct(el)} />

                            )
                        })
                        )
                            :
                            (

                            <div className=' min-h-[200px] flex justify-center items-center'>
                                <p>loading...</p>
                            </div>
                            )
                    }
                </div>



                <div className="flex flex-wrap justify-center gap-4 my-4">
                    {
                        dataFilter[0] ? dataFilter.map(el => {
                            return (
                                <CardFeatures
                                    key={el._id}
                                    id={el._id}
                                    name={el.name}
                                    image={el.image}
                                    category={el.category}
                                    price={el.price}



                                />
                            )
                        })
                        :
                        loadingArrayFeature.map((el, index) => (<CardFeatures loading="Loading..." key={index} />))
                        
                    }

                </div>

            </div>
        </div>
    )
}

export default AllProduct