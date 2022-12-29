import React from 'react'
import { Product } from '../../typings'
import { urlFor } from '../../sanity'

interface Props {
    product: Product
}

export default function ProductFe({ product }: Props) {
  return (
    <div className='flex flex-col items-center w-full'>
        <img className='w-full aspect-square rounded-full border-2 border-yellow-900 border-opacity-30 object-cover' src={urlFor(product.image).url()} alt={product.title}/>
        <p className='text-center leading-tight mt-1 text-yellow-900 font-semibold w-4/5'>{product.title}</p>
    </div>
  )
}
