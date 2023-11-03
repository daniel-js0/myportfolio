"use client"
import { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"



const Contact = () => {
              const [isVisible, setIsVisible] = useState(false);

              useEffect(() => {
                setIsVisible(true);
              }, [])
              
  return (
  <main>
      <Navbar/>
      <div className='mt-32 mb-28 h-[37rem] w-[90%] md:w-[65%] lg:w-[40%] bg-slate-00 mx-auto'>

        <h1 className={`text-center  mt-32 text-blue-800 font-sans text-4xl tracking-wider md:text-5xl font-extrabold md:tracking-wide
        delay-100 duration-300 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'}`}>Get In Touch</h1>
        <p className={`mt-6 px-5 md:px-1 text-lg text-slate-900 font-semibold dark:text-slate-100  md:text-xl  text-center
        delay-200 duration-500 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'}`}>Do you have an Idea about anything? or want to bring your idea or presence to the web?. 
            Have a chat with me about your idea via any of the links below or send me an email by 
            Clicking the Link below. My inbox is always open.</p>
        
       
        

        <a href="mailto:danielolagbegi1@gmail.com"> 
          <button className={`w-[100%] h-16 bg-blue-800 rounded-lg mt-7 text-xl font-bold text-slate-200
          delay-300 duration-700 ${isVisible ? 'translate-y-0 opacity-100' : ' translate-y-12 opacity-0'}`}>
                send it to me !
          </button>
        </a>
 

      </div>
      <Footer/>
  </main>
  )
}

export default Contact