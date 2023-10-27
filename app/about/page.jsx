"use client"
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'




const About = () => {
          const [isVisible, setIsVisible] = useState(false);
          const [showElement, setShowElement] = useState(false);

        
          useEffect(() => {
            setIsVisible(true);

            const handleScroll = () => {
              if (isElementInView()) {
                setShowElement(true);
              }
            };
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
        
          const isElementInView = () => {
            const element = document.querySelector('.scroll-fade-in');
            if (!element) return false;
        
            const rect = element.getBoundingClientRect();
            return rect.top <= window.innerHeight - 100;
          };
        
         
       
  return (
  <main>
    <Navbar />
       <div className={`w-[100%] min-h-screen`} >
          <div className='lg:flex'>
               <div className='w-[89%] h-[35rem] mx-auto pt-5 lg:w-[47%] lg:ml-24 bg-slate-70'>
               
               <h1 className={`text-center mt-32 font-sans text-2xl tracking-wider md:text-3xl font-black md:tracking-wide
                delay-100 duration-300 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'}`}><span className=" tracking-widest underline underline-offset-8">About <span className="text-blue-700">Me!</span>  </span> </h1>
               
                <div className=" w-[100%] mt-7 bg-slate-20 ">
                   <p className={`text-slate-900 dark:text-slate-100  md:text-xl  text-center  delay-300 duration-700 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'}`} >  I am a seasoned Frontend developer possessing a unique combination of technical expertise and creative ingenuity. Demonstrated proficiency in creating and crafting web applications focused on user needs, yielding tangible business outcomes. Devoted to the field of software engineering and dedicated to finding effective solutions. A team player who excels in fast-paced, 
                   ever-changing settings and readily embraces novel challenges.My core goal is to provide top-tier, user-friendly, and sustainable solutions that not only fulfill company requirements but also surpass client expectations. My unwavering dedication to user satisfaction drives me to create smooth and immersive experiences that seamlessly harmonize aesthetic appeal with practical functionality. </p>
                </div>
               </div>

            
               <div className='h-[23rem] w-[23rem] mx-auto lg:ml-0 bg-slate-30 relative mt-28 md:mt-7 lg:mt-60 lg:mr-16 xl:mr-40 '>
                    <Image  className={`rounded-full h-[90%] w-[90%] mx-auto  delay-300 duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} 
                      src='/me1.jpg' width={810} height={510} quality={100} alt='view'/>
                    
                    <svg className='dark:invert absolute top-0 -start-24 hidden lg:flex' xmlns="http://www.w3.org/2000/svg" width="131" height="97" viewBox="0 0 131 97" fill="none">
                      <path d="M14.3426 41.1455C21.5348 34.0483 30.4661 28.8783 40.181 26.1065C50.1328 23.2666 61.9874 22.4364 71.4352 27.3643C80.8212 32.2602 84.2537 42.4367 85.2133 52.3667C86.0278 60.7779 84.8262 70.6155 89.939 77.9433C96.7295 87.6783 108.601 83.4615 117.178 78.9631C119.386 77.8065 117.224 74.5771 115.024 75.7307C110.712 77.9913 105.651 80.5751 100.623 80.11C96.0484 79.6872 92.9067 76.4617 91.4034 72.3038C89.8968 68.1304 89.6563 63.6049 89.4836 59.2116C89.2922 54.3536 88.9864 49.5473 87.9365 44.784C85.7808 35.0018 80.1282 26.5127 70.5784 22.711C60.8926 18.8569 49.8438 19.495 39.9329 22.1484C29.1803 25.0261 19.3405 30.7691 11.4278 38.5747C9.65102 40.3275 12.5658 42.8982 14.3426 41.1455Z" fill="#231F20"/>
                      <path d="M4.98093 47.6627C5.01119 48.9021 6.3599 49.8344 7.52913 49.4132C11.9626 47.8107 16.512 46.885 21.2183 46.6375C23.719 46.507 23.5255 42.6263 21.0277 42.7582C16.896 42.975 12.8238 43.6893 8.87411 44.8848C9.05621 39.3532 10.2475 33.9357 12.4395 28.8165C13.4202 26.5257 9.95796 24.7642 8.97198 27.0664C6.16947 33.6064 4.81088 40.5481 4.98093 47.6627Z" fill="#231F20"/>
                    </svg>
               </div>
          </div>
           

          <div className='mt-16'>
               <h1 className='font-black text-2xl lg:text-4xl text-center '>Technologies that I Use </h1>
               <p className='text-gray-500 px-5 font-semibold text-lg lg:text-xl text-center mt-3'> Here are some technologies i am using or have used recently</p>
          </div>
             
          <div className='w-[19rem] md:w-[34rem] mb-32  h-[26.5rem] lg:w-[45.5rem]  md:h-[47rem] lg:h-[35.5rem] mx-auto mt-12 '>
              <div className=' w-[100%] h-[100%] mx-auto  grid max-[283px]:grid-col-2 grid-cols-3 lg:grid-cols-4 items-center justify-items-center '>

                <div className=' h-24 w-24 md:w-44 md:h-44 grayscale hover:grayscale-0 lg:delay-100 lg:duration-700  bg-gray-700  hover:scale-110'>
            
                  <svg className={`scroll-fade-in w-12 h-12 mx-auto pt-3  md:p-0 md:mt-6
                   delay-100 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
                  <p className={`text-center mt-4 md:mt-12  md:text-xl font-medium text-gray-200 delay-300 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} >React</p>
                </div>

                <div className=' h-24 w-24 md:w-44 md:h-44 grayscale bg-gray-700 lg:delay-100 lg:duration-700   hover:z-10 hover:grayscale-0 hover:scale-110 '>
                  <svg className={`scroll-fade-in w-12 h-12  mx-auto pt-4 md:p-0 md:mt-6  
                  delay-100 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>    
                  <p className={`text-center mt-4  font-medium  md:mt-12 md:text-xl  text-gray-200 delay-300 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} >Javascript</p>
                </div>

                <div className=' h-24 w-24 md:w-44 md:h-44  grayscale bg-gray-700 lg:delay-100 lg:duration-700   hover:grayscale-0 hover:scale-110 '>
                  <svg className={`scroll-fade-in w-12 h-12  md:p-0 md:mt-6  mx-auto pt-4
                  delay-100 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"/></svg>                  
                  <p className={`text-center mt-4 font-medium text-gray-100 md:mt-12 md:text-xl delay-300 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `} >Typescript</p>
                </div>

                <div className='-mt-6 h-24 w-24 md:w-44 md:h-44 grayscale bg-gray-700 lg:delay-100 lg:duration-700   hover:grayscale-0 hover:scale-110  lg:mt-0 '>
                  <svg  className={`scroll-fade-in w-12 h-12  md:p-0 md:mt-6  mx-auto pt-4 invert
                  delay-100 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/></svg> 
                  <p className={`text-center mt-4 font-medium text-gray-100 md:mt-12 md:text-xl delay-300 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} >Nextjs</p>
                </div> 

                <div className='-mt-6 h-24 w-24 md:w-44 md:h-44 grayscale bg-gray-700 lg:delay-100 lg:duration-700   hover:grayscale-0 hover:scale-110 '>
                  <svg className={`scroll-fade-in w-12 h-12  md:p-0 md:mt-6   mx-auto pt-4
                   delay-150 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/></svg> 
                  <p className={`text-center mt-4 font-medium text-gray-100 md:mt-12 md:text-xl delay-500 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `} >Tailwindcss</p>
                </div>

                <div className='-mt-6 h-24 w-24 md:w-44 md:h-44 b grayscale bg-gray-700  lg:delay-100 lg:duration-700  hover:grayscale-0 hover:scale-110 '>
                  <svg className={`scroll-fade-in w-12 h-12  md:p-0 md:mt-6   mx-auto pt-4
                  delay-150 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/></svg>                     
                  <p className={`text-center mt-4 font-medium text-gray-100 md:mt-12 md:text-xl delay-500 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} >Git</p>
                </div>

                <div className='-mt-6 h-24 w-24 md:w-44 md:h-44 b grayscale bg-gray-700 lg:delay-100 lg:duration-700   hover:grayscale-0 hover:scale-110 '>
                  <svg className={`scroll-fade-in w-12 h-12  md:p-0 md:mt-6  mx-auto pt-4 invert
                  delay-150 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#181616"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g></svg>   
                  <p className={`text-center mt-4 font-medium text-gray-100 md:mt-12 md:text-xl delay-500 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>Github</p>
                </div>
            

                <div className='-mt-6 h-24 w-24 md:w-44 md:h-44 grayscale bg-gray-700 lg:delay-100 lg:duration-700   hover:grayscale-0 hover:scale-110 '>
                  <svg className={`scroll-fade-in w-12 h-12  md:p-0 md:mt-6   mx-auto pt-4
                  delay-150 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"/></svg> 
                  <p className={`text-center mt-4 font-medium text-gray-100 md:mt-12 md:text-xl delay-700 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} `} >CSS3</p>
                </div>

                <div className='-mt-6 h-24 w-24 md:w-44 md:h-44 grayscale bg-gray-700 lg:delay-100 lg:duration-700   hover:grayscale-0 hover:scale-110 '>
                  <svg className={`scroll-fade-in w-12 h-12  md:p-0 md:mt-6   mx-auto pt-4
                  delay-200 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>  
                  <p className={`text-center mt-4 font-medium text-gray-100 md:mt-12 md:text-xl delay-700 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>Html5</p>
                </div>

                <div className='-mt-6 h-24 w-24 md:w-44 md:h-44 grayscale bg-gray-700 lg:delay-100 lg:duration-700   hover:grayscale-0 hover:scale-110  '>
                  <svg className={`scroll-fade-in w-12 h-12  md:p-0 md:mt-6   mx-auto pt-3
                  delay-200 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="a" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 14.613) scale(.24566)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#9013fe"/><stop offset="1" stopColor="#6610f2"/></linearGradient><linearGradient id="b" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff"/><stop offset="1" stopColor="#f1e5fc"/></linearGradient><filter id="c" width="197" height="249" x="161.9" y="135.46" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="4"/><feGaussianBlur stdDeviation="8"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs><path fill="url(#a)" d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"/><path fill="url(#b)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z" filter="url(#c)" transform="translate(1.494 2.203) scale(.24566)"/></svg>     
                  <p className={`text-center mt-4 font-medium text-gray-100 md:mt-12 md:text-xl delay-700 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} >Bootstrap</p>
                </div>

                <div className='-mt-6 h-24 w-24 md:w-44 md:h-44 grayscale bg-gray-700 lg:delay-100 lg:duration-700   hover:grayscale-0 hover:scale-110  '>
                  <svg className={`scroll-fade-in w-12 h-12  md:p-0 md:mt-6  mx-auto pt-3
                   delay-200 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fillRule="evenodd" clipRule="evenodd" fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"/><path fillRule="evenodd" clipRule="evenodd" fill="#45A538" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"/><path fillRule="evenodd" clipRule="evenodd" fill="#46A037" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"/><path fillRule="evenodd" clipRule="evenodd" fill="#409433" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"/><path fillRule="evenodd" clipRule="evenodd" fill="#4AA73C" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"/><path fillRule="evenodd" clipRule="evenodd" fill="#57AE47" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"/><path fillRule="evenodd" clipRule="evenodd" fill="#60B24F" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"/><path fillRule="evenodd" clipRule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"/><path fillRule="evenodd" clipRule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"/><path fillRule="evenodd" clipRule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"/><path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"/><path fillRule="evenodd" clipRule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"/><path fillRule="evenodd" clipRule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"/><path fillRule="evenodd" clipRule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"/><path fillRule="evenodd" clipRule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"/></svg> 
                  <p className={`text-center mt-4 font-medium text-gray-100 md:mt-12 md:text-xl delay-700 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} >Mongodb</p>
                </div>

                <div className='-mt-6 h-24 w-24 md:w-44 md:h-44 grayscale bg-gray-700 lg:delay-100 lg:duration-700   hover:grayscale-0 hover:scale-110  '>
                  <svg className={`scroll-fade-in w-12 h-12  md:p-0 md:mt-6  mx-auto pt-3
                   delay-200 duration-300 ${showElement ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"/></svg>        
                  <p className={`text-center mt-4 font-medium text-gray-100 md:mt-12 md:text-xl delay-700 duration-700 ${showElement ? ' translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} >Npm</p>
                </div>
              </div>
          </div>
       </div>
       
          
    <Footer/>
  </main>
  )
}

export default About;