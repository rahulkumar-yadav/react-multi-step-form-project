import React, { useEffect, useState } from 'react'

const LastPage = () => {
    const [interval, setInterval] = useState(true)

    const userBox = (userPhoto, userRole, userInfo) => {
        return <div className={`h-40 md:w-[32%] w-full border-[1px] border-gray-200 rounded-md md:gap-2 gap-1 items-center flex justify-center cursor-pointer`}>
            <div className='ml-3 flex items-center'>
                <p className='font-bold md:text-[14px] text-[12px]'>{userRole} <span className='font-semibold'>{userInfo}</span></p>
            </div>
            <img className='md:h-40 h-36' src={`./${userPhoto}`} alt="" />
        </div>
    }

    const changeInterval = () => {
        setInterval(false)
    }

    useEffect(() => {
        setTimeout(changeInterval, 2000)
    }, [])

    
    return (
        <section className='py-10 h-screen w-full'>
           <div className='w-5/6 mx-auto h-full'>
        {interval ? (
                <div className='w-full h-full flex flex-col justify-center items-center gap-6'>
                    <span className='h-[80px] w-[80px] rounded-full border-8 border-yellow-500'></span>
                    <p className='md:w-8/12 text-center md:text-2xl text-xl font-bold'>Finding learning path recommendations for you based on your responses</p>
                </div>
        )
         : (
            <>
            <div className='w-full flex flex-col items-center justify-center gap-4 md:mt-24 mt-10'>
                    <p className='font-extrabold md:text-3xl text-xl'>Learning Paths based on your answers</p>
                    <p className='text-md text-gray-600'>Choose one to get started, you can switch anytime</p>
                </div>

                <div className='w-full flex md:flex-row flex-col justify-center items-center gap-4 mt-14'>
                    {userBox('machine.png', 'Foundational Math', 'Build yourfoundational skills in algebra, geometry and probability')}
                    {userBox('machine.png', `Mathematical Thinking`, 'Build your foundational skills in algebra, geometry and probability')}
                </div>
            </>
        )
    }

            </div>
        </section>
    )
}

export default LastPage