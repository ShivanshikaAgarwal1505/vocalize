import React from 'react'
import Link from 'next/link'

const Main = () => {
  return (
   <>
   <section className='w-screen mt-[10vw] flex flex-col items-center justify-between mb-[10vw]'>
   <Link href="/learn"> <div className='maincard h-[40vw] w-[80%] flex flex-row items-center  justify-between px-[5vw] py-[5vw] mt-[10vw]'>
        <div className='rounded'>
            <img src='/images/learning.webp' alt='main-img' className='rounded-[20px]'/>
        </div>
        <div className='flex flex-col w-[50%] items-center justify-between py-[2vw]' >
            <h2 className='text-[3vw] font-medium '>Learning</h2>
            <p className='w-[80%]'>Whenever we are learning a new language, it means that we have started a new life with a different vision. If we learn a language, we understand much about culture or life of a country. If we know one language we are one person, if we know two languages, we are two people.</p>
        </div>
    </div>
    </Link>
   <Link href="/translate"> <div className='maincard h-[40vw] w-[80%] flex flex-row-reverse items-center  justify-between px-[5vw] py-[5vw] mt-[10vw]'>
        <div className='rounded w-[70%]'>
            <img src='/images/translate.png' alt='main-img' className='rounded-[20px]'/>
        </div>
        <div className='flex flex-col w-[50%] items-center justify-between py-[2vw]' >
            <h2 className='text-[3vw] font-medium '>Translate</h2>
            <p className='w-[80%]'>Whenever we are learning a new language, it means that we have started a new life with a different vision. If we learn a language, we understand much about culture or life of a country. If we know one language we are one person, if we know two languages, we are two people.</p>
        </div>
    </div>
    </Link>
    <Link href="/convert">
    <div className='maincard h-[40vw] w-[80%] flex flex-row items-center  justify-between px-[5vw]  mt-[10vw] py-[5vw]'>
        <div className='rounded'>
            <img src='/images/convert.avif' alt='main-img' className='rounded-[20px]'/>
        </div>
        <div className='flex flex-col w-[60%] items-center justify-between py-[2vw]' >
            <h2 className='text-[3vw] font-medium '>Conversion</h2>
            <p className='w-[80%]'>Whenever we are learning a new language, it means that we have started a new life with a different vision. If we learn a language, we understand much about culture or life of a country. If we know one language we are one person, if we know two languages, we are two people.</p>
        </div>
    </div>
    </Link>
   </section>
   </>
  )
}

export default Main