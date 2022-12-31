import React from 'react'
import { Condition } from '../../typings'
import { urlFor } from '../../sanity'

interface Props {
    condition: Condition
}

export default function CondMa({ condition }: Props) {
  return (
    <div className='flex flex-col items-center w-full'>
        <img className='w-full aspect-square rounded-xl border-2 border-yellow-900 border-opacity-30 object-cover' src={urlFor(condition.image).url()} alt={condition.title}/>
        <p className='text-center leading-tight mt-1 text-yellow-900 font-semibold'>{condition.title}</p>
    </div>
  )
}
