import { Link } from "react-router-dom"

const HomeCards = ({ name, image, category, price, loading, id }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[150px] min-h-[150px] ">
      {
        name ? (
          <>
            <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}>
              <div className="w-50 h-40">
                <img src={image} alt="" className="w-full h-full" />
              </div>
              <h3 className="font-semibold text-slate-700 text-center capitalize text-lg">{name}</h3>
              <p className="text-center text-slate-500 font-medium">{category}</p>
              <p className="text-center font-bold"><span className="text-red-500">$</span><span>{price}</span></p>
              </Link>
            </>
            )
            :
            <div className="flex justify-center h-full items-center">
              <p>{loading}</p>

            </div>
      }
          </div>

      )
}

      export default HomeCards