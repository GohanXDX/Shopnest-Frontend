import React from 'react'
import { Link } from 'react-router-dom'

const ProductCart = ({ product }) => {
  if (!product) return null

  return (
    <div className="rounded-lg bg-slate-300 p-4 shadow hover:shadow-lg border-[1px]">
      <div  className='overflow-hidden w-full'>
        <img src={product.imageUrl} alt={product.name} className="h-40 w-full rounded-md border-[1px] object-cover " />
      </div>
      
      <div className="mt-3 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-slate-700">{product.name}</h3>
        <p className="text-green-800">₹{Number(product.price).toFixed(2)}</p>
        <Link to={`/products/${product._id}`} className="mt-2  inline-block  text-center font-bold rounded px-3 py-2 text-sm bg-slate-700 text-slate-200 hover:bg-slate-600">More Details</Link>
      </div>
    </div>
  )
}

export default ProductCart
