import React from 'react'
import Button from '../design/Button'

function Ad({ title, description, btnText, image }) {
    return (
        <div className='flex items-center justify-center h-[86vh] p-[4%]'>
            <div className='flex flex-col justify-center gap-4 pl-[4%] bg-blue-50 h-full'>
                <h1 className='text-3xl font-normal capitalize'>{title}</h1>
                <p className='text-md text-gray-800 w-5/6 leading-8 '>{description}</p>
                <Button text={btnText}/>
            </div>
            <img src={image} alt="ad" className='w-5/6 h-full' />
        </div>
    )
}

export default Ad
