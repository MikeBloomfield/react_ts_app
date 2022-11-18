import React, { useState } from 'react'
import { IProduct } from '../module'
import axios from 'axios'
import Error from './Error'

const productData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 2
    }
}

interface CreateProductProps {
    onCreate: (product:IProduct) => void
}

const CreateProduct = ({onCreate} :CreateProductProps) => {

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if(value.trim().length <= 4) {
            setError('Please enter valid title')
            return
        }
        productData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(response.data)
    }

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <input type="text" className='border py-2 px-4 w-full mb-2 outline-0 ' placeholder='Enter product title' value={value} onChange={changeHandler} />
            {error && <Error error={error}></Error>}
            <button type='submit' className='py-2 px-4 border bg-yellow-400 hover:text-black hover:bg-white transition'>Create</button>
        </form>
    )
}

export default CreateProduct