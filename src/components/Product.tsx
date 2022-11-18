import React, { useState } from 'react'
import { IProduct } from '../module'

interface ProductProps {
    product: IProduct
}

const Product = ({ product }: ProductProps) => {

    const [details, setDetails] = useState(false)

    const btnClassName = details ? 'bg-lime-300' : 'bg-lime-400'

    const btnClasses = ['py-2 w-1/2 rounded px-4 border hover:bg-lime-100 transition-all', btnClassName]

    return (
        <div className='border h-[600px] rounded-xl py-2 px-4 w-[400px] flex flex-col justify-center items-center mb-2'>
            <img src={product.image} alt={product.title} className='w-1/3' />
            <p className='text-center text-bold text-xl'>{product.title}</p>
            <span className='font-bold'>{product.price}$</span>
            <button onClick={() => setDetails(prev => !prev)} className={btnClasses.join(' ')}>
                {details ? "Hide" : "Show More"}
            </button>
            {details &&
                <>
                    <p className='text-center mt-2'>{product.description}</p>
                    <p><span style={{fontWeight:"bold"}}>Rate: </span>{product.rating?.rate}</p>
                </>
            }
        </div>
    )
}

export default Product