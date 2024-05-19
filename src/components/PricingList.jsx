import React from 'react'
import { pricing } from '../constants'
import Button from './Button'
import { check } from '../assets'

const PricingList = () => {
  return (
    <div className='flex  max-lg:flex-wrap'>
        {pricing.map((item,index)=>(
           <div className='w-[23rem] max-lg:w-full   lg:mx-auto h-full px-6 bg-n-8 border border-n-6 rounded-2xl lg:m-auto  even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3'>
            <h4 className='mb-4 h4'>  {item.title} </h4> 
            <p className='body-2 min-h-[4rem] mb-3 text-n-1/50'>{item.description}</p>

            <div className='flex items-center justify-start h-[5.5rem] mb-6'>
                {item.price && 
                <>
                <div className=' h3'>$</div>
                <div className='ml-4 text-[5.5rem] leading-none font-bold'>{item.price}</div>
                </>}
            </div>

        <Button className={'w-full mb-6'} href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"} white={!!item.price}>{item.price ? 'Get Started':'Contact us'}</Button>

        <ul className='mb-6'>
            {item.features.map((feature,index)=>(
                <li className='flex items-start py-5 border-t border-n-6'>
                    <img src={check} alt="" height={24} width={24} />
                    <p className='body-2 ml-5'>{feature}</p>
                </li>
            ))}
        </ul>
           </div> 
        ))}
    </div>
  )
}

export default PricingList