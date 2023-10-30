"use client"
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Projects = () => {
            const [isVisible, setIsVisible] = useState(false);

            useEffect(() => {
              setIsVisible(true);
            }, [])
            
   
  return (
  <main>
    <Navbar/>
        <div className='w-[89%] h-[15rem] mx-auto pt-5 bg-slate-70'>  
              <h1 className={`text-center mt-32 font-sans text-2xl tracking-wider md:text-3xl font-black md:tracking-wide  delay-100 duration-300 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'} 
              `}><span className=" tracking-widest underline underline-offset-8">My <span className="text-blue-700">Projects</span>  </span> </h1>
               
             <div className={` w-[100%] mt-7 bg-slate-20  delay-200 duration-500 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'} `}>
                   <p className='text-slate-900 dark:text-slate-100  md:text-xl  text-center' >  Here are a few of the projects i worked on</p>
             </div>
        </div>
          
        {/* projects  */}
        <div className={`mt-14 mb-52 relative w-[88%] lg:w-[75%] xl:w-[70%] max-[281px]:h-[34rem] h-[26rem]   bg-transparent dark:bg-transparet lg:shadow-none dark:shadow shadow-lg shadow-gray-400 mx-auto overflow-hidden lg:rounded-none rounded-md
         delay-300 duration-700 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'} `}>
          
          <div className='absolute w-[100%] h-[100%] xl:w-[50%] xl:start-0 bg-gray-200 bg-opacity-60 backdrop-blur-sm z-10 
           dark:bg-neutral-900 dark:bg-opacity-70 xl:backdrop-blur-[2px] lg:hover:backdrop-blur-[1px] lg:hover:bg-transparent cursor-pointer'>
             
              <p className=' absolute top-8 px-2 font-extrabold md:end-6 xl:-end-[28rem] text-2xl ml-5 text-gray-800 dark:text-gray-100'>Piggyvest Clone</p>
             
              <div className='absolute top-14 ml-[5%] w-[90%] md:end-6 xl:-end-[28rem] md:w-[70%] xl:w-[38rem] md:ml-[3%] shadow-xl shadow-gray-400 dark:shadow-gray-950 dark:shadow-md h-[14rem] min-[539px]:h-[10rem] max-[281px]:h-[20rem] mt-10 bg-white dark:bg-neutral-800 dark:bg-opacity-60  mx-auto rounded-md'>
                <p className='p-2 xl:px-4 xl:py-7 font-semibold text-gray-700 dark:text-gray-50'>
                PiggyVest website clone faithfully replicates the user experience of the original platform, 
                providing visitors with a familiar interface, with a landing page, about page, and mirror-like resemblance to the real PiggyVest website
                </p>
              </div>

              <p className='md:end-6 xl:-end-[28rem] text-blue-700  dark:text-blue-300 min-[539px]:bottom-24 bottom-16 font-extrabold text-center absolute max-[281px]:ml-0  ml-7'>Next.js <span className='ml-2 text-lg'>-</span><span className='ml-3'>Tailwindcss </span>  </p>
            
              <div className='flex absolute md:end-6 xl:-end-[28rem] min-[539px]:bottom-14 bottom-8 ml-7'>
                <Link href='https://github.com/daniel-js0/Piggyvest-clone'>
                <svg className='text-gray-800 dark:text-gray-100 w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" ><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="currentColor"></path></svg>
                </Link>
                <Link href='https://piggyvest-by.netlify.app/'>
                <svg className="text-gray-800 dark:text-gray-100 w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" fill="currentColor"></path></svg>
                </Link>
              </div>
          </div>
          
            <Image className=' absolute hidden md:flex xl:hidden top-0 h-[100%] w-[100%]  mx-auto' 
                        src='/piggyvest2.png' width={810} height={510} quality={100} alt='view'/> 
            <Image className=' absolute md:hidden xl:flex top-0 h-[100%] w-[100%] xl:w-[50%] start-0 z-0 mx-auto' 
                        src='/piggyvest.png' width={810} height={510} quality={100} alt='view'/> 
        </div>

        <div className='mt-44 mb-52  relative w-[88%] lg:w-[75%] xl:w-[70%] max-[281px]:h-[34rem] h-[26rem]   bg-transparent dark:bg-transparet lg:shadow-none dark:shadow shadow-lg shadow-gray-400 mx-auto overflow-hidden lg:rounded-none rounded-md'>
         
          <div className='absolute w-[100%] h-[100%] xl:w-[50%] xl:end-0 bg-gray-100 bg-opacity-30 backdrop-blur-sm z-10 
           dark:bg-neutral-900 dark:bg-opacity-70 xl:backdrop-blur-[2px] lg:hover:backdrop-blur-[1px]  lg:hover:bg-transparent cursor-pointer'>
              
              <p className=' absolute top-8 px-2 font-extrabold xl:-start-[28rem] text-2xl ml-5 text-gray-800 dark:text-gray-100'>Todo App</p>
             
              <div className='absolute top-14 ml-[5%] w-[90%] xl:-start-[28rem] md:w-[70%] xl:w-[38rem] md:ml-[3%] shadow-xl shadow-gray-400 dark:shadow-gray-950 dark:shadow-md h-[14rem] min-[539px]:h-[10rem] max-[281px]:h-[20rem] mt-10 bg-white dark:bg-neutral-800 dark:bg-opacity-60 opacity-80 mx-auto rounded-md'>
                <p className='p-2 xl:px-4 xl:py-7 font-semibold text-gray-700 dark:text-gray-50'>
                A ToDo Application comprising of just a landing page, and a dedicated bar for viewing 
                and organizing saved tasks. Users can see the different stages of a task, access detailed task information,
                mark tasks as completed, and efficiently manage their saved tasks for future reference and productivity.
                </p>
              </div>

              <p className=  ' xl:-start-[28rem] text-blue-700  dark:text-blue-300 min-[539px]:bottom-24 bottom-16 font-extrabold text-center absolute max-[281px]:ml-0  ml-7'>Vanilla Javascript <span className='ml-2 text-lg'>-</span><span className='ml-3'>Tailwindcss </span>  </p>
            
              <div className='flex absolute xl:-start-[28rem] min-[539px]:bottom-14 bottom-8 ml-7'>
                <Link href='https://github.com/daniel-js0/Todo-app'>
                <svg className='text-gray-800 dark:text-gray-100 w-6 h-6  '  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" ><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="currentColor"></path></svg>
                </Link>
                <Link href='https://todoapp-bydanieljs0.netlify.app/'>
                <svg className="text-gray-800 dark:text-gray-100 w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" fill="currentColor"></path></svg>
                </Link>
              </div>
          </div>
          
            <Image  className=' absolute hidden md:flex xl:hidden top-0 h-[100%] w-[100%]  mx-auto' 
                        src='/Todo.png' width={810} height={510} quality={100} alt='view'/> 
            <Image  className=' absolute md:hidden xl:flex top-0 h-[100%] w-[100%] xl:w-[50%] end-0 z-0 mx-auto' 
                        src='/mobiletodo.png' width={810} height={510} quality={100} alt='view'/> 
        </div>

        <div className='mt-44 mb-52 relative w-[88%] lg:w-[75%] xl:w-[70%] max-[281px]:h-[34rem] h-[26rem]   bg-transparent dark:bg-transparet lg:shadow-none dark:shadow shadow-lg shadow-gray-400 mx-auto overflow-hidden lg:rounded-none rounded-md'>
          
          <div className='absolute w-[100%] h-[100%] xl:w-[50%] xl:start-0 bg-gray-200 bg-opacity-60 backdrop-blur-sm z-10 
           dark:bg-neutral-900 dark:bg-opacity-70 xl:backdrop-blur-[2px] lg:hover:backdrop-blur-[1px]  lg:hover:bg-transparent cursor-pointer'>
             
              <p className=' absolute top-8 px-2 font-extrabold md:end-6 xl:-end-[28rem] text-2xl ml-5 text-gray-800 dark:text-gray-100'>Calculator App</p>
             
              <div className='absolute top-14 ml-[5%] w-[90%] md:end-6 xl:-end-[28rem] md:w-[70%] xl:w-[38rem] md:ml-[3%] shadow-xl shadow-gray-400 dark:shadow-gray-950 dark:shadow-md h-[14rem] min-[539px]:h-[10rem] max-[281px]:h-[20rem] mt-10 bg-white dark:bg-neutral-800 dark:bg-opacity-60  mx-auto rounded-md'>
                <p className='p-2 xl:px-4 xl:py-7 font-semibold text-gray-700 dark:text-gray-50'>
                A Simple Calculator Application comprising of just a landing page, consisting of the various numbers, some mathematical signs
                and help you effortlessly split bills, making everyday calculations a breeze. Whether you are solving for the tip at a restaurant or quickly figuring out discounts.
                </p>
              </div>

              <p className='md:end-6 xl:-end-[28rem] text-blue-700  dark:text-blue-300 min-[539px]:bottom-24 bottom-16 font-extrabold text-center absolute max-[281px]:ml-0  ml-7'>Vanilla Javascript <span className='ml-2 text-lg'>-</span><span className='ml-3'>Tailwindcss </span>  </p>
            
              <div className='flex absolute md:end-6 xl:-end-[28rem] min-[539px]:bottom-14 bottom-8 ml-7'>
                <Link href='https://github.com/daniel-js0/CalculatorApp'>
                <svg className='text-gray-800 dark:text-gray-100 w-6 h-6  '  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" ><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="currentColor"></path></svg>
                </Link>
                <Link href='https://daniel-js0.github.io/CalculatorApp/'>
                <svg className="text-gray-800 dark:text-gray-100 w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" fill="currentColor"></path></svg>
                </Link>
              </div>
          </div>
          
            <Image  className=' absolute hidden md:flex xl:hidden top-0 h-[100%] w-[100%]  mx-auto' 
                        src='/calculator2.png' width={810} height={510} quality={100} alt='view'/> 
            <Image  className=' absolute md:hidden xl:flex top-0 h-[100%] w-[100%] xl:w-[50%] start-0 z-0 mx-auto' 
                        src='/calculator.png' width={810} height={510} quality={100} alt='view'/> 
        </div>

        <div className='mt-44 mb-52 relative w-[88%] lg:w-[75%] xl:w-[70%] max-[281px]:h-[34rem] h-[26rem]   bg-transparent dark:bg-transparet lg:shadow-none dark:shadow shadow-lg shadow-gray-400 mx-auto overflow-hidden lg:rounded-none rounded-md'>
          
          <div className='absolute w-[100%] h-[100%] xl:w-[50%] xl:end-0 bg-gray-200 bg-opacity-60 backdrop-blur-sm z-10 
           dark:bg-neutral-900 dark:bg-opacity-70 xl:backdrop-blur-[2px] lg:hover:backdrop-blur-[1px]  lg:hover:bg-transparent cursor-pointer'>
             
              <p className=' absolute top-8 px-2 font-extrabold xl:-start-[28rem] text-2xl ml-5 text-gray-800 dark:text-gray-100'>Form Field</p>
             
              <div className='absolute top-14 ml-[5%] w-[90%] xl:-start-[28rem] md:w-[70%] xl:w-[38rem] md:ml-[3%] shadow-xl shadow-gray-400 dark:shadow-gray-950 dark:shadow-md h-[14rem] min-[539px]:h-[10rem] max-[281px]:h-[20rem] mt-10 bg-white dark:bg-neutral-800 dark:bg-opacity-60  mx-auto rounded-md'>
                <p className='p-2 xl:px-4 xl:py-7 font-semibold text-gray-700 dark:text-gray-50'>
                A formfield Application comprising of a landing page, two pages to choose between plans, and a final page that shows the addition of both plans, and a confirmation page,
                Furthermore,the Application allows users to input and submit essential information with ease, simplifying data collection and registration processes.
                </p>
              </div>

              <p className=' xl:-start-[28rem] text-blue-700  dark:text-blue-300 min-[539px]:bottom-24 bottom-16 font-extrabold text-center absolute max-[281px]:ml-0  ml-7'>React.js <span className='ml-2 text-lg'>-</span><span className='ml-3'>Tailwindcss  <span className='ml-2 mr-2 text-lg'>-</span>Axios</span>  </p>
            
              <div className='flex absolute  xl:-start-[28rem] min-[539px]:bottom-14 bottom-8 ml-7'>
                <Link href='https://github.com/daniel-js0/First-react-project'>
                <svg className='text-gray-800 dark:text-gray-100 w-6 h-6  '  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" ><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" fill="currentColor"></path></svg>
                </Link>
                <Link href='https://myfirstreactapp-bydaniel.netlify.app/'>
                <svg className="text-gray-800 dark:text-gray-100 w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" fill="currentColor"></path></svg>
                </Link>
              </div>
          </div>
          
            <Image  className=' absolute hidden md:flex xl:hidden top-0 h-[100%] w-[100%]  mx-auto' 
                        src='/formfield2.png' width={810} height={510} quality={100} alt='view'/> 
            <Image  className=' absolute md:hidden xl:flex top-0 h-[100%] w-[100%] xl:w-[50%] end-0 z-0 mx-auto' 
                        src='/formfield.png' width={810} height={510} quality={100} alt='view'/> 
        </div>

  </main>
  )
}

export default Projects;